import { QuizQuestion } from '../components/Quiz'

export const pythonQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Python中，以下哪个是正确的输出语句？',
    options: [
      'print("Hello, World!")',
      'echo("Hello, World!")',
      'console.log("Hello, World!")',
      'System.out.println("Hello, World!")'
    ],
    correctAnswer: 0,
    explanation: 'Python使用print()函数来输出内容。echo是PHP的语法，console.log是JavaScript的语法，System.out.println是Java的语法。',
    difficulty: 'easy',
    chapter: '第1章 Python概述'
  },
  {
    id: 2,
    question: '在Python中，定义变量时需要指定数据类型吗？',
    options: [
      '必须指定',
      '不需要指定，Python是动态类型语言',
      '只需要指定数字类型',
      '只需要指定字符串类型'
    ],
    correctAnswer: 1,
    explanation: 'Python是动态类型语言，不需要显式声明变量的数据类型，解释器会根据赋值自动推断类型。',
    difficulty: 'easy',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 3,
    question: '以下哪个不是Python的基本数据类型？',
    options: [
      'int（整数）',
      'float（浮点数）',
      'string（字符串）',
      'char（字符）'
    ],
    correctAnswer: 3,
    explanation: 'Python没有单独的char类型，单个字符用字符串表示。Python的基本数据类型包括int、float、str、bool、list、dict等。',
    difficulty: 'easy',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 4,
    question: '在Python中，布尔值的正确写法是？',
    options: [
      'true, false',
      'TRUE, FALSE',
      'True, False',
      'Yes, No'
    ],
    correctAnswer: 2,
    explanation: 'Python中的布尔值首字母大写，即True和False，其他写法都是错误的。',
    difficulty: 'easy',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 5,
    question: '以下哪个代码会输出"10"？',
    options: [
      'print(5 + 5)',
      'print("5" + "5")',
      'print("5 + 5")',
      'print(5, 5)'
    ],
    correctAnswer: 0,
    explanation: '5 + 5是数字相加等于10。选项B会输出"55"（字符串拼接），选项C会原样输出"5 + 5"，选项D会输出5 5。',
    difficulty: 'medium',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 6,
    question: '在Python中，如何获取用户的输入？',
    options: [
      'input("请输入：")',
      'scan("请输入：")',
      'get_input("请输入：")',
      'read("请输入：")'
    ],
    correctAnswer: 0,
    explanation: 'Python使用input()函数获取用户输入，它会暂停程序执行，等待用户输入并返回字符串。',
    difficulty: 'easy',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 7,
    question: '以下哪个是Python的单行注释？',
    options: [
      '// 这是注释',
      '/* 这是注释 */',
      '# 这是注释',
      '-- 这是注释'
    ],
    correctAnswer: 2,
    explanation: 'Python使用#作为单行注释符号。//是C++/Java的单行注释，/* */是多行注释，--是SQL的注释。',
    difficulty: 'easy',
    chapter: '第2章 Python基础语法'
  },
  {
    id: 8,
    question: '在Python中，if语句的正确语法是？',
    options: [
      'if x > 0 then: print(x)',
      'if x > 0: print(x)',
      'if (x > 0) { print(x) }',
      'if x > 0 print(x)'
    ],
    correctAnswer: 1,
    explanation: 'Python的if语句条件后需要加冒号，使用缩进来表示代码块。',
    difficulty: 'easy',
    chapter: '第3章 控制结构'
  },
  {
    id: 9,
    question: '以下哪个循环会无限执行？',
    options: [
      'for i in range(5): print(i)',
      'while True: print("hello")',
      'i = 0; while i < 5: print(i); i += 1',
      'for i in [1,2,3]: print(i)'
    ],
    correctAnswer: 1,
    explanation: 'while True会一直执行，除非遇到break语句。其他选项都有明确的终止条件。',
    difficulty: 'medium',
    chapter: '第3章 控制结构'
  },
  {
    id: 10,
    question: '在Python中，定义函数使用什么关键字？',
    options: [
      'function',
      'def',
      'func',
      'fn'
    ],
    correctAnswer: 1,
    explanation: 'Python使用def关键字来定义函数，例如：def greet(): print("Hello")',
    difficulty: 'easy',
    chapter: '第4章 函数'
  }
]

