import { QuizQuestion } from '../components/Quiz';

// 章节测验接口
export interface ChapterQuiz {
  courseId: string;
  chapterId: string;
  chapterName: string;
  questions: QuizQuestion[];
  passingScore: number;
}

// 章节测验数据
export const chapterQuizzes: ChapterQuiz[] = [
  {
    courseId: 'data-analysis',
    chapterId: 'chapter1',
    chapterName: '数据分析概述',
    questions: [
      {
        id: 1,
        question: '数据分析的基本流程是？',
        options: ['数据收集→清洗→分析→可视化→报告', '可视化→收集→分析→报告', '分析→收集→清洗→报告', '报告→分析→收集→清洗'],
        correctAnswer: 0,
        explanation: '数据分析的标准流程是：数据收集、数据清洗、数据分析、数据可视化、分析报告',
        difficulty: 'easy',
        chapter: '数据分析概述'
      },
      {
        id: 2,
        question: '以下哪个不是数据可视化的主要目的？',
        options: ['发现数据中的规律', '展示数据结果', '替代数据分析', '辅助决策'],
        correctAnswer: 2,
        explanation: '数据可视化不能替代数据分析，它是分析的辅助工具',
        difficulty: 'easy',
        chapter: '数据分析概述'
      },
    ],
    passingScore: 70
  },
  {
    courseId: 'data-analysis',
    chapterId: 'chapter2',
    chapterName: '统计学基础',
    questions: [
      {
        id: 1,
        question: '以下哪个指标衡量数据的集中趋势？',
        options: ['标准差', '均值', '方差', '极差'],
        correctAnswer: 1,
        explanation: '均值、中位数、众数都是衡量集中趋势的指标',
        difficulty: 'easy',
        chapter: '统计学基础'
      },
      {
        id: 2,
        question: '正态分布的形态是？',
        options: ['左偏分布', '右偏分布', '对称的钟形分布', '均匀分布'],
        correctAnswer: 2,
        explanation: '正态分布是对称的钟形分布，均值、中位数、众数重合',
        difficulty: 'easy',
        chapter: '统计学基础'
      },
    ],
    passingScore: 70
  },
  {
    courseId: 'python',
    chapterId: 'chapter1',
    chapterName: 'Python基础',
    questions: [
      {
        id: 1,
        question: 'Python中定义变量的正确方式是？',
        options: ['int x = 10', 'var x = 10', 'x = 10', 'x := 10'],
        correctAnswer: 2,
        explanation: 'Python是动态类型语言，直接赋值即可定义变量',
        difficulty: 'easy',
        chapter: 'Python基础'
      },
    ],
    passingScore: 70
  },
];
