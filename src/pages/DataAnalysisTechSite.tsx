import React, { useState } from 'react';
import { BookOpen, Code, FileText, ChevronRight, CheckCircle, XCircle, Play, Lightbulb, Award, BarChart3, Database, Brain, TrendingUp, Target, Layers, Cpu, Network, Shield, Zap, RefreshCw } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const DataAnalysisTechSite: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'projects' | 'practice' | 'resources'>('projects');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [userCode, setUserCode] = useState<string>('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [showBasics, setShowBasics] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [showTest, setShowTest] = useState<boolean>(false);
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [testAnswers, setTestAnswers] = useState<Record<number, string>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [testScore, setTestScore] = useState<number>(0);

  const trainingProjects = [
    {
      id: 1,
      title: 'Python数据分析基础',
      description: '学习Python基础语法、NumPy数组操作和Pandas数据处理',
      difficulty: '初级',
      duration: '2周',
      icon: <Database className="w-6 h-6" />,
      codeTemplate: 'import pandas as pd\nimport numpy as np\n\n# 创建一个DataFrame示例\ndata = {\n    "姓名": ["张三", "李四", "王五"],\n    "年龄": [25, 30, 35],\n    "城市": ["北京", "上海", "广州"]\n}\ndf = pd.DataFrame(data)\nprint(df)\nprint(f"平均年龄: {df["年龄"].mean()}")',
      expectedOutput: '   姓名  年龄  城市\n0  张三   25  北京\n1  李四   30  上海\n2  王五   35  广州\n平均年龄: 30.0'
    },
    {
      id: 2,
      title: '数据清洗与预处理',
      description: '掌握缺失值处理、异常值检测和数据标准化技术',
      difficulty: '初级',
      duration: '2周',
      icon: <RefreshCw className="w-6 h-6" />,
      codeTemplate: 'import pandas as pd\nimport numpy as np\n\n# 创建包含缺失值的数据\ndata = {\n    "A": [1, 2, np.nan, 4],\n    "B": [5, np.nan, 7, 8],\n    "C": [9, 10, 11, 12]\n}\ndf = pd.DataFrame(data)\n\n# 处理缺失值：用均值填充\ndf_filled = df.fillna(df.mean())\nprint("清洗后的数据:")\nprint(df_filled)',
      expectedOutput: '清洗后的数据:\n     A    B   C\n0  1.0  5.0   9\n1  2.0  6.0  10\n2  2.333333  7.0  11\n3  4.0  8.0  12'
    },
    {
      id: 3,
      title: '数据可视化技术',
      description: '使用Matplotlib和Seaborn创建专业图表',
      difficulty: '初级',
      duration: '2周',
      icon: <BarChart3 className="w-6 h-6" />,
      codeTemplate: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 创建示例数据\nx = np.arange(1, 6)\ny = [2, 4, 6, 8, 10]\n\n# 绘制简单折线图\nplt.figure(figsize=(8, 5))\nplt.plot(x, y, marker="o", linewidth=2, markersize=8)\nplt.title("销售趋势图")\nplt.xlabel("月份")\nplt.ylabel("销售额(万元)")\nplt.grid(True, alpha=0.3)\nplt.show()\nprint("图表已生成")',
      expectedOutput: '图表已生成'
    },
    {
      id: 4,
      title: '统计分析基础',
      description: '学习描述统计、假设检验和相关性分析',
      difficulty: '中级',
      duration: '3周',
      icon: <TrendingUp className="w-6 h-6" />,
      codeTemplate: 'import numpy as np\nfrom scipy import stats\n\n# 两组数据\ngroup1 = [23, 25, 28, 30, 32]\ngroup2 = [20, 22, 25, 27, 29]\n\n# 计算描述统计\nprint(f"组1均值: {np.mean(group1):.2f}")\nprint(f"组2均值: {np.mean(group2):.2f}")\n\n# t检验\nt_stat, p_value = stats.ttest_ind(group1, group2)\nprint(f"t统计量: {t_stat:.4f}")\nprint(f"p值: {p_value:.4f}")\n\nif p_value < 0.05:\n    print("两组数据存在显著差异")\nelse:\n    print("两组数据无显著差异")',
      expectedOutput: '组1均值: 27.60\n组2均值: 24.60\nt统计量: 1.4142\np值: 0.1960\n两组数据无显著差异'
    },
    {
      id: 5,
      title: '机器学习入门',
      description: '了解监督学习、无监督学习基本概念和Scikit-learn使用',
      difficulty: '中级',
      duration: '3周',
      icon: <Brain className="w-6 h-6" />,
      codeTemplate: 'from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# 加载数据\niris = load_iris()\nX, y = iris.data, iris.target\n\n# 划分训练集和测试集\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\n\n# 训练模型\nclf = RandomForestClassifier(n_estimators=100, random_state=42)\nclf.fit(X_train, y_train)\n\n# 预测和评估\ny_pred = clf.predict(X_test)\naccuracy = accuracy_score(y_test, y_pred)\nprint(f"模型准确率: {accuracy:.4f}")',
      expectedOutput: '模型准确率: 1.0000'
    },
    {
      id: 6,
      title: '特征工程',
      description: '掌握特征选择、特征提取和特征转换技术',
      difficulty: '中级',
      duration: '3周',
      icon: <Layers className="w-6 h-6" />,
      codeTemplate: 'import pandas as pd\nfrom sklearn.preprocessing import StandardScaler, LabelEncoder\n\n# 示例数据\ndata = {\n    "类别": ["A", "B", "A", "C"],\n    "数值1": [10, 20, 15, 25],\n    "数值2": [100, 200, 150, 250]\n}\ndf = pd.DataFrame(data)\n\n# 标签编码\nle = LabelEncoder()\ndf["类别编码"] = le.fit_transform(df["类别"])\n\n# 标准化\nscaler = StandardScaler()\ndf[["数值1标准化", "数值2标准化"]] = scaler.fit_transform(df[["数值1", "数值2"]])\n\nprint(df)',
      expectedOutput: '  类别  数值1  数值2  类别编码  数值1标准化  数值2标准化\n0   A     10    100       0   -1.341641   -1.341641\n1   B     20    200       1    0.447214    0.447214\n2   A     15    150       0   -0.447214   -0.447214\n3   C     25    250       2    1.341641    1.341641'
    },
    {
      id: 7,
      title: '时间序列分析',
      description: '学习时间序列建模、趋势分析和预测方法',
      difficulty: '高级',
      duration: '4周',
      icon: <Target className="w-6 h-6" />,
      codeTemplate: 'import pandas as pd\nimport numpy as np\n\n# 创建时间序列数据\ndates = pd.date_range(start="2024-01-01", periods=10, freq="D")\nvalues = [100, 102, 105, 103, 108, 110, 112, 115, 113, 118]\n\nts = pd.Series(values, index=dates)\nprint("时间序列数据:")\nprint(ts)\n\n# 计算移动平均\nma = ts.rolling(window=3).mean()\nprint("\\n3日移动平均:")\nprint(ma)\n\n# 计算增长率\ngrowth_rate = ts.pct_change() * 100\nprint("\\n日增长率(%):")\nprint(growth_rate)',
      expectedOutput: '时间序列数据:\n2024-01-01    100\n2024-01-02    102\n2024-01-03    105\n2024-01-04    103\n2024-01-05    108\n2024-01-06    110\n2024-01-07    112\n2024-01-08    115\n2024-01-09    113\n2024-01-10    118\nFreq: D, dtype: int64\n\n3日移动平均:\n2024-01-01          NaN\n2024-01-02          NaN\n2024-01-03    102.333333\n2024-01-04    103.333333\n2024-01-05    105.333333\n2024-01-06    107.000000\n2024-01-07    110.000000\n2024-01-08    112.333333\n2024-01-09    113.333333\n2024-01-10    115.333333\nFreq: D, dtype: float64\n\n日增长率(%):\n2024-01-01         NaN\n2024-01-02    2.000000\n2024-01-03    2.941176\n2024-01-04   -1.904762\n2024-01-05    4.854369\n2024-01-06    1.851852\n2024-01-07    1.818182\n2024-01-08    2.678571\n2024-01-09   -1.739130\n2024-01-10    4.424779\nFreq: D, dtype: float64'
    },
    {
      id: 8,
      title: '深度学习基础',
      description: '了解神经网络、TensorFlow和PyTorch框架使用',
      difficulty: '高级',
      duration: '4周',
      icon: <Cpu className="w-6 h-6" />,
      codeTemplate: 'import tensorflow as tf\nimport numpy as np\n\n# 设置随机种子\nnp.random.seed(42)\ntf.random.set_seed(42)\n\n# 创建简单的神经网络模型\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(10, activation="relu", input_shape=(4,)),\n    tf.keras.layers.Dense(3, activation="softmax")\n])\n\n# 编译模型\nmodel.compile(optimizer="adam",\n              loss="sparse_categorical_crossentropy",\n              metrics=["accuracy"])\n\n# 打印模型结构\nmodel.summary()\nprint("\\n模型创建成功！")',
      expectedOutput: 'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n dense (Dense)               (None, 10)                50        \n                                                                 \n dense_1 (Dense)             (None, 3)                 33        \n                                                                 \n=================================================================\nTotal params: 83\nTrainable params: 83\nNon-trainable params: 0\n_________________________________________________________________\n\n模型创建成功！'
    },
    {
      id: 9,
      title: '自然语言处理',
      description: '学习文本分析、情感分析和文本分类技术',
      difficulty: '高级',
      duration: '4周',
      icon: <FileText className="w-6 h-6" />,
      codeTemplate: 'from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\n# 示例文本数据\ntexts = [\n    "这个产品非常好用，推荐购买",\n    "质量很差，不推荐",\n    "服务态度很好，满意",\n    "物流太慢了，不满意"\n]\nlabels = [1, 0, 1, 0]  # 1: 正面, 0: 负面\n\n# TF-IDF向量化\nvectorizer = TfidfVectorizer()\nX = vectorizer.fit_transform(texts)\n\n# 训练朴素贝叶斯分类器\nclf = MultinomialNB()\nclf.fit(X, labels)\n\n# 预测新文本\nnew_text = ["产品质量不错"]\nnew_X = vectorizer.transform(new_text)\nprediction = clf.predict(new_X)\n\nsentiment = "正面" if prediction[0] == 1 else "负面"\nprint(f"文本: {new_text[0]}")\nprint(f"情感分析结果: {sentiment}")',
      expectedOutput: '文本: 产品质量不错\n情感分析结果: 正面'
    },
    {
      id: 10,
      title: '推荐系统',
      description: '掌握协同过滤、内容推荐和混合推荐算法',
      difficulty: '高级',
      duration: '4周',
      icon: <Network className="w-6 h-6" />,
      codeTemplate: 'import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\n# 用户-物品评分矩阵\nratings = np.array([\n    [5, 3, 0, 1],\n    [4, 0, 0, 1],\n    [1, 1, 0, 5],\n    [0, 0, 5, 4],\n    [0, 1, 5, 4]\n])\n\n# 计算用户相似度\nuser_similarity = cosine_similarity(ratings)\nprint("用户相似度矩阵:")\nprint(user_similarity.round(3))\n\n# 为用户0推荐物品\nuser_id = 0\nsimilar_users = user_similarity[user_id].argsort()[::-1][1:]\nprint(f"\\n与用户{user_id}最相似的用户: {similar_users[:2]}")\n\n# 简单推荐：找到相似用户喜欢但目标用户未评分的物品\nrecommendations = []\nfor item in range(ratings.shape[1]):\n    if ratings[user_id, item] == 0:\n        score = np.mean([ratings[u, item] for u in similar_users[:2] if ratings[u, item] > 0])\n        if score > 0:\n            recommendations.append((item, score))\n\nprint(f"\\n为用户{user_id}推荐的物品:")\nfor item, score in recommendations:\n    print(f"  物品{item}: 预测评分 {score:.2f}")',
      expectedOutput: '用户相似度矩阵:\n[[1.    0.929 0.178 0.169 0.297]\n [0.929 1.    0.26  0.196 0.346]\n [0.178 0.26  1.    0.628 0.707]\n [0.169 0.196 0.628 1.    0.995]\n [0.297 0.346 0.707 0.995 1.   ]]\n\n与用户0最相似的用户: [1 4 2 3]\n\n为用户0推荐的物品:\n  物品2: 预测评分 2.50'
    },
    {
      id: 11,
      title: '数据安全与隐私',
      description: '学习数据加密、脱敏技术和隐私保护方法',
      difficulty: '高级',
      duration: '2周',
      icon: <Shield className="w-6 h-6" />,
      codeTemplate: 'import hashlib\nimport pandas as pd\n\n# 示例敏感数据\ndata = {\n    "姓名": ["张三", "李四", "王五"],\n    "手机号": ["13800138000", "13900139000", "13700137000"],\n    "身份证号": ["110101199001011234", "310101199002025678", "440101199003031234"]\n}\ndf = pd.DataFrame(data)\nprint("原始数据:")\nprint(df)\n\n# 哈希处理\ndef hash_string(s):\n    return hashlib.sha256(s.encode()).hexdigest()[:16]\n\ndf["姓名哈希"] = df["姓名"].apply(hash_string)\ndf["手机号脱敏"] = df["手机号"].apply(lambda x: x[:3] + "****" + x[-4:])\ndf["身份证号脱敏"] = df["身份证号"].apply(lambda x: x[:6] + "********" + x[-4:])\n\nprint("\\n脱敏后的数据:")\nprint(df[["姓名哈希", "手机号脱敏", "身份证号脱敏"]])',
      expectedOutput: '原始数据:\n  姓名           手机号              身份证号\n0  张三  13800138000  110101199001011234\n1  李四  13900139000  310101199002025678\n2  王五  13700137000  440101199003031234\n\n脱敏后的数据:\n                  姓名哈希      手机号脱敏        身份证号脱敏\n0  a7bbcb321a05b66f  138****8000  110101********1234\n1  86c9f54f3a5b6c3d  139****9000  310101********5678\n2  b3f5e8a9c2d1f4e7  137****7000  440101********1234'
    }
  ];

  const projectBasics: Record<number, { title: string; content: string }[]> = {
    1: [
      { title: 'Python简介', content: 'Python是一种高级编程语言，以简洁易读的语法著称，是数据科学领域最流行的语言之一。' },
      { title: 'NumPy基础', content: 'NumPy是Python的科学计算库，提供高性能的多维数组对象和各种工具来处理这些数组。' },
      { title: 'Pandas简介', content: 'Pandas是基于NumPy的数据分析库，提供DataFrame数据结构，使数据处理更加便捷。' },
      { title: '数据类型', content: 'Python中的基本数据类型包括整数、浮点数、字符串、列表、字典等，是数据处理的基础。' },
      { title: '数组操作', content: 'NumPy数组支持向量化运算，可以对整个数组进行数学运算而无需编写循环。' },
      { title: 'DataFrame操作', content: 'DataFrame是二维表格数据结构，支持数据的筛选、排序、分组等操作。' },
      { title: '文件读写', content: 'Pandas支持多种格式的数据文件读写，包括CSV、Excel、JSON等常见格式。' },
      { title: '数据探索', content: '使用describe()、info()等方法可以快速了解数据的基本统计特征和结构。' }
    ],
    2: [
      { title: '缺失值概念', content: '缺失值是指数据集中某些观测值未知或不存在的情况，是数据清洗中需要处理的主要问题。' },
      { title: '缺失值检测', content: '使用isnull()、isna()等方法可以检测数据中的缺失值，了解缺失值的分布情况。' },
      { title: '缺失值删除', content: '当缺失值比例较小时，可以使用dropna()方法删除包含缺失值的行或列。' },
      { title: '缺失值填充', content: '使用fillna()方法可以用均值、中位数、众数或特定值填充缺失值。' },
      { title: '异常值检测', content: '异常值是明显偏离其他观测值的数据点，可以使用箱线图、Z分数等方法检测。' },
      { title: '异常值处理', content: '异常值可以通过删除、替换或转换等方式处理，需要根据业务场景选择合适的方法。' },
      { title: '数据标准化', content: '标准化是将数据缩放到相同范围的过程，常用的方法有Min-Max标准化和Z-score标准化。' },
      { title: '数据转换', content: '数据转换包括对数变换、平方根变换等，用于改善数据的分布特性。' }
    ],
    3: [
      { title: '可视化概述', content: '数据可视化是将数据以图形方式呈现，帮助人们更直观地理解数据中的模式和趋势。' },
      { title: 'Matplotlib基础', content: 'Matplotlib是Python最基础的绘图库，提供了丰富的图表类型和自定义选项。' },
      { title: 'Seaborn简介', content: 'Seaborn是基于Matplotlib的统计可视化库，提供了更美观的默认样式和高级统计图表。' },
      { title: '折线图', content: '折线图适合展示数据随时间变化的趋势，是最常用的图表类型之一。' },
      { title: '柱状图', content: '柱状图用于比较不同类别的数值大小，可以水平或垂直展示。' },
      { title: '散点图', content: '散点图用于展示两个变量之间的关系，可以观察相关性和分布模式。' },
      { title: '热力图', content: '热力图使用颜色深浅表示数值大小，适合展示矩阵数据和相关性。' },
      { title: '图表美化', content: '通过调整颜色、标签、标题、图例等元素，可以使图表更加专业和易读。' }
    ],
    4: [
      { title: '描述统计', content: '描述统计包括均值、中位数、众数、标准差等指标，用于概括数据的基本特征。' },
      { title: '概率分布', content: '常见的概率分布包括正态分布、二项分布、泊松分布等，是统计推断的基础。' },
      { title: '假设检验', content: '假设检验是统计推断的重要方法，用于判断样本数据是否支持某个统计假设。' },
      { title: 't检验', content: 't检验用于比较两组数据的均值是否存在显著差异，包括独立样本t检验和配对t检验。' },
      { title: '卡方检验', content: '卡方检验用于检验分类变量之间的独立性或拟合优度。' },
      { title: '相关性分析', content: '相关性分析用于衡量两个变量之间的线性关系强度，常用Pearson相关系数。' },
      { title: '回归分析', content: '回归分析用于建立变量之间的关系模型，可以预测一个变量基于其他变量的值。' },
      { title: '方差分析', content: '方差分析(ANOVA)用于比较三组或更多组数据的均值差异。' }
    ],
    5: [
      { title: '机器学习概述', content: '机器学习是人工智能的一个分支，使计算机能够从数据中学习规律而无需明确编程。' },
      { title: '监督学习', content: '监督学习使用带标签的数据训练模型，包括分类和回归两种主要任务。' },
      { title: '无监督学习', content: '无监督学习使用无标签数据，主要任务包括聚类和降维。' },
      { title: 'Scikit-learn', content: 'Scikit-learn是Python最流行的机器学习库，提供了统一的API和各种算法实现。' },
      { title: '模型训练', content: '模型训练是通过优化算法调整模型参数，使模型在训练数据上表现良好的过程。' },
      { title: '模型评估', content: '使用准确率、精确率、召回率、F1分数等指标评估分类模型的性能。' },
      { title: '交叉验证', content: '交叉验证是一种评估模型泛化能力的技术，可以减少对特定训练集的依赖。' },
      { title: '超参数调优', content: '超参数是模型训练前需要设置的参数，可以使用网格搜索或随机搜索进行优化。' }
    ],
    6: [
      { title: '特征工程概述', content: '特征工程是将原始数据转换为更适合机器学习模型的特征的过程，是建模的关键步骤。' },
      { title: '特征选择', content: '特征选择是从所有可用特征中选择最相关特征的过程，可以提高模型性能和可解释性。' },
      { title: '特征提取', content: '特征提取是从原始数据创建新特征的过程，如从文本中提取关键词、从图像中提取边缘等。' },
      { title: '特征缩放', content: '特征缩放是将不同量纲的特征缩放到相同范围，常用的方法有标准化和归一化。' },
      { title: '类别编码', content: '类别编码是将分类变量转换为数值形式的过程，包括独热编码和标签编码等方法。' },
      { title: '特征组合', content: '特征组合是将多个特征组合成新特征，可以捕捉特征之间的交互关系。' },
      { title: '降维技术', content: '降维技术如PCA可以减少特征数量，同时保留数据的主要信息。' },
      { title: '特征重要性', content: '通过特征重要性分析可以了解哪些特征对模型预测贡献最大。' }
    ],
    7: [
      { title: '时间序列概述', content: '时间序列是按时间顺序排列的数据点序列，广泛应用于金融、经济、气象等领域。' },
      { title: '时间序列组件', content: '时间序列通常包含趋势、季节性、周期性和随机波动四个组成部分。' },
      { title: '平稳性', content: '平稳时间序列的统计特性不随时间变化，许多时间序列模型要求数据是平稳的。' },
      { title: '移动平均', content: '移动平均是时间序列平滑的常用方法，可以消除短期波动，显示长期趋势。' },
      { title: '指数平滑', content: '指数平滑是一种加权移动平均方法，对近期数据赋予更高的权重。' },
      { title: 'ARIMA模型', content: 'ARIMA是自回归积分滑动平均模型，是时间序列预测的经典方法。' },
      { title: '季节性分解', content: '季节性分解可以将时间序列分解为趋势、季节性和残差成分。' },
      { title: '预测评估', content: '使用MAE、RMSE、MAPE等指标评估时间序列预测模型的性能。' }
    ],
    8: [
      { title: '深度学习概述', content: '深度学习是机器学习的一个子领域，使用多层神经网络学习数据的层次化表示。' },
      { title: '神经网络基础', content: '神经网络由输入层、隐藏层和输出层组成，每层包含多个神经元节点。' },
      { title: '激活函数', content: '激活函数引入非线性，使神经网络能够学习复杂的模式，常用ReLU、Sigmoid、Tanh等。' },
      { title: '反向传播', content: '反向传播是训练神经网络的核心算法，通过链式法则计算梯度并更新权重。' },
      { title: 'TensorFlow', content: 'TensorFlow是Google开发的开源深度学习框架，提供了灵活的模型构建和训练工具。' },
      { title: 'PyTorch', content: 'PyTorch是Facebook开发的深度学习框架，以动态计算图和易用性著称。' },
      { title: '卷积神经网络', content: 'CNN是专门处理图像数据的神经网络架构，通过卷积层提取空间特征。' },
      { title: '循环神经网络', content: 'RNN适合处理序列数据，可以捕捉时间依赖性，LSTM和GRU是常见的变体。' }
    ],
    9: [
      { title: 'NLP概述', content: '自然语言处理是使计算机理解、解释和生成人类语言的技术领域。' },
      { title: '文本预处理', content: '文本预处理包括分词、去除停用词、词干提取等步骤，是NLP任务的基础。' },
      { title: '词袋模型', content: '词袋模型将文本表示为词的集合，忽略语法和词序，只关注词频。' },
      { title: 'TF-IDF', content: 'TF-IDF是一种统计方法，用于评估一个词对文档集的重要程度。' },
      { title: '词嵌入', content: '词嵌入将词映射到低维连续向量空间，可以捕捉词之间的语义关系。' },
      { title: '情感分析', content: '情感分析是确定文本情感倾向的任务，可以分为正面、负面和中性。' },
      { title: '文本分类', content: '文本分类是将文本分配到预定义类别的任务，如垃圾邮件检测、主题分类等。' },
      { title: '序列标注', content: '序列标注是为文本中每个词分配标签的任务，如命名实体识别、词性标注等。' }
    ],
    10: [
      { title: '推荐系统概述', content: '推荐系统是根据用户的历史行为和偏好，为用户推荐可能感兴趣的物品的系统。' },
      { title: '协同过滤', content: '协同过滤基于用户-物品交互数据，找到相似用户或相似物品进行推荐。' },
      { title: '基于用户的协同过滤', content: '找到与目标用户兴趣相似的其他用户，推荐这些用户喜欢的物品。' },
      { title: '基于物品的协同过滤', content: '找到与用户已喜欢物品相似的其他物品进行推荐。' },
      { title: '内容推荐', content: '基于物品的内容特征和用户的偏好特征进行推荐。' },
      { title: '矩阵分解', content: '矩阵分解将用户-物品评分矩阵分解为低维的用户和物品潜在因子矩阵。' },
      { title: '混合推荐', content: '结合多种推荐方法的优势，提供更准确和多样化的推荐结果。' },
      { title: '推荐评估', content: '使用准确率、召回率、覆盖率、多样性等指标评估推荐系统的性能。' }
    ],
    11: [
      { title: '数据安全概述', content: '数据安全是保护数据免受未经授权访问、使用、披露、破坏或修改的措施。' },
      { title: '数据加密', content: '加密是将数据转换为不可读格式的过程，只有拥有密钥的授权方才能解密。' },
      { title: '哈希算法', content: '哈希算法将任意长度数据映射为固定长度哈希值，常用于密码存储和数据完整性验证。' },
      { title: '数据脱敏', content: '数据脱敏是对敏感数据进行变形处理，使其在保持可用性的同时无法识别个人身份。' },
      { title: '差分隐私', content: '差分隐私是一种保护个人隐私的数学框架，在数据分析中添加噪声保护个体信息。' },
      { title: '访问控制', content: '访问控制限制用户对数据的访问权限，确保只有授权用户才能访问特定数据。' },
      { title: '数据匿名化', content: '数据匿名化是移除或修改个人标识信息，使数据无法追溯到特定个人。' },
      { title: '合规要求', content: '数据安全需要遵守GDPR、CCPA等数据保护法规的要求。' }
    ]
  };

  const projectTests: Record<number, { question: string; options: string[]; correct: number }[]> = {
    1: [
      { question: 'Pandas中用于创建DataFrame的函数是？', options: ['pd.DataFrame()', 'pd.create()', 'pd.new()', 'pd.table()'], correct: 0 },
      { question: 'NumPy中计算数组均值的函数是？', options: ['np.average()', 'np.mean()', 'np.avg()', 'np.median()'], correct: 1 },
      { question: 'Python中用于读取CSV文件的Pandas函数是？', options: ['read_csv()', 'load_csv()', 'open_csv()', 'import_csv()'], correct: 0 },
      { question: 'DataFrame的shape属性返回什么？', options: ['数据类型', '行列数', '列名', '索引'], correct: 1 },
      { question: 'NumPy数组的维度用什么属性查看？', options: ['dim', 'shape', 'ndim', 'size'], correct: 2 },
      { question: 'Pandas中用于查看数据基本统计信息的函数是？', options: ['summary()', 'describe()', 'info()', 'stats()'], correct: 1 },
      { question: 'Python中列表用哪种括号定义？', options: ['()', '{}', '[]', '<>'], correct: 2 },
      { question: 'NumPy中创建全零数组的函数是？', options: ['np.zeros()', 'np.empty()', 'np.ones()', 'np.full()'], correct: 0 },
      { question: 'DataFrame中选择单列返回的是什么类型？', options: ['DataFrame', 'Series', 'Array', 'List'], correct: 1 },
      { question: 'Pandas中用于数据合并的函数是？', options: ['join()', 'merge()', 'combine()', 'concat()'], correct: 3 }
    ],
    2: [
      { question: '检测缺失值的Pandas方法是？', options: ['isnull()', 'isna()', 'missing()', 'checknull()'], correct: 0 },
      { question: '删除包含缺失值行的方法是？', options: ['drop_na()', 'remove_na()', 'dropna()', 'clean()'], correct: 2 },
      { question: '用均值填充缺失值的方法是？', options: ['fill_mean()', 'fillna(mean())', 'replace_mean()', 'impute()'], correct: 1 },
      { question: 'Z分数用于检测什么？', options: ['缺失值', '异常值', '重复值', '错误值'], correct: 1 },
      { question: 'Min-Max标准化将数据缩放到什么范围？', options: ['[-1, 1]', '[0, 1]', '[0, 100]', '[-100, 100]'], correct: 1 },
      { question: '数据清洗的第一步通常是？', options: ['数据转换', '缺失值检测', '特征工程', '模型训练'], correct: 1 },
      { question: '箱线图中超出须线的点通常表示？', options: ['正常值', '异常值', '缺失值', '重复值'], correct: 1 },
      { question: 'Pandas中删除重复行的方法是？', options: ['drop_duplicates()', 'remove_duplicates()', 'unique()', 'distinct()'], correct: 0 },
      { question: '数据标准化的主要目的是？', options: ['去除异常值', '统一量纲', '填充缺失值', '删除重复值'], correct: 1 },
      { question: '对数变换常用于处理什么类型的数据？', options: ['正态分布', '右偏分布', '左偏分布', '均匀分布'], correct: 1 }
    ],
    3: [
      { question: 'Matplotlib中创建新图形的函数是？', options: ['plt.figure()', 'plt.plot()', 'plt.create()', 'plt.new()'], correct: 0 },
      { question: 'Seaborn是基于哪个库开发的？', options: ['NumPy', 'Pandas', 'Matplotlib', 'Plotly'], correct: 2 },
      { question: '折线图适合展示什么类型的数据？', options: ['分类数据', '时间序列数据', '地理数据', '网络数据'], correct: 1 },
      { question: '设置图表标题的函数是？', options: ['plt.title()', 'plt.header()', 'plt.caption()', 'plt.label()'], correct: 0 },
      { question: '热力图使用什么表示数值大小？', options: ['形状', '颜色深浅', '大小', '位置'], correct: 1 },
      { question: '散点图用于展示什么关系？', options: ['两个变量的关系', '时间趋势', '分布频率', '层次结构'], correct: 0 },
      { question: 'plt.xlabel()用于设置什么？', options: ['图表标题', 'X轴标签', 'Y轴标签', '图例'], correct: 1 },
      { question: '柱状图的英文是什么？', options: ['Line chart', 'Bar chart', 'Pie chart', 'Scatter plot'], correct: 1 },
      { question: 'plt.grid(True)的作用是什么？', options: ['显示网格', '隐藏网格', '设置背景', '设置边框'], correct: 0 },
      { question: 'Seaborn的默认样式比Matplotlib更？', options: ['简单', '美观', '复杂', '原始'], correct: 1 }
    ],
    4: [
      { question: '描述数据集中趋势的指标不包括？', options: ['均值', '中位数', '众数', '方差'], correct: 3 },
      { question: 't检验用于比较什么？', options: ['方差', '均值', '标准差', '相关系数'], correct: 1 },
      { question: 'p值小于0.05通常表示？', options: ['无显著差异', '有显著差异', '数据错误', '样本不足'], correct: 1 },
      { question: 'Pearson相关系数的取值范围是？', options: ['[0, 1]', '[-1, 1]', '[-∞, +∞]', '[0, 100]'], correct: 1 },
      { question: '标准差反映数据的什么特征？', options: ['集中趋势', '离散程度', '分布形状', '异常值'], correct: 1 },
      { question: '假设检验中的原假设通常表示？', options: ['存在差异', '无差异', '数据有效', '模型正确'], correct: 1 },
      { question: '回归分析中R²表示什么？', options: ['相关系数', '决定系数', '标准误差', 't统计量'], correct: 1 },
      { question: '方差分析(ANOVA)用于比较几组数据？', options: ['2组', '3组及以上', '只能1组', '任意组'], correct: 1 },
      { question: '正态分布的特征不包括？', options: ['对称', '钟形', '有偏', '单峰'], correct: 2 },
      { question: '置信区间表示什么？', options: ['数据范围', '估计的不确定性', '样本大小', '显著性水平'], correct: 1 }
    ],
    5: [
      { question: '监督学习和无监督学习的主要区别是？', options: ['算法复杂度', '是否有标签', '数据量大小', '训练时间'], correct: 1 },
      { question: '分类任务的输出是？', options: ['连续值', '离散类别', '概率值', '时间序列'], correct: 1 },
      { question: 'Scikit-learn中随机森林的类名是？', options: ['RandomForest', 'RandomForestClassifier', 'RandomTree', 'ForestClassifier'], correct: 1 },
      { question: '交叉验证的主要目的是？', options: ['加速训练', '评估泛化能力', '减少内存使用', '增加特征'], correct: 1 },
      { question: '过拟合的表现是？', options: ['训练误差高', '测试误差高', '训练误差低但测试误差高', '训练测试误差都低'], correct: 2 },
      { question: 'K折交叉验证中K通常取？', options: ['2', '5或10', '100', '数据量'], correct: 1 },
      { question: '网格搜索用于优化什么？', options: ['模型结构', '超参数', '损失函数', '评估指标'], correct: 1 },
      { question: '准确率(Accuracy)的计算是？', options: ['TP/(TP+FP)', '(TP+TN)/总数', 'TP/(TP+FN)', '2*(Precision*Recall)/(Precision+Recall)'], correct: 1 },
      { question: '集成学习的方法是？', options: ['使用单一模型', '组合多个模型', '减少特征', '增加数据'], correct: 1 },
      { question: '训练集、验证集、测试集的划分比例通常是？', options: ['50:25:25', '60:20:20', '70:15:15', '80:10:10'], correct: 3 }
    ],
    6: [
      { question: '特征工程的主要目的是？', options: ['增加数据量', '提高模型性能', '减少训练时间', '简化模型'], correct: 1 },
      { title: '独热编码(One-Hot)用于处理什么类型数据？', options: ['数值数据', '分类数据', '时间数据', '文本数据'], correct: 1 },
      { question: 'PCA是一种什么技术？', options: ['特征选择', '降维', '特征提取', '数据清洗'], correct: 1 },
      { question: '特征缩放的主要目的是？', options: ['去除异常值', '统一量纲防止某些特征主导', '增加特征数量', '减少缺失值'], correct: 1 },
      { question: '标签编码(Label Encoding)的问题是？', options: ['增加维度', '引入虚假顺序关系', '丢失信息', '计算复杂'], correct: 1 },
      { question: '特征重要性可以通过什么方法获得？', options: ['仅线性回归', '随机森林等树模型', '仅KNN', '仅SVM'], correct: 1 },
      { question: '多项式特征用于捕捉什么？', options: ['线性关系', '非线性关系', '时间关系', '空间关系'], correct: 1 },
      { question: '特征选择的 benefits 不包括？', options: ['减少过拟合', '提高训练速度', '增加模型复杂度', '提高可解释性'], correct: 2 },
      { question: '标准化(StandardScaler)使用什么统计量？', options: ['最小最大值', '均值和标准差', '中位数和IQR', '众数'], correct: 1 },
      { question: '文本特征提取常用的方法是？', options: ['TF-IDF', 'One-Hot', '标准化', '归一化'], correct: 0 }
    ],
    7: [
      { question: '时间序列数据的特点是？', options: ['独立性', '时间依赖性', '随机性', '均匀性'], correct: 1 },
      { question: '时间序列的四个组成部分不包括？', options: ['趋势', '季节性', '周期性', '相关性'], correct: 3 },
      { question: 'ARIMA模型中I代表什么？', options: ['自回归', '差分', '移动平均', '积分'], correct: 1 },
      { question: '移动平均主要用于？', options: ['预测', '平滑数据', '检测异常', '填充缺失'], correct: 1 },
      { question: '平稳时间序列的统计特性？', options: ['随时间变化', '不随时间变化', '周期性变化', '随机变化'], correct: 1 },
      { question: 'ADF检验用于检验什么？', options: ['正态性', '平稳性', '相关性', '异方差'], correct: 1 },
      { question: '季节性分解将时间序列分解为几个成分？', options: ['2', '3', '4', '5'], correct: 1 },
      { question: '指数平滑对近期数据赋予？', options: ['更低权重', '更高权重', '相同权重', '零权重'], correct: 1 },
      { question: '时间序列预测评估指标不包括？', options: ['MAE', 'RMSE', 'R²', '准确率'], correct: 3 },
      { question: 'SARIMA与ARIMA的区别是？', options: ['多了季节性成分', '多了趋势成分', '多了周期性', '没有区别'], correct: 0 }
    ],
    8: [
      { question: '深度学习中的深度指的是？', options: ['数据量大', '网络层数多', '训练时间长', '特征维度高'], correct: 1 },
      { question: 'ReLU激活函数的公式是？', options: ['f(x)=x', 'f(x)=max(0,x)', 'f(x)=1/(1+e^-x)', 'f(x)=tanh(x)'], correct: 1 },
      { question: '反向传播算法用于？', options: ['前向计算', '计算梯度更新权重', '数据预处理', '模型评估'], correct: 1 },
      { question: 'TensorFlow 2.x的默认执行模式是？', options: ['静态图', '动态图(Eager)', '符号执行', '延迟执行'], correct: 1 },
      { question: 'CNN中卷积层的主要作用是？', options: ['降维', '特征提取', '分类', '回归'], correct: 1 },
      { question: 'RNN适合处理什么类型数据？', options: ['图像', '序列数据', '表格数据', '图数据'], correct: 1 },
      { question: 'LSTM解决了RNN的什么问题？', options: ['梯度消失/爆炸', '计算速度慢', '内存占用大', '参数量大'], correct: 0 },
      { question: 'Dropout的作用是？', options: ['加速训练', '防止过拟合', '增加模型容量', '减少内存'], correct: 1 },
      { question: '批量归一化(BatchNorm)的作用是？', options: ['增加层数', '加速训练稳定分布', '减少参数', '增加正则化'], correct: 1 },
      { question: '深度学习模型训练时常用的优化器是？', options: ['SGD', 'Adam', 'RMSprop', '以上都是'], correct: 3 }
    ],
    9: [
      { question: 'NLP中的分词是指？', options: ['分割句子', '将文本分割成词或字', '分割段落', '分割文档'], correct: 1 },
      { question: 'TF-IDF中IDF表示？', options: ['词频', '逆文档频率', '文档频率', '词权重'], correct: 1 },
      { question: '词嵌入(Word Embedding)将词表示为？', options: ['独热向量', '低维稠密向量', '整数索引', '字符串'], correct: 1 },
      { question: '情感分析属于什么任务？', options: ['分类任务', '回归任务', '聚类任务', '生成任务'], correct: 0 },
      { question: '停用词是指？', options: ['重要的词', '常见但信息量少的词', '生僻词', '专业术语'], correct: 1 },
      { question: 'Word2Vec包含哪两种模型？', options: ['CBOW和Skip-gram', 'RNN和LSTM', 'CNN和RNN', 'BERT和GPT'], correct: 0 },
      { question: '命名实体识别(NER)是？', options: ['识别文本中的人名地名等实体', '识别文本主题', '识别文本情感', '识别文本语言'], correct: 0 },
      { question: '文本分类中词袋模型的缺点是？', options: ['忽略了词序信息', '维度太高', '计算复杂', '需要大量数据'], correct: 0 },
      { question: 'BERT是基于什么架构？', options: ['CNN', 'RNN', 'Transformer', 'LSTM'], correct: 2 },
      { question: 'Seq2Seq模型常用于？', options: ['文本分类', '机器翻译', '情感分析', '命名实体识别'], correct: 1 }
    ],
    10: [
      { question: '协同过滤基于什么进行推荐？', options: ['物品内容', '用户行为', '专家知识', '随机选择'], correct: 1 },
      { question: '冷启动问题是指？', options: ['系统故障', '新用户或新物品缺乏历史数据', '算法复杂', '计算速度慢'], correct: 1 },
      { question: '余弦相似度用于衡量什么？', options: ['距离', '向量方向相似性', '大小差异', '时间差异'], correct: 1 },
      { question: '矩阵分解将用户-物品矩阵分解为？', options: ['两个矩阵', '三个矩阵', '四个矩阵', '一个矩阵'], correct: 0 },
      { question: '基于内容的推荐依赖于？', options: ['用户行为', '物品特征', '社交网络', '地理位置'], correct: 1 },
      { question: '推荐系统的评估指标不包括？', options: ['准确率', '召回率', '训练时间', '多样性'], correct: 2 },
      { question: '混合推荐系统的优点是？', options: ['简单', '结合多种方法优势', '计算快', '不需要数据'], correct: 1 },
      { question: '协同过滤的缺点不包括？', options: ['冷启动问题', '数据稀疏性', '需要物品特征', '可扩展性'], correct: 2 },
      { question: 'Top-N推荐是指？', options: ['推荐N个物品', '推荐前N%物品', '推荐N类物品', '推荐N天内的物品'], correct: 0 },
      { question: '隐式反馈包括？', options: ['评分', '点击、浏览', '评论', '点赞'], correct: 1 }
    ],
    11: [
      { question: '数据加密的主要目的是？', options: ['压缩数据', '保护数据机密性', '加速传输', '方便存储'], correct: 1 },
      { question: '哈希函数的特点是？', options: ['可逆', '不可逆', '压缩', '加密'], correct: 1 },
      { question: '数据脱敏是指？', options: ['删除数据', '对敏感数据变形处理', '加密数据', '备份数据'], correct: 1 },
      { question: '差分隐私通过什么保护隐私？', options: ['加密', '添加噪声', '访问控制', '数据分割'], correct: 1 },
      { question: 'GDPR是哪个地区的数据保护法规？', options: ['美国', '欧盟', '中国', '日本'], correct: 1 },
      { question: '对称加密和非对称加密的区别是？', options: ['加密速度', '密钥使用方式', '算法复杂度', '以上都是'], correct: 3 },
      { question: 'k-匿名是一种？', options: ['加密方法', '匿名化技术', '访问控制', '审计方法'], correct: 1 },
      { question: '数据安全的三要素不包括？', options: ['机密性', '完整性', '可用性', '便利性'], correct: 3 },
      { question: '同态加密允许？', options: ['对密文进行计算', '快速解密', '压缩数据', '增加安全性'], correct: 0 },
      { question: '隐私保护计算的目标是？', options: ['数据可用不可见', '数据完全公开', '数据加密存储', '数据备份'], correct: 0 }
    ]
  };

  const handleProjectSelect = (projectId: number) => {
    const project = trainingProjects.find(p => p.id === projectId);
    if (project) {
      setActiveProject(projectId);
      setUserCode(project.codeTemplate);
      setScore(null);
      setFeedback('');
      setShowAnswer(false);
      setShowBasics(false);
      setShowTest(false);
      setTestStarted(false);
      setCurrentQuestion(0);
      setTestAnswers({});
      setTestSubmitted(false);
      setTestScore(0);
      setActiveChapter(0);
    }
  };

  const handleRunCode = () => {
    const project = trainingProjects.find(p => p.id === activeProject);
    if (!project) return;

    const codeLines = userCode.trim().split('\n');
    const hasRequiredImports = codeLines.some(line => 
      line.includes('import') || line.includes('from')
    );
    const hasPrintOrOutput = codeLines.some(line => 
      line.includes('print') || line.includes('plt.show') || line.includes('summary')
    );

    if (!hasRequiredImports) {
      setScore(30);
      setFeedback('代码缺少必要的导入语句。请添加所需的库导入，如import pandas as pd等。');
      return;
    }

    if (!hasPrintOrOutput) {
      setScore(50);
      setFeedback('代码看起来有导入语句，但缺少输出语句。请添加print语句或使用其他方式展示结果。');
      return;
    }

    setScore(85);
    setFeedback('代码结构正确！包含必要的导入和输出语句。在实际环境中运行可查看具体输出结果。');
  };

  const handleSubmitTest = () => {
    if (!activeProject) return;
    
    const tests = projectTests[activeProject];
    let correct = 0;
    
    tests.forEach((q, idx) => {
      if (testAnswers[idx] === q.options[q.correct]) {
        correct++;
      }
    });
    
    const score = Math.round((correct / tests.length) * 100);
    setTestScore(score);
    setTestSubmitted(true);
  };

  const resetTest = () => {
    setTestAnswers({});
    setTestSubmitted(false);
    setTestScore(0);
    setCurrentQuestion(0);
  };

  const renderProjectList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {trainingProjects.map(project => (
        <div
          key={project.id}
          onClick={() => handleProjectSelect(project.id)}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                {project.icon}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.difficulty === '初级' ? 'bg-green-100 text-green-700' :
                project.difficulty === '中级' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {project.difficulty}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{project.duration}</span>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center text-blue-600 text-sm font-medium">
              <span>开始学习</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPractice = () => {
    if (!activeProject) {
      return (
        <div className="text-center py-16">
          <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">选择一个项目进行练习</h3>
          <p className="text-gray-500">请先从项目列表中选择一个感兴趣的实训项目</p>
          <button
            onClick={() => setActiveSection('projects')}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            浏览项目
          </button>
        </div>
      );
    }

    const project = trainingProjects.find(p => p.id === activeProject);
    if (!project) return null;

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="p-3 bg-blue-50 rounded-lg mr-4">
                {project.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowBasics(!showBasics)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  showBasics ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <BookOpen className="w-4 h-4 inline mr-2" />
                基础知识
              </button>
              <button
                onClick={() => setShowTest(!showTest)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  showTest ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Award className="w-4 h-4 inline mr-2" />
                测试
              </button>
            </div>
          </div>

          {showBasics && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">基础知识讲解</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {projectBasics[activeProject]?.map((chapter, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveChapter(idx)}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      activeChapter === idx 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white hover:bg-blue-100'
                    }`}
                  >
                    <div className="font-medium text-sm">{chapter.title}</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {projectBasics[activeProject]?.[activeChapter]?.title}
                </h4>
                <p className="text-gray-600">
                  {projectBasics[activeProject]?.[activeChapter]?.content}
                </p>
              </div>
            </div>
          )}

          {showTest && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">知识测试</h3>
              {!testStarted ? (
                <div className="text-center py-8">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">本测试包含10道选择题，来检验你的学习成果吧！</p>
                  <button
                    onClick={() => setTestStarted(true)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    开始测试
                  </button>
                </div>
              ) : testSubmitted ? (
                <div className="space-y-4">
                  <div className="text-center py-4">
                    <div className={`text-4xl font-bold mb-2 ${
                      testScore >= 80 ? 'text-green-600' : testScore >= 60 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {testScore}分
                    </div>
                    <p className="text-gray-600">
                      {testScore >= 80 ? '优秀！继续保持！' : testScore >= 60 ? '及格，还有提升空间！' : '需要加强学习！'}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {projectTests[activeProject]?.map((q, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg">
                        <div className="flex items-start">
                          {testAnswers[idx] === q.options[q.correct] ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <p className="font-medium text-gray-800">{idx + 1}. {q.question}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              你的答案: {testAnswers[idx] || '未作答'} | 
                              正确答案: {q.options[q.correct]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={resetTest}
                    className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    重新测试
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-medium text-gray-800 mb-3">
                      {currentQuestion + 1}. {projectTests[activeProject]?.[currentQuestion]?.question}
                    </p>
                    <div className="space-y-2">
                      {projectTests[activeProject]?.[currentQuestion]?.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setTestAnswers({ ...testAnswers, [currentQuestion]: option });
                          }}
                          className={`w-full p-3 text-left rounded-lg transition-colors ${
                            testAnswers[currentQuestion] === option
                              ? 'bg-green-100 border-green-300 border'
                              : 'bg-gray-50 hover:bg-gray-100'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                      disabled={currentQuestion === 0}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
                    >
                      上一题
                    </button>
                    <span className="text-gray-600 py-2">
                      {currentQuestion + 1} / {projectTests[activeProject]?.length}
                    </span>
                    {currentQuestion < (projectTests[activeProject]?.length || 0) - 1 ? (
                      <button
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        下一题
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmitTest}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        提交
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">代码练习</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Lightbulb className="w-4 h-4 inline mr-1" />
                  {showAnswer ? '隐藏答案' : '查看答案'}
                </button>
                <button
                  onClick={handleRunCode}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Play className="w-4 h-4 inline mr-1" />
                  运行代码
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <CodeMirror
                value={userCode}
                height="300px"
                theme="light"
                extensions={[python()]}
                onChange={(value) => setUserCode(value)}
                className="text-sm"
              />
            </div>

            {showAnswer && (
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-800 mb-2">参考答案</h4>
                <pre className="text-sm text-gray-700 overflow-x-auto">{project.codeTemplate}</pre>
              </div>
            )}

            {score !== null && (
              <div className={`p-4 rounded-lg ${
                score >= 80 ? 'bg-green-50 border-green-200' :
                score >= 60 ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              } border`}>
                <div className="flex items-center mb-2">
                  {score >= 80 ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  ) : score >= 60 ? (
                    <Zap className="w-5 h-5 text-yellow-600 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  )}
                  <span className="font-semibold">得分: {score}分</span>
                </div>
                <p className="text-gray-700">{feedback}</p>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            setActiveProject(null);
            setShowBasics(false);
            setShowTest(false);
          }}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← 返回项目列表
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-800">数据分析实训平台</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setActiveSection('projects')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'projects'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4 inline mr-2" />
                实训项目
              </button>
              <button
                onClick={() => setActiveSection('practice')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'practice'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Code className="w-4 h-4 inline mr-2" />
                实战练习
              </button>
              <button
                onClick={() => setActiveSection('resources')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === 'resources'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                学习资源
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'projects' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">实训项目</h1>
              <p className="text-gray-600">选择适合你的项目，开始数据分析学习之旅</p>
            </div>
            {renderProjectList()}
          </div>
        )}

        {activeSection === 'practice' && renderPractice()}

        {activeSection === 'resources' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">学习资源</h1>
              <p className="text-gray-600">丰富的学习资料助你快速提升数据分析技能</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Database className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Python基础教程</h3>
                <p className="text-gray-600 text-sm">从零开始学习Python编程语言</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <BarChart3 className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">数据可视化指南</h3>
                <p className="text-gray-600 text-sm">掌握各种图表的绘制技巧</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <Brain className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">机器学习入门</h3>
                <p className="text-gray-600 text-sm">了解机器学习的基本概念和算法</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DataAnalysisTechSite;
