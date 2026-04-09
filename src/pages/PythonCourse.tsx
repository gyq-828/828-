import React from 'react'

export default function PythonCourse() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Python基础</h1>
              <p className="text-xl opacity-90">高职大二第一学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🐍
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
                《Python基础》是商务数据分析与应用专业的入门课程，旨在培养学生掌握Python编程语言的基础知识和基本技能。
                本课程是后续数据分析、数据采集与处理等课程的基础，通过本课程的学习，学生将具备使用Python进行简单编程的能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                Python是一种简单易学、功能强大的编程语言，广泛应用于数据分析、人工智能、Web开发等领域。
                本课程将从Python的基本语法开始，逐步引导学生掌握Python的核心概念和编程技巧。
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
                    掌握Python的基本语法和数据类型
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解Python的控制结构和函数
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解Python的模块和包的概念
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉Python的常用标准库
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
                    能够编写简单的Python程序
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python进行基本的数据处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python的常用库
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够调试和解决Python程序中的基本问题
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第1章 Python概述</h3>
                  <p className="text-gray-600 mb-4">了解Python的基本概念、特点和应用领域，掌握Python的安装和环境配置。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.1</span>
                      Python的简介和特点
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.2</span>
                      Python的应用领域
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.3</span>
                      Python的安装和环境配置
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.4</span>
                      Python的开发工具介绍
                    </li>
                  </ul>
                </div>

                {/* 第2章 */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第2章 Python基础语法</h3>
                  <p className="text-gray-600 mb-4">学习Python的基本语法，包括变量、数据类型、运算符和表达式。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.1</span>
                      变量和数据类型
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.2</span>
                      运算符和表达式
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.3</span>
                      输入和输出
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.4</span>
                      注释和代码风格
                    </li>
                  </ul>
                </div>

                {/* 第3章 */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第3章 控制结构</h3>
                  <p className="text-gray-600 mb-4">学习Python的控制结构，包括条件语句和循环语句。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.1</span>
                      条件语句（if-elif-else）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.2</span>
                      循环语句（for循环）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.3</span>
                      循环语句（while循环）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.4</span>
                      循环控制语句（break、continue）
                    </li>
                  </ul>
                </div>

                {/* 第4章 */}
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第4章 函数</h3>
                  <p className="text-gray-600 mb-4">学习Python的函数定义和使用，包括参数传递和返回值。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.1</span>
                      函数的定义和调用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.2</span>
                      参数传递
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.3</span>
                      返回值
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.4</span>
                      局部变量和全局变量
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.5</span>
                      递归函数
                    </li>
                  </ul>
                </div>

                {/* 第5章 */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第5章 数据结构</h3>
                  <p className="text-gray-600 mb-4">学习Python的常用数据结构，包括列表、元组、字典和集合。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.1</span>
                      列表（List）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.2</span>
                      元组（Tuple）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.3</span>
                      字典（Dictionary）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.4</span>
                      集合（Set）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.5</span>
                      数据结构的常用操作
                    </li>
                  </ul>
                </div>

                {/* 第6章 */}
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第6章 文件操作</h3>
                  <p className="text-gray-600 mb-4">学习Python的文件操作，包括文件的打开、读写和关闭。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.1</span>
                      文件的打开和关闭
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.2</span>
                      文件的读取
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.3</span>
                      文件的写入
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.4</span>
                      文件的定位
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.5</span>
                      上下文管理器（with语句）
                    </li>
                  </ul>
                </div>

                {/* 第7章 */}
                <div className="border-l-4 border-teal-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第7章 异常处理</h3>
                  <p className="text-gray-600 mb-4">学习Python的异常处理机制，包括异常的捕获和处理。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.1</span>
                      异常的概念
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.2</span>
                      try-except语句
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.3</span>
                      else和finally子句
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.4</span>
                      自定义异常
                    </li>
                  </ul>
                </div>

                {/* 第8章 */}
                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第8章 模块和包</h3>
                  <p className="text-gray-600 mb-4">学习Python的模块和包的概念，掌握模块的导入和使用。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.1</span>
                      模块的概念
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.2</span>
                      模块的导入
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.3</span>
                      包的概念
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.4</span>
                      常用标准库介绍
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
                  <li>《Python编程：从入门到实践》</li>
                  <li>《Python基础教程》</li>
                  <li>《Python官方文档》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>PyCharm</li>
                  <li>Jupyter Notebook</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>多做练习和项目</li>
                  <li>在线资源学习</li>
                  <li>参与编程社区</li>
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
                      <span>编程项目</span>
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