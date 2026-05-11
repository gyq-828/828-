import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipForward, RotateCcw, PlayCircle, Info, BarChart3 } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  cluster: number;
  prevCluster: number;
}

interface Center {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
}

const CLUSTER_COLORS = [
  '#3B82F6', // blue
  '#EF4444', // red
  '#22C55E', // green
  '#F59E0B', // yellow
  '#8B5CF6', // purple
  '#EC4899', // pink
  '#06B6D4', // cyan
  '#F97316', // orange
];

const generateDataset = (type: 'simple' | 'medium' | 'complex'): Point[] => {
  const points: Point[] = [];
  
  switch (type) {
    case 'simple': {
      const clusters = [
        { centerX: 200, centerY: 200, count: 15, spread: 40 },
        { centerX: 400, centerY: 200, count: 15, spread: 40 },
        { centerX: 300, centerY: 350, count: 15, spread: 40 },
      ];
      clusters.forEach((cluster, idx) => {
        for (let i = 0; i < cluster.count; i++) {
          points.push({
            x: cluster.centerX + (Math.random() - 0.5) * cluster.spread * 2,
            y: cluster.centerY + (Math.random() - 0.5) * cluster.spread * 2,
            cluster: -1,
            prevCluster: -1,
          });
        }
      });
      break;
    }
    case 'medium': {
      const clusters = [
        { centerX: 150, centerY: 150, count: 12, spread: 35 },
        { centerX: 350, centerY: 150, count: 12, spread: 35 },
        { centerX: 250, centerY: 300, count: 12, spread: 35 },
        { centerX: 150, centerY: 350, count: 10, spread: 30 },
        { centerX: 400, centerY: 350, count: 10, spread: 30 },
      ];
      clusters.forEach((cluster, idx) => {
        for (let i = 0; i < cluster.count; i++) {
          points.push({
            x: cluster.centerX + (Math.random() - 0.5) * cluster.spread * 2,
            y: cluster.centerY + (Math.random() - 0.5) * cluster.spread * 2,
            cluster: -1,
            prevCluster: -1,
          });
        }
      });
      break;
    }
    case 'complex': {
      const clusters = [
        { centerX: 120, centerY: 120, count: 10, spread: 30 },
        { centerX: 250, centerY: 100, count: 10, spread: 30 },
        { centerX: 380, centerY: 130, count: 10, spread: 30 },
        { centerX: 150, centerY: 250, count: 10, spread: 30 },
        { centerX: 300, centerY: 250, count: 12, spread: 40 },
        { centerX: 450, centerY: 230, count: 10, spread: 30 },
        { centerX: 200, centerY: 380, count: 10, spread: 30 },
        { centerX: 350, centerY: 380, count: 10, spread: 30 },
      ];
      clusters.forEach((cluster, idx) => {
        for (let i = 0; i < cluster.count; i++) {
          points.push({
            x: cluster.centerX + (Math.random() - 0.5) * cluster.spread * 2,
            y: cluster.centerY + (Math.random() - 0.5) * cluster.spread * 2,
            cluster: -1,
            prevCluster: -1,
          });
        }
      });
      break;
    }
  }
  
  return points;
};

const KMeansVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const [datasetType, setDatasetType] = useState<'simple' | 'medium' | 'complex'>('simple');
  const [k, setK] = useState(3);
  const [points, setPoints] = useState<Point[]>([]);
  const [centers, setCenters] = useState<Center[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [hasConverged, setHasConverged] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showStepAnimation, setShowStepAnimation] = useState(false);
  
  const initializeData = useCallback(() => {
    const newPoints = generateDataset(datasetType);
    const newCenters: Center[] = [];
    
    for (let i = 0; i < k; i++) {
      const randomPoint = newPoints[Math.floor(Math.random() * newPoints.length)];
      newCenters.push({
        x: randomPoint.x,
        y: randomPoint.y,
        prevX: randomPoint.x,
        prevY: randomPoint.y,
      });
    }
    
    setPoints(newPoints);
    setCenters(newCenters);
    setIteration(0);
    setHasConverged(false);
    setIsRunning(false);
    setIsPaused(false);
    setAnimationProgress(0);
    setShowStepAnimation(false);
  }, [datasetType, k]);
  
  useEffect(() => {
    initializeData();
  }, [initializeData]);
  
  const assignClusters = useCallback((currentPoints: Point[], currentCenters: Center[]): Point[] => {
    return currentPoints.map(point => {
      let minDist = Infinity;
      let closestCluster = -1;
      
      currentCenters.forEach((center, idx) => {
        const dist = Math.sqrt(
          Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)
        );
        if (dist < minDist) {
          minDist = dist;
          closestCluster = idx;
        }
      });
      
      return {
        ...point,
        prevCluster: point.cluster,
        cluster: closestCluster,
      };
    });
  }, []);
  
  const updateCenters = useCallback((currentPoints: Point[], currentCenters: Center[]): Center[] => {
    return currentCenters.map((center, idx) => {
      const clusterPoints = currentPoints.filter(p => p.cluster === idx);
      
      if (clusterPoints.length === 0) {
        return center;
      }
      
      const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
      const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
      
      return {
        x: avgX,
        y: avgY,
        prevX: center.x,
        prevY: center.y,
      };
    });
  }, []);
  
  const checkConvergence = useCallback((prevCenters: Center[], newCenters: Center[]): boolean => {
    const threshold = 0.5;
    return prevCenters.every((prev, idx) => {
      const dist = Math.sqrt(
        Math.pow(newCenters[idx].x - prev.x, 2) + Math.pow(newCenters[idx].y - prev.y, 2)
      );
      return dist < threshold;
    });
  }, []);
  
  const runStep = useCallback(() => {
    if (hasConverged) return;
    
    setPoints(prevPoints => {
      const assignedPoints = assignClusters(prevPoints, centers);
      
      setCenters(prevCenters => {
        const newCenters = updateCenters(assignedPoints, prevCenters);
        
        if (checkConvergence(prevCenters, newCenters)) {
          setHasConverged(true);
          setIsRunning(false);
        }
        
        setIteration(prev => prev + 1);
        setShowStepAnimation(true);
        setAnimationProgress(0);
        
        return newCenters;
      });
      
      return assignedPoints;
    });
  }, [centers, hasConverged, assignClusters, updateCenters, checkConvergence]);
  
  useEffect(() => {
    if (!isRunning || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    const animate = () => {
      setAnimationProgress(prev => {
        const next = prev + 0.05;
        if (next >= 1) {
          runStep();
          return 0;
        }
        return next;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, isPaused, runStep]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    
    points.forEach(point => {
      const color = point.cluster >= 0 ? CLUSTER_COLORS[point.cluster % CLUSTER_COLORS.length] : '#9ca3af';
      
      if (showStepAnimation && point.cluster !== point.prevCluster) {
        const prevColor = point.prevCluster >= 0 ? CLUSTER_COLORS[point.prevCluster % CLUSTER_COLORS.length] : '#9ca3af';
        ctx.fillStyle = prevColor;
        ctx.globalAlpha = 1 - animationProgress;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    
    centers.forEach((center, idx) => {
      const color = CLUSTER_COLORS[idx % CLUSTER_COLORS.length];
      
      const x = center.prevX + (center.x - center.prevX) * animationProgress;
      const y = center.prevY + (center.y - center.prevY) * animationProgress;
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${idx + 1}`, x, y);
      
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.stroke();
    });
    
    ctx.globalAlpha = 1;
  }, [points, centers, showStepAnimation, animationProgress]);
  
  const handleStart = () => {
    if (hasConverged) {
      initializeData();
    }
    setIsRunning(true);
    setIsPaused(false);
  };
  
  const handlePause = () => {
    setIsPaused(!isPaused);
  };
  
  const handleStep = () => {
    setIsRunning(false);
    setIsPaused(false);
    runStep();
  };
  
  const handleReset = () => {
    initializeData();
  };
  
  const getClusterCounts = () => {
    const counts: Record<number, number> = {};
    points.forEach(point => {
      counts[point.cluster] = (counts[point.cluster] || 0) + 1;
    });
    return counts;
  };
  
  const clusterCounts = getClusterCounts();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <BarChart3 className="inline-block w-8 h-8 mr-2 text-blue-600" />
            KMeans 聚类算法可视化
          </h1>
          <p className="text-gray-600">
            交互式演示KMeans聚类算法的迭代过程，观察数据点如何逐步归属于不同的簇
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                数据集复杂度
              </label>
              <select
                value={datasetType}
                onChange={(e) => setDatasetType(e.target.value as 'simple' | 'medium' | 'complex')}
                disabled={isRunning}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white disabled:bg-gray-100"
              >
                <option value="simple">简单 (3个簇)</option>
                <option value="medium">中等 (5个簇)</option>
                <option value="complex">复杂 (8个簇)</option>
              </select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                聚类数 K: <span className="text-blue-600 font-bold">{k}</span>
              </label>
              <input
                type="range"
                min="2"
                max={datasetType === 'simple' ? '6' : datasetType === 'medium' ? '8' : '10'}
                value={k}
                onChange={(e) => setK(parseInt(e.target.value))}
                disabled={isRunning}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:cursor-not-allowed"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>2</span>
                <span>{datasetType === 'simple' ? '6' : datasetType === 'medium' ? '8' : '10'}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={handleStart}
              disabled={hasConverged && isRunning}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {hasConverged ? <RotateCcw className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {hasConverged ? '重新开始' : '开始聚类'}
            </button>
            
            <button
              onClick={handlePause}
              disabled={!isRunning}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              {isPaused ? '继续' : '暂停'}
            </button>
            
            <button
              onClick={handleStep}
              disabled={hasConverged || isRunning}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SkipForward className="w-5 h-5" />
              单步执行
            </button>
            
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              重置
            </button>
          </div>
          
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-lg">
              <span className="text-sm text-gray-600">迭代次数:</span>
              <span className="text-2xl font-bold text-blue-600">{iteration}</span>
              {hasConverged && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ✓ 已收敛
                </span>
              )}
            </div>
          </div>
          
          <div className="flex justify-center">
            <canvas
              ref={canvasRef}
              width={550}
              height={450}
              className="border-2 border-gray-200 rounded-xl shadow-lg bg-white"
            />
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-800">聚类结果统计</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {centers.map((center, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border-2 transition-all hover:shadow-md"
                style={{ borderColor: CLUSTER_COLORS[idx % CLUSTER_COLORS.length] }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: CLUSTER_COLORS[idx % CLUSTER_COLORS.length] }}
                  />
                  <span className="font-bold text-gray-800">簇 {idx + 1}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>数据点数量: <span className="font-semibold">{clusterCounts[idx] || 0}</span></p>
                  <p>中心坐标:</p>
                  <p className="font-mono text-xs">({center.x.toFixed(1)}, {center.y.toFixed(1)})</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">算法说明</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>KMeans算法步骤:</strong></p>
              <p>1. 随机初始化K个聚类中心</p>
              <p>2. 将每个数据点分配到距离最近的聚类中心</p>
              <p>3. 根据分配结果更新聚类中心位置（取均值）</p>
              <p>4. 重复步骤2-3，直到聚类中心不再移动（收敛）</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>提示：点击「开始聚类」按钮观看完整动画演示，或使用「单步执行」逐步观察算法过程</p>
        </div>
      </div>
    </div>
  );
};

export default KMeansVisualizer;
