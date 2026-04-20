import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DataAnalysisDeepLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('visualization');
  const [showCode, setShowCode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: React.ReactNode;
  }>({ title: '', content: <div /> });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">GYQ's Learning Hub</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</Link></li>
              <li><Link to="/python" className="text-gray-600 hover:text-blue-600 transition-colors">Python基础</Link></li>
              <li><Link to="/data-analysis" className="text-blue-600 font-medium">数据分析技术</Link></li>
              <li><Link to="/data-collection" className="text-gray-600 hover:text-blue-600 transition-colors">数据采集与处理</Link></li>
              <li><Link to="/supply-chain" className="text-gray-600 hover:text-blue-600 transition-colors">供应链数据分析</Link></li>
              <li><Link to="/database" className="text-gray-600 hover:text-blue-600 transition-colors">数据库原理</Link></li>
              <li><Link to="/financial" className="text-gray-600 hover:text-blue-600 transition-colors">财务数据分析</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">数据分析技术 - 深入学习</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            探索数据分析的高级技术和实践应用，掌握专业的数据分析师技能
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'visualization' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('visualization')}
            >
              数据可视化进阶
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'statistics' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('statistics')}
            >
              统计分析深入
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'machine-learning' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('machine-learning')}
            >
              机器学习应用
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'case-studies' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('case-studies')}
            >
              实战案例分析
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* 数据可视化进阶 */}
          {activeTab === 'visualization' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">数据可视化进阶</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">高级数据可视化技术</h3>
                  <p className="text-gray-600 mb-4">
                    学习如何创建更复杂、更有洞察力的数据可视化，包括交互式图表、地理可视化和实时数据可视化。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">交互式图表</h4>
                      <p className="text-gray-600">使用Plotly和Dash创建交互式图表，允许用户探索数据。</p>
                      <button 
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => setShowCode(!showCode)}
                      >
                        {showCode ? '隐藏代码示例' : '查看代码示例'}
                      </button>
                      {showCode && (
                        <div className="mt-4 p-4 bg-gray-100 rounded-md overflow-x-auto">
                          <pre className="text-sm text-gray-800">
{`import plotly.express as px
import pandas as pd

# 加载数据
df = pd.read_csv('sales_data.csv')

# 创建交互式散点图
fig = px.scatter(
    df, 
    x='revenue', 
    y='profit', 
    color='region',
    size='units_sold',
    hover_data=['product'],
    title='销售数据可视化'
)

# 显示图表
fig.show()`}
                          </pre>
                        </div>
                      )}
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">地理可视化</h4>
                      <p className="text-gray-600">使用folium和Plotly创建地理热图和地图可视化。</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">数据可视化最佳实践</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>选择合适的图表类型：根据数据类型和分析目的选择最适合的图表</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>使用颜色编码：选择对色盲友好的颜色方案</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>添加适当的标签和注释：确保图表易于理解</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>保持简洁：避免过度装饰，突出数据本身</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">实践练习</h3>
                  <p className="text-gray-600 mb-4">
                    使用以下数据集创建一个交互式仪表板：
                  </p>
                  <div className="bg-white p-4 rounded-md mb-4">
                    <p className="font-mono text-sm text-gray-800">数据集：sales_data.csv</p>
                    <p className="text-gray-600 mt-2">包含以下字段：date, product, region, units_sold, revenue, profit</p>
                  </div>
                  <button 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                    onClick={() => openModal('数据可视化练习', (
                      <div className="space-y-4">
                        <p className="text-gray-700">在这个练习中，你将使用Python创建一个交互式数据可视化仪表板。</p>
                        <div className="bg-gray-100 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">练习目标：</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>使用Plotly创建交互式散点图</li>
                            <li>添加颜色编码和大小映射</li>
                            <li>实现悬停提示</li>
                            <li>创建多个图表组成的仪表板</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">数据集：sales_data.csv</h4>
                          <p className="text-gray-600">包含以下字段：date, product, region, units_sold, revenue, profit</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">提示：</h4>
                          <p className="text-gray-600">使用Plotly Express库可以快速创建交互式图表，尝试使用px.scatter()函数并添加不同的参数来自定义图表。</p>
                        </div>
                      </div>
                    ))}
                  >
                    开始练习
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 统计分析深入 */}
          {activeTab === 'statistics' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">统计分析深入</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">高级统计方法</h3>
                  <p className="text-gray-600 mb-4">
                    学习更复杂的统计分析方法，包括多元回归、时间序列分析和贝叶斯统计。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">多元回归分析</h4>
                      <p className="text-gray-600">分析多个自变量对因变量的影响，包括多重共线性检测和模型选择。</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">时间序列分析</h4>
                      <p className="text-gray-600">分析随时间变化的数据，包括趋势、季节性和预测。</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">假设检验进阶</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>ANOVA分析：比较多个组之间的均值差异</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>非参数检验：当数据不满足正态分布假设时使用</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>多重比较校正：控制多次检验的错误率</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">统计软件工具</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">Python</h4>
                      <p className="text-gray-600 text-sm">scipy.stats, statsmodels</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">R</h4>
                      <p className="text-gray-600 text-sm">基础统计包，tidyverse</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">SPSS</h4>
                      <p className="text-gray-600 text-sm">专业统计分析软件</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 机器学习应用 */}
          {activeTab === 'machine-learning' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">机器学习应用</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">高级机器学习算法</h3>
                  <p className="text-gray-600 mb-4">
                    学习更复杂的机器学习算法，包括集成方法、深度学习和自然语言处理。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">集成方法</h4>
                      <p className="text-gray-600">随机森林、梯度提升树、XGBoost</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">深度学习</h4>
                      <p className="text-gray-600">神经网络、CNN、RNN</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">自然语言处理</h4>
                      <p className="text-gray-600">文本分类、情感分析、命名实体识别</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">模型评估与优化</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>交叉验证：确保模型的泛化能力</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>超参数调优：网格搜索、随机搜索、贝叶斯优化</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>特征工程：特征选择、特征提取、特征转换</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">机器学习实战项目</h3>
                  <p className="text-gray-600 mb-4">
                    完成以下实战项目，应用所学的机器学习技术：
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">项目1：客户流失预测</h4>
                      <p className="text-gray-600 text-sm">使用分类算法预测客户是否会流失</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">项目2：销售预测</h4>
                      <p className="text-gray-600 text-sm">使用时间序列分析预测未来销售趋势</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">项目3：情感分析</h4>
                      <p className="text-gray-600 text-sm">分析客户评论的情感倾向</p>
                    </div>
                  </div>
                  <button 
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                    onClick={() => openModal('机器学习实战项目', (
                      <div className="space-y-4">
                        <p className="text-gray-700">选择一个机器学习项目开始实践：</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">项目1：客户流失预测</h4>
                          <p className="text-gray-600 mb-3">使用分类算法预测客户是否会流失</p>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <h5 className="font-medium text-gray-800 mb-1">数据集：</h5>
                            <p className="text-gray-600 text-sm">customer_churn.csv - 包含客户基本信息、使用情况和流失状态</p>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-md mt-3">
                            <h5 className="font-medium text-gray-800 mb-1">建议算法：</h5>
                            <p className="text-gray-600 text-sm">逻辑回归、随机森林、XGBoost</p>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">项目2：销售预测</h4>
                          <p className="text-gray-600 mb-3">使用时间序列分析预测未来销售趋势</p>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <h5 className="font-medium text-gray-800 mb-1">数据集：</h5>
                            <p className="text-gray-600 text-sm">sales_history.csv - 包含历史销售数据和相关因素</p>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-md mt-3">
                            <h5 className="font-medium text-gray-800 mb-1">建议算法：</h5>
                            <p className="text-gray-600 text-sm">ARIMA、Prophet、LSTM</p>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">项目3：情感分析</h4>
                          <p className="text-gray-600 mb-3">分析客户评论的情感倾向</p>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <h5 className="font-medium text-gray-800 mb-1">数据集：</h5>
                            <p className="text-gray-600 text-sm">customer_reviews.csv - 包含客户评论和情感标签</p>
                          </div>
                          <div className="bg-gray-100 p-3 rounded-md mt-3">
                            <h5 className="font-medium text-gray-800 mb-1">建议算法：</h5>
                            <p className="text-gray-600 text-sm">TF-IDF + 分类器、BERT</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  >
                    开始项目
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 实战案例分析 */}
          {activeTab === 'case-studies' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">实战案例分析</h2>
              
              <div className="space-y-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-xl font-semibold">案例1：电商平台用户行为分析</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                        <p className="text-gray-600">
                          某电商平台希望通过分析用户行为数据，提高用户转化率和复购率。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">数据描述</h4>
                        <p className="text-gray-600">
                          包含用户浏览、点击、加购、购买等行为数据，以及用户基本信息。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">分析目标</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>识别用户购买行为模式</li>
                          <li>预测用户购买意向</li>
                          <li>制定个性化推荐策略</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">分析方法</h4>
                        <p className="text-gray-600">
                          使用聚类分析、关联规则挖掘和机器学习分类算法。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">结果与建议</h4>
                        <p className="text-gray-600">
                          识别出5种用户类型，针对不同类型用户制定了差异化的营销策略，提高了转化率15%。
                        </p>
                      </div>
                    </div>
                    <button 
                      className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                      onClick={() => openModal('电商平台用户行为分析详细报告', (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                          <p className="text-gray-600">某电商平台希望通过分析用户行为数据，提高用户转化率和复购率。平台拥有大量的用户行为数据，包括浏览、点击、加购、购买等行为。</p>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">数据描述</h4>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <p className="text-gray-600">数据集包含以下字段：</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                              <li>user_id: 用户唯一标识</li>
                              <li>session_id: 会话标识</li>
                              <li>timestamp: 行为时间戳</li>
                              <li>action: 用户行为（浏览、点击、加购、购买）</li>
                              <li>product_id: 产品标识</li>
                              <li>category_id: 产品类别</li>
                              <li>price: 产品价格</li>
                              <li>user_age: 用户年龄</li>
                              <li>user_gender: 用户性别</li>
                              <li>user_location: 用户所在地区</li>
                            </ul>
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">分析方法</h4>
                          <ol className="list-decimal list-inside text-gray-600 space-y-2">
                            <li>数据清洗和预处理：处理缺失值，标准化数据格式</li>
                            <li>探索性数据分析：了解数据分布和基本统计信息</li>
                            <li>用户行为模式分析：识别用户购买路径和行为序列</li>
                            <li>用户分群：使用K-means聚类算法将用户分为不同类型</li>
                            <li>关联规则挖掘：发现产品之间的关联关系</li>
                            <li>预测模型构建：使用机器学习算法预测用户购买意向</li>
                          </ol>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">分析结果</h4>
                          <div className="bg-blue-50 p-3 rounded-md">
                            <p className="text-gray-600 mb-2">识别出5种用户类型：</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              <li><span className="font-medium">忠实客户</span>：频繁购买，高客单价</li>
                              <li><span className="font-medium">浏览者</span>：经常浏览但很少购买</li>
                              <li><span className="font-medium">促销敏感型</span>：主要在促销期间购买</li>
                              <li><span className="font-medium">新用户</span>：注册时间短，购买频率低</li>
                              <li><span className="font-medium">流失风险型</span>：曾经活跃但最近活跃度下降</li>
                            </ul>
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">建议与策略</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>针对忠实客户：提供会员专属优惠和个性化推荐</li>
                            <li>针对浏览者：优化产品页面，提供更多产品信息和用户评价</li>
                            <li>针对促销敏感型：定期发送促销信息，设置限时优惠</li>
                            <li>针对新用户：提供首次购买折扣和引导式购物体验</li>
                            <li>针对流失风险型：发送个性化挽留邮件，提供回归优惠</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">业务成果</h4>
                          <p className="text-gray-600">通过实施上述策略，平台的用户转化率提高了15%，复购率提高了20%，整体销售额增长了25%。</p>
                        </div>
                      ))}
                    >
                      查看详细分析
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <h3 className="text-xl font-semibold">案例2：零售连锁企业销售预测</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                        <p className="text-gray-600">
                          某零售连锁企业希望通过数据分析提高销售预测准确性，优化库存管理。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">数据描述</h4>
                        <p className="text-gray-600">
                          包含历史销售数据、促销活动数据、天气数据和节假日信息。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">分析目标</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>构建销售预测模型</li>
                          <li>识别影响销售的关键因素</li>
                          <li>优化库存水平</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">分析方法</h4>
                        <p className="text-gray-600">
                          使用时间序列分析、多元回归和机器学习算法。
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">结果与建议</h4>
                        <p className="text-gray-600">
                          预测准确率提高到85%，库存周转率提高20%，减少了库存积压和缺货现象。
                        </p>
                      </div>
                    </div>
                    <button 
                      className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                      onClick={() => openModal('零售连锁企业销售预测详细报告', (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                          <p className="text-gray-600">某零售连锁企业拥有多家门店，希望通过数据分析提高销售预测准确性，优化库存管理，减少库存积压和缺货现象。</p>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">数据描述</h4>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <p className="text-gray-600">数据集包含以下字段：</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                              <li>date: 日期</li>
                              <li>store_id: 门店标识</li>
                              <li>product_id: 产品标识</li>
                              <li>sales: 销售额</li>
                              <li>units_sold: 销售数量</li>
                              <li>price: 产品价格</li>
                              <li>promotion: 是否促销</li>
                              <li>holiday: 是否节假日</li>
                              <li>temperature: 当日温度</li>
                              <li>foot_traffic: 门店客流量</li>
                            </ul>
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">分析方法</h4>
                          <ol className="list-decimal list-inside text-gray-600 space-y-2">
                            <li>数据清洗和预处理：处理缺失值，处理异常值</li>
                            <li>探索性数据分析：分析销售趋势、季节性模式</li>
                            <li>特征工程：创建时间特征，提取促销和节假日信息</li>
                            <li>模型选择：比较不同的时间序列模型</li>
                            <li>模型训练和验证：使用交叉验证评估模型性能</li>
                            <li>模型优化：调整模型参数，提高预测准确性</li>
                          </ol>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">分析结果</h4>
                          <div className="bg-blue-50 p-3 rounded-md">
                            <p className="text-gray-600 mb-2">模型性能：</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              <li>预测准确率：85%</li>
                              <li>平均绝对误差：5.2%</li>
                              <li>均方根误差：7.8%</li>
                            </ul>
                          </div>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">关键发现</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>销售数据具有明显的季节性模式，节假日期间销售额显著增加</li>
                            <li>促销活动对销售额有显著影响，平均提升销售额20-30%</li>
                            <li>温度变化会影响某些产品的销售，如夏季冷饮销售增加</li>
                            <li>不同门店的销售模式存在差异，需要个性化预测模型</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">建议与策略</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>基于预测结果优化库存水平，减少库存积压和缺货</li>
                            <li>合理安排促销活动，最大化促销效果</li>
                            <li>根据季节性需求调整产品组合</li>
                            <li>为不同门店制定个性化的库存和销售策略</li>
                          </ul>
                          
                          <h4 className="font-semibold text-gray-800 mb-2">业务成果</h4>
                          <p className="text-gray-600">通过实施销售预测模型和优化策略，企业的库存周转率提高了20%，库存积压减少了30%，缺货率降低了25%，整体运营成本降低了15%。</p>
                        </div>
                      ))}
                    >
                      查看详细分析
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 互动练习 */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">互动练习</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">测验：数据分析概念</h3>
              <p className="text-gray-600 mb-4">
                测试你对数据分析核心概念的理解
              </p>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => openModal('数据分析概念测验', (
                  <div className="space-y-4">
                    <p className="text-gray-700">测试你对数据分析核心概念的理解，请选择正确的答案：</p>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">1. 以下哪项不是数据分析的基本步骤？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q1a" name="q1" className="mr-2" />
                          <label htmlFor="q1a">数据收集</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1b" name="q1" className="mr-2" />
                          <label htmlFor="q1b">数据清洗</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1c" name="q1" className="mr-2" />
                          <label htmlFor="q1c">数据可视化</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1d" name="q1" className="mr-2" />
                          <label htmlFor="q1d">数据删除</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">2. 以下哪种图表最适合展示时间序列数据？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q2a" name="q2" className="mr-2" />
                          <label htmlFor="q2a">散点图</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2b" name="q2" className="mr-2" />
                          <label htmlFor="q2b">折线图</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2c" name="q2" className="mr-2" />
                          <label htmlFor="q2c">饼图</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2d" name="q2" className="mr-2" />
                          <label htmlFor="q2d">柱状图</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">3. 以下哪项不是机器学习的常见算法类型？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q3a" name="q3" className="mr-2" />
                          <label htmlFor="q3a">监督学习</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3b" name="q3" className="mr-2" />
                          <label htmlFor="q3b">无监督学习</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3c" name="q3" className="mr-2" />
                          <label htmlFor="q3c">强化学习</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3d" name="q3" className="mr-2" />
                          <label htmlFor="q3d">规则学习</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">4. 数据清洗的主要目的是什么？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q4a" name="q4" className="mr-2" />
                          <label htmlFor="q4a">删除所有数据</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4b" name="q4" className="mr-2" />
                          <label htmlFor="q4b">提高数据质量，确保数据准确、完整</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4c" name="q4" className="mr-2" />
                          <label htmlFor="q4c">增加数据量</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4d" name="q4" className="mr-2" />
                          <label htmlFor="q4d">加密数据</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">5. 以下哪种统计量不是描述数据集中趋势的指标？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q5a" name="q5" className="mr-2" />
                          <label htmlFor="q5a">均值</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5b" name="q5" className="mr-2" />
                          <label htmlFor="q5b">中位数</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5c" name="q5" className="mr-2" />
                          <label htmlFor="q5c">众数</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5d" name="q5" className="mr-2" />
                          <label htmlFor="q5d">标准差</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                        提交答案
                      </button>
                    </div>
                  </div>
                ))}
              >
                开始测验
              </button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">编程挑战：数据可视化</h3>
              <p className="text-gray-600 mb-4">
                使用Python创建一个交互式数据可视化仪表板
              </p>
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                onClick={() => openModal('数据可视化编程挑战', (
                  <div className="space-y-4">
                    <p className="text-gray-700">在这个编程挑战中，你将使用Python创建一个交互式数据可视化仪表板。</p>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">挑战目标：</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>使用Plotly创建交互式散点图</li>
                        <li>添加颜色编码和大小映射</li>
                        <li>实现悬停提示</li>
                        <li>创建多个图表组成的仪表板</li>
                        <li>添加筛选和交互功能</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">数据集：sales_data.csv</h4>
                      <p className="text-gray-600">包含以下字段：date, product, region, units_sold, revenue, profit</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">技术要求：</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>使用Python 3.7+</li>
                        <li>使用Plotly库创建交互式图表</li>
                        <li>使用Pandas库处理数据</li>
                        <li>可选：使用Dash创建完整的仪表板应用</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">评分标准：</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>图表的交互性和美观度（30%）</li>
                        <li>代码的可读性和组织性（25%）</li>
                        <li>功能的完整性（25%）</li>
                        <li>创新性和额外功能（20%）</li>
                      </ul>
                    </div>
                  </div>
                ))}
              >
                开始挑战
              </button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">案例分析：真实商业问题</h3>
              <p className="text-gray-600 mb-4">
                分析真实的商业数据，提出数据驱动的解决方案
              </p>
              <button 
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
                onClick={() => openModal('真实商业问题案例分析', (
                  <div className="space-y-4">
                    <p className="text-gray-700">在这个案例分析中，你将分析真实的商业数据，识别问题并提出数据驱动的解决方案。</p>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">案例：电商平台用户转化率提升</h4>
                      <p className="text-gray-600 mb-3">某电商平台的用户转化率持续下降，需要分析原因并提出改进方案。</p>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <h5 className="font-medium text-gray-800 mb-1">数据描述：</h5>
                        <p className="text-gray-600 text-sm">包含用户行为数据、产品数据和销售数据，共10万条记录。</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-md mt-3">
                        <h5 className="font-medium text-gray-800 mb-1">分析目标：</h5>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          <li>识别用户转化漏斗中的瓶颈</li>
                          <li>分析不同用户群体的转化行为</li>
                          <li>发现影响转化率的关键因素</li>
                          <li>提出数据驱动的改进方案</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">分析方法建议：</h4>
                      <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>数据清洗和预处理：处理缺失值，标准化数据格式</li>
                        <li>探索性数据分析：了解数据分布和基本统计信息</li>
                        <li>用户行为分析：分析用户路径和转化漏斗</li>
                        <li>用户分群：使用聚类算法将用户分为不同类型</li>
                        <li>相关性分析：识别影响转化率的关键因素</li>
                        <li>假设检验：验证分析结果的显著性</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">交付物：</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>详细的数据分析报告</li>
                        <li>数据可视化图表</li>
                        <li>具体的改进建议</li>
                        <li>预期效果评估</li>
                      </ul>
                    </div>
                  </div>
                ))}
              >
                开始分析
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">G</span>
                </div>
                <h3 className="text-xl font-bold">GYQ's Learning Hub</h3>
              </div>
              <p className="mt-2 text-blue-100">商务数据分析与应用专业学习平台</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-100 text-sm">
            <p>© 2024 GYQ's Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-800">{modalContent.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowModal(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              {modalContent.content}
            </div>
            <div className="p-6 border-t flex justify-end">
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => setShowModal(false)}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataAnalysisDeepLearning;