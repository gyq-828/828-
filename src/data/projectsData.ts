import { QuizQuestion } from '../components/Quiz';

// 数据文件接口
export interface DataFile {
  name: string;
  url: string;
  description: string;
}

// 项目章节接口
export interface ProjectChapter {
  id: string;
  title: string;
  content: string;
  codeTemplate?: string;
  quiz?: QuizQuestion[];
}

// 评估标准接口
export interface AssessmentRubric {
  criterion: string;
  weight: number;
  description: string;
}

// 项目评估接口
export interface ProjectAssessment {
  resultWeight: number;
  codeQualityWeight: number;
  aiEvaluationWeight: number;
  rubrics: AssessmentRubric[];
}

// 实训项目接口
export interface TrainingProject {
  id: string;
  title: string;
  description: string;
  industry: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  skills: string[];
  duration: string;
  chapters: ProjectChapter[];
  dataFiles: DataFile[];
  assessment?: ProjectAssessment;
  expectedOutput?: string;
}

// 5个基础实训项目数据
export const trainingProjects: TrainingProject[] = [
  {
    id: 'retail-user-behavior',
    title: '零售电商用户行为分析',
    description: '分析电商平台用户行为，构建用户画像，进行RFM分析，优化复购策略',
    industry: '🛒 电商',
    icon: '🛒',
    difficulty: 'intermediate',
    skills: ['用户画像', 'RFM分析', '复购率', '数据可视化'],
    duration: '3-4小时',
    chapters: [
      {
        id: 'chapter1',
        title: '数据加载与初步探索',
        content: '学习如何加载和理解电商用户行为数据',
        codeTemplate: `import pandas as pd
import numpy as np

# 加载数据
data = pd.read_csv('user_behavior.csv')
print("数据形状:", data.shape)
print("\\n前5行数据:")
print(data.head())

# 基本统计信息
print("\\n基本统计:")
print(data.describe())`,
      },
      {
        id: 'chapter2',
        title: '用户画像构建',
        content: '分析用户行为特征，构建用户画像',
        codeTemplate: `# 用户行为统计
user_stats = data.groupby('user_id').agg({
    'behavior_type': ['count', 'nunique'],
    'item_id': 'nunique',
    'category_id': 'nunique'
})

user_stats.columns = ['total_actions', 'behavior_types', 'unique_items', 'unique_categories']
print("用户画像统计:")
print(user_stats.head())`,
      },
      {
        id: 'chapter3',
        title: 'RFM分析',
        content: '进行RFM分析，对用户进行分层',
        codeTemplate: `# RFM分析
# R: 最近一次消费时间
# F: 消费频率
# M: 消费金额（模拟）

from datetime import datetime, timedelta

# 模拟消费数据
data['timestamp'] = pd.to_datetime(data['timestamp'])
recent_date = data['timestamp'].max()

rfm = data.groupby('user_id').agg({
    'timestamp': lambda x: (recent_date - x.max()).days,  # Recency
    'behavior_type': 'count',  # Frequency
})

rfm.columns = ['Recency', 'Frequency']
rfm['Monetary'] = np.random.randint(100, 5000, size=len(rfm))  # 模拟金额

print("RFM分析结果:")
print(rfm.head())`,
      },
    ],
    dataFiles: [
      {
        name: 'user_behavior.csv',
        url: '/user_behavior.csv',
        description: '电商用户行为数据'
      }
    ],
  },
  {
    id: 'financial-credit-scoring',
    title: '金融信用风险评分',
    description: '构建信用评分模型，预测借款人违约风险',
    industry: '💰 金融',
    icon: '💰',
    difficulty: 'advanced',
    skills: ['特征工程', '分类模型', 'ROC-AUC', '模型评估'],
    duration: '4-5小时',
    chapters: [
      {
        id: 'chapter1',
        title: '信用数据探索',
        content: '探索信用贷款数据，理解各字段含义',
        codeTemplate: `import pandas as pd
import numpy as np

# 加载信用数据
credit_data = pd.read_csv('credit_data.csv')
print("信用数据形状:", credit_data.shape)
print("\\n数据预览:")
print(credit_data.head())
print("\\n数据类型:")
print(credit_data.dtypes)`,
      },
      {
        id: 'chapter2',
        title: '特征工程',
        content: '处理缺失值，构建预测特征',
        codeTemplate: `# 处理缺失值
credit_data = credit_data.fillna(credit_data.median())

# 特征选择
features = ['income', 'age', 'debt_ratio', 'credit_lines']
X = credit_data[features]
y = credit_data['default']

print("特征矩阵形状:", X.shape)
print("标签分布:")
print(y.value_counts(normalize=True))`,
      },
      {
        id: 'chapter3',
        title: '模型构建与评估',
        content: '构建分类模型并使用ROC-AUC评估',
        codeTemplate: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, classification_report

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# 训练模型
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 预测与评估
y_pred_proba = model.predict_proba(X_test)[:, 1]
roc_auc = roc_auc_score(y_test, y_pred_proba)

print(f"ROC-AUC: {roc_auc:.4f}")
print("\\n分类报告:")
print(classification_report(y_test, model.predict(X_test)))`,
      },
    ],
    dataFiles: [
      {
        name: 'credit_data.csv',
        url: '/cart_data.csv',
        description: '信用贷款数据'
      }
    ],
  },
  {
    id: 'healthcare-data-exploration',
    title: '医疗健康数据探索',
    description: '分析医疗数据，发现疾病规律，辅助临床决策',
    industry: '🏥 医疗',
    icon: '🏥',
    difficulty: 'intermediate',
    skills: ['数据清洗', '统计分析', '数据可视化', '相关性分析'],
    duration: '2-3小时',
    chapters: [
      {
        id: 'chapter1',
        title: '医疗数据加载与清洗',
        content: '加载和清洗医疗健康数据',
        codeTemplate: `import pandas as pd
import numpy as np

# 加载医疗数据
health_data = pd.read_csv('health_data.csv')
print("医疗数据形状:", health_data.shape)

# 检查缺失值
print("\\n缺失值统计:")
print(health_data.isnull().sum())

# 简单缺失值处理
health_data_clean = health_data.fillna(health_data.median())
print("\\n清洗后缺失值:")
print(health_data_clean.isnull().sum())`,
      },
      {
        id: 'chapter2',
        title: '统计分析与可视化',
        content: '进行描述性统计分析和可视化',
        codeTemplate: `import matplotlib.pyplot as plt
import seaborn as sns

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 基本统计
print("描述性统计:")
print(health_data_clean.describe())

# 关键指标分布
fig, axes = plt.subplots(2, 2, figsize=(12, 10))
sns.histplot(data=health_data_clean, x='age', ax=axes[0,0])
sns.histplot(data=health_data_clean, x='blood_pressure', ax=axes[0,1])
sns.histplot(data=health_data_clean, x='cholesterol', ax=axes[1,0])
sns.histplot(data=health_data_clean, x='glucose', ax=axes[1,1])
plt.tight_layout()
plt.show()`,
      },
    ],
    dataFiles: [
      {
        name: 'health_data.csv',
        url: '/sales_data.csv',
        description: '医疗健康数据'
      }
    ],
  },
  {
    id: 'supply-chain-inventory',
    title: '供应链库存优化',
    description: '分析供应链数据，优化库存管理，预测需求',
    industry: '📦 物流',
    icon: '📦',
    difficulty: 'advanced',
    skills: ['时间序列', '需求预测', 'ABC分析', '库存优化'],
    duration: '3-4小时',
    chapters: [
      {
        id: 'chapter1',
        title: '供应链数据探索',
        content: '理解供应链库存数据结构',
        codeTemplate: `import pandas as pd
import numpy as np

# 加载库存数据
inventory_data = pd.read_csv('inventory_data.csv', parse_dates=['date'])
print("库存数据形状:", inventory_data.shape)
print("\\n数据预览:")
print(inventory_data.head())
print("\\n日期范围:", inventory_data['date'].min(), "to", inventory_data['date'].max())`,
      },
      {
        id: 'chapter2',
        title: 'ABC分析',
        content: '对商品进行ABC分类',
        codeTemplate: `# ABC分析：按销售额分类
product_sales = inventory_data.groupby('product_id')['sales'].sum().sort_values(ascending=False)
total_sales = product_sales.sum()

# 计算累计占比
cumulative = product_sales.cumsum() / total_sales

# 分类
a_products = cumulative[cumulative <= 0.8].index
b_products = cumulative[(cumulative > 0.8) & (cumulative <= 0.95)].index
c_products = cumulative[cumulative > 0.95].index

print(f"A类产品数量: {len(a_products)}, 贡献80%销售额")
print(f"B类产品数量: {len(b_products)}, 贡献15%销售额")
print(f"C类产品数量: {len(c_products)}, 贡献5%销售额")`,
      },
      {
        id: 'chapter3',
        title: '简单需求预测',
        content: '使用移动平均进行需求预测',
        codeTemplate: `# 时间序列分析示例
product_data = inventory_data[inventory_data['product_id'] == 'P001'].set_index('date')

# 移动平均预测
product_data['MA7'] = product_data['sales'].rolling(7).mean()
product_data['MA30'] = product_data['sales'].rolling(30).mean()

print("销量数据:")
print(product_data[['sales', 'MA7', 'MA30']].tail())`,
      },
    ],
    dataFiles: [
      {
        name: 'inventory_data.csv',
        url: '/order_data.csv',
        description: '供应链库存数据'
      }
    ],
  },
  {
    id: 'app-user-growth',
    title: 'APP用户增长分析',
    description: '分析APP用户增长，进行漏斗分析和留存分析',
    industry: '📱 互联网',
    icon: '📱',
    difficulty: 'intermediate',
    skills: ['漏斗分析', '留存分析', 'AARRR', '增长策略'],
    duration: '2-3小时',
    chapters: [
      {
        id: 'chapter1',
        title: '用户获取数据探索',
        content: '理解用户获取来源和渠道效果',
        codeTemplate: `import pandas as pd

# 加载用户数据
user_data = pd.read_csv('app_user_data.csv')
print("用户数据形状:", user_data.shape)
print("\\n数据预览:")
print(user_data.head())

# 渠道统计
channel_stats = user_data.groupby('channel').agg({
    'user_id': 'count',
    'conversion': 'mean',
    'revenue': 'sum'
})

print("\\n渠道效果:")
print(channel_stats.sort_values('revenue', ascending=False))`,
      },
      {
        id: 'chapter2',
        title: '漏斗分析',
        content: '分析用户转化漏斗',
        codeTemplate: `# 模拟漏斗数据
funnel_data = pd.DataFrame({
    'stage': ['访问', '注册', '首购', '复购', '留存'],
    'users': [10000, 5000, 2000, 800, 500]
})

print("用户转化漏斗:")
print(funnel_data)

# 计算转化率
funnel_data['conversion_rate'] = funnel_data['users'] / funnel_data['users'].iloc[0]
print("\\n转化率:")
print(funnel_data)`,
      },
      {
        id: 'chapter3',
        title: '留存分析',
        content: '计算用户留存率',
        codeTemplate: `# 模拟留存数据
dates = pd.date_range(start='2024-01-01', periods=30)
cohorts = []

for i in range(7):
    cohort_date = dates[i]
    cohort_size = 1000 - i * 50
    retention = [cohort_size]
    for day in range(1, 7):
        retention.append(int(retention[-1] * (0.7 + np.random.rand() * 0.2)))
    cohorts.append({'cohort': cohort_date, 'retention': retention})

print("留存数据示例构建完成")`,
      },
    ],
    dataFiles: [
      {
        name: 'app_user_data.csv',
        url: '/goods_data.csv',
        description: 'APP用户数据'
      }
    ],
  },
];
