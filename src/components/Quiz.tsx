import React, { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, Trophy, BookOpen } from 'lucide-react'

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  chapter: string
}

interface QuizProps {
  title: string
  description?: string
  questions: QuizQuestion[]
  subject: string
  onComplete?: (score: number, total: number) => void
}

export default function Quiz({ title, description, questions, subject, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredCount, setAnsweredCount] = useState(0)

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    if (quizCompleted) return
    if (!selectedAnswers[questionId]) {
      setAnsweredCount(prev => prev + 1)
    }
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }))
  }

  const calculateScore = () => {
    let correctCount = 0
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++
      }
    })
    return correctCount
  }

  const handleSubmit = () => {
    if (answeredCount < questions.length) {
      if (!confirm(`你还有 ${questions.length - answeredCount} 题没有回答，确定要提交吗？`)) {
        return
      }
    }
    setQuizCompleted(true)
    setShowResult(true)
    const score = calculateScore()
    if (onComplete) {
      onComplete(score, questions.length)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResult(false)
    setQuizCompleted(false)
    setAnsweredCount(0)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'hard':
        return 'bg-red-100 text-red-800 border-red-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return '简单'
      case 'medium':
        return '中等'
      case 'hard':
        return '困难'
      default:
        return '未知'
    }
  }

  const score = calculateScore()
  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0

  const getScoreEmoji = () => {
    if (percentage >= 90) return '🏆'
    if (percentage >= 80) return '🥇'
    if (percentage >= 70) return '🥈'
    if (percentage >= 60) return '🥉'
    return '💪'
  }

  const getScoreComment = () => {
    if (percentage >= 90) return '太棒了！你对这个知识掌握得很好！'
    if (percentage >= 80) return '很不错！继续加油！'
    if (percentage >= 70) return '还可以，再复习一下薄弱环节！'
    if (percentage >= 60) return '刚好及格，需要加强练习！'
    return '继续努力，多看看课程内容！'
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-10 h-10 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">{subject} - 理论知识测验</p>
          </div>
        </div>
        {description && <p className="text-gray-700 mt-2">{description}</p>}
      </div>

      {showResult ? (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border border-green-200">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-6xl">{getScoreEmoji()}</div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">测验完成！</h2>
              <p className="text-gray-700">{getScoreComment()}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600">{score}</div>
              <div className="text-sm text-gray-600">答对题数</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className="text-3xl font-bold text-gray-600">{questions.length}</div>
              <div className="text-sm text-gray-600">总题数</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className={`text-3xl font-bold ${percentage >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                {percentage}%
              </div>
              <div className="text-sm text-gray-600">正确率</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              <div className={`text-xl font-bold ${percentage >= 90 ? 'text-yellow-600' : percentage >= 60 ? 'text-green-600' : 'text-red-600'}`}>
                {percentage >= 90 ? 'S' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : 'D'}
              </div>
              <div className="text-sm text-gray-600">等级</div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-5 h-5" />
            重新测验
          </button>
        </div>
      ) : (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">
              题目 {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-gray-600">
              已回答 {answeredCount} / {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / questions.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {!showResult && (
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div 
              key={q.id}
              className={`bg-white rounded-2xl shadow-lg p-6 border transition-all ${
                selectedAnswers[q.id] !== undefined 
                  ? 'border-blue-300' 
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(q.difficulty)}`}>
                        {getDifficultyLabel(q.difficulty)}
                      </span>
                      <span className="text-sm text-gray-500">{q.chapter}</span>
                    </div>
                    <p className="text-lg font-medium text-gray-900">{q.question}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {q.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleAnswerSelect(q.id, optIndex)}
                    disabled={quizCompleted}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                      selectedAnswers[q.id] === optIndex
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                    } ${quizCompleted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + optIndex)}.</span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Trophy className="w-6 h-6" />
            提交答案
          </button>
        </div>
      )}

      {showResult && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            答题解析
          </h3>
          {questions.map((q, index) => {
            const userAnswer = selectedAnswers[q.id]
            const isCorrect = userAnswer === q.correctAnswer
            return (
              <div 
                key={q.id}
                className={`rounded-2xl p-6 border ${
                  isCorrect 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                          {isCorrect ? '回答正确' : '回答错误'}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-gray-900 mb-3">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, optIndex) => (
                          <div 
                            key={optIndex}
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${
                              optIndex === q.correctAnswer
                                ? 'bg-green-100 border-green-300 text-green-800'
                                : optIndex === userAnswer
                                ? 'bg-red-100 border-red-300 text-red-800'
                                : 'bg-gray-100 border-gray-200 text-gray-600'
                            }`}
                          >
                            <span className="font-medium w-6">{String.fromCharCode(65 + optIndex)}.</span>
                            <span className="flex-1">{option}</span>
                            {optIndex === q.correctAnswer && <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                            {optIndex === userAnswer && userAnswer !== q.correctAnswer && <XCircle className="w-4 h-4 flex-shrink-0" />}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-600 font-medium">💡 解析：</span>
                          <span className="text-gray-700">{q.explanation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
