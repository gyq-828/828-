import React from 'react'
import QuizPage from '@/pages/QuizPage'
import { pythonQuizQuestions } from '@/data/quizData'

export default function PythonQuiz() {
  return (
    <QuizPage 
      title="Python基础理论测验"
      description="检验你对Python编程基础的掌握程度，包括基本语法、数据类型、控制结构、函数等知识点。"
      subject="Python基础"
      questions={pythonQuizQuestions}
      backLink="/python"
      backLinkText="Python课程"
    />
  )
}
