import React from 'react'
import { Link } from 'react-router-dom'
import Quiz, { QuizQuestion } from '@/components/Quiz'

interface QuizPageProps {
  title: string
  description?: string
  subject: string
  questions: QuizQuestion[]
  backLink: string
  backLinkText: string
}

export default function QuizPage({ title, description, subject, questions, backLink, backLinkText }: QuizPageProps) {
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
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="pt-24 pb-16">
        {/* 返回按钮 */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link 
            to={backLink}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="m15 18-6-6 6-6" />
            </svg>
            返回{backLinkText}
          </Link>
        </div>

        {/* Quiz组件 */}
        <Quiz 
          title={title} 
          description={description}
          questions={questions}
          subject={subject}
        />
      </main>
    </div>
  )
}
