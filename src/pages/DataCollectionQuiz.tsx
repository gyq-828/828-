import React from 'react'
import QuizPage from '@/pages/QuizPage'
import { dataCollectionQuizQuestions } from '@/data/quizData'

export default function DataCollectionQuiz() {
  return (
    <QuizPage 
      title="数据采集与处理理论测验"
      description="检验你对数据采集与处理技术的掌握程度，包括Web爬虫、数据清洗、数据存储等知识点。"
      subject="数据采集与处理"
      questions={dataCollectionQuizQuestions}
      backLink="/data-collection"
      backLinkText="数据采集课程"
    />
  )
}