export const dataAnalysisQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '数据分析中，描述性统计主要用于？',
    options: [
      '预测未来趋势',
      '总结和描述数据的基本特征',
      '建立机器学习模型',
      '数据可视化'
    ],
    correctAnswer: 1,
    explanation: '描述性统计用于总结和描述数据的基本特征，如均值、中位数、标准差等，是数据分析的基础。',
    difficulty: 'easy',
    chapter: '数据分析基础'
  },
  {
    id: 2,
    question: '以下哪个指标用于衡量数据的离散程度？',
    options: [
      '均值',
      '中位数',
      '标准差',
      '众数'
    ],
    correctAnswer: 2,
    explanation: '标准差用于衡量数据的离散程度，数值越大表示数据越分散。均值、中位数、众数都是衡量集中趋势的指标。',
    difficulty: 'medium',
    chapter: '数据分析基础'
  },
  {
    id: 3,
    question: '在Python中，哪个库主要用于数据处理和分析？',
    options: [
      'matplotlib',
      'pandas',
      'numpy',
      'scikit-learn'
    ],
    correctAnswer: 1,
    explanation: 'pandas是Python中主要的数据分析库，提供了DataFrame等数据结构和强大的数据处理功能。numpy用于数值计算，matplotlib用于绘图，scikit-learn用于机器学习。',
    difficulty: 'easy',
    chapter: '数据分析工具'
  },
  {
    id: 4,
    question: 'pandas中的DataFrame是什么？',
    options: [
      '一个数组',
      '一个二维表格数据结构，类似Excel表格',
      '一个绘图工具',
      '一个机器学习算法'
    ],
    correctAnswer: 1,
    explanation: 'DataFrame是pandas的核心数据结构，是一个二维表格，有行和列索引，类似Excel表格或SQL表。',
    difficulty: 'easy',
    chapter: '数据分析工具'
  },
  {
    id: 5,
    question: '以下哪个不是数据预处理的步骤？',
    options: [
      '缺失值处理',
      '异常值检测',
      '数据可视化',
      '特征归一化'
    ],
    correctAnswer: 2,
    explanation: '数据可视化是数据分析的环节，不是预处理步骤。预处理通常包括：缺失值处理、异常值检测、特征归一化、数据清洗等。',
    difficulty: 'medium',
    chapter: '数据预处理'
  },
  {
    id: 6,
    question: '数据缺失时，以下哪个方法不推荐？',
    options: [
      '使用均值填充',
      '使用中位数填充',
      '直接删除包含缺失值的行',
      '使用前向填充'
    ],
    correctAnswer: 2,
    explanation: '直接删除包含缺失值的行可能会丢失大量数据，特别是缺失值较多时。推荐使用均值、中位数、前向填充等方法。',
    difficulty: 'medium',
    chapter: '数据预处理'
  },
  {
    id: 7,
    question: '相关系数r的取值范围是？',
    options: [
      '0到1',
      '-1到1',
      '0到100',
      '-100到100'
    ],
    correctAnswer: 1,
    explanation: '皮尔逊相关系数r的取值范围是-1到1，-1表示完全负相关，1表示完全正相关，0表示无相关性。',
    difficulty: 'easy',
    chapter: '统计分析'
  },
  {
    id: 8,
    question: '以下哪个不是聚类算法？',
    options: [
      'K-Means',
      'DBSCAN',
      '线性回归',
      '层次聚类'
    ],
    correctAnswer: 2,
    explanation: '线性回归是预测算法，不是聚类算法。K-Means、DBSCAN、层次聚类都是常见的聚类算法。',
    difficulty: 'medium',
    chapter: '聚类分析'
  },
  {
    id: 9,
    question: 'K-Means算法中的K表示什么？',
    options: [
      '数据点数量',
      '聚类的数量',
      '迭代次数',
      '维度数量'
    ],
    correctAnswer: 1,
    explanation: 'K-Means中的K表示聚类的数量，即要将数据分成多少个簇。',
    difficulty: 'easy',
    chapter: '聚类分析'
  },
  {
    id: 10,
    question: '数据可视化中，折线图最适合展示？',
    options: [
      '数据的分布情况',
      '分类数据的比较',
      '时间序列数据的变化趋势',
      '两个变量之间的关系'
    ],
    correctAnswer: 2,
    explanation: '折线图最适合展示时间序列数据的变化趋势。直方图看分布，柱状图看分类比较，散点图看变量关系。',
    difficulty: 'easy',
    chapter: '数据可视化'
  },
  {
    id: 11,
    question: '以下哪个库不用于数据可视化？',
    options: [
      'matplotlib',
      'seaborn',
      'plotly',
      'numpy'
    ],
    correctAnswer: 3,
    explanation: 'numpy是数值计算库，不用于可视化。matplotlib、seaborn、plotly都是常用的数据可视化库。',
    difficulty: 'easy',
    chapter: '数据可视化'
  },
  {
    id: 12,
    question: '在机器学习中，"过拟合"是指？',
    options: [
      '模型在训练集上表现差，在测试集上表现好',
      '模型在训练集和测试集上都表现好',
      '模型在训练集上表现好，在测试集上表现差',
      '模型在训练集和测试集上都表现差'
    ],
    correctAnswer: 2,
    explanation: '过拟合是指模型在训练数据上表现优异，但在未见过的测试数据上表现很差，说明模型过度学习了训练数据的细节而泛化能力差。',
    difficulty: 'medium',
    chapter: '机器学习基础'
  }
]

