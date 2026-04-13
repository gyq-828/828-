import React from 'react';
import { Link } from 'react-router-dom';

const EnterpriseFinancialDataAnalysisCourse: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">企业财务数据分析</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            本课程旨在培养学生运用数据分析技术解决企业财务问题的能力，掌握财务数据分析的基本方法和工具。
          </p>
        </div>

        {/* Course Introduction */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">课程介绍</h2>
          <p className="text-gray-600 leading-relaxed">
            企业财务数据分析是商务数据分析与应用专业的核心课程，主要介绍企业财务数据的分析方法、工具和应用案例。
            课程内容包括财务报表分析、财务比率分析、成本分析、预算分析、投资决策分析等方面。
            通过本课程的学习，学生将能够运用数据分析技术解决企业财务中的实际问题，为企业的财务决策提供数据支持。
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
              <span className="text-gray-700">掌握企业财务数据的基本概念和原理</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">学会使用数据分析工具处理财务数据</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够进行财务报表分析和财务比率分析</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">掌握成本分析和预算分析的方法</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够进行投资决策分析</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">具备运用数据分析解决企业财务实际问题的能力</span>
            </li>
          </ul>
        </section>

        {/* Course Outline */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程大纲</h2>
          
          <div className="space-y-8">
            {/* Chapter 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第1章 企业财务数据分析概述</h3>
              <ul className="space-y-2 text-gray-600">
                <li>1.1 财务数据分析的概念和重要性</li>
                <li>1.2 财务数据的类型和来源</li>
                <li>1.3 财务数据分析的基本步骤</li>
                <li>1.4 财务数据分析的工具和方法</li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第2章 财务报表分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>2.1 资产负债表分析</li>
                <li>2.2 利润表分析</li>
                <li>2.3 现金流量表分析</li>
                <li>2.4 财务报表之间的关系</li>
                <li>2.5 财务报表分析的局限性</li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第3章 财务比率分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>3.1 盈利能力比率</li>
                <li>3.2 营运能力比率</li>
                <li>3.3 偿债能力比率</li>
                <li>3.4 发展能力比率</li>
                <li>3.5 财务比率的综合分析</li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第4章 成本分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>4.1 成本的基本概念和分类</li>
                <li>4.2 变动成本和固定成本分析</li>
                <li>4.3 边际成本分析</li>
                <li>4.4 成本- volume-利润分析</li>
                <li>4.5 成本控制和成本优化</li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第5章 预算分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>5.1 预算的基本概念和类型</li>
                <li>5.2 全面预算的编制</li>
                <li>5.3 预算执行和控制</li>
                <li>5.4 预算差异分析</li>
                <li>5.5 预算的调整和优化</li>
              </ul>
            </div>

            {/* Chapter 6 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第6章 投资决策分析</h3>
              <ul className="space-y-2 text-gray-600">
                <li>6.1 投资决策的基本概念</li>
                <li>6.2 现金流量分析</li>
                <li>6.3 净现值法</li>
                <li>6.4 内部收益率法</li>
                <li>6.5 投资决策的风险分析</li>
              </ul>
            </div>

            {/* Chapter 7 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第7章 财务预测与规划</h3>
              <ul className="space-y-2 text-gray-600">
                <li>7.1 财务预测的基本方法</li>
                <li>7.2 销售预测</li>
                <li>7.3 成本预测</li>
                <li>7.4 资金需求预测</li>
                <li>7.5 财务规划的编制</li>
              </ul>
            </div>

            {/* Chapter 8 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第8章 企业财务数据分析案例</h3>
              <ul className="space-y-2 text-gray-600">
                <li>8.1 制造业企业财务分析案例</li>
                <li>8.2 零售企业财务分析案例</li>
                <li>8.3 科技企业财务分析案例</li>
                <li>8.4 财务数据分析综合实践</li>
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
                <li>• 《财务分析》，张先治，东北财经大学出版社</li>
                <li>• 《企业财务数据分析》，王化成，中国人民大学出版社</li>
                <li>• 《财务管理》，刘力，北京大学出版社</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">在线资源</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <a href="#" className="text-blue-600 hover:underline">财政部会计准则委员会</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">中国注册会计师协会</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">财务数据分析工具教程</a></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">软件工具</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Excel（财务函数、数据透视表）</li>
                <li>• Python（Pandas, NumPy, Matplotlib）</li>
                <li>• Tableau（财务数据可视化）</li>
                <li>• SAP Financials</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">实践项目</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 企业财务报表分析</li>
                <li>• 成本控制方案设计</li>
                <li>• 投资项目可行性分析</li>
                <li>• 企业财务预测</li>
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
              <span className="text-gray-700">财务分析报告</span>
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

        {/* 深入学习 */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">深入学习</h2>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">想要学习更多高级财务分析技术？</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              探索企业财务数据分析的高级技术，掌握财务决策分析技能，提升你的财务分析能力。
            </p>
            <a 
              href="/deep-learning/financial" 
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              开始深入学习
            </a>
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

export default EnterpriseFinancialDataAnalysisCourse;