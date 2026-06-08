import React from 'react'
import QuizPage from '@/pages/QuizPage'
import { financialQuizQuestions } from '@/data/quizData'

export default function FinancialQuiz() {
  return (
    <QuizPage 
      title="企业财务数据分析理论测验"
      description="检验你对企业财务分析知识的掌握程度，包括财务比率、财务报表、分析方法等知识点。"
      subject="企业财务数据分析"
      questions={financialQuizQuestions}
      backLink="/financial"
      backLinkText="财务分析课程"
    />
  )
}
