import React, { useState } from 'react';
import { BookOpen, Code, FileText, ChevronRight, CheckCircle, XCircle, Play, Lightbulb, Award, BarChart3, Database, Brain, TrendingUp, Target, Layers, Cpu, Network, Shield, Zap, RefreshCw, RotateCcw } from 'lucide-react';
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
      starterCode: '# 练习：创建一个DataFrame并计算平均年龄\n# 提示：\n# 1. 导入 pandas 和 numpy 库\n# 2. 创建一个包含姓名、年龄、城市的字典数据\n# 3. 用 pd.DataFrame() 创建数据框\n# 4. 打印数据框和平均年龄\n\n# 在这里写你的代码...\n',
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
      starterCode: '# 练习：数据清洗与缺失值处理\n# 提示：\n# 1. 导入 pandas 和 numpy 库\n# 2. 创建包含缺失值(np.nan)的示例数据\n# 3. 使用 df.fillna() 方法用均值填充缺失值\n# 4. 打印清洗后的数据\n\n# 在这里写你的代码...\n',
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
      starterCode: '# 练习：使用Matplotlib绘制折线图\n# 提示：\n# 1. 导入 matplotlib.pyplot 和 numpy 库\n# 2. 创建示例数据（x轴和y轴数据）\n# 3. 使用 plt.plot() 绘制折线图\n# 4. 添加标题、坐标轴标签和网格\n# 5. 使用 plt.show() 显示图表\n\n# 在这里写你的代码...\n',
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
      starterCode: '# 练习：描述统计与t检验\n# 提示：\n# 1. 导入 numpy 和 scipy.stats 库\n# 2. 创建两组实验数据\n# 3. 计算两组数据的描述统计量（均值、标准差等）\n# 4. 使用独立样本t检验比较两组差异\n\n# 在这里写你的代码...\n',
      codeTemplate: 'import numpy as np\nfrom scipy import stats\n\n# 两组数据\ngroup1 = [23, 25, 28, 30, 32]\ngroup2 = [20, 22, 25, 27, 29]\n\n# 计算描述统计\nprint(f"组1均值: {np.mean(group1):.2f}")\nprint(f"组2均值: {np.mean(group2):.2f}")\n\n# t检验\nt_stat, p_value = stats.ttest_ind(group1, group2)\nprint(f"t统计量: {t_stat:.4f}")\nprint(f"p值: {p_value:.4f}")\n\nif p_value < 0.05:\n    print("两组数据存在显著差异")\nelse:\n    print("两组数据无显著差异")',
      expectedOutput: '组1均值: 27.60\n组2均值: 24.60\nt统计量: 1.4142\np值: 0.1960\n两组数据无显著差异'
    },
    {
      id: 5,
      title: '聚类算法实战',
      description: '掌握KMeans、DBSCAN、层次聚类等常用聚类算法的原理与实现',
      difficulty: '中级',
      duration: '3周',
      icon: <Brain className="w-6 h-6" />,
      starterCode: '# 练习：KMeans/DBSCAN/层次聚类实战\n# 提示：\n# 1. 导入 sklearn.cluster 中的聚类算法和 datasets 中的数据集\n# 2. 使用 make_blobs 生成模拟聚类数据\n# 3. 分别训练 KMeans、DBSCAN、层次聚类模型\n# 4. 打印各算法的聚类结果标签\n\n# 在这里写你的代码...\n',
      codeTemplate: 'from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering\nfrom sklearn.datasets import make_blobs\nimport matplotlib.pyplot as plt\n\n# 生成模拟数据\nX, _ = make_blobs(n_samples=150, n_features=2, centers=3, random_state=42)\n\n# KMeans聚类\nkmeans = KMeans(n_clusters=3, random_state=42)\nkmeans_labels = kmeans.fit_predict(X)\n\n# DBSCAN聚类\ndbscan = DBSCAN(eps=0.5, min_samples=5)\ndbscan_labels = dbscan.fit_predict(X)\n\n# 层次聚类\nhierarchical = AgglomerativeClustering(n_clusters=3)\nhierarchical_labels = hierarchical.fit_predict(X)\n\nprint("KMeans聚类结果:", set(kmeans_labels))\nprint("DBSCAN聚类结果:", set(dbscan_labels))\nprint("层次聚类结果:", set(hierarchical_labels))',
      expectedOutput: 'KMeans聚类结果: {0, 1, 2}\nDBSCAN聚类结果: {0, 1, 2}\n层次聚类结果: {0, 1, 2}'
    },
    {
      id: 6,
      title: '聚类算法可视化',
      description: '交互式演示聚类算法执行过程，直观理解聚类原理',
      difficulty: '中级',
      duration: '2周',
      icon: <BarChart3 className="w-6 h-6" />,
      codeTemplate: '# 聚类算法可视化演示\n# 访问可视化模块查看动态演示\n# 支持算法: KMeans, KMeans++, DBSCAN, OPTICS, 层次聚类, GMM\n\nprint("聚类算法可视化模块已集成")\nprint("支持以下聚类算法:")\nprint("1. KMeans - 基于距离的划分聚类")\nprint("2. KMeans++ - 改进的KMeans，优化初始中心")\nprint("3. DBSCAN - 基于密度的聚类")\nprint("4. OPTICS - DBSCAN改进版，支持可变密度")\nprint("5. 层次聚类 - 自底向上的聚合聚类")\nprint("6. GMM - 高斯混合模型，软聚类")',
      expectedOutput: '聚类算法可视化模块已集成\n支持以下聚类算法:\n1. KMeans - 基于距离的划分聚类\n2. KMeans++ - 改进的KMeans，优化初始中心\n3. DBSCAN - 基于密度的聚类\n4. OPTICS - DBSCAN改进版，支持可变密度\n5. 层次聚类 - 自底向上的聚合聚类\n6. GMM - 高斯混合模型，软聚类'
    },
    {
      id: 7,
      title: '特征工程',
      description: '掌握特征选择、特征提取和特征转换技术',
      difficulty: '中级',
      duration: '3周',
      icon: <Layers className="w-6 h-6" />,
      starterCode: '# 练习：特征编码与标准化\n# 提示：\n# 1. 导入 pandas 和 sklearn.preprocessing 中的预处理工具\n# 2. 创建包含类别特征和数值特征的示例数据\n# 3. 使用 LabelEncoder 对类别特征进行标签编码\n# 4. 使用 StandardScaler 对数值特征进行标准化\n\n# 在这里写你的代码...\n',
      codeTemplate: 'import pandas as pd\nfrom sklearn.preprocessing import StandardScaler, LabelEncoder\n\n# 示例数据\ndata = {\n    "类别": ["A", "B", "A", "C"],\n    "数值1": [10, 20, 15, 25],\n    "数值2": [100, 200, 150, 250]\n}\ndf = pd.DataFrame(data)\n\n# 标签编码\nle = LabelEncoder()\ndf["类别编码"] = le.fit_transform(df["类别"])\n\n# 标准化\nscaler = StandardScaler()\ndf[["数值1标准化", "数值2标准化"]] = scaler.fit_transform(df[["数值1", "数值2"]])\n\nprint(df)',
      expectedOutput: '  类别  数值1  数值2  类别编码  数值1标准化  数值2标准化\n0   A     10    100       0   -1.341641   -1.341641\n1   B     20    200       1    0.447214    0.447214\n2   A     15    150       0   -0.447214   -0.447214\n3   C     25    250       2    1.341641    1.341641'
    },
    {
      id: 8,
      title: '时间序列分析',
      description: '学习时间序列建模、趋势分析和预测方法',
      difficulty: '高级',
      duration: '4周',
      icon: <Target className="w-6 h-6" />,
      starterCode: '# 练习：时间序列与移动平均\n# 提示：\n# 1. 导入 pandas 和 numpy 库\n# 2. 使用 pd.date_range 创建日期索引，并构建时间序列数据\n# 3. 使用 rolling().mean() 计算移动平均值\n# 4. 使用 pct_change() 计算增长率\n\n# 在这里写你的代码...\n',
      codeTemplate: 'import pandas as pd\nimport numpy as np\n\n# 创建时间序列数据\ndates = pd.date_range(start="2024-01-01", periods=10, freq="D")\nvalues = [100, 102, 105, 103, 108, 110, 112, 115, 113, 118]\n\nts = pd.Series(values, index=dates)\nprint("时间序列数据:")\nprint(ts)\n\n# 计算移动平均\nma = ts.rolling(window=3).mean()\nprint("\\n3日移动平均:")\nprint(ma)\n\n# 计算增长率\ngrowth_rate = ts.pct_change() * 100\nprint("\\n日增长率(%):")\nprint(growth_rate)',
      expectedOutput: '时间序列数据:\n2024-01-01    100\n2024-01-02    102\n2024-01-03    105\n2024-01-04    103\n2024-01-05    108\n2024-01-06    110\n2024-01-07    112\n2024-01-08    115\n2024-01-09    113\n2024-01-10    118\nFreq: D, dtype: int64\n\n3日移动平均:\n2024-01-01          NaN\n2024-01-02          NaN\n2024-01-03    102.333333\n2024-01-04    103.333333\n2024-01-05    105.333333\n2024-01-06    107.000000\n2024-01-07    110.000000\n2024-01-08    112.333333\n2024-01-09    113.333333\n2024-01-10    115.333333\nFreq: D, dtype: float64\n\n日增长率(%):\n2024-01-01         NaN\n2024-01-02    2.000000\n2024-01-03    2.941176\n2024-01-04   -1.904762\n2024-01-05    4.854369\n2024-01-06    1.851852\n2024-01-07    1.818182\n2024-01-08    2.678571\n2024-01-09   -1.739130\n2024-01-10    4.424779\nFreq: D, dtype: float64'
    },
    {
      id: 9,
      title: '深度学习基础',
      description: '了解神经网络、TensorFlow和PyTorch框架使用',
      difficulty: '高级',
      duration: '4周',
      icon: <Cpu className="w-6 h-6" />,
      starterCode: '# 练习：神经网络模型创建\n# 提示：\n# 1. 导入 tensorflow 和 numpy 库\n# 2. 使用 tf.keras.Sequential 构建神经网络模型\n# 3. 编译模型，指定优化器和损失函数\n# 4. 使用 model.summary() 打印模型结构\n\n# 在这里写你的代码...\n',
      codeTemplate: 'import tensorflow as tf\nimport numpy as np\n\n# 设置随机种子\nnp.random.seed(42)\ntf.random.set_seed(42)\n\n# 创建简单的神经网络模型\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(10, activation="relu", input_shape=(4,)),\n    tf.keras.layers.Dense(3, activation="softmax")\n])\n\n# 编译模型\nmodel.compile(optimizer="adam",\n              loss="sparse_categorical_crossentropy",\n              metrics=["accuracy"])\n\n# 打印模型结构\nmodel.summary()\nprint("\\n模型创建成功！")',
      expectedOutput: 'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n dense (Dense)               (None, 10)                50        \n                                                                 \n dense_1 (Dense)             (None, 3)                 33        \n                                                                 \n=================================================================\nTotal params: 83\nTrainable params: 83\nNon-trainable params: 0\n_________________________________________________________________\n\n模型创建成功！'
    },
    {
      id: 10,
      title: '自然语言处理',
      description: '学习文本分析、情感分析和文本分类技术',
      difficulty: '高级',
      duration: '4周',
      icon: <FileText className="w-6 h-6" />,
      starterCode: '# 练习：文本情感分析\n# 提示：\n# 1. 导入 TfidfVectorizer 和 MultinomialNB 朴素贝叶斯分类器\n# 2. 准备文本数据和对应的情感标签（正面/负面）\n# 3. 使用 TF-IDF 向量化文本并训练分类模型\n# 4. 对新文本进行情感预测并输出结果\n\n# 在这里写你的代码...\n',
      codeTemplate: 'from sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.naive_bayes import MultinomialNB\n\n# 示例文本数据\ntexts = [\n    "这个产品非常好用，推荐购买",\n    "质量很差，不推荐",\n    "服务态度很好，满意",\n    "物流太慢了，不满意"\n]\nlabels = [1, 0, 1, 0]  # 1: 正面, 0: 负面\n\n# TF-IDF向量化\nvectorizer = TfidfVectorizer()\nX = vectorizer.fit_transform(texts)\n\n# 训练朴素贝叶斯分类器\nclf = MultinomialNB()\nclf.fit(X, labels)\n\n# 预测新文本\nnew_text = ["产品质量不错"]\nnew_X = vectorizer.transform(new_text)\nprediction = clf.predict(new_X)\n\nsentiment = "正面" if prediction[0] == 1 else "负面"\nprint(f"文本: {new_text[0]}")\nprint(f"情感分析结果: {sentiment}")',
      expectedOutput: '文本: 产品质量不错\n情感分析结果: 正面'
    },
    {
      id: 11,
      title: '推荐系统',
      description: '掌握协同过滤、内容推荐和混合推荐算法',
      difficulty: '高级',
      duration: '4周',
      icon: <Network className="w-6 h-6" />,
      starterCode: '# 练习：协同过滤推荐\n# 提示：\n# 1. 导入 numpy 和 sklearn.metrics.pairwise 中的余弦相似度\n# 2. 创建用户-物品评分矩阵\n# 3. 计算用户之间的余弦相似度\n# 4. 基于相似用户的偏好为目标用户生成推荐\n\n# 在这里写你的代码...\n',
      codeTemplate: 'import numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\n# 用户-物品评分矩阵\nratings = np.array([\n    [5, 3, 0, 1],\n    [4, 0, 0, 1],\n    [1, 1, 0, 5],\n    [0, 0, 5, 4],\n    [0, 1, 5, 4]\n])\n\n# 计算用户相似度\nuser_similarity = cosine_similarity(ratings)\nprint("用户相似度矩阵:")\nprint(user_similarity.round(3))\n\n# 为用户0推荐物品\nuser_id = 0\nsimilar_users = user_similarity[user_id].argsort()[::-1][1:]\nprint(f"\\n与用户{user_id}最相似的用户: {similar_users[:2]}")\n\n# 简单推荐：找到相似用户喜欢但目标用户未评分的物品\nrecommendations = []\nfor item in range(ratings.shape[1]):\n    if ratings[user_id, item] == 0:\n        score = np.mean([ratings[u, item] for u in similar_users[:2] if ratings[u, item] > 0])\n        if score > 0:\n            recommendations.append((item, score))\n\nprint(f"\\n为用户{user_id}推荐的物品:")\nfor item, score in recommendations:\n    print(f"  物品{item}: 预测评分 {score:.2f}")',
      expectedOutput: '用户相似度矩阵:\n[[1.    0.929 0.178 0.169 0.297]\n [0.929 1.    0.26  0.196 0.346]\n [0.178 0.26  1.    0.628 0.707]\n [0.169 0.196 0.628 1.    0.995]\n [0.297 0.346 0.707 0.995 1.   ]]\n\n与用户0最相似的用户: [1 4 2 3]\n\n为用户0推荐的物品:\n  物品2: 预测评分 2.50'
    },
    {
      id: 12,
      title: '数据安全与隐私',
      description: '学习数据加密、脱敏技术和隐私保护方法',
      difficulty: '高级',
      duration: '2周',
      icon: <Shield className="w-6 h-6" />,
      starterCode: '# 练习：数据脱敏与哈希\n# 提示：\n# 1. 导入 hashlib 和 pandas 库\n# 2. 创建包含姓名、手机号、身份证号等敏感信息的数据\n# 3. 实现哈希函数对敏感字段进行加密\n# 4. 对手机号和身份证号进行脱敏处理（隐藏中间几位）\n\n# 在这里写你的代码...\n',
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
      { title: '聚类概述', content: '聚类是无监督学习的核心任务，将数据点分组到不同的簇中，使同一簇内的数据点相似度高，不同簇间相似度低。聚类不需要标签，自动发现数据中的模式结构。' },
      { title: 'KMeans算法原理', content: 'KMeans通过迭代优化将数据划分为K个簇：1)随机选择K个初始质心；2)计算每个点到质心的距离并分配到最近簇；3)重新计算各簇质心；4)重复直到质心不再变化。时间复杂度O(n*K*t)，n为样本数，K为簇数，t为迭代次数。' },
      { title: 'DBSCAN算法原理', content: 'DBSCAN基于密度聚类：ε邻域内点数≥MinPts的点为核心点；从核心点出发密度可达的点形成簇；不被任何簇包含的点为噪声。能发现任意形状簇，无需指定K值。' },
      { title: '层次聚类原理', content: '凝聚式层次聚类：每个点初始为一类，计算类间距离，合并距离最近的两类，重复直到只剩一类。可生成树状图(Dendrogram)展示层次结构，通过截断树确定簇数。' },
      { title: '聚类评估指标详解', content: '轮廓系数：[-1,1]，值越大聚类效果越好；Calinski-Harabasz指数：值越大聚类效果越好；Davies-Bouldin指数：值越小聚类效果越好；CH指标：类内方差小、类间方差大则值大。' },
      { title: '肘部法则应用', content: '绘制K与SSE(误差平方和)的关系图，SSE随K增大而减小，当K超过某个值后下降变缓，拐点处即为最佳K值。结合业务场景和领域知识综合判断。' },
      { title: '聚类可视化方法', content: '散点图直接展示二维数据；PCA降维将高维数据投影到二维平面；t-SNE保留局部结构，适合可视化但计算量大；UMAP兼顾局部和全局结构，速度更快。' },
      { title: '聚类应用实战', content: '客户细分：基于消费行为将客户分为不同群体；图像分割：识别图像中的不同物体区域；文档分类：自动将文档归类到不同主题；异常检测：离群点检测识别欺诈行为。' }
    ],
    6: [
      { title: '可视化模块功能', content: '聚类算法可视化模块提供交互式演示，支持6种算法：KMeans、KMeans++、DBSCAN、OPTICS、层次聚类、GMM。可调节参数，观察聚类过程动态变化。' },
      { title: 'KMeans++优化原理', content: '改进初始中心选择：第一个中心随机选择；后续中心按距离已有中心越远概率越大的原则选择。相比随机初始化，显著减少迭代次数，提高收敛速度和结果稳定性。' },
      { title: 'OPTICS算法详解', content: 'DBSCAN的改进版，计算每个点的核心距离和可达距离，生成有序的可达性图。支持可变密度数据，通过可达性图的"山谷"识别不同密度的簇，比DBSCAN更鲁棒。' },
      { title: 'GMM模型原理', content: '假设数据由多个高斯分布混合生成，每个成分有均值、协方差和权重。通过EM算法估计参数，输出每个点属于各成分的概率(软聚类)，比KMeans更灵活。' },
      { title: 'EM算法步骤', content: '期望步(E步)：计算每个点属于各成分的后验概率；最大化步(M步)：根据后验概率更新各成分的均值、协方差和权重。交替迭代直到参数收敛或达到最大迭代次数。' },
      { title: '算法对比分析', content: 'KMeans：简单高效，适合球状簇；DBSCAN：无需K值，能发现任意形状；层次聚类：层次结构清晰；GMM：软聚类，适合椭圆簇；OPTICS：支持可变密度。' },
      { title: '参数调优策略', content: 'KMeans调K值：肘部法则+轮廓系数；DBSCAN调ε和MinPts：领域知识+网格搜索；GMM调成分数：BIC/AIC准则；层次聚类调距离阈值：树状图分析。' },
      { title: '聚类最佳实践', content: '1.数据预处理：标准化/归一化；2.探索性分析：可视化了解数据分布；3.尝试多种算法对比结果；4.结合领域知识解释簇含义；5.评估指标验证效果。' }
    ],
    7: [
      { title: '特征工程概述', content: '特征工程是将原始数据转换为更适合机器学习模型的特征的过程，是建模成功的关键步骤。好的特征可以让简单模型表现出色，差的特征会让复杂模型效果不佳。业界有"数据决定上限，模型逼近上限"的说法。' },
      { title: '特征选择方法', content: '过滤法：基于统计指标(相关系数、卡方检验)筛选特征；包裹法：用模型性能评估特征子集(递归特征消除RFE)；嵌入法：模型训练过程中自动选择特征(L1正则化)。各有优劣，需根据数据规模和模型类型选择。' },
      { title: '特征提取技术', content: '文本特征：TF-IDF、Word2Vec、BERT嵌入；图像特征：SIFT、HOG、CNN特征；时序特征：滑动窗口统计、傅里叶变换；图特征：节点度、中心性指标、图嵌入。' },
      { title: '特征缩放详解', content: '标准化(StandardScaler)：均值为0，标准差为1，适合正态分布数据；归一化(MinMaxScaler)：缩放到[0,1]，适合有边界的数据；RobustScaler：基于中位数和IQR，对异常值鲁棒。' },
      { title: '类别编码技术', content: '独热编码：适合类别无顺序关系；标签编码：适合有序类别；目标编码：用目标变量的统计量编码，需注意防止数据泄露；频率编码：用类别频率编码。' },
      { title: '特征组合策略', content: '数值特征：加减乘除运算、比例特征；类别特征：交叉特征(A&B)；时间特征：时间差、周期性特征；领域特征：业务知识驱动的特征组合。自动化工具：Featuretools自动生成特征。' },
      { title: '降维技术详解', content: 'PCA：线性降维，最大化方差保留信息；t-SNE：非线性降维，保留局部结构，适合可视化；UMAP：兼顾局部和全局结构，速度快；Autoencoder：深度学习降维，适合复杂数据。' },
      { title: '特征重要性分析', content: '树模型：Gini重要性、Permutation重要性；线性模型：系数绝对值；SHAP值：解释每个特征对预测的贡献；LIME：局部可解释性。特征重要性可用于特征选择和模型解释。' }
    ],
    8: [
      { title: '时间序列概述', content: '时间序列是按时间顺序排列的数据点序列，广泛应用于金融预测、经济分析、气象预报、销售预测等领域。时间序列的核心特征是时间依赖性，即当前时刻的值依赖于过去的值。' },
      { title: '时间序列组件分析', content: '趋势(T趋势)：长期上升或下降的趋势；季节性(Seasonality)：周期性重复的模式(如年度、月度)；周期性(Cycle)：非固定周期的波动；残差(Residual)：去除趋势和季节性后的随机波动。' },
      { title: '平稳性检验', content: '平稳性要求均值、方差、自协方差不随时间变化。检验方法：ADF检验(单位根检验)、KPSS检验。非平稳数据需通过差分转换为平稳数据。' },
      { title: '移动平均详解', content: '简单移动平均(SMA)：等权重计算；加权移动平均(WMA)：近期数据权重更高；指数移动平均(EMA)：权重按指数衰减。窗口大小选择影响平滑程度。' },
      { title: '指数平滑方法', content: '简单指数平滑(SES)：适合无趋势无季节性数据；Holt线性趋势模型：考虑趋势；Holt-Winters模型：同时考虑趋势和季节性。平滑系数α、β、γ控制权重衰减速度。' },
      { title: 'ARIMA模型详解', content: 'AR(p)自回归：用自身滞后值预测；MA(q)移动平均：用误差项预测；I(d)差分：处理非平稳性。参数选择：ACF/PACF图分析、AIC/BIC准则。' },
      { title: '季节性分解方法', content: '加法模型：Y = T + S + R；乘法模型：Y = T * S * R。常用方法：STL分解、X-11分解。分解后可分别建模再合并预测。' },
      { title: '预测评估指标', content: 'MAE(平均绝对误差)：对异常值稳健；MSE(均方误差)：惩罚大误差；RMSE(均方根误差)：与原始数据同量纲；MAPE(平均绝对百分比误差)：相对误差，适合比较不同尺度数据。' }
    ],
    9: [
      { title: '深度学习概述', content: '深度学习是机器学习的子领域，使用多层神经网络学习数据的层次化表示。深度学习在图像识别、自然语言处理、语音识别等领域取得革命性突破，AlphaGo、GPT、DALL-E都是深度学习应用的典范。' },
      { title: '神经网络架构', content: '输入层：接收原始数据；隐藏层：学习特征表示，层数和神经元数影响模型容量；输出层：产生最终预测。深度神经网络通过堆叠多个隐藏层学习抽象特征。' },
      { title: '激活函数详解', content: 'ReLU：f(x)=max(0,x)，解决梯度消失问题；Sigmoid：f(x)=1/(1+e^-x)，输出概率；Tanh：f(x)=tanh(x)，输出[-1,1]；GELU：高斯误差线性单元，Transformer中广泛使用。' },
      { title: '反向传播算法', content: '链式法则从输出层反向计算梯度；梯度下降更新权重；优化器(SGD、Adam、RMSprop)加速收敛；批量归一化稳定训练；Dropout防止过拟合。' },
      { title: 'TensorFlow实战', content: '构建计算图或使用Keras高级API；tf.data处理数据；tf.GradientTape自动微分；分布式训练；TensorBoard可视化。适合生产环境部署和大规模训练。' },
      { title: 'PyTorch实战', content: '动态计算图灵活调试；nn.Module定义模型；autograd自动求导；torch.nn.functional提供操作；DataLoader加载数据。研究领域首选框架，生态系统丰富。' },
      { title: 'CNN架构详解', content: '卷积层提取局部特征；池化层降采样；ReLU激活；全连接层分类。经典架构：LeNet、AlexNet、VGG、ResNet、EfficientNet。注意力机制(SENet、CBAM)提升性能。' },
      { title: 'RNN与变体', content: '标准RNN存在梯度消失问题；LSTM通过门控机制(Long Short-Term Memory)解决；GRU简化LSTM结构；双向RNN捕捉前后文信息；Transformer架构完全基于注意力机制。' }
    ],
    10: [
      { title: 'NLP概述', content: '自然语言处理(NLP)是人工智能的重要分支，使计算机能够理解、解释和生成人类语言。应用场景包括机器翻译、智能客服、情感分析、文本摘要等。NLP技术涵盖从基础的文本处理到高级的预训练语言模型。' },
      { title: '文本预处理详解', content: '文本预处理是NLP的基础步骤：1)分词：将文本切分为词或字；2)去停用词：移除"的"、"是"等高频无意义词；3)词干提取/词形还原：将词还原为词根形式；4)大小写统一：统一转换为小写或大写；5)去除特殊字符和标点。' },
      { title: '词袋模型与TF-IDF', content: '词袋模型(Bag of Words)将文本表示为词频向量，忽略语法和词序。TF-IDF(词频-逆文档频率)通过TF(t词在文档中出现次数)乘以IDF(log(总文档数/包含该词的文档数))来衡量词的重要性，常用公式：TF-IDF = TF * log(N/DF)。' },
      { title: '词嵌入技术', content: '词嵌入将词映射到低维稠密向量空间，捕捉语义关系。Word2Vec通过预测上下文学习词向量，GloVe基于全局词共现矩阵。BERT使用Transformer架构实现双向上下文理解。词嵌入的关键特性：语义相似的词在向量空间中距离相近。' },
      { title: '情感分析方法', content: '情感分析确定文本情感倾向：1)基于词典的方法：使用情感词典打分；2)机器学习方法：训练分类器(朴素贝叶斯、SVM)；3)深度学习方法：使用LSTM、BERT等模型。情感极性分为正面、负面、中性，可进一步细分为情感强度。' },
      { title: '文本分类技术', content: '文本分类将文本分配到预定义类别：垃圾邮件检测、主题分类、意图识别等。特征工程：TF-IDF、词嵌入；模型选择：朴素贝叶斯(简单快速)、SVM(高精度)、深度学习(处理复杂文本)。评估指标：准确率、召回率、F1分数。' },
      { title: '序列标注任务', content: '序列标注为每个词分配标签：命名实体识别(NER)识别人名、地名、机构名；词性标注(Part-of-Speech)标注名词、动词、形容词等；Chunking识别短语结构。常用模型：Hidden Markov Model、CRF、BiLSTM-CRF。' },
      { title: '预训练语言模型', content: 'BERT通过双向Transformer在大规模文本上预训练，可微调用于各种NLP任务。GPT采用单向Transformer，擅长文本生成。T5将所有NLP任务统一为文本到文本格式。预训练模型显著提升了各种NLP任务的性能上限。' }
    ],
    11: [
      { title: '推荐系统概述', content: '推荐系统根据用户偏好和行为提供个性化推荐，广泛应用于电商、视频平台、音乐应用。核心目标：提高用户满意度、增加用户粘性、提升转化率。推荐类型包括：个性化推荐、热门推荐、相关推荐、场景推荐。' },
      { title: '协同过滤算法', content: '协同过滤基于用户-物品交互数据：基于用户(User-Based)：找到相似用户喜欢的物品；基于物品(Item-Based)：找到相似物品推荐。相似度计算：余弦相似度、皮尔逊相关系数。公式：相似度 = (A·B) / (||A|| * ||B||)。' },
      { title: '矩阵分解技术', content: '矩阵分解将稀疏的用户-物品矩阵分解为低维隐因子矩阵：用户因子矩阵U(m×k)和物品因子矩阵V(n×k)，其中k为隐因子维度。常用方法：SVD、NMF、ALS交替最小二乘法。隐因子可理解为用户和物品的潜在特征。' },
      { title: '基于内容的推荐', content: '基于物品内容特征和用户偏好建模：提取物品特征(如商品类别、描述)，构建用户画像，计算相似度进行推荐。优势：不依赖用户交互数据，适合冷启动；劣势：只能推荐相似物品，多样性不足。' },
      { title: '混合推荐策略', content: '结合多种推荐方法的优势：加权混合(线性组合各方法得分)、切换混合(根据场景选择方法)、特征组合(合并特征训练统一模型)、级联混合(先用一种方法生成候选，再用另一种方法排序)。Netflix Prize冠军采用了混合策略。' },
      { title: '深度学习推荐', content: '神经网络捕捉复杂模式：Neural Collaborative Filtering将MLP与协同过滤结合；DeepFM结合因子分解机和深度学习；Wide&Deep同时学习记忆和泛化能力。深度学习能自动学习特征交叉，处理大规模数据。' },
      { title: '推荐系统评估', content: '离线指标：准确率(Precision)、召回率(Recall)、MAP、NDCG；在线指标：点击率(CTR)、转化率(CVR)、留存率；商业指标：GMV、用户时长。A/B测试是验证推荐效果的重要手段。' },
      { title: '冷启动问题', content: '新用户或新物品缺乏数据时的推荐挑战：新用户冷启动(基于注册信息、上下文推荐热门物品)；新物品冷启动(基于内容特征推荐给相似用户)；利用迁移学习和多任务学习缓解冷启动问题。' }
    ],
    12: [
      { title: '数据安全概述', content: '数据安全保护数据的机密性、完整性和可用性(CIA三要素)。威胁来源：外部攻击、内部泄露、意外泄露、数据篡改。防护层次：物理层、网络层、应用层、数据层。安全原则：最小权限、数据加密、访问审计、定期备份。' },
      { title: '加密技术详解', content: '对称加密：加密和解密使用相同密钥(AES、DES)，效率高适合大量数据；非对称加密：公钥加密私钥解密(RSA、ECC)，安全性高适合密钥交换和数字签名。混合加密：用非对称加密传输对称密钥，再用对称加密传输数据。' },
      { title: '哈希算法原理', content: '哈希函数将任意长度数据映射为固定长度哈希值：MD5(128位，已不安全)、SHA-1(160位，已不安全)、SHA-256(256位，安全)。特性：单向性(不可逆)、抗碰撞性(不同输入难产生相同哈希)、雪崩效应(微小输入变化导致输出大幅变化)。用途：密码存储、数据完整性校验。' },
      { title: '数据脱敏技术', content: '脱敏方法包括：1)替换：用虚构数据替换真实数据；2)截断：隐藏部分信息(如手机号中间四位)；3)模糊化：用范围值代替精确值；4)加密：对敏感字段加密存储；5)删除：直接删除不必要的敏感字段。脱敏需满足K-匿名、L-多样性等隐私模型。' },
      { title: '差分隐私保护', content: '差分隐私通过添加噪声保护个体信息：ε-差分隐私保证加入或移除一个个体数据不会显著改变查询结果。噪声添加方法：拉普拉斯机制(用于数值查询)、高斯机制(用于高维数据)。差分隐私提供了严格的数学隐私保证。' },
      { title: '访问控制机制', content: '访问控制策略：自主访问控制(DAC)、强制访问控制(MAC)、基于角色的访问控制(RBAC)。RBAC通过角色分配权限：定义角色、分配权限给角色、将用户分配到角色。最小权限原则：只授予完成任务所需的最小权限。' },
      { title: '隐私保护计算', content: '隐私保护计算技术：安全多方计算(MPC)让多方在不泄露原始数据的情况下协同计算；同态加密允许直接对密文进行计算；联邦学习在本地训练模型，只传输模型参数。这些技术实现"数据可用不可见"。' },
      { title: '合规要求', content: 'GDPR(欧盟通用数据保护条例)赋予用户数据主体权利：访问权、更正权、删除权、数据可携权。CCPA(加州消费者隐私法案)类似GDPR。数据处理需满足：合法基础、数据最小化、目的限定、存储限制、数据质量、安全保障。' }
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
      { question: 'KMeans算法属于哪种聚类方法？', options: ['基于密度', '基于划分', '层次聚类', '基于模型'], correct: 1 },
      { question: 'DBSCAN算法需要预先指定簇数吗？', options: ['需要', '不需要', '视情况而定', '不确定'], correct: 1 },
      { question: 'KMeans中每个簇的中心是？', options: ['随机点', '离群点', '簇内点的均值', '最远点'], correct: 2 },
      { question: 'DBSCAN中标记为噪声的点满足什么条件？', options: ['邻域内点数足够', '邻域内点数不足', '距离太远', '距离太近'], correct: 1 },
      { question: '层次聚类的合并策略通常基于什么？', options: ['距离', '密度', '概率', '相似度'], correct: 0 },
      { question: '肘部法则用于确定什么？', options: ['学习率', '簇数K', '迭代次数', '收敛阈值'], correct: 1 },
      { question: '轮廓系数的取值范围是？', options: ['[0, 1]', '[-1, 1]', '[0, 100]', '[-100, 100]'], correct: 1 },
      { question: 'Scikit-learn中KMeans的类名是？', options: ['KMeans', 'Kmeans', 'K_Means', 'KMean'], correct: 0 },
      { question: '层次聚类生成的是什么结构？', options: ['树状结构', '线性结构', '图结构', '网状结构'], correct: 0 },
      { question: '聚类算法主要用于什么任务？', options: ['分类', '回归', '降维', '数据分组'], correct: 3 }
    ],
    6: [
      { question: 'KMeans++改进了KMeans的哪个方面？', options: ['收敛速度', '初始中心选择', '距离计算', '簇数确定'], correct: 1 },
      { question: 'OPTICS算法是对哪种算法的改进？', options: ['KMeans', 'DBSCAN', '层次聚类', 'GMM'], correct: 1 },
      { question: 'GMM模型支持哪种聚类方式？', options: ['硬聚类', '软聚类', '半监督聚类', '强化学习'], correct: 1 },
      { question: 'EM算法用于训练什么模型？', options: ['决策树', 'GMM', 'SVM', '随机森林'], correct: 1 },
      { question: '哪个算法能自动识别噪声点？', options: ['KMeans', 'DBSCAN', '层次聚类', 'GMM'], correct: 1 },
      { question: '高斯混合模型假设数据服从什么分布？', options: ['均匀分布', '高斯分布', '泊松分布', '二项分布'], correct: 1 },
      { question: 'OPTICS算法的优势是什么？', options: ['速度快', '支持可变密度', '内存占用小', '实现简单'], correct: 1 },
      { question: 'KMeans++选择初始中心的策略是？', options: ['随机选择', '距离越远概率越大', '均匀分布', '按顺序选择'], correct: 1 },
      { question: '软聚类与硬聚类的区别是？', options: ['计算速度', '是否允许模糊归属', '内存占用', '结果可视化'], correct: 1 },
      { question: '哪个算法不需要预先指定簇数？', options: ['KMeans', 'GMM', 'DBSCAN', 'KMeans++'], correct: 2 }
    ],
    7: [
      { question: '特征工程的主要目的是？', options: ['增加数据量', '提高模型性能', '减少训练时间', '简化模型'], correct: 1 },
      { question: '独热编码(One-Hot)用于处理什么类型数据？', options: ['数值数据', '分类数据', '时间数据', '文本数据'], correct: 1 },
      { question: 'PCA是一种什么技术？', options: ['特征选择', '降维', '特征提取', '数据清洗'], correct: 1 },
      { question: '特征缩放的主要目的是？', options: ['去除异常值', '统一量纲防止某些特征主导', '增加特征数量', '减少缺失值'], correct: 1 },
      { question: '标签编码(Label Encoding)的问题是？', options: ['增加维度', '引入虚假顺序关系', '丢失信息', '计算复杂'], correct: 1 },
      { question: '特征重要性可以通过什么方法获得？', options: ['仅线性回归', '随机森林等树模型', '仅KNN', '仅SVM'], correct: 1 },
      { question: '多项式特征用于捕捉什么？', options: ['线性关系', '非线性关系', '时间关系', '空间关系'], correct: 1 },
      { question: '特征选择的 benefits 不包括？', options: ['减少过拟合', '提高训练速度', '增加模型复杂度', '提高可解释性'], correct: 2 },
      { question: '标准化(StandardScaler)使用什么统计量？', options: ['最小最大值', '均值和标准差', '中位数和IQR', '众数'], correct: 1 },
      { question: '文本特征提取常用的方法是？', options: ['TF-IDF', 'One-Hot', '标准化', '归一化'], correct: 0 }
    ],
    8: [
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
    9: [
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
    10: [
      { question: 'NLP中的分词是指？', options: ['分割句子', '将文本分割成词或字', '分割段落', '分割文档'], correct: 1 },
      { question: 'TF-IDF中IDF表示？', options: ['词频', '逆文档频率', '文档频率', '词权重'], correct: 1 },
      { question: '词嵌入(Word Embedding)将词表示为？', options: ['独热向量', '低维稠密向量', '整数索引', '字符串'], correct: 1 },
      { question: '情感分析属于什么任务？', options: ['分类任务', '回归任务', '聚类任务', '生成任务'], correct: 0 },
      { question: '停用词是指？', options: ['重要的词', '常见但信息量少的词', '生僻词', '专业术语'], correct: 1 },
      { question: 'Word2Vec包含哪两种模型？', options: ['CBOW和Skip-gram', 'RNN和LSTM', 'CNN和RNN', 'BERT和GPT'], correct: 0 },
      { question: '命名实体识别(NER)是？', options: ['识别文本中的人名地名等实体', '识别文本主题', '识别文本情感', '识别文本语言'], correct: 0 },
      { question: '文本分类中词袋模型的缺点是？', options: ['忽略了词序信息', '维度太高', '计算复杂', '需要大量数据'], correct: 0 },
      { question: 'BERT是基于什么架构？', options: ['CNN', 'RNN', 'Transformer', 'LSTM'], correct: 2 },
      { question: 'GPT采用什么架构？', options: ['单向Transformer', '双向Transformer', 'CNN', 'RNN'], correct: 0 },
      { question: 'GloVe词嵌入基于什么？', options: ['预测上下文', '全局词共现矩阵', '深度学习', '随机初始化'], correct: 1 },
      { question: 'CRF常用于什么任务？', options: ['文本分类', '序列标注', '情感分析', '机器翻译'], correct: 1 },
      { question: '预训练语言模型的优势是？', options: ['训练速度快', '通用性强，可微调', '不需要数据', '模型小'], correct: 1 }
    ],
    11: [
      { question: '协同过滤基于什么进行推荐？', options: ['物品内容', '用户行为', '专家知识', '随机选择'], correct: 1 },
      { question: '冷启动问题是指？', options: ['系统故障', '新用户或新物品缺乏历史数据', '算法复杂', '计算速度慢'], correct: 1 },
      { question: '余弦相似度用于衡量什么？', options: ['距离', '向量方向相似性', '大小差异', '时间差异'], correct: 1 },
      { question: '矩阵分解将用户-物品矩阵分解为？', options: ['两个矩阵', '三个矩阵', '四个矩阵', '一个矩阵'], correct: 0 },
      { question: '基于内容的推荐依赖于？', options: ['用户行为', '物品特征', '社交网络', '地理位置'], correct: 1 },
      { question: '推荐系统的评估指标不包括？', options: ['准确率', '召回率', '训练时间', '多样性'], correct: 2 },
      { question: '混合推荐系统的优点是？', options: ['简单', '结合多种方法优势', '计算快', '不需要数据'], correct: 1 },
      { question: '协同过滤的缺点不包括？', options: ['冷启动问题', '数据稀疏性', '需要物品特征', '可扩展性'], correct: 2 },
      { question: 'Top-N推荐是指？', options: ['推荐N个物品', '推荐前N%物品', '推荐N类物品', '推荐N天内的物品'], correct: 0 },
      { question: '隐式反馈包括？', options: ['评分', '点击、浏览', '评论', '点赞'], correct: 1 },
      { question: 'NDCG是用于评估什么的指标？', options: ['分类任务', '排序任务', '聚类任务', '回归任务'], correct: 1 },
      { question: 'Wide&Deep模型结合了什么？', options: ['记忆和泛化', '监督和无监督', '训练和测试', '分类和回归'], correct: 0 },
      { question: 'ALS算法用于什么？', options: ['矩阵分解', '聚类', '分类', '回归'], correct: 0 }
    ],
    12: [
      { question: '数据加密的主要目的是？', options: ['压缩数据', '保护数据机密性', '加速传输', '方便存储'], correct: 1 },
      { question: '哈希函数的特点是？', options: ['可逆', '不可逆', '压缩', '加密'], correct: 1 },
      { question: '数据脱敏是指？', options: ['删除数据', '对敏感数据变形处理', '加密数据', '备份数据'], correct: 1 },
      { question: '差分隐私通过什么保护隐私？', options: ['加密', '添加噪声', '访问控制', '数据分割'], correct: 1 },
      { question: 'GDPR是哪个地区的数据保护法规？', options: ['美国', '欧盟', '中国', '日本'], correct: 1 },
      { question: '对称加密和非对称加密的区别是？', options: ['加密速度', '密钥使用方式', '算法复杂度', '以上都是'], correct: 3 },
      { question: 'k-匿名是一种？', options: ['加密方法', '匿名化技术', '访问控制', '审计方法'], correct: 1 },
      { question: '数据安全的三要素不包括？', options: ['机密性', '完整性', '可用性', '便利性'], correct: 3 },
      { question: '同态加密允许？', options: ['对密文进行计算', '快速解密', '压缩数据', '增加安全性'], correct: 0 },
      { question: '隐私保护计算的目标是？', options: ['数据可用不可见', '数据完全公开', '数据加密存储', '数据备份'], correct: 0 },
      { question: 'SHA-256的输出长度是？', options: ['128位', '160位', '256位', '512位'], correct: 2 },
      { question: 'AES属于什么加密？', options: ['对称加密', '非对称加密', '哈希算法', '数字签名'], correct: 0 },
      { question: 'RBAC是什么？', options: ['基于角色的访问控制', '基于规则的访问控制', '基于用户的访问控制', '基于时间的访问控制'], correct: 0 }
    ]
  };

  const handleProjectSelect = (projectId: number) => {
    const project = trainingProjects.find(p => p.id === projectId);
    if (project) {
      setActiveProject(projectId);
      setUserCode(project.starterCode || project.codeTemplate);
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
      setActiveSection('practice');
    }
  };

  const handleResetCode = () => {
    const project = trainingProjects.find(p => p.id === activeProject);
    if (project) {
      if (confirm('确定要重置代码吗？你的修改将会丢失。')) {
        setUserCode(project.starterCode || project.codeTemplate);
        setScore(null);
        setFeedback('');
        setShowAnswer(false);
      }
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

    const similarity = calculateSimilarity(userCode, project.codeTemplate);
    
    if (similarity >= 0.99) {
      setScore(100);
      setFeedback('🎉 代码完全正确！与标准答案一致，满分通过！');
      return;
    }

    if (similarity >= 0.90) {
      setScore(95);
      setFeedback('代码几乎与标准答案一致！只有微小的差异，非常优秀！');
      return;
    }

    if (similarity >= 0.80) {
      setScore(90);
      setFeedback('代码与标准答案非常接近，逻辑正确！');
      return;
    }

    if (similarity >= 0.60) {
      setScore(85);
      setFeedback('代码结构正确！包含必要的导入和输出语句。在实际环境中运行可查看具体输出结果。');
      return;
    }

    setScore(70);
    setFeedback('代码有基本结构，但与标准答案差异较大。请参考参考答案继续完善。');
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const s1 = str1.toLowerCase().replace(/\s+/g, '');
    const s2 = str2.toLowerCase().replace(/\s+/g, '');
    
    if (s1 === s2) return 1.0;
    if (s1.length === 0 || s2.length === 0) return 0.0;

    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    
    const longerLength = longer.length;
    const editDistance = levenshteinDistance(longer, shorter);
    
    return (longerLength - editDistance) / longerLength;
  };

  const levenshteinDistance = (str1: string, str2: string): number => {
    const m = str1.length;
    const n = str2.length;
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[m][n];
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
                  onClick={handleResetCode}
                  className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 inline mr-1" />
                  重置
                </button>
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
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">参考答案</h4>
                  <button
                    onClick={() => {
                      setUserCode(project.codeTemplate);
                      setScore(null);
                      setFeedback('');
                    }}
                    className="px-3 py-1 text-xs bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    复制到编辑器
                  </button>
                </div>
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
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-800">数据分析实训平台</span>
            </a>
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
              <a
                href="/data-analysis-quiz"
                className="px-4 py-2 rounded-lg font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700"
              >
                <Award className="w-4 h-4 inline mr-2" />
                理论测验
              </a>
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
