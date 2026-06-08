import React from 'react'

interface Course {
  id: string
  name: string
  description: string
  icon: string
  link?: string
  quizLink?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  prerequisites?: string[]
  order?: number
}

const difficultyConfig = {
  beginner: { label: '入门级', color: 'bg-green-100 text-green-700', border: 'border-green-300' },
  intermediate: { label: '进阶级', color: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-300' },
  advanced: { label: '高级', color: 'bg-red-100 text-red-700', border: 'border-red-300' }
}

export default function CourseList() {
  const courses: Course[] = [
    {
      id: 'python',
      name: 'Python基础',
      description: '学习Python编程语言的基础知识，包括语法、数据类型、函数、模块等。',
      icon: '🐍',
      link: '/python',
      quizLink: '/python-quiz',
      difficulty: 'beginner',
      prerequisites: [],
      order: 1
    },
    {
      id: 'python-training',
      name: 'Python实训项目',
      description: '10个精选练习项目，专为Python小白设计，包含交互式代码编辑和自动评分系统。',
      icon: '💻',
      link: '/python-training',
      difficulty: 'beginner',
      prerequisites: ['Python基础'],
      order: 2
    },
    {
      id: 'data-analysis',
      name: '数据分析技术',
      description: '掌握数据分析的基本方法和工具，包括数据可视化、统计分析等。',
      icon: '📊',
      link: '/data-analysis',
      quizLink: '/data-analysis-quiz',
      difficulty: 'intermediate',
      prerequisites: ['Python基础'],
      order: 4
    },
    {
      id: 'data-analysis-tech',
      name: '数据分析技术课程实训项目',
      description: '完整的数据分析技术实训平台，包含10个阶梯式项目，支持在线编程和评分。',
      icon: '🎯',
      link: '/data-analysis-tech',
      difficulty: 'intermediate',
      prerequisites: ['Python基础', '数据分析技术'],
      order: 5
    },
    {
      id: 'cluster-visualizer',
      name: '聚类算法可视化',
      description: '交互式演示KMeans、DBSCAN、层次聚类三种算法，观察数据点如何逐步归属于不同簇。',
      icon: '🧮',
      link: '/cluster-visualizer',
      difficulty: 'intermediate',
      prerequisites: ['数据分析技术'],
      order: 6
    },
    {
      id: 'data-collection',
      name: '数据采集与处理',
      description: '学习如何从各种来源采集数据，并进行清洗、转换和预处理。',
      icon: '🔍',
      link: '/data-collection',
      quizLink: '/data-collection-quiz',
      difficulty: 'intermediate',
      prerequisites: ['Python基础'],
      order: 3
    },
    {
      id: 'data-collection-training',
      name: '数据采集处理实训项目',
      description: '10个实战项目，掌握网络爬虫、数据清洗、数据库存储等核心技能。',
      icon: '🕷️',
      link: '/data-collection-training',
      difficulty: 'intermediate',
      prerequisites: ['Python基础', '数据采集与处理'],
      order: 7
    },
    {
      id: 'supply-chain',
      name: '供应链数据分析',
      description: '应用数据分析技术解决供应链管理中的问题，优化供应链流程。',
      icon: '📦',
      link: '/supply-chain',
      difficulty: 'advanced',
      prerequisites: ['数据分析技术', '数据采集与处理'],
      order: 8
    },
    {
      id: 'database',
      name: '数据库原理与应用',
      description: '了解数据库的基本原理，掌握SQL语言和数据库设计方法。',
      icon: '💾',
      link: '/database',
      quizLink: '/database-quiz',
      difficulty: 'beginner',
      prerequisites: ['Python基础'],
      order: 9
    },
    {
      id: 'financial',
      name: '企业财务数据分析',
      description: '学习如何分析企业财务数据，评估企业财务状况和经营绩效。',
      icon: '💰',
      link: '/financial',
      quizLink: '/financial-quiz',
      difficulty: 'advanced',
      prerequisites: ['数据分析技术', '数据库原理与应用'],
      order: 10
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
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              🟢 入门级 - 零基础可学
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              🟡 进阶级 - 需要基础
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              🔴 高级 - 需要多门基础
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const diffConfig = course.difficulty ? difficultyConfig[course.difficulty] : null;
            return (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-blue-100 relative overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-green-500/10 rounded-bl-full -z-10"></div>
                
                {/* 难度标签和序号 */}
                <div className="flex items-center justify-between mb-4">
                  {course.order && (
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm font-bold flex items-center justify-center">
                      {course.order}
                    </span>
                  )}
                  {diffConfig && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${diffConfig.color} ${diffConfig.border} border`}>
                      {diffConfig.label}
                    </span>
                  )}
                </div>
                
                <div className="mb-6 h-16 w-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{course.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                
                {/* 前置知识提示 */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-600">📌</span>
                      <div>
                        <span className="text-xs font-medium text-amber-700">前置知识: </span>
                        <span className="text-xs text-amber-600">{course.prerequisites.join('、')}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3">
                  <a 
                    href={course.link || `#${course.id}`} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300 group-hover:translate-x-1"
                  >
                    查看详情
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>
                  {course.quizLink && (
                    <a 
                      href={course.quizLink} 
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-all duration-300"
                    >
                      📝 理论测验
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
