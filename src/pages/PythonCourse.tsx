import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PythonCourse() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  G
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">gyq的学习页面</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                首页
              </Link>
              <Link to="/#courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                课程列表
              </Link>
              <Link to="/#about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                关于我
              </Link>
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
              <div className="space-y-6">
                {/* 第1章 */}
                <div className="border border-blue-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter1')}>
                    <h3 className="text-xl font-semibold text-white">第1章 Python概述</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter1' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter1' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">了解Python的基本概念、特点和应用领域，掌握Python的安装和环境配置。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.1</span>
                            Python的简介和特点
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>简介：</strong>Python是一种高级编程语言，由Guido van Rossum于1991年创造。它以简洁、易读的语法著称，强调代码的可读性。</p>
                            <p><strong>特点：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>简洁易读：语法简洁清晰，强调可读性</li>
                              <li>跨平台：可在Windows、macOS、Linux等多个平台运行</li>
                              <li>丰富的生态系统：拥有大量第三方库和框架</li>
                              <li>动态类型：变量不需要声明类型</li>
                              <li>面向对象：支持面向对象编程</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.2</span>
                            Python的应用领域
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>数据分析：</strong>使用pandas、numpy、matplotlib等库进行数据处理和可视化</li>
                              <li><strong>人工智能：</strong>使用tensorflow、pytorch等框架进行机器学习和深度学习</li>
                              <li><strong>Web开发：</strong>使用django、flask等框架开发Web应用</li>
                              <li><strong>自动化：</strong>自动化测试、数据处理等任务</li>
                              <li><strong>科学计算：</strong>科学研究中的数值计算</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.3</span>
                            Python的安装和环境配置
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>安装步骤：</strong></p>
                            <ol className="list-decimal list-inside space-y-1 pl-2">
                              <li>访问Python官网：https://www.python.org</li>
                              <li>下载适合您操作系统的Python版本</li>
                              <li>运行安装程序，确保勾选"Add Python to PATH"</li>
                              <li>验证安装：在命令行输入python --version</li>
                            </ol>
                            <p><strong>环境配置：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>使用pip安装第三方库：pip install package_name</li>
                              <li>使用虚拟环境：python -m venv venv</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.4</span>
                            Python的开发工具介绍
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>PyCharm：</strong>功能强大的Python IDE，提供代码补全、调试等功能</li>
                              <li><strong>Visual Studio Code：</strong>轻量级编辑器，通过插件支持Python开发</li>
                              <li><strong>Jupyter Notebook：</strong>交互式开发环境，适合数据分析和教学</li>
                              <li><strong>IDLE：</strong>Python自带的简单编辑器</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 第2章 */}
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter2')}>
                    <h3 className="text-xl font-semibold text-white">第2章 Python基础语法</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter2' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter2' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的基本语法，包括变量、数据类型、运算符和表达式。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.1</span>
                            变量和数据类型
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>变量：</strong>变量是存储数据的容器。在Python中，变量不需要声明类型。</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre># 变量赋值
name = "张三"  # 字符串
age = 20       # 整数
height = 1.75 # 浮点数
is_student = True # 布尔值

print(name, age, height, is_student)</pre>
                            </div>
                            <p><strong>基本数据类型：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>整数(int)：</strong>没有小数部分的数字</li>
                              <li><strong>浮点数(float)：</strong>包含小数的数字</li>
                              <li><strong>字符串(str)：</strong>用单引号或双引号括起来的文本</li>
                              <li><strong>布尔值(bool)：</strong>只有True和False两个值</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.2</span>
                            运算符和表达式
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>算术运算符：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>加法：+</li>
                              <li>减法：-</li>
                              <li>乘法：*</li>
                              <li>除法：/</li>
                              <li>整除：//</li>
                              <li>取余：%</li>
                              <li>幂运算：**</li>
                            </ul>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3
print(a % b)  # 1
print(a ** b) # 1000</pre>
                            </div>
                            <p><strong>比较运算符：</strong>==, !=, >, <, >=, <=</p>
                            <p><strong>逻辑运算符：</strong>and, or, not</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.3</span>
                            输入和输出
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>输出：</strong>使用print()函数输出内容</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>print("Hello, World!")
name = "张三"
print(f"你好，{name}！")</pre>
                            </div>
                            <p><strong>输入：</strong>使用input()函数获取用户输入</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>name = input("请输入你的名字：")
print(f"你好，{name}！")</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.4</span>
                            注释和代码风格
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>单行注释：</strong>使用#符号</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre># 这是一个单行注释
print("Hello") # 这也是一个单行注释</pre>
                            </div>
                            <p><strong>多行注释：</strong>使用三引号</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>"""
这是一个多行注释
可以写多行内容
"""
print("Hello")</pre>
                            </div>
                            <p><strong>代码风格：</strong>遵循PEP 8规范，使用4空格缩进，适当的空行和命名规范。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 第3章 */}
                <div className="border border-purple-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter3')}>
                    <h3 className="text-xl font-semibold text-white">第3章 控制结构</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter3' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter3' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的控制结构，包括条件语句和循环语句。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.1</span>
                            条件语句（if-elif-else）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>基本语法：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>age = 18
if age >= 18:
    print("成年人")
elif age >= 13:
    print("青少年")
else:
    print("儿童")</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.2</span>
                            循环语句（for循环）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>遍历列表：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)

# 使用range()函数
for i in range(5):
    print(i)</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.3</span>
                            循环语句（while循环）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>基本语法：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>count = 0
while count < 5:
    print(count)
    count += 1</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.4</span>
                            循环控制语句（break、continue）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>break：</strong>跳出当前循环</p>
                            <p><strong>continue：</strong>跳过本次循环，继续下一次</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>for i in range(10):
    if i == 5:
        break  # 跳出循环
    if i == 3:
        continue  # 跳过i=3
    print(i)</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 后续章节可以继续添加，这里为了简化先添加前3章 */}
                {/* 第4章到第8章的按钮保持原样，但需要添加对应的内容 */}
                <div className="border border-yellow-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter4')}>
                    <h3 className="text-xl font-semibold text-white">第4章 函数</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter4' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter4' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的函数定义和使用，包括参数传递和返回值。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-red-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter5')}>
                    <h3 className="text-xl font-semibold text-white">第5章 数据结构</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter5' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter5' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的常用数据结构，包括列表、元组、字典和集合。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-indigo-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter6')}>
                    <h3 className="text-xl font-semibold text-white">第6章 文件操作</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter6' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter6' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的文件操作，包括文件的打开、读写和关闭。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-teal-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter7')}>
                    <h3 className="text-xl font-semibold text-white">第7章 异常处理</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter7' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter7' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的异常处理机制，包括异常的捕获和处理。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-pink-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter8')}>
                    <h3 className="text-xl font-semibold text-white">第8章 模块和包</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter8' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter8' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的模块和包的概念，掌握模块的导入和使用。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
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
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                返回首页
              </Link>
              <Link to="/#courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                课程列表
              </Link>
              <Link to="/#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                关于我
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}