export const dataCollectionQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Web爬虫主要用于什么目的？',
    options: [
      '美化网页',
      '自动从网页获取数据',
      '加速网页加载',
      '保护网站安全'
    ],
    correctAnswer: 1,
    explanation: 'Web爬虫是一种自动从网页获取数据的程序，广泛用于数据采集和信息收集。',
    difficulty: 'easy',
    chapter: '爬虫基础'
  },
  {
    id: 2,
    question: 'Python中，哪个库常用于发送HTTP请求？',
    options: [
      'requests',
      'pandas',
      'numpy',
      'BeautifulSoup'
    ],
    correctAnswer: 0,
    explanation: 'requests是Python中最常用的HTTP库，用于发送GET、POST等请求。BeautifulSoup用于解析HTML。',
    difficulty: 'easy',
    chapter: '爬虫基础'
  },
  {
    id: 3,
    question: 'HTTP状态码200表示什么？',
    options: [
      '请求成功',
      '页面未找到',
      '服务器错误',
      '需要登录'
    ],
    correctAnswer: 0,
    explanation: 'HTTP状态码200表示请求成功。404表示未找到，500表示服务器错误。',
    difficulty: 'easy',
    chapter: '爬虫基础'
  },
  {
    id: 4,
    question: 'HTML中，用于定义表格行的标签是？',
    options: [
      '<table>',
      '<tr>',
      '<td>',
      '<th>'
    ],
    correctAnswer: 1,
    explanation: '<tr>表示表格行，<td>表示表格单元格，<th>表示表头，<table>表示表格容器。',
    difficulty: 'medium',
    chapter: 'HTML基础'
  },
  {
    id: 5,
    question: 'robots.txt文件的作用是什么？',
    options: [
      '记录网站访问日志',
      '告诉爬虫哪些页面可以爬，哪些不可以',
      '加速网站访问',
      '存储用户密码'
    ],
    correctAnswer: 1,
    explanation: 'robots.txt文件用于告诉爬虫哪些页面可以爬，哪些不应该爬，是爬虫遵守的基本道德规范。',
    difficulty: 'easy',
    chapter: '爬虫道德'
  },
  {
    id: 6,
    question: '以下哪个方法可以避免被网站封禁？',
    options: [
      '快速连续请求',
      '设置合理的请求间隔',
      '不设置User-Agent',
      '爬取敏感数据'
    ],
    correctAnswer: 1,
    explanation: '设置合理的请求间隔可以降低对服务器的压力，避免被封禁。其他选项都容易触发反爬机制。',
    difficulty: 'medium',
    chapter: '爬虫技巧'
  },
  {
    id: 7,
    question: 'JSON数据格式的特点不包括？',
    options: [
      '可读性强',
      '数据结构清晰',
      'Python原生支持',
      '只能存储文本，不能存储数字'
    ],
    correctAnswer: 3,
    explanation: 'JSON可以存储多种数据类型：数字、字符串、布尔值、数组、对象等。',
    difficulty: 'medium',
    chapter: '数据存储'
  },
  {
    id: 8,
    question: 'CSV文件用什么字符分隔字段？',
    options: [
      '空格',
      '逗号',
      '分号',
      '句号'
    ],
    correctAnswer: 1,
    explanation: 'CSV（逗号分隔值）文件使用逗号来分隔不同的字段。',
    difficulty: 'easy',
    chapter: '数据存储'
  },
  {
    id: 9,
    question: '在Python中，读取CSV文件常用哪个库？',
    options: [
      'csv',
      'requests',
      'json',
      're'
    ],
    correctAnswer: 0,
    explanation: 'Python标准库中有csv模块用于读写CSV文件，pandas也可以方便地处理CSV。',
    difficulty: 'easy',
    chapter: '数据存储'
  },
  {
    id: 10,
    question: 'API（应用程序接口）的主要作用是？',
    options: [
      '美化界面',
      '提供规范的数据获取方式',
      '加快程序运行速度',
      '加密数据'
    ],
    correctAnswer: 1,
    explanation: 'API提供了规范的数据获取方式，让程序之间可以方便地交换数据，比爬虫更稳定可靠。',
    difficulty: 'easy',
    chapter: 'API数据采集'
  }
]

