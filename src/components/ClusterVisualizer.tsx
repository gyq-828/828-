import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipForward, RotateCcw, Info, BarChart3, GitBranch, Target, Network, Sparkles, Hexagon, Layers } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  cluster: number;
  prevCluster: number;
  visited?: boolean;
  noise?: boolean;
  density?: number;
}

interface Center {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  weight?: number;
}

interface DBSCANCluster {
  points: Point[];
  centerX: number;
  centerY: number;
}

interface GMMComponent {
  meanX: number;
  meanY: number;
  covMatrix: number[][];
  weight: number;
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

const ALGORITHMS = [
  { id: 'kmeans', name: 'KMeans', description: '基于距离的划分聚类算法', icon: Target },
  { id: 'kmeanspp', name: 'KMeans++', description: '改进的KMeans，优化初始中心选择', icon: Sparkles },
  { id: 'dbscan', name: 'DBSCAN', description: '基于密度的聚类算法', icon: Network },
  { id: 'optics', name: 'OPTICS', description: 'DBSCAN的改进版，支持可变密度', icon: Hexagon },
  { id: 'hierarchical', name: '层次聚类', description: '自底向上的聚合聚类', icon: GitBranch },
  { id: 'gmm', name: 'GMM', description: '高斯混合模型，基于概率的软聚类', icon: Layers },
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
      clusters.forEach((cluster) => {
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
      clusters.forEach((cluster) => {
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
      clusters.forEach((cluster) => {
        for (let i = 0; i < cluster.count; i++) {
          points.push({
            x: cluster.centerX + (Math.random() - 0.5) * cluster.spread * 2,
            y: cluster.centerY + (Math.random() - 0.5) * cluster.spread * 2,
            cluster: -1,
            prevCluster: -1,
          });
        }
      });
      for (let i = 0; i < 8; i++) {
        points.push({
          x: Math.random() * 500,
          y: Math.random() * 400,
          cluster: -1,
          prevCluster: -1,
          noise: true,
        });
      }
      break;
    }
  }
  
  return points;
};

const ClusterVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const [algorithm, setAlgorithm] = useState<'kmeans' | 'kmeanspp' | 'dbscan' | 'optics' | 'hierarchical' | 'gmm'>('kmeans');
  const [datasetType, setDatasetType] = useState<'simple' | 'medium' | 'complex'>('simple');
  const [k, setK] = useState(3);
  const [eps, setEps] = useState(30);
  const [minPts, setMinPts] = useState(5);
  const [gmmIterations, setGmmIterations] = useState(10);
  const [points, setPoints] = useState<Point[]>([]);
  const [centers, setCenters] = useState<Center[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [hasConverged, setHasConverged] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showStepAnimation, setShowStepAnimation] = useState(false);
  const [currentStep, setCurrentStep] = useState('初始化');
  const [dbscanClusters, setDbscanClusters] = useState<DBSCANCluster[]>([]);
  const [gmmComponents, setGmmComponents] = useState<GMMComponent[]>([]);
  const [softAssignments, setSoftAssignments] = useState<number[][]>([]);

  const initializeData = useCallback(() => {
    const newPoints = generateDataset(datasetType);
    const newCenters: Center[] = [];
    
    if (algorithm === 'kmeans' || algorithm === 'hierarchical' || algorithm === 'gmm') {
      for (let i = 0; i < k; i++) {
        const randomPoint = newPoints[Math.floor(Math.random() * newPoints.length)];
        newCenters.push({
          x: randomPoint.x,
          y: randomPoint.y,
          prevX: randomPoint.x,
          prevY: randomPoint.y,
          weight: 1,
        });
      }
    } else if (algorithm === 'kmeanspp') {
      const centersIndices: number[] = [];
      centersIndices.push(Math.floor(Math.random() * newPoints.length));
      
      for (let i = 1; i < k; i++) {
        const distances = newPoints.map((point, idx) => {
          if (centersIndices.includes(idx)) return 0;
          let minDist = Infinity;
          centersIndices.forEach(ci => {
            const dist = Math.sqrt(
              Math.pow(point.x - newPoints[ci].x, 2) + 
              Math.pow(point.y - newPoints[ci].y, 2)
            );
            if (dist < minDist) minDist = dist;
          });
          return minDist * minDist;
        });
        
        const total = distances.reduce((sum, d) => sum + d, 0);
        let r = Math.random() * total;
        let selected = 0;
        for (let j = 0; j < distances.length; j++) {
          r -= distances[j];
          if (r <= 0) {
            selected = j;
            break;
          }
        }
        centersIndices.push(selected);
      }
      
      centersIndices.forEach(ci => {
        newCenters.push({
          x: newPoints[ci].x,
          y: newPoints[ci].y,
          prevX: newPoints[ci].x,
          prevY: newPoints[ci].y,
        });
      });
    }
    
    setPoints(newPoints);
    setCenters(newCenters);
    setDbscanClusters([]);
    setGmmComponents([]);
    setSoftAssignments([]);
    setIteration(0);
    setHasConverged(false);
    setIsRunning(false);
    setIsPaused(false);
    setAnimationProgress(0);
    setShowStepAnimation(false);
    setCurrentStep('初始化');
  }, [algorithm, datasetType, k]);

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  const distance = (p1: Point, p2: Point | Center): number => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  const assignKMeansClusters = useCallback((currentPoints: Point[], currentCenters: Center[]): Point[] => {
    return currentPoints.map(point => {
      let minDist = Infinity;
      let closestCluster = -1;
      
      currentCenters.forEach((center, idx) => {
        const dist = distance(point, center);
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

  const updateKMeansCenters = useCallback((currentPoints: Point[], currentCenters: Center[]): Center[] => {
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

  const checkKMeansConvergence = useCallback((prevCenters: Center[], newCenters: Center[]): boolean => {
    const threshold = 0.5;
    return prevCenters.every((prev, idx) => {
      const dist = Math.sqrt(
        Math.pow(newCenters[idx].x - prev.x, 2) + Math.pow(newCenters[idx].y - prev.y, 2)
      );
      return dist < threshold;
    });
  }, []);

  const runKMeansStep = useCallback(() => {
    if (hasConverged) return;
    
    setCurrentStep('分配数据点到最近聚类中心');
    setPoints(prevPoints => {
      const assignedPoints = assignKMeansClusters(prevPoints, centers);
      
      setCenters(prevCenters => {
        const newCenters = updateKMeansCenters(assignedPoints, prevCenters);
        setCurrentStep('更新聚类中心位置');
        
        if (checkKMeansConvergence(prevCenters, newCenters)) {
          setHasConverged(true);
          setIsRunning(false);
          setCurrentStep('算法收敛完成');
        }
        
        setIteration(prev => prev + 1);
        setShowStepAnimation(true);
        setAnimationProgress(0);
        
        return newCenters;
      });
      
      return assignedPoints;
    });
  }, [centers, hasConverged, assignKMeansClusters, updateKMeansCenters, checkKMeansConvergence]);

  const runDBSCAN = useCallback(() => {
    const newPoints = [...points];
    const clusters: DBSCANCluster[] = [];
    let clusterId = 0;
    
    const regionQuery = (p: Point): Point[] => {
      return newPoints.filter(other => distance(p, other) <= eps);
    };
    
    const expandCluster = (p: Point, neighbors: Point[]): Point[] => {
      const clusterPoints: Point[] = [p];
      p.cluster = clusterId;
      p.visited = true;
      
      let i = 0;
      while (i < clusterPoints.length) {
        const current = clusterPoints[i];
        const currentNeighbors = regionQuery(current);
        
        if (currentNeighbors.length >= minPts) {
          currentNeighbors.forEach(neighbor => {
            if (!neighbor.visited) {
              neighbor.visited = true;
              neighbor.cluster = clusterId;
              clusterPoints.push(neighbor);
            }
          });
        }
        i++;
      }
      
      return clusterPoints;
    };
    
    newPoints.forEach((point) => {
      if (!point.visited) {
        point.visited = true;
        const neighbors = regionQuery(point);
        
        if (neighbors.length >= minPts) {
          const clusterPoints = expandCluster(point, neighbors);
          const centerX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
          const centerY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
          clusters.push({ points: clusterPoints, centerX, centerY });
          clusterId++;
        } else {
          point.cluster = -1;
        }
      }
    });
    
    const newCenters: Center[] = clusters.map(c => ({
      x: c.centerX,
      y: c.centerY,
      prevX: c.centerX,
      prevY: c.centerY,
    }));
    
    setPoints(newPoints);
    setCenters(newCenters);
    setDbscanClusters(clusters);
    setHasConverged(true);
    setIsRunning(false);
    setCurrentStep('DBSCAN算法完成');
  }, [points, eps, minPts]);

  const runHierarchicalStep = useCallback(() => {
    if (hasConverged) return;
    
    if (iteration === 0) {
      setCurrentStep('初始化：每个点自成一类');
      setPoints(prev => prev.map((p, i) => ({ ...p, cluster: i, prevCluster: -1 })));
      setIteration(1);
      return;
    }
    
    setCurrentStep('寻找最近的两个簇');
    const clusters: { id: number; points: Point[]; centerX: number; centerY: number }[] = [];
    
    const seenClusters = new Set<number>();
    points.forEach(p => {
      if (!seenClusters.has(p.cluster)) {
        seenClusters.add(p.cluster);
        const clusterPoints = points.filter(pt => pt.cluster === p.cluster);
        clusters.push({
          id: p.cluster,
          points: clusterPoints,
          centerX: clusterPoints.reduce((sum, pt) => sum + pt.x, 0) / clusterPoints.length,
          centerY: clusterPoints.reduce((sum, pt) => sum + pt.y, 0) / clusterPoints.length,
        });
      }
    });
    
    if (clusters.length <= k) {
      setHasConverged(true);
      setIsRunning(false);
      setCurrentStep('层次聚类完成');
      return;
    }
    
    let minDist = Infinity;
    let mergePair: [number, number] = [-1, -1];
    
    for (let i = 0; i < clusters.length; i++) {
      for (let j = i + 1; j < clusters.length; j++) {
        const dist = Math.sqrt(
          Math.pow(clusters[i].centerX - clusters[j].centerX, 2) +
          Math.pow(clusters[i].centerY - clusters[j].centerY, 2)
        );
        if (dist < minDist) {
          minDist = dist;
          mergePair = [clusters[i].id, clusters[j].id];
        }
      }
    }
    
    setCurrentStep(`合并簇 ${mergePair[0] + 1} 和 ${mergePair[1] + 1}`);
    setPoints(prev => prev.map(p => ({
      ...p,
      prevCluster: p.cluster,
      cluster: p.cluster === mergePair[1] ? mergePair[0] : p.cluster,
    })));
    
    const newCenters: Center[] = [];
    const uniqueClusters = new Set(points.map(p => p.cluster === mergePair[1] ? mergePair[0] : p.cluster));
    uniqueClusters.forEach(clusterId => {
      const clusterPoints = points.filter(p => (p.cluster === clusterId || (clusterId === mergePair[0] && p.cluster === mergePair[1])));
      newCenters.push({
        x: clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length,
        y: clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length,
        prevX: 0,
        prevY: 0,
      });
    });
    setCenters(newCenters);
    setIteration(prev => prev + 1);
    setShowStepAnimation(true);
    setAnimationProgress(0);
  }, [points, k, hasConverged, iteration]);

  const runOPTICS = useCallback(() => {
    const newPoints = [...points];
    const reachabilityDistances: number[] = new Array(newPoints.length).fill(Infinity);
    const processed = new Array(newPoints.length).fill(false);
    const clusters: DBSCANCluster[] = [];
    let clusterId = 0;
    
    const regionQuery = (p: Point): Point[] => {
      return newPoints.filter(other => distance(p, other) <= eps);
    };
    
    for (let i = 0; i < newPoints.length; i++) {
      if (processed[i]) continue;
      
      newPoints[i].visited = true;
      const neighbors = regionQuery(newPoints[i]);
      
      if (neighbors.length >= minPts) {
        const clusterPoints: Point[] = [];
        let seeds: { point: Point; idx: number; dist: number }[] = [];
        
        neighbors.forEach(n => {
          const idx = newPoints.indexOf(n);
          const dist = distance(newPoints[i], n);
          seeds.push({ point: n, idx, dist });
        });
        seeds.sort((a, b) => a.dist - b.dist);
        
        while (seeds.length > 0) {
          const current = seeds.shift()!;
          const currentIdx = current.idx;
          
          if (!processed[currentIdx]) {
            processed[currentIdx] = true;
            newPoints[currentIdx].cluster = clusterId;
            clusterPoints.push(newPoints[currentIdx]);
            
            const currentNeighbors = regionQuery(newPoints[currentIdx]);
            if (currentNeighbors.length >= minPts) {
              currentNeighbors.forEach(n => {
                const nIdx = newPoints.indexOf(n);
                const dist = distance(newPoints[currentIdx], n);
                if (!processed[nIdx] && dist < reachabilityDistances[nIdx]) {
                  reachabilityDistances[nIdx] = dist;
                  const existingIdx = seeds.findIndex(s => s.idx === nIdx);
                  if (existingIdx >= 0) {
                    seeds[existingIdx] = { point: n, idx: nIdx, dist };
                  } else {
                    seeds.push({ point: n, idx: nIdx, dist });
                  }
                  seeds.sort((a, b) => a.dist - b.dist);
                }
              });
            }
          }
        }
        
        const centerX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
        const centerY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
        clusters.push({ points: clusterPoints, centerX, centerY });
        clusterId++;
      } else {
        processed[i] = true;
        newPoints[i].cluster = -1;
      }
    }
    
    const newCenters: Center[] = clusters.map(c => ({
      x: c.centerX,
      y: c.centerY,
      prevX: c.centerX,
      prevY: c.centerY,
    }));
    
    setPoints(newPoints);
    setCenters(newCenters);
    setDbscanClusters(clusters);
    setHasConverged(true);
    setIsRunning(false);
    setCurrentStep('OPTICS算法完成');
  }, [points, eps, minPts]);

  const runGMMStep = useCallback(() => {
    if (hasConverged) return;
    
    if (iteration === 0) {
      setCurrentStep('初始化GMM参数');
      const components: GMMComponent[] = [];
      centers.forEach((center, idx) => {
        components.push({
          meanX: center.x,
          meanY: center.y,
          covMatrix: [[500, 0], [0, 500]],
          weight: 1 / k,
        });
      });
      setGmmComponents(components);
      setIteration(1);
      return;
    }
    
    setCurrentStep('E步：计算后验概率');
    const assignments: number[][] = [];
    
    points.forEach(point => {
      const probs: number[] = [];
      gmmComponents.forEach(comp => {
        const dx = point.x - comp.meanX;
        const dy = point.y - comp.meanY;
        const covInv = [
          [comp.covMatrix[1][1], -comp.covMatrix[0][1]],
          [-comp.covMatrix[1][0], comp.covMatrix[0][0]]
        ];
        const det = comp.covMatrix[0][0] * comp.covMatrix[1][1] - comp.covMatrix[0][1] * comp.covMatrix[1][0];
        const mahalanobis = dx * (covInv[0][0] * dx + covInv[0][1] * dy) + 
                           dy * (covInv[1][0] * dx + covInv[1][1] * dy);
        const prob = (1 / (2 * Math.PI * Math.sqrt(det))) * Math.exp(-0.5 * mahalanobis);
        probs.push(prob * comp.weight);
      });
      
      const sum = probs.reduce((s, p) => s + p, 0);
      assignments.push(probs.map(p => p / sum));
    });
    
    setSoftAssignments(assignments);
    
    setCurrentStep('M步：更新模型参数');
    const newComponents: GMMComponent[] = [];
    
    for (let i = 0; i < k; i++) {
      let sumWeight = 0;
      let sumX = 0, sumY = 0;
      let sumXX = 0, sumYY = 0, sumXY = 0;
      
      points.forEach((point, idx) => {
        const w = assignments[idx][i];
        sumWeight += w;
        sumX += w * point.x;
        sumY += w * point.y;
        sumXX += w * point.x * point.x;
        sumYY += w * point.y * point.y;
        sumXY += w * point.x * point.y;
      });
      
      const meanX = sumX / sumWeight;
      const meanY = sumY / sumWeight;
      const covXX = sumXX / sumWeight - meanX * meanX;
      const covYY = sumYY / sumWeight - meanY * meanY;
      const covXY = sumXY / sumWeight - meanX * meanY;
      
      newComponents.push({
        meanX,
        meanY,
        covMatrix: [[covXX, covXY], [covXY, covYY]],
        weight: sumWeight / points.length,
      });
    }
    
    setGmmComponents(newComponents);
    
    const newCenters: Center[] = newComponents.map(comp => ({
      x: comp.meanX,
      y: comp.meanY,
      prevX: centers[newComponents.indexOf(comp)]?.x || comp.meanX,
      prevY: centers[newComponents.indexOf(comp)]?.y || comp.meanY,
    }));
    setCenters(newCenters);
    
    const hardAssignments = points.map((_, idx) => {
      const maxIdx = assignments[idx].reduce((maxI, val, i) => val > assignments[idx][maxI] ? i : maxI, 0);
      return maxIdx;
    });
    setPoints(prev => prev.map((p, idx) => ({
      ...p,
      prevCluster: p.cluster,
      cluster: hardAssignments[idx],
    })));
    
    if (iteration >= gmmIterations) {
      setHasConverged(true);
      setIsRunning(false);
      setCurrentStep('GMM算法完成');
    }
    
    setIteration(prev => prev + 1);
    setShowStepAnimation(true);
    setAnimationProgress(0);
  }, [points, centers, gmmComponents, k, gmmIterations, hasConverged, iteration]);

  const runStep = useCallback(() => {
    if (algorithm === 'kmeans' || algorithm === 'kmeanspp') {
      runKMeansStep();
    } else if (algorithm === 'dbscan') {
      runDBSCAN();
    } else if (algorithm === 'optics') {
      runOPTICS();
    } else if (algorithm === 'hierarchical') {
      runHierarchicalStep();
    } else if (algorithm === 'gmm') {
      runGMMStep();
    }
  }, [algorithm, runKMeansStep, runDBSCAN, runOPTICS, runHierarchicalStep, runGMMStep]);

  useEffect(() => {
    if (!isRunning || isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    if (algorithm === 'dbscan') {
      runDBSCAN();
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
  }, [isRunning, isPaused, algorithm, runStep, runDBSCAN]);

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
      
      if (point.noise && point.cluster === -1) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">交互式学习工具</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            <BarChart3 className="inline-block w-10 h-10 mr-3 text-blue-600" />
            聚类算法可视化演示
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择不同的聚类算法，观察数据点如何逐步归属于不同的簇。通过调整参数，理解不同算法的工作原理和适用场景。
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择算法
              </label>
              <div className="grid grid-cols-3 gap-2">
                {ALGORITHMS.map((alg) => {
                  const Icon = alg.icon;
                  return (
                    <button
                      key={alg.id}
                      onClick={() => {
                        setAlgorithm(alg.id as any);
                        initializeData();
                      }}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        algorithm === alg.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 mx-auto mb-1" />
                      <span className="text-xs font-medium">{alg.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="flex-1 min-w-[180px]">
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
                <option value="complex">复杂 (8个簇 + 噪声)</option>
              </select>
            </div>
            
            {(algorithm === 'kmeans' || algorithm === 'kmeanspp') && (
              <div className="flex-1 min-w-[180px]">
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
              </div>
            )}
            
            {(algorithm === 'hierarchical' || algorithm === 'gmm') && (
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {algorithm === 'hierarchical' ? '目标簇数' : '成分数 K'}: <span className="text-blue-600 font-bold">{k}</span>
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
              </div>
            )}
            
            {algorithm === 'gmm' && (
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  EM迭代次数: <span className="text-blue-600 font-bold">{gmmIterations}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={gmmIterations}
                  onChange={(e) => setGmmIterations(parseInt(e.target.value))}
                  disabled={isRunning}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:cursor-not-allowed"
                />
              </div>
            )}
            
            {(algorithm === 'dbscan' || algorithm === 'optics') && (
              <>
                <div className="flex-1 min-w-[180px]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Eps (邻域半径): <span className="text-blue-600 font-bold">{eps}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={eps}
                    onChange={(e) => setEps(parseInt(e.target.value))}
                    disabled={isRunning}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="flex-1 min-w-[180px]">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    MinPts (最小点数): <span className="text-blue-600 font-bold">{minPts}</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={minPts}
                    onChange={(e) => setMinPts(parseInt(e.target.value))}
                    disabled={isRunning}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 disabled:cursor-not-allowed"
                  />
                </div>
              </>
            )}
          </div>
          
          <div className="flex justify-center gap-4 mb-4">
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
              disabled={hasConverged || isRunning || algorithm === 'dbscan' || algorithm === 'optics'}
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
              <span className="text-sm text-gray-500">|</span>
              <span className="text-sm text-gray-600">当前步骤:</span>
              <span className="text-sm font-medium text-blue-600">{currentStep}</span>
              {hasConverged && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ✓ 已完成
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">聚类结果统计</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {centers.map((center, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border-2 transition-all hover:shadow-md hover:-translate-y-1"
                  style={{ borderColor: CLUSTER_COLORS[idx % CLUSTER_COLORS.length] }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-4 h-4 rounded-full animate-pulse"
                      style={{ backgroundColor: CLUSTER_COLORS[idx % CLUSTER_COLORS.length] }}
                    />
                    <span className="font-bold text-gray-800">簇 {idx + 1}</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>数据点数量: <span className="font-semibold text-blue-600">{clusterCounts[idx] || 0}</span></p>
                    <p>中心坐标:</p>
                    <p className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">({center.x.toFixed(1)}, {center.y.toFixed(1)})</p>
                  </div>
                </div>
              ))}
              {algorithm === 'dbscan' && clusterCounts[-1] && clusterCounts[-1] > 0 && (
                <div className="p-4 rounded-xl border-2 border-red-300 bg-red-50 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full bg-red-400" />
                    <span className="font-bold text-gray-800">噪声点</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>数据点数量: <span className="font-semibold text-red-600">{clusterCounts[-1]}</span></p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">图例说明</span>
                <span className="text-xs text-gray-500">点击算法按钮切换查看</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-600">未分配数据点</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: CLUSTER_COLORS[0] }}></div>
                  <span className="text-xs text-gray-600">聚类中心（带编号）</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CLUSTER_COLORS[1] }}></div>
                  <span className="text-xs text-gray-600">已分配数据点</span>
                </div>
                {algorithm === 'dbscan' && (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border-2 border-red-400 border-dashed bg-transparent"></div>
                    <span className="text-xs text-gray-600">噪声点标记</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">算法说明</h2>
            </div>
            
            <div className="space-y-4">
              {(algorithm === 'kmeans' || algorithm === 'kmeanspp') && (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-800">{algorithm === 'kmeanspp' ? 'KMeans++' : 'KMeans'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">基于距离的划分聚类算法，通过迭代优化将数据划分为K个簇。</p>
                  <div className="border-l-2 border-blue-400 pl-3 space-y-1">
                    {algorithm === 'kmeanspp' ? (
                      <>
                        <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 随机选择第一个聚类中心</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">2.</span> 根据概率选择下一个中心（距离越远概率越大）</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">3.</span> 重复直到选完K个中心</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">4.</span> 分配数据点到最近簇</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">5.</span> 更新质心，迭代收敛</p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 随机选择K个初始聚类中心</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">2.</span> 分配数据点到最近簇</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">3.</span> 更新质心，迭代收敛</p>
                      </>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-xs"><span className="text-green-600 font-medium">优点:</span> 简单高效，收敛速度快{algorithm === 'kmeanspp' && '，初始中心选择更优'}</p>
                    <p className="text-xs mt-1"><span className="text-red-600 font-medium">缺点:</span> 需要预先指定K值，对异常值敏感</p>
                  </div>
                </div>
              )}
              {(algorithm === 'dbscan' || algorithm === 'optics') && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    {algorithm === 'optics' ? <Hexagon className="w-5 h-5 text-green-600" /> : <Network className="w-5 h-5 text-green-600" />}
                    <h3 className="font-semibold text-gray-800">{algorithm === 'optics' ? 'OPTICS' : 'DBSCAN'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">基于密度的聚类算法，无需预先指定簇数。</p>
                  <div className="border-l-2 border-green-400 pl-3 space-y-1">
                    {algorithm === 'optics' ? (
                      <>
                        <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 从任意未访问的点开始</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">2.</span> 计算可达距离和核心距离</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">3.</span> 维护有序的种子列表</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">4.</span> 根据可达性图识别簇</p>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 寻找密度可达的点</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">2.</span> ε邻域内≥MinPts则形成簇</p>
                        <p className="text-xs text-gray-600"><span className="font-medium">3.</span> 未被包含的点标记为噪声</p>
                      </>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-200">
                    <p className="text-xs"><span className="text-green-600 font-medium">优点:</span> 无需指定K，能发现任意形状簇，识别噪声{algorithm === 'optics' && '，支持可变密度'}</p>
                    <p className="text-xs mt-1"><span className="text-red-600 font-medium">缺点:</span> 对参数敏感，高维数据效果不佳{algorithm === 'optics' && '，计算复杂度较高'}</p>
                  </div>
                </div>
              )}
              {algorithm === 'hierarchical' && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="w-5 h-5 text-purple-600" />
                    <h3 className="font-semibold text-gray-800">层次聚类</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">自底向上的聚合聚类，构建层次树状结构。</p>
                  <div className="border-l-2 border-purple-400 pl-3 space-y-1">
                    <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 每个数据点自成一类</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">2.</span> 计算类间距离</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">3.</span> 合并距离最近的两类</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">4.</span> 重复直到达到目标簇数</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-purple-200">
                    <p className="text-xs"><span className="text-green-600 font-medium">优点:</span> 无需指定K，层次结构清晰</p>
                    <p className="text-xs mt-1"><span className="text-red-600 font-medium">缺点:</span> 计算复杂度高，不适合大规模数据</p>
                  </div>
                </div>
              )}
              {algorithm === 'gmm' && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-orange-600" />
                    <h3 className="font-semibold text-gray-800">GMM</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">高斯混合模型，基于概率的软聚类方法。</p>
                  <div className="border-l-2 border-orange-400 pl-3 space-y-1">
                    <p className="text-xs text-gray-600"><span className="font-medium">1.</span> 初始化K个高斯成分参数</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">E步:</span> 计算后验概率</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">M步:</span> 更新均值/协方差/权重</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">4.</span> 迭代直到收敛</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-orange-200">
                    <p className="text-xs"><span className="text-green-600 font-medium">优点:</span> 支持软聚类，能处理椭圆形状簇</p>
                    <p className="text-xs mt-1"><span className="text-red-600 font-medium">缺点:</span> 需要指定K，对初始参数敏感</p>
                  </div>
                </div>
              )}

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium text-gray-800 mb-2">💡 学习提示</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 尝试调整参数观察聚类效果变化</li>
                  <li>• 对比不同算法处理同一数据集的差异</li>
                  <li>• 复杂数据集适合密度-based算法</li>
                  <li>• 简单球形簇适合KMeans类算法</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClusterVisualizer;
