import React from 'react'

interface Course {
  id: string
  name: string
  description: string
  icon: string
  link?: string
}

export default function CourseList() {
  const courses: Course[] = [
    {
      id: 'python',
      name: 'Python基础',
      description: '学习Python编程语言的基础知识，包括语法、数据类型、函数、模块等。',
      icon: '🐍'
    },
    {
      id: 'data-analysis',
      name: '数据分析技术',
      description: '掌握数据分析的基本方法和工具，包括数据可视化、统计分析等。',
      icon: '📊',
      link: '/data-analysis'
    },
    {
      id: 'data-collection',
      name: '数据采集与处理',
      description: '学习如何从各种来源采集数据，并进行清洗、转换和预处理。',
      icon: '🔍'
    },
    {
      id: 'supply-chain',
      name: '供应链数据分析',
      description: '应用数据分析技术解决供应链管理中的问题，优化供应链流程。',
      icon: '📦'
    },
    {
      id: 'database',
      name: '数据库原理与应用',
      description: '了解数据库的基本原理，掌握SQL语言和数据库设计方法。',
      icon: '💾'
    },
    {
      id: 'financial-analysis',
      name: '企业财务数据分析',
      description: '学习如何分析企业财务数据，评估企业财务状况和经营绩效。',
      icon: '💰'
    }
  ]

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
              我的学习课程
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索我在商务数据分析与应用专业的学习内容，掌握现代数据分析技能
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-blue-100 relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-green-500/10 rounded-bl-full -z-10"></div>
              <div className="mb-6 h-16 w-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {course.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{course.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
              <a 
                href={course.link || `#${course.id}`} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 group-hover:translate-x-2"
              >
                查看详情
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}