export const databaseQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'SQL是什么的缩写？',
    options: [
      'System Query Language',
      'Structured Query Language',
      'Simple Query Language',
      'Super Query Language'
    ],
    correctAnswer: 1,
    explanation: 'SQL是Structured Query Language（结构化查询语言）的缩写，用于管理和查询关系型数据库。',
    difficulty: 'easy',
    chapter: '数据库基础'
  },
  {
    id: 2,
    question: 'SQL中，用于查询数据的语句是？',
    options: [
      'INSERT',
      'UPDATE',
      'SELECT',
      'DELETE'
    ],
    correctAnswer: 2,
    explanation: 'SELECT语句用于查询数据。INSERT插入，UPDATE更新，DELETE删除。',
    difficulty: 'easy',
    chapter: 'SQL基础'
  },
  {
    id: 3,
    question: '以下哪个是关系型数据库？',
    options: [
      'MongoDB',
      'MySQL',
      'Redis',
      'Neo4j'
    ],
    correctAnswer: 1,
    explanation: 'MySQL是关系型数据库。MongoDB是文档数据库，Redis是键值对数据库，Neo4j是图数据库。',
    difficulty: 'easy',
    chapter: '数据库类型'
  },
  {
    id: 4,
    question: 'SQL中，WHERE子句的作用是？',
    options: [
      '指定要查询的表',
      '过滤查询结果',
      '对结果排序',
      '分组数据'
    ],
    correctAnswer: 1,
    explanation: 'WHERE子句用于过滤查询结果，只返回满足条件的数据。',
    difficulty: 'easy',
    chapter: 'SQL基础'
  },
  {
    id: 5,
    question: '以下哪个聚合函数用于计算平均值？',
    options: [
      'SUM()',
      'COUNT()',
      'AVG()',
      'MAX()'
    ],
    correctAnswer: 2,
    explanation: 'AVG()用于计算平均值。SUM求和，COUNT计数，MAX求最大值。',
    difficulty: 'easy',
    chapter: 'SQL聚合'
  },
  {
    id: 6,
    question: '数据库中的"主键"是什么？',
    options: [
      '最重要的列',
      '唯一标识每一行的列',
      '最复杂的列',
      '可以有多个值的列'
    ],
    correctAnswer: 1,
    explanation: '主键是表中用于唯一标识每一行的列，确保每行数据都有唯一标识。',
    difficulty: 'medium',
    chapter: '数据库设计'
  },
  {
    id: 7,
    question: 'SQL中，JOIN的作用是？',
    options: [
      '合并多个表的数据',
      '删除数据',
      '插入数据',
      '更新数据'
    ],
    correctAnswer: 0,
    explanation: 'JOIN用于根据共同字段合并两个或多个表的数据。',
    difficulty: 'medium',
    chapter: 'SQL进阶'
  },
  {
    id: 8,
    question: '以下哪个约束用于确保列中的值唯一？',
    options: [
      'NOT NULL',
      'DEFAULT',
      'UNIQUE',
      'CHECK'
    ],
    correctAnswer: 2,
    explanation: 'UNIQUE约束确保列中的所有值都是唯一的。NOT NULL确保不能为空，DEFAULT设置默认值。',
    difficulty: 'medium',
    chapter: '数据库设计'
  }
]

