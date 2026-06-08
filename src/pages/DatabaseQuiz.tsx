import React from 'react'
import QuizPage from '@/pages/QuizPage'
import { databaseQuizQuestions } from '@/data/quizData'

export default function DatabaseQuiz() {
  return (
    <QuizPage 
      title="数据库原理与应用理论测验"
      description="检验你对数据库基础知识的掌握程度，包括SQL语法、数据库设计、关系型数据库等知识点。"
      subject="数据库原理与应用"
      questions={databaseQuizQuestions}
      backLink="/database"
      backLinkText="数据库课程"
    />
  )
}
