import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/5 to-transparent"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              关于我
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            了解我的专业背景和技能，探索我的学习 journey
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              个人简介
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              我是广东科学技术职业学院商学院商务数据分析与应用专业的学生gyq。
              我对数据分析和商业智能充满热情，致力于通过数据驱动的方法解决实际商业问题。
              在校期间，我系统学习了数据分析相关课程，掌握了多种数据分析工具和技术。
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              专业技能
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">Python编程</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">数据分析</span>
                  <span className="text-green-600 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">数据可视化</span>
                  <span className="text-purple-600 font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">SQL数据库</span>
                  <span className="text-yellow-600 font-semibold">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-green-500/10 rounded-bl-full"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              教育背景
            </h3>
            <div className="space-y-8">
              <div className="flex items-start relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
                <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2024
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-gray-900">广东科学技术职业学院</h4>
                  <p className="text-gray-600">商务数据分析与应用专业</p>
                  <p className="text-sm text-blue-600 mt-1">专科在读</p>
                </div>
              </div>
              <div className="flex items-start relative">
                <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  2027
                </div>
                <div className="ml-6 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-semibold text-gray-900">预期毕业</h4>
                  <p className="text-gray-600">商务数据分析与应用专业</p>
                  <p className="text-sm text-green-600 mt-1">专科毕业证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}