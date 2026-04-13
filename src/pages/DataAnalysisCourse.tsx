import React from 'react'

export default function DataAnalysisCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  G
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">gyq的学习页面</span>
              </a>
            </div>
            <div className="flex items-center">
              <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                首页
              </a>
              <a href="/#courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                课程列表
              </a>
              <a href="/#about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                关于我
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 课程头部 */}
      <header className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">数据分析技术</h1>
              <p className="text-xl opacity-90">高职大二第二学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                📊
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 课程内容 */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 课程介绍 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              课程介绍
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                《数据分析技术》是商务数据分析与应用专业的核心课程，旨在培养学生运用数据分析工具和方法解决实际商业问题的能力。
                本课程在学生已掌握Python基础、数据采集与处理、商务数据分析与应用基础等课程的基础上，进一步深化数据分析技能，
                重点培养学生的数据可视化、统计分析、机器学习基础等能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                通过本课程的学习，学生将能够运用所学知识分析实际商业数据，为企业决策提供数据支持，
                具备初步的数据分析师岗位所需的技能和素养。
              </p>
            </div>
          </section>

          {/* 学习目标 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              学习目标
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">知识目标</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    掌握数据分析的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解数据可视化的原理和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解统计分析的基本原理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉机器学习的基本概念和算法
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">能力目标</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python进行数据清洗和预处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用可视化工具创建数据图表
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够进行基本的统计分析和假设检验
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够运用机器学习算法解决简单的预测问题
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 课程大纲 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              课程大纲
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="space-y-8">
                {/* 第1章 */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第1章 数据分析概述</h3>
                  <p className="text-gray-600 mb-4">了解数据分析的基本概念、流程和应用场景，掌握数据分析的基本方法和工具。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.1</span>
                      数据分析的概念和意义
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.2</span>
                      数据分析的流程和方法
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.3</span>
                      数据分析工具介绍
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.4</span>
                      数据分析的应用场景
                    </li>
                  </ul>
                </div>

                {/* 第2章 */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第2章 数据可视化技术</h3>
                  <p className="text-gray-600 mb-4">学习数据可视化的基本原理和方法，掌握使用Python库进行数据可视化的技能。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.1</span>
                      数据可视化的基本原理
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.2</span>
                      Matplotlib库的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.3</span>
                      Seaborn库的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.4</span>
                      交互式数据可视化
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.5</span>
                      数据可视化最佳实践
                    </li>
                  </ul>
                </div>

                {/* 第3章 */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第3章 统计分析基础</h3>
                  <p className="text-gray-600 mb-4">学习统计分析的基本概念和方法，掌握描述性统计和推断性统计的应用。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.1</span>
                      描述性统计分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.2</span>
                      概率分布
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.3</span>
                      假设检验
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.4</span>
                      相关分析和回归分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.5</span>
                      方差分析
                    </li>
                  </ul>
                </div>

                {/* 第4章 */}
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第4章 机器学习基础</h3>
                  <p className="text-gray-600 mb-4">了解机器学习的基本概念和算法，掌握使用Python进行机器学习的基本技能。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.1</span>
                      机器学习概述
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.2</span>
                      监督学习算法
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.3</span>
                      无监督学习算法
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.4</span>
                      模型评估与选择
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.5</span>
                      机器学习实战
                    </li>
                  </ul>
                </div>

                {/* 第5章 */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第5章 商业数据分析案例</h3>
                  <p className="text-gray-600 mb-4">通过实际商业案例，学习如何运用数据分析技术解决实际商业问题。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.1</span>
                      销售数据分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.2</span>
                      客户行为分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.3</span>
                      市场趋势分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.4</span>
                      供应链数据分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.5</span>
                      财务数据分析
                    </li>
                  </ul>
                </div>

                {/* 第6章 */}
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第6章 数据分析报告撰写</h3>
                  <p className="text-gray-600 mb-4">学习如何撰写专业的数据分析报告，有效传达分析结果和 insights。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.1</span>
                      数据分析报告的结构
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.2</span>
                      报告撰写技巧
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.3</span>
                      数据可视化在报告中的应用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.4</span>
                      报告展示技巧
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.5</span>
                      案例分析与实践
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 课程资源 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              课程资源
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4">
                  📚
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">教材与参考资料</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>《Python数据分析》</li>
                  <li>《数据可视化实战》</li>
                  <li>《统计学习方法》</li>
                  <li>《机器学习实战》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>Jupyter Notebook</li>
                  <li>NumPy, Pandas</li>
                  <li>Matplotlib, Seaborn</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>案例分析与小组讨论</li>
                  <li>项目实践与汇报</li>
                  <li>在线资源学习</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 考核方式 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              考核方式
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">平时成绩 (40%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>课堂参与</span>
                      <span>10%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>作业完成情况</span>
                      <span>15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>实验报告</span>
                      <span>15%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">期末成绩 (60%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>数据分析项目</span>
                      <span>40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>期末考试</span>
                      <span>20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 深入学习 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              深入学习
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-semibold mb-4">想要学习更多高级数据分析技术？</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                探索数据分析的高级技术和实践应用，掌握专业的数据分析师技能，提升你的就业竞争力。
              </p>
              <a 
                href="/deep-learning/data-analysis" 
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                开始深入学习
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="mb-4">© 2026 gyq的个人学习页面. 保留所有权利.</p>
            <div className="flex justify-center space-x-4">
              <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                返回首页
              </a>
              <a href="/#courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                课程列表
              </a>
              <a href="/#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                关于我
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}