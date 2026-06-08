import React from 'react';
import { BookOpen, Code, Database, BarChart2, GitBranch, CheckCircle, Lock, ArrowRight } from 'lucide-react';

interface LearningPathStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  estimatedTime: string;
  skills: string[];
}

const learningPath: LearningPathStep[] = [
  {
    id: 'python-basics',
    title: 'Python编程基础',
    description: '从零开始学习Python，掌握编程思维',
    icon: <BookOpen className="w-6 h-6" />,
    link: '/python',
    difficulty: 'beginner',
    prerequisites: [],
    estimatedTime: '2-3周',
    skills: ['Python语法', '数据类型', '函数', '面向对象']
  },
  {
    id: 'python-training',
    title: 'Python实战练习',
    description: '通过10个练习项目巩固Python基础',
    icon: <Code className="w-6 h-6" />,
    link: '/python-training',
    difficulty: 'beginner',
    prerequisites: ['python-basics'],
    estimatedTime: '2-3周',
    skills: ['编程实践', '问题解决', '代码调试']
  },
  {
    id: 'database',
    title: '数据库基础',
    description: '学习SQL语言和数据库设计',
    icon: <Database className="w-6 h-6" />,
    link: '/database',
    difficulty: 'beginner',
    prerequisites: ['python-basics'],
    estimatedTime: '2周',
    skills: ['SQL语法', '数据库设计', '数据查询']
  },
  {
    id: 'data-collection',
    title: '数据采集与处理',
    description: '掌握网络爬虫和数据清洗技术',
    icon: <GitBranch className="w-6 h-6" />,
    link: '/data-collection',
    difficulty: 'intermediate',
    prerequisites: ['python-basics', 'database'],
    estimatedTime: '3周',
    skills: ['网络爬虫', '数据清洗', '数据存储']
  },
  {
    id: 'data-analysis',
    title: '数据分析技术',
    description: '学习数据分析和可视化方法',
    icon: <BarChart2 className="w-6 h-6" />,
    link: '/data-analysis',
    difficulty: 'intermediate',
    prerequisites: ['python-basics', 'database'],
    estimatedTime: '3-4周',
    skills: ['数据分析', '可视化', '统计分析']
  },
  {
    id: 'advanced-projects',
    title: '综合实战项目',
    description: '应用所学知识完成综合项目',
    icon: <CheckCircle className="w-6 h-6" />,
    link: '/data-analysis-tech',
    difficulty: 'advanced',
    prerequisites: ['data-analysis', 'data-collection'],
    estimatedTime: '4周',
    skills: ['项目实战', '综合应用', '问题解决']
  }
];

const difficultyConfig = {
  beginner: { label: '入门', color: 'bg-green-100 text-green-700 border-green-300', dot: 'bg-green-500' },
  intermediate: { label: '进阶', color: 'bg-yellow-100 text-yellow-700 border-yellow-300', dot: 'bg-yellow-500' },
  advanced: { label: '高级', color: 'bg-red-100 text-red-700 border-red-300', dot: 'bg-red-500' }
};

export default function LearningPath() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              学习路径指引
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            按照推荐顺序学习，循序渐进掌握数据分析技能
          </p>
        </div>

        {/* 学习路径时间线 */}
        <div className="relative">
          {/* 连接线 */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 -translate-x-1/2 z-0"></div>
          
          <div className="space-y-8">
            {learningPath.map((step, index) => {
              const diffConfig = difficultyConfig[step.difficulty];
              const isLeft = index % 2 === 0;
              
              return (
                <div key={step.id} className={`relative flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                  {/* 步骤卡片 */}
                  <div className={`flex-1 w-full lg:w-auto ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                      {/* 步骤编号和难度 */}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg shadow-md">
                          {index + 1}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${diffConfig.color}`}>
                          <span className={`inline-block w-2 h-2 rounded-full ${diffConfig.dot} mr-1`}></span>
                          {diffConfig.label}
                        </span>
                      </div>
                      
                      {/* 标题和图标 */}
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}>
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      {/* 描述 */}
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      {/* 技能标签 */}
                      <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        {step.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* 预计时间 */}
                      <div className={`flex items-center gap-2 text-sm text-gray-500 mb-4 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <span>⏱️</span>
                        <span>预计学习时间: {step.estimatedTime}</span>
                      </div>
                      
                      {/* 前置知识提示 */}
                      {step.prerequisites.length > 0 && (
                        <div className={`flex items-start gap-2 p-3 bg-amber-50 rounded-lg text-sm ${isLeft ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                          <Lock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-amber-700">前置知识: </span>
                            <span className="text-amber-600">
                              {step.prerequisites.map(p => learningPath.find(s => s.id === p)?.title).join('、')}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {/* 开始学习按钮 */}
                      <a
                        href={step.link}
                        className={`mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-row`}
                      >
                        <span>开始学习</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* 中间节点 */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-blue-300 shadow-lg z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* 空白占位 */}
                  <div className="hidden lg:block flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 学习建议 */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💡 学习建议</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">循序渐进</h4>
              <p className="text-sm text-gray-600">按照推荐顺序学习，每完成一个阶段再进入下一个，确保基础扎实</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">理论结合实践</h4>
              <p className="text-sm text-gray-600">每个知识点都有配套练习，边学边练，加深理解和记忆</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">反复巩固</h4>
              <p className="text-sm text-gray-600">遇到困难时不要急躁，回顾前置知识，多做练习巩固</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
