import React from 'react'
import QuizPage from '@/pages/QuizPage'
import { dataAnalysisQuizQuestions } from '@/data/quizData'

export default function DataAnalysisQuiz() {
  return (
    <QuizPage 
      title="数据分析技术理论测验"
      description="检验你对数据分析基础知识的掌握程度，包括描述性统计、数据清洗、数据可视化、聚类算法等知识点。"
      subject="数据分析技术"
      questions={dataAnalysisQuizQuestions}
      backLink="/data-analysis"
      backLinkText="数据分析课程"
    />
  )
}
