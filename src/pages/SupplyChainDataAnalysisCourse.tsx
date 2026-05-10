import React from 'react';
import { Link } from 'react-router-dom';

const SupplyChainDataAnalysisCourse: React.FC = () => {
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
              <li><Link to="/supply-chain" className="text-blue-600 font-medium">供应链数据分析</Link></li>
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">供应链数据分析</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            本课程旨在培养学生运用数据分析技术解决供应链管理问题的能力，掌握供应链数据分析的基本方法和工具。
          </p>
        </div>

        {/* Course Introduction */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">课程介绍</h2>
          <p className="text-gray-600 leading-relaxed">
            供应链数据分析是商务数据分析与应用专业的核心课程，主要介绍供应链管理中的数据分析方法、工具和应用案例。
            课程内容包括供应链管理基础、供应链数据采集与处理、供应链绩效分析、需求预测、库存优化、物流网络分析等方面。
            通过本课程的学习，学生将能够运用数据分析技术解决供应链管理中的实际问题，为企业的供应链决策提供数据支持。
          </p>
        </section>

        {/* Learning Objectives */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">学习目标</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">掌握供应链管理的基本概念和原理</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">学会使用数据分析工具处理供应链数据</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够进行供应链绩效分析和评估</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">掌握需求预测和库存优化的方法</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够分析和优化物流网络</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">具备运用数据分析解决供应链实际问题的能力</span>
            </li>
          </ul>
        </section>

        {/* Course Outline */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程大纲</h2>
          
          <div className="space-y-8">
            {/* Chapter 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第1章 供应链管理基础</h3>
              <ul className="space-y-2 text-gray-600">
                <li>1.1 供应链管理的概念和重要性</li>
                <li>1.2 供应链的结构和类型</li>
                <li>1.3 供应链管理的关键流程</li>
                <li>1.4 供应链数据分析的作用</li>
                <li className="bg-blue-50 p-3 rounded-lg mt-3">
                  <strong className="text-blue-700">关键指标：</strong>
                  <ul className="text-sm ml-4 mt-1">
                    <li>• <strong>库存周转率</strong> = 销售成本 / 平均库存，衡量库存流转效率</li>
                    <li>• <strong>订单履约率</strong> = 按时完成订单数 / 总订单数，反映服务水平</li>
                    <li>• <strong>供应商准时交货率</strong> = 准时交货次数 / 总交货次数</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第2章 供应链数据采集与处理</h3>
              <ul className="space-y-2 text-gray-600">
                <li>2.1 供应链数据的类型和来源</li>
                <li>2.2 数据采集方法和工具</li>
                <li>2.3 数据清洗和预处理</li>
                <li>2.4 数据集成和存储</li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第3章 供应链绩效分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>3.1 供应链绩效指标体系</li>
                <li>3.2 财务绩效分析</li>
                <li>3.3 运营绩效分析</li>
                <li>3.4 客户服务绩效分析</li>
                <li>3.5 供应商绩效分析</li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第4章 库存分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>4.1 <strong>ABC分类法</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• A类：价值占80%，数量占20%，重点管理</li>
                    <li>• B类：价值占15%，数量占30%，常规管理</li>
                    <li>• C类：价值占5%，数量占50%，简化管理</li>
                  </ul>
                </li>
                <li>4.2 <strong>安全库存计算</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• 安全库存 = Z值 × 需求标准差 × 提前期标准差</li>
                    <li>• Z值：服务水平对应的正态分布分位数</li>
                    <li>• 95%服务水平对应Z=1.65</li>
                  </ul>
                </li>
                <li>4.3 <strong>库存周转率分析</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• 库存周转率 = 销售成本 / 平均库存</li>
                    <li>• 库存周转天数 = 365 / 库存周转率</li>
                    <li>• 周转率越高，资金使用效率越好</li>
                  </ul>
                </li>
                <li className="bg-green-50 p-3 rounded-lg">
                  <strong className="text-green-700">📝 例题：对商品进行ABC分类</strong>
                  <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    <pre>{`import pandas as pd
import numpy as np

# 模拟商品销售数据
np.random.seed(42)
products = pd.DataFrame({
    'product_id': range(1, 101),
    'product_name': [f'商品{i}' for i in range(1, 101)],
    'unit_price': np.random.uniform(10, 500, 100),  # 单价
    'quantity_sold': np.random.randint(10, 1000, 100)  # 销售数量
})

# 计算销售额
products['sales_amount'] = products['unit_price'] * products['quantity_sold']

# 按销售额降序排列
products = products.sort_values('sales_amount', ascending=False)

# 计算累计销售额和累计占比
products['cumulative_sales'] = products['sales_amount'].cumsum()
products['cumulative_ratio'] = products['cumulative_sales'] / products['sales_amount'].sum() * 100

# ABC分类
def classify_abc(ratio):
    if ratio <= 80:
        return 'A'
    elif ratio <= 95:
        return 'B'
    else:
        return 'C'

products['abc_class'] = products['cumulative_ratio'].apply(classify_abc)

# 统计各类占比
print("=== ABC分类统计 ===")
summary = products.groupby('abc_class').agg({
    'product_id': 'count',
    'sales_amount': 'sum'
}).rename(columns={'product_id': 'count'})
summary['sales_ratio'] = summary['sales_amount'] / summary['sales_amount'].sum() * 100
print(summary)

# 各类别商品列表
print("\\n=== A类商品（前10个）===")
print(products[products['abc_class'] == 'A'][['product_name', 'sales_amount', 'cumulative_ratio']].head(10))`}</pre>
                  </div>
                </li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第5章 需求预测</h3>
              <ul className="space-y-2 text-gray-600">
                <li>5.1 <strong>时间序列基础</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• 趋势成分：长期变化方向</li>
                    <li>• 季节成分：周期性波动</li>
                    <li>• 周期成分：非固定周期波动</li>
                    <li>• 随机成分：不可预测的随机变动</li>
                  </ul>
                </li>
                <li>5.2 <strong>移动平均法</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• 简单移动平均（SMA）：预测值 = 最近n期平均值</li>
                    <li>• 加权移动平均（WMA）：考虑各期权重</li>
                    <li>• 适用于：需求相对稳定的产品</li>
                  </ul>
                </li>
                <li>5.3 <strong>指数平滑法</strong>
                  <ul className="text-sm ml-6 mt-1">
                    <li>• 一次指数平滑：Ft+1 = α × Dt + (1-α) × Ft</li>
                    <li>• 二次指数平滑（Holt）：处理趋势</li>
                    <li>• 三次指数平滑（Holt-Winters）：处理季节性</li>
                    <li>• α（平滑系数）：0-1之间，越大越敏感</li>
                  </ul>
                </li>
                <li className="bg-blue-50 p-3 rounded-lg">
                  <strong className="text-blue-700">📝 例题：预测下月销量</strong>
                  <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                    <pre>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 月度销售数据（过去24个月）
months = pd.date_range(start='2022-01-01', periods=24, freq='M')
sales = np.array([120, 135, 128, 142, 155, 168, 172, 185, 178, 165, 
                  145, 158, 175, 190, 205, 218, 225, 238, 245, 258, 
                  268, 280, 295, 310])

df = pd.DataFrame({'date': months, 'sales': sales})

# 方法1：简单移动平均
def simple_moving_average(data, n):
    return data.rolling(window=n).mean()

df['sma_3'] = simple_moving_average(df['sales'], 3)
df['sma_6'] = simple_moving_average(df['sales'], 6)

# 方法2：指数平滑
def exponential_smoothing(data, alpha):
    result = [data.iloc[0]]
    for i in range(1, len(data)):
        result.append(alpha * data.iloc[i] + (1 - alpha) * result[-1])
    return pd.Series(result, index=data.index)

df['ema'] = exponential_smoothing(df['sales'], alpha=0.3)

# 方法3：加权移动平均
def weighted_moving_average(data, weights):
    return data.rolling(window=len(weights)).apply(
        lambda x: np.sum(weights * x) / np.sum(weights), raw=True)

weights = [0.5, 0.3, 0.2]  # 近3期权重
df['wma'] = weighted_moving_average(df['sales'], weights)

# 预测下月销量（使用各种方法）
print("=== 销量预测（使用前24个月数据）===")
print(f"简单移动平均（3期）: {df['sma_3'].iloc[-1]:.2f}")
print(f"简单移动平均（6期）: {df['sma_6'].iloc[-1]:.2f}")
print(f"指数平滑（α=0.3）: {df['ema'].iloc[-1]:.2f}")
print(f"加权移动平均: {df['wma'].iloc[-1]:.2f}")

# 综合预测（取平均）
forecast = (df['sma_3'].iloc[-1] + df['ema'].iloc[-1] + df['wma'].iloc[-1]) / 3
print(f"\\n综合预测下月销量: {forecast:.2f}")

# 可视化
plt.figure(figsize=(12, 6))
plt.plot(df['date'], df['sales'], 'b-o', label='实际销量', markersize=5)
plt.plot(df['date'], df['sma_3'], 'g--', label='SMA(3)')
plt.plot(df['date'], df['ema'], 'r--', label='EMA(α=0.3)')
plt.axhline(y=forecast, color='purple', linestyle=':', label=f'预测值: {forecast:.0f}')
plt.legend()
plt.title('销量趋势与预测')
plt.xlabel('日期')
plt.ylabel('销量')
plt.grid(True, alpha=0.3)
plt.savefig('sales_forecast.png', dpi=300)
plt.show()`}</pre>
                  </div>
                </li>
              </ul>
            </div>

            {/* Chapter 6 */}
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第6章 物流网络分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>6.1 物流网络的概念和结构</li>
                <li>6.2 物流网络设计的原则</li>
                <li>6.3 物流网络优化方法</li>
                <li>6.4 运输路线规划</li>
                <li>6.5 物流成本分析</li>
              </ul>
            </div>

            {/* Chapter 7 */}
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第7章 供应链风险管理</h3>
              <ul className="space-y-2 text-gray-600">
                <li>7.1 供应链风险的类型和来源</li>
                <li>7.2 风险评估方法</li>
                <li>7.3 风险预警机制</li>
                <li>7.4 风险应对策略</li>
              </ul>
            </div>

            {/* Chapter 8 */}
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第8章 供应链数据分析案例</h3>
              <ul className="space-y-2 text-gray-600">
                <li>8.1 零售行业供应链分析案例</li>
                <li>8.2 制造业供应链分析案例</li>
                <li>8.3 电商行业供应链分析案例</li>
                <li>8.4 供应链数据分析综合实践</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Resources */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">课程资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">参考教材</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 《供应链管理》，苏尼尔·乔普拉，中国人民大学出版社</li>
                <li>• 《供应链数据分析》，唐纳德·沃特斯，机械工业出版社</li>
                <li>• 《物流与供应链管理》，马丁·克里斯托弗，电子工业出版社</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">在线资源</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <a href="#" className="text-blue-600 hover:underline">供应链管理协会（CSCMP）资源</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">MIT供应链管理课程</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">供应链数据分析工具教程</a></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">软件工具</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Python（Pandas, NumPy, Matplotlib）</li>
                <li>• Excel（数据分析工具包）</li>
                <li>• Tableau（数据可视化）</li>
                <li>• SAP ERP（企业资源规划）</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">实践项目</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 企业供应链数据采集与分析</li>
                <li>• 库存优化方案设计</li>
                <li>• 物流网络优化分析</li>
                <li>• 供应链风险评估</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Methods */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">考核方式</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">平时作业</span>
              <span className="text-gray-600">20%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">实践项目</span>
              <span className="text-gray-600">30%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">期中考试</span>
              <span className="text-gray-600">20%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">期末考试</span>
              <span className="text-gray-600">30%</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
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

export default SupplyChainDataAnalysisCourse;