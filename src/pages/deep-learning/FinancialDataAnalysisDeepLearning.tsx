import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinancialDataAnalysisDeepLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('financial-statements');
  const [showCalculation, setShowCalculation] = useState(false);

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
              <li><Link to="/data-analysis" className="text-gray-600 hover:text-blue-600 transition-colors">数据分析技术</Link></li>
              <li><Link to="/data-collection" className="text-gray-600 hover:text-blue-600 transition-colors">数据采集与处理</Link></li>
              <li><Link to="/supply-chain" className="text-gray-600 hover:text-blue-600 transition-colors">供应链数据分析</Link></li>
              <li><Link to="/database" className="text-gray-600 hover:text-blue-600 transition-colors">数据库原理</Link></li>
              <li><Link to="/financial" className="text-blue-600 font-medium">财务数据分析</Link></li>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">企业财务数据分析 - 深入学习</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            掌握企业财务数据分析的高级技术，提升财务决策能力
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'financial-statements' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('financial-statements')}
            >
              财务报表深度分析
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'financial-ratios' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('financial-ratios')}
            >
              财务比率分析
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'investment-analysis' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('investment-analysis')}
            >
              投资决策分析
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${activeTab === 'financial-forecasting' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('financial-forecasting')}
            >
              财务预测与规划
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* 财务报表深度分析 */}
          {activeTab === 'financial-statements' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">财务报表深度分析</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">资产负债表分析</h3>
                  <p className="text-gray-600 mb-4">
                    深入分析企业的资产、负债和所有者权益，评估企业的财务状况和偿债能力。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">资产分析</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 流动资产结构分析</li>
                        <li>• 固定资产利用效率</li>
                        <li>• 无形资产评估</li>
                        <li>• 资产周转率分析</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">负债与权益分析</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 负债结构分析</li>
                        <li>• 权益比率分析</li>
                        <li>• 资本结构优化</li>
                        <li>• 财务杠杆效应</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">利润表分析</h3>
                  <p className="text-gray-600 mb-4">
                    分析企业的收入、成本和利润，评估企业的盈利能力和经营效率。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">收入分析</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 收入结构分析</li>
                        <li>• 收入增长率分析</li>
                        <li>• 收入质量评估</li>
                        <li>• 季节性收入分析</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">成本与利润分析</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 成本结构分析</li>
                        <li>• 毛利率分析</li>
                        <li>• 营业利润率分析</li>
                        <li>• 净利润率分析</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">现金流量表分析</h3>
                  <p className="text-gray-600 mb-4">
                    分析企业的现金流入和流出，评估企业的现金生成能力和财务弹性。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">经营活动现金流</h4>
                      <p className="text-gray-600 text-sm">分析企业通过日常经营活动产生的现金流量</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">投资活动现金流</h4>
                      <p className="text-gray-600 text-sm">分析企业投资活动的现金流量</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">筹资活动现金流</h4>
                      <p className="text-gray-600 text-sm">分析企业筹资活动的现金流量</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">财务报表综合分析</h3>
                  <p className="text-gray-600 mb-4">
                    将三张财务报表结合起来，进行综合分析，全面评估企业的财务状况和经营成果。
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    查看综合分析案例
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 财务比率分析 */}
          {activeTab === 'financial-ratios' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">财务比率分析</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">盈利能力比率</h3>
                  <p className="text-gray-600 mb-4">
                    评估企业获取利润的能力，反映企业的经营效率和管理水平。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">常用盈利能力比率</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>毛利率</span>
                          <span className="font-mono">（销售收入 - 销售成本）/ 销售收入</span>
                        </li>
                        <li className="flex justify-between">
                          <span>营业利润率</span>
                          <span className="font-mono">营业利润 / 销售收入</span>
                        </li>
                        <li className="flex justify-between">
                          <span>净利润率</span>
                          <span className="font-mono">净利润 / 销售收入</span>
                        </li>
                        <li className="flex justify-between">
                          <span>总资产收益率</span>
                          <span className="font-mono">净利润 / 平均总资产</span>
                        </li>
                        <li className="flex justify-between">
                          <span>净资产收益率</span>
                          <span className="font-mono">净利润 / 平均净资产</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">盈利能力分析案例</h4>
                      <p className="text-gray-600 mb-4">
                        分析某上市公司近三年的盈利能力比率变化趋势，评估其盈利能力的稳定性和增长潜力。
                      </p>
                      <button 
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        onClick={() => setShowCalculation(!showCalculation)}
                      >
                        {showCalculation ? '隐藏计算过程' : '查看计算过程'}
                      </button>
                      {showCalculation && (
                        <div className="mt-4 p-4 bg-white rounded-md overflow-x-auto">
                          <pre className="text-sm text-gray-800">
{`# 计算净资产收益率（ROE）
net_profit = 1,000,000  # 净利润
avg_equity = 5,000,000  # 平均净资产
roe = net_profit / avg_equity * 100
print(f"ROE: {roe:.2f}%")

# 计算总资产收益率（ROA）
avg_assets = 10,000,000  # 平均总资产
roa = net_profit / avg_assets * 100
print(f"ROA: {roa:.2f}%")`}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">偿债能力比率</h3>
                  <p className="text-gray-600 mb-4">
                    评估企业偿还债务的能力，反映企业的财务风险和稳定性。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">短期偿债能力</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>流动比率</span>
                          <span className="font-mono">流动资产 / 流动负债</span>
                        </li>
                        <li className="flex justify-between">
                          <span>速动比率</span>
                          <span className="font-mono">（流动资产 - 存货）/ 流动负债</span>
                        </li>
                        <li className="flex justify-between">
                          <span>现金比率</span>
                          <span className="font-mono">（现金 + 现金等价物）/ 流动负债</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">长期偿债能力</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between">
                          <span>资产负债率</span>
                          <span className="font-mono">总负债 / 总资产</span>
                        </li>
                        <li className="flex justify-between">
                          <span>权益乘数</span>
                          <span className="font-mono">总资产 / 净资产</span>
                        </li>
                        <li className="flex justify-between">
                          <span>利息保障倍数</span>
                          <span className="font-mono">息税前利润 / 利息费用</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">营运能力比率</h3>
                  <p className="text-gray-600 mb-4">
                    评估企业资产的利用效率，反映企业的运营管理水平。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">存货周转率</h4>
                      <p className="text-gray-600 text-sm">销售成本 / 平均存货</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">应收账款周转率</h4>
                      <p className="text-gray-600 text-sm">销售收入 / 平均应收账款</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">总资产周转率</h4>
                      <p className="text-gray-600 text-sm">销售收入 / 平均总资产</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">财务比率综合分析</h3>
                  <p className="text-gray-600 mb-4">
                    使用杜邦分析法等工具，将各种财务比率结合起来，进行综合分析。
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    查看杜邦分析案例
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 投资决策分析 */}
          {activeTab === 'investment-analysis' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">投资决策分析</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">现金流量分析</h3>
                  <p className="text-gray-600 mb-4">
                    分析投资项目的现金流入和流出，评估项目的可行性和盈利能力。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">现金流量估算</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 初始投资估算</li>
                        <li>• 运营期现金流量估算</li>
                        <li>• 终结期现金流量估算</li>
                        <li>• 通货膨胀影响</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">现金流量分析方法</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 净现值法（NPV）</li>
                        <li>• 内部收益率法（IRR）</li>
                        <li>• 获利指数法（PI）</li>
                        <li>• 回收期法</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">投资风险分析</h3>
                  <p className="text-gray-600 mb-4">
                    评估投资项目的风险，为投资决策提供风险参考。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">风险评估方法</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 敏感性分析</li>
                        <li>• 情景分析</li>
                        <li>• 蒙特卡洛模拟</li>
                        <li>• 决策树分析</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">风险调整方法</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 风险调整贴现率法</li>
                        <li>•  certainty equivalent法</li>
                        <li>• 实物期权分析</li>
                        <li>• 资本资产定价模型（CAPM）</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">投资决策案例分析</h3>
                  <p className="text-gray-600 mb-4">
                    通过实际案例，学习如何运用投资决策分析方法评估项目可行性。
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">案例1：新产品投资决策</h4>
                      <p className="text-gray-600 text-sm">评估是否投资开发新产品生产线</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">案例2：设备更新决策</h4>
                      <p className="text-gray-600 text-sm">评估是否更新现有生产设备</p>
                    </div>
                    <div className="bg-white p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-1">案例3：扩张项目决策</h4>
                      <p className="text-gray-600 text-sm">评估是否投资建设新厂房</p>
                    </div>
                  </div>
                  <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    查看详细案例
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 财务预测与规划 */}
          {activeTab === 'financial-forecasting' && (
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">财务预测与规划</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">销售预测</h3>
                  <p className="text-gray-600 mb-4">
                    预测企业未来的销售收入，为财务规划提供基础。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">销售预测方法</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 定性预测法</li>
                        <li>• 时间序列分析法</li>
                        <li>• 因果分析法</li>
                        <li>• 情景分析法</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">销售预测案例</h4>
                      <p className="text-gray-600">
                        使用时间序列分析和因果分析相结合的方法，预测某企业未来三年的销售收入。
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">财务报表预测</h3>
                  <p className="text-gray-600 mb-4">
                    根据销售预测和其他因素，预测企业未来的财务报表。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">利润表预测</h4>
                      <p className="text-gray-600 text-sm">基于销售预测和成本结构，预测未来利润</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">资产负债表预测</h4>
                      <p className="text-gray-600 text-sm">基于销售增长和资产周转率，预测未来资产负债</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">现金流量表预测</h4>
                      <p className="text-gray-600 text-sm">基于利润表和资产负债表预测，预测未来现金流</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">资金需求预测</h3>
                  <p className="text-gray-600 mb-4">
                    预测企业未来的资金需求，为融资决策提供依据。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">资金需求预测方法</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 销售百分比法</li>
                        <li>• 回归分析法</li>
                        <li>• 现金预算法</li>
                        <li>• 计算机模拟法</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">融资方案设计</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• 内部融资</li>
                        <li>• 债务融资</li>
                        <li>• 股权融资</li>
                        <li>• 混合融资</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">财务规划案例</h3>
                  <p className="text-gray-600 mb-4">
                    通过实际案例，学习如何制定企业的财务规划。
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    查看财务规划案例
                  </button>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">测验：财务分析概念</h3>
              <p className="text-gray-600 mb-4">
                测试你对财务分析核心概念的理解
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                开始测验
              </button>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">财务比率计算练习</h3>
              <p className="text-gray-600 mb-4">
                使用真实企业数据计算各种财务比率
              </p>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                开始练习
              </button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">投资决策分析案例</h3>
              <p className="text-gray-600 mb-4">
                分析真实投资项目，做出投资决策
              </p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
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
    </div>
  );
};

export default FinancialDataAnalysisDeepLearning;