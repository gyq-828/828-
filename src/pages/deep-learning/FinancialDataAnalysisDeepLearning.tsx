import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FinancialDataAnalysisDeepLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('financial-statements');
  const [showCalculation, setShowCalculation] = useState(false);
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
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={() => openModal('财务报表综合分析案例', (
                      <div className="space-y-4">
                        <p className="text-gray-700">本案例展示了如何对企业的财务报表进行综合分析，全面评估企业的财务状况和经营成果。</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                          <p className="text-gray-600">某制造业企业2022-2023年的财务报表数据，需要进行综合分析以评估企业的财务状况、盈利能力和运营效率。</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">分析方法</h4>
                          <ol className="list-decimal list-inside text-gray-600 space-y-2">
                            <li>资产负债表分析：评估企业的财务状况和偿债能力</li>
                            <li>利润表分析：评估企业的盈利能力和经营效率</li>
                            <li>现金流量表分析：评估企业的现金生成能力</li>
                            <li>财务比率分析：综合评估企业的财务状况</li>
                            <li>趋势分析：分析财务指标的变化趋势</li>
                            <li>同行业对比：与行业平均水平进行对比</li>
                          </ol>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">关键发现</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>企业的资产负债率从2022年的45%上升到2023年的52%，偿债能力有所下降</li>
                            <li>毛利率从2022年的30%下降到2023年的28%，但净利润率保持稳定</li>
                            <li>经营活动现金流量净额与净利润的比率为1.2，表明利润质量良好</li>
                            <li>存货周转率从2022年的5次提高到2023年的5.5次，运营效率有所提升</li>
                            <li>净资产收益率（ROE）从2022年的12%下降到2023年的10.5%，主要受资产负债率上升影响</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">建议与策略</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>优化资本结构，降低资产负债率</li>
                            <li>加强成本控制，提高毛利率</li>
                            <li>继续优化库存管理，进一步提高存货周转率</li>
                            <li>加强应收账款管理，提高资金使用效率</li>
                            <li>增加研发投入，提高产品竞争力</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  >
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
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={() => openModal('杜邦分析案例', (
                      <div className="space-y-4">
                        <p className="text-gray-700">本案例展示了如何使用杜邦分析法对企业的财务状况进行综合分析，分解影响净资产收益率（ROE）的因素。</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                          <p className="text-gray-600">某零售企业2022-2023年的财务数据，需要使用杜邦分析法分析其净资产收益率的变化原因。</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">杜邦分析公式</h4>
                          <div className="bg-gray-100 p-3 rounded-md">
                            <p className="text-gray-600 font-mono">ROE = 净利润率 × 总资产周转率 × 权益乘数</p>
                          </div>
                          <p className="text-gray-600 mt-2">其中：</p>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                            <li>净利润率 = 净利润 / 销售收入</li>
                            <li>总资产周转率 = 销售收入 / 平均总资产</li>
                            <li>权益乘数 = 平均总资产 / 平均净资产</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">分析结果</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                              <thead>
                                <tr>
                                  <th className="py-2 px-4 border-b text-left">指标</th>
                                  <th className="py-2 px-4 border-b text-right">2022年</th>
                                  <th className="py-2 px-4 border-b text-right">2023年</th>
                                  <th className="py-2 px-4 border-b text-right">变化</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="py-2 px-4 border-b">净资产收益率（ROE）</td>
                                  <td className="py-2 px-4 border-b text-right">12.00%</td>
                                  <td className="py-2 px-4 border-b text-right">10.80%</td>
                                  <td className="py-2 px-4 border-b text-right text-red-500">-1.20%</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">净利润率</td>
                                  <td className="py-2 px-4 border-b text-right">5.00%</td>
                                  <td className="py-2 px-4 border-b text-right">5.20%</td>
                                  <td className="py-2 px-4 border-b text-right text-green-500">+0.20%</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">总资产周转率</td>
                                  <td className="py-2 px-4 border-b text-right">1.50</td>
                                  <td className="py-2 px-4 border-b text-right">1.45</td>
                                  <td className="py-2 px-4 border-b text-right text-red-500">-0.05</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">权益乘数</td>
                                  <td className="py-2 px-4 border-b text-right">1.60</td>
                                  <td className="py-2 px-4 border-b text-right">1.45</td>
                                  <td className="py-2 px-4 border-b text-right text-red-500">-0.15</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">分析结论与建议</h4>
                          <p className="text-gray-700 mb-2">ROE下降的主要原因是权益乘数和总资产周转率的下降，尽管净利润率有所提高。</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>净利润率提高：企业成本控制能力增强，盈利能力有所提升</li>
                            <li>总资产周转率下降：资产利用效率降低，可能存在资产闲置</li>
                            <li>权益乘数下降：企业降低了财务杠杆，偿债能力增强但牺牲了部分收益</li>
                          </ul>
                          <p className="text-gray-700 mt-2">建议：</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                            <li>优化资产结构，提高资产利用效率</li>
                            <li>保持合理的财务杠杆水平，平衡风险和收益</li>
                            <li>继续加强成本控制，进一步提高净利润率</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  >
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
                  <button 
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                    onClick={() => openModal('投资决策分析详细案例', (
                      <div className="space-y-4">
                        <p className="text-gray-700">本案例展示了如何使用投资决策分析方法评估项目可行性，包括现金流量分析、风险评估和决策制定。</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例：新产品投资决策</h4>
                          <p className="text-gray-600">某制造企业计划投资开发新产品生产线，需要评估项目的可行性。</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">项目数据</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>初始投资：1,000万元</li>
                            <li>预计使用寿命：5年</li>
                            <li>预计残值：100万元</li>
                            <li>年销售收入：800万元</li>
                            <li>年经营成本：400万元</li>
                            <li>所得税税率：25%</li>
                            <li>折现率：10%</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">现金流量分析</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                              <thead>
                                <tr>
                                  <th className="py-2 px-4 border-b text-left">年份</th>
                                  <th className="py-2 px-4 border-b text-right">初始投资</th>
                                  <th className="py-2 px-4 border-b text-right">销售收入</th>
                                  <th className="py-2 px-4 border-b text-right">经营成本</th>
                                  <th className="py-2 px-4 border-b text-right">折旧</th>
                                  <th className="py-2 px-4 border-b text-right">税前利润</th>
                                  <th className="py-2 px-4 border-b text-right">所得税</th>
                                  <th className="py-2 px-4 border-b text-right">税后利润</th>
                                  <th className="py-2 px-4 border-b text-right">现金流量</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="py-2 px-4 border-b">0</td>
                                  <td className="py-2 px-4 border-b text-right text-red-500">-1,000</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right text-red-500">-1,000</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">1-4</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">800</td>
                                  <td className="py-2 px-4 border-b text-right">400</td>
                                  <td className="py-2 px-4 border-b text-right">180</td>
                                  <td className="py-2 px-4 border-b text-right">220</td>
                                  <td className="py-2 px-4 border-b text-right">55</td>
                                  <td className="py-2 px-4 border-b text-right">165</td>
                                  <td className="py-2 px-4 border-b text-right text-green-500">345</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">5</td>
                                  <td className="py-2 px-4 border-b text-right">0</td>
                                  <td className="py-2 px-4 border-b text-right">800</td>
                                  <td className="py-2 px-4 border-b text-right">400</td>
                                  <td className="py-2 px-4 border-b text-right">180</td>
                                  <td className="py-2 px-4 border-b text-right">220</td>
                                  <td className="py-2 px-4 border-b text-right">55</td>
                                  <td className="py-2 px-4 border-b text-right">165</td>
                                  <td className="py-2 px-4 border-b text-right text-green-500">445</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">投资决策指标</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>净现值（NPV）：328.6万元</li>
                            <li>内部收益率（IRR）：18.5%</li>
                            <li>获利指数（PI）：1.33</li>
                            <li>静态回收期：2.9年</li>
                            <li>动态回收期：3.5年</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">决策结论</h4>
                          <p className="text-gray-700 mb-2">基于以上分析，该项目具有可行性：</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>净现值（NPV）为正，说明项目能够为企业创造价值</li>
                            <li>内部收益率（IRR）18.5%高于折现率10%，项目具有投资价值</li>
                            <li>获利指数（PI）大于1，说明项目的投资回报率高于资本成本</li>
                            <li>回收期合理，风险可控</li>
                          </ul>
                          <p className="text-gray-700 mt-2">建议：批准该投资项目，但需注意市场风险和技术风险，制定相应的风险管理策略。</p>
                        </div>
                      </div>
                    ))}
                  >
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
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={() => openModal('财务规划案例', (
                      <div className="space-y-4">
                        <p className="text-gray-700">本案例展示了如何制定企业的财务规划，包括销售预测、财务报表预测和资金需求预测。</p>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">案例背景</h4>
                          <p className="text-gray-600">某科技企业计划在未来三年扩大业务规模，需要制定详细的财务规划。</p>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">销售预测</h4>
                          <p className="text-gray-600 mb-2">基于历史数据和市场分析，预测未来三年的销售收入：</p>
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                              <thead>
                                <tr>
                                  <th className="py-2 px-4 border-b text-left">年份</th>
                                  <th className="py-2 px-4 border-b text-right">2023年（实际）</th>
                                  <th className="py-2 px-4 border-b text-right">2024年（预测）</th>
                                  <th className="py-2 px-4 border-b text-right">2025年（预测）</th>
                                  <th className="py-2 px-4 border-b text-right">2026年（预测）</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="py-2 px-4 border-b">销售收入（万元）</td>
                                  <td className="py-2 px-4 border-b text-right">1,000</td>
                                  <td className="py-2 px-4 border-b text-right">1,500</td>
                                  <td className="py-2 px-4 border-b text-right">2,250</td>
                                  <td className="py-2 px-4 border-b text-right">3,375</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">增长率</td>
                                  <td className="py-2 px-4 border-b text-right">-</td>
                                  <td className="py-2 px-4 border-b text-right">50%</td>
                                  <td className="py-2 px-4 border-b text-right">50%</td>
                                  <td className="py-2 px-4 border-b text-right">50%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">财务报表预测</h4>
                          <p className="text-gray-600 mb-2">基于销售预测和其他因素，预测未来三年的财务报表：</p>
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white">
                              <thead>
                                <tr>
                                  <th className="py-2 px-4 border-b text-left">指标</th>
                                  <th className="py-2 px-4 border-b text-right">2023年（实际）</th>
                                  <th className="py-2 px-4 border-b text-right">2024年（预测）</th>
                                  <th className="py-2 px-4 border-b text-right">2025年（预测）</th>
                                  <th className="py-2 px-4 border-b text-right">2026年（预测）</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="py-2 px-4 border-b">净利润（万元）</td>
                                  <td className="py-2 px-4 border-b text-right">100</td>
                                  <td className="py-2 px-4 border-b text-right">150</td>
                                  <td className="py-2 px-4 border-b text-right">225</td>
                                  <td className="py-2 px-4 border-b text-right">337.5</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">总资产（万元）</td>
                                  <td className="py-2 px-4 border-b text-right">800</td>
                                  <td className="py-2 px-4 border-b text-right">1,200</td>
                                  <td className="py-2 px-4 border-b text-right">1,800</td>
                                  <td className="py-2 px-4 border-b text-right">2,700</td>
                                </tr>
                                <tr>
                                  <td className="py-2 px-4 border-b">净资产（万元）</td>
                                  <td className="py-2 px-4 border-b text-right">400</td>
                                  <td className="py-2 px-4 border-b text-right">550</td>
                                  <td className="py-2 px-4 border-b text-right">775</td>
                                  <td className="py-2 px-4 border-b text-right">1,112.5</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2">资金需求预测</h4>
                          <p className="text-gray-600 mb-2">基于销售增长和资产需求，预测未来三年的资金需求：</p>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>2024年资金需求：250万元</li>
                            <li>2025年资金需求：375万元</li>
                            <li>2026年资金需求：562.5万元</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-md">
                          <h4 className="font-semibold text-gray-800 mb-2">融资方案设计</h4>
                          <p className="text-gray-700 mb-2">建议的融资方案：</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>内部融资：利用企业留存收益</li>
                            <li>债务融资：银行贷款</li>
                            <li>股权融资：引入战略投资者</li>
                          </ul>
                          <p className="text-gray-700 mt-2">融资比例建议：</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-1">
                            <li>内部融资：30%</li>
                            <li>债务融资：40%</li>
                            <li>股权融资：30%</li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  >
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
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={() => openModal('财务分析概念测验', (
                  <div className="space-y-4">
                    <p className="text-gray-700">测试你对财务分析核心概念的理解，请选择正确的答案：</p>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">1. 以下哪项不是财务比率分析的主要类别？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q1a" name="q1" className="mr-2" />
                          <label htmlFor="q1a">盈利能力比率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1b" name="q1" className="mr-2" />
                          <label htmlFor="q1b">偿债能力比率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1c" name="q1" className="mr-2" />
                          <label htmlFor="q1c">营运能力比率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q1d" name="q1" className="mr-2" />
                          <label htmlFor="q1d">市场价值比率</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">2. 以下哪个财务比率用于评估企业的短期偿债能力？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q2a" name="q2" className="mr-2" />
                          <label htmlFor="q2a">资产负债率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2b" name="q2" className="mr-2" />
                          <label htmlFor="q2b">流动比率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2c" name="q2" className="mr-2" />
                          <label htmlFor="q2c">净资产收益率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q2d" name="q2" className="mr-2" />
                          <label htmlFor="q2d">存货周转率</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">3. 杜邦分析法的核心指标是：</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q3a" name="q3" className="mr-2" />
                          <label htmlFor="q3a">净利润率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3b" name="q3" className="mr-2" />
                          <label htmlFor="q3b">总资产周转率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3c" name="q3" className="mr-2" />
                          <label htmlFor="q3c">净资产收益率</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q3d" name="q3" className="mr-2" />
                          <label htmlFor="q3d">权益乘数</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">4. 以下哪项不是投资决策分析的方法？</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q4a" name="q4" className="mr-2" />
                          <label htmlFor="q4a">净现值法</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4b" name="q4" className="mr-2" />
                          <label htmlFor="q4b">内部收益率法</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4c" name="q4" className="mr-2" />
                          <label htmlFor="q4c">获利指数法</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q4d" name="q4" className="mr-2" />
                          <label htmlFor="q4d">杜邦分析法</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">5. 财务预测的首要步骤是：</h4>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center">
                          <input type="radio" id="q5a" name="q5" className="mr-2" />
                          <label htmlFor="q5a">销售预测</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5b" name="q5" className="mr-2" />
                          <label htmlFor="q5b">成本预测</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5c" name="q5" className="mr-2" />
                          <label htmlFor="q5c">利润预测</label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="q5d" name="q5" className="mr-2" />
                          <label htmlFor="q5d">资金需求预测</label>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">财务比率计算练习</h3>
              <p className="text-gray-600 mb-4">
                使用真实企业数据计算各种财务比率
              </p>
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors cursor-pointer"
                onClick={() => openModal('财务比率计算练习', (
                  <div className="space-y-4">
                    <p className="text-gray-700">在这个练习中，你将使用真实企业数据计算各种财务比率，评估企业的财务状况。</p>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">企业数据</h4>
                      <p className="text-gray-600 mb-2">某企业2023年的财务数据如下：</p>
                      <div className="bg-gray-100 p-3 rounded-md">
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          <li>销售收入：1,000万元</li>
                          <li>销售成本：600万元</li>
                          <li>营业费用：100万元</li>
                          <li>管理费用：80万元</li>
                          <li>财务费用：20万元</li>
                          <li>所得税：50万元</li>
                          <li>流动资产：400万元</li>
                          <li>非流动资产：600万元</li>
                          <li>流动负债：200万元</li>
                          <li>非流动负债：300万元</li>
                          <li>所有者权益：500万元</li>
                          <li>存货：150万元</li>
                          <li>应收账款：100万元</li>
                          <li>现金及现金等价物：50万元</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">计算练习</h4>
                      <p className="text-gray-600 mb-2">请计算以下财务比率：</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">1. 盈利能力比率</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>毛利率 = (销售收入 - 销售成本) / 销售收入</li>
                            <li>营业利润率 = 营业利润 / 销售收入</li>
                            <li>净利润率 = 净利润 / 销售收入</li>
                            <li>净资产收益率 = 净利润 / 所有者权益</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">2. 偿债能力比率</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>流动比率 = 流动资产 / 流动负债</li>
                            <li>速动比率 = (流动资产 - 存货) / 流动负债</li>
                            <li>现金比率 = (现金及现金等价物) / 流动负债</li>
                            <li>资产负债率 = (流动负债 + 非流动负债) / (流动资产 + 非流动资产)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-gray-800 mb-1">3. 营运能力比率</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>存货周转率 = 销售成本 / 存货</li>
                            <li>应收账款周转率 = 销售收入 / 应收账款</li>
                            <li>总资产周转率 = 销售收入 / (流动资产 + 非流动资产)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">计算步骤提示</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>首先计算营业利润：销售收入 - 销售成本 - 营业费用 - 管理费用 - 财务费用</li>
                        <li>计算净利润：营业利润 - 所得税</li>
                        <li>然后根据公式计算各个财务比率</li>
                        <li>分析计算结果，评估企业的财务状况</li>
                      </ol>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">预期结果</h4>
                      <p className="text-gray-700">计算完成后，你应该能够：</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>评估企业的盈利能力</li>
                        <li>评估企业的偿债能力</li>
                        <li>评估企业的营运能力</li>
                        <li>综合分析企业的财务状况</li>
                      </ul>
                    </div>
                  </div>
                ))}
              >
                开始练习
              </button>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">投资决策分析案例</h3>
              <p className="text-gray-600 mb-4">
                分析真实投资项目，做出投资决策
              </p>
              <button 
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
                onClick={() => openModal('投资决策分析案例', (
                  <div className="space-y-4">
                    <p className="text-gray-700">在这个案例分析中，你将分析真实投资项目，做出投资决策，评估项目的可行性和盈利能力。</p>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">案例：设备更新决策</h4>
                      <p className="text-gray-600">某制造企业现有一台旧设备，需要评估是否更新为新设备。</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">项目数据</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-3 rounded-md">
                          <h5 className="font-medium text-gray-800 mb-1">旧设备</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>原值：50万元</li>
                            <li>已使用年限：3年</li>
                            <li>剩余使用年限：2年</li>
                            <li>当前残值：20万元</li>
                            <li>预计最终残值：5万元</li>
                            <li>年运营成本：15万元</li>
                          </ul>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-md">
                          <h5 className="font-medium text-gray-800 mb-1">新设备</h5>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>购置成本：80万元</li>
                            <li>预计使用年限：5年</li>
                            <li>预计残值：10万元</li>
                            <li>年运营成本：8万元</li>
                            <li>年销售收入增加：10万元</li>
                          </ul>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-3">其他信息：</p>
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-1">
                        <li>所得税税率：25%</li>
                        <li>折现率：10%</li>
                        <li>折旧方法：直线法</li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">分析要求</h4>
                      <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>计算旧设备的年折旧额</li>
                        <li>计算新设备的年折旧额</li>
                        <li>计算设备更新的初始投资</li>
                        <li>计算设备更新后每年的增量现金流量</li>
                        <li>计算净现值（NPV）</li>
                        <li>计算内部收益率（IRR）</li>
                        <li>做出投资决策</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">分析步骤提示</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>计算旧设备的年折旧额：(原值 - 最终残值) / 使用年限</li>
                        <li>计算新设备的年折旧额：(购置成本 - 残值) / 使用年限</li>
                        <li>计算初始投资：新设备购置成本 - 旧设备当前残值</li>
                        <li>计算每年增量现金流量：(增量收入 - 增量成本) × (1 - 所得税税率) + 增量折旧 × 所得税税率</li>
                        <li>使用折现率计算净现值（NPV）</li>
                        <li>计算内部收益率（IRR）</li>
                        <li>根据NPV和IRR做出投资决策</li>
                      </ol>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-800 mb-2">决策依据</h4>
                      <p className="text-gray-700 mb-2">投资决策的主要依据：</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>净现值（NPV）：如果NPV &gt; 0，项目可行</li>
                        <li>内部收益率（IRR）：如果IRR &gt; 折现率，项目可行</li>
                        <li>投资回收期：如果回收期合理，项目可行</li>
                      </ul>
                      <p className="text-gray-700 mt-2">请根据计算结果，评估设备更新的可行性，并提出建议。</p>
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

export default FinancialDataAnalysisDeepLearning;