export const financialQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '企业财务分析中，"流动比率"主要衡量什么？',
    options: [
      '盈利能力',
      '短期偿债能力',
      '长期偿债能力',
      '运营效率'
    ],
    correctAnswer: 1,
    explanation: '流动比率=流动资产/流动负债，主要衡量企业的短期偿债能力。',
    difficulty: 'easy',
    chapter: '财务比率'
  },
  {
    id: 2,
    question: '以下哪个指标用于衡量盈利能力？',
    options: [
      '资产负债率',
      '净利润率',
      '存货周转率',
      '流动比率'
    ],
    correctAnswer: 1,
    explanation: '净利润率=净利润/营业收入，衡量盈利能力。资产负债率看负债水平，周转率看运营效率。',
    difficulty: 'medium',
    chapter: '财务比率'
  },
  {
    id: 3,
    question: '财务三张表不包括？',
    options: [
      '资产负债表',
      '利润表',
      '现金流量表',
      '成本分析表'
    ],
    correctAnswer: 3,
    explanation: '财务三大表是：资产负债表、利润表、现金流量表。',
    difficulty: 'easy',
    chapter: '财务报表'
  },
  {
    id: 4,
    question: '趋势分析主要通过什么来实现？',
    options: [
      '对比不同公司的数据',
      '对比同一公司不同时期的数据',
      '对比行业平均水平',
      '只看最新一期数据'
    ],
    correctAnswer: 1,
    explanation: '趋势分析通过对比同一公司不同时期的数据，观察各项指标的变化趋势。',
    difficulty: 'medium',
    chapter: '分析方法'
  },
  {
    id: 5,
    question: '杜邦分析法的核心指标是？',
    options: [
      '净利润率',
      '总资产周转率',
      '权益乘数',
      '净资产收益率(ROE)'
    ],
    correctAnswer: 3,
    explanation: '杜邦分析以净资产收益率(ROE)为核心，拆解为净利润率×总资产周转率×权益乘数。',
    difficulty: 'hard',
    chapter: '分析方法'
  },
  {
    id: 6,
    question: '存货周转率的计算公式是？',
    options: [
      '营业收入/平均存货',
      '营业成本/平均存货',
      '平均存货/营业收入',
      '平均存货/营业成本'
    ],
    correctAnswer: 1,
    explanation: '存货周转率=营业成本/平均存货，衡量存货管理效率。',
    difficulty: 'medium',
    chapter: '运营效率'
  }
]
