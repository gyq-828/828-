import React from 'react'

export default function DataCollectionCourse() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">数据采集与处理</h1>
              <p className="text-xl opacity-90">高职大二第一学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🔍
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
                《数据采集与处理》是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据采集、清洗、转换和预处理的技能。
                本课程在学生已掌握Python基础的基础上，进一步学习如何从各种来源获取数据，并进行有效的处理和管理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                数据采集与处理是数据分析的基础环节，直接影响后续分析结果的质量。
                通过本课程的学习，学生将能够熟练使用各种工具和技术获取数据，并进行清洗和预处理，为后续的数据分析做好准备。
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
                    掌握数据采集的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解数据清洗和预处理的重要性
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解各种数据格式和存储方式
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉数据质量评估的方法
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
                    能够使用Python进行网络数据采集
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够处理各种格式的数据文件
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够进行数据清洗和预处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够评估和提高数据质量
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第1章 数据采集概述</h3>
                  <p className="text-gray-600 mb-4">了解数据采集的基本概念、重要性和应用场景，掌握数据采集的基本流程和方法。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.1</span>
                      数据采集的概念和重要性
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.2</span>
                      数据采集的应用场景
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.3</span>
                      数据采集的基本流程
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.4</span>
                      数据采集的方法和工具
                    </li>
                  </ul>
                </div>

                {/* 第2章 */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第2章 网络数据采集</h3>
                  <p className="text-gray-600 mb-4">学习使用Python进行网络数据采集，包括HTTP请求、HTML解析和爬虫开发。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.1</span>
                      HTTP协议基础
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.2</span>
                      使用requests库发送HTTP请求
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.3</span>
                      使用BeautifulSoup解析HTML
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.4</span>
                      使用Scrapy框架开发爬虫
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.5</span>
                      爬虫的 ethical 考虑和法律问题
                    </li>
                  </ul>
                </div>

                {/* 第3章 */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第3章 API数据采集</h3>
                  <p className="text-gray-600 mb-4">学习如何通过API获取数据，包括RESTful API和GraphQL API的使用。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.1</span>
                      API的基本概念
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.2</span>
                      RESTful API的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.3</span>
                      GraphQL API的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.4</span>
                      API认证和授权
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.5</span>
                      API数据的处理和存储
                    </li>
                  </ul>
                </div>

                {/* 第4章 */}
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第4章 数据格式与存储</h3>
                  <p className="text-gray-600 mb-4">学习各种数据格式的特点和处理方法，以及数据存储的基本原理。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.1</span>
                      常见数据格式（CSV、JSON、XML等）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.2</span>
                      数据格式的转换
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.3</span>
                      文件系统存储
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.4</span>
                      数据库存储
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.5</span>
                      云存储服务
                    </li>
                  </ul>
                </div>

                {/* 第5章 */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第5章 数据清洗</h3>
                  <p className="text-gray-600 mb-4">学习数据清洗的基本方法和技术，包括处理缺失值、异常值和重复值。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.1</span>
                      数据质量评估
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.2</span>
                      处理缺失值
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.3</span>
                      处理异常值
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.4</span>
                      处理重复值
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.5</span>
                      数据标准化和规范化
                    </li>
                  </ul>
                </div>

                {/* 第6章 */}
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第6章 数据预处理</h3>
                  <p className="text-gray-600 mb-4">学习数据预处理的方法和技术，包括特征工程、数据转换和数据集成。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.1</span>
                      特征工程概述
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.2</span>
                      特征选择
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.3</span>
                      特征提取
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.4</span>
                      数据转换和编码
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.5</span>
                      数据集成
                    </li>
                  </ul>
                </div>

                {/* 第7章 */}
                <div className="border-l-4 border-teal-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第7章 大数据处理</h3>
                  <p className="text-gray-600 mb-4">学习处理大规模数据的方法和技术，包括并行处理和分布式计算。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.1</span>
                      大数据的概念和挑战
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.2</span>
                      并行处理技术
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.3</span>
                      分布式计算框架
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.4</span>
                      使用Dask处理大规模数据
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.5</span>
                      大数据处理最佳实践
                    </li>
                  </ul>
                </div>

                {/* 第8章 */}
                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第8章 数据采集与处理实战</h3>
                  <p className="text-gray-600 mb-4">通过实际项目，学习如何完成从数据采集到处理的完整流程。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.1</span>
                      项目规划和需求分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.2</span>
                      数据采集方案设计
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.3</span>
                      数据处理流程实现
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.4</span>
                      数据质量评估和优化
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.5</span>
                      项目展示和总结
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
                  <li>《Python网络爬虫权威指南》</li>
                  <li>《数据清洗实战》</li>
                  <li>《Python数据分析》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>requests库</li>
                  <li>BeautifulSoup库</li>
                  <li>Scrapy框架</li>
                  <li>Pandas库</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>多做项目练习</li>
                  <li>在线资源学习</li>
                  <li>参与数据采集社区</li>
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
                      <span>20%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>实验报告</span>
                      <span>10%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">期末成绩 (60%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>数据采集与处理项目</span>
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