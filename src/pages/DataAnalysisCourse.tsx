import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface KnowledgePoint {
  id: string
  title: string
  description: string
  codeExample: string
}

interface Chapter {
  id: number
  title: string
  description: string
  color: string
  bgColor: string
  borderColor: string
  knowledgePoints: KnowledgePoint[]
}

const chaptersData: Chapter[] = [
  {
    id: 1,
    title: '第1章 数据分析概述',
    description: '了解数据分析的基本概念、流程和应用场景，掌握数据分析的基本方法和工具。',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500',
    knowledgePoints: [
      {
        id: '1.1',
        title: '数据分析的概念和意义',
        description: '数据分析是指用适当的统计分析方法对收集来的大量数据进行分析，将它们加以汇总和理解并消化，以求最大化地开发数据的功能，发挥数据的作用。数据分析的目的是把隐没在一大批看来杂乱无章的数据中的信息集中、萃取和提炼出来，以找出所研究对象的内在规律。',
        codeExample: `# 简单的数据分析流程示例
import pandas as pd

# 1. 数据收集
data = {
    '产品': ['A', 'B', 'C', 'D', 'E'],
    '销售额': [1200, 1800, 900, 2100, 1500],
    '成本': [800, 1200, 600, 1400, 1000]
}
df = pd.DataFrame(data)

# 2. 数据处理
df['利润'] = df['销售额'] - df['成本']
df['利润率'] = (df['利润'] / df['销售额'] * 100).round(2)

# 3. 数据分析
print("数据概览:")
print(df)
print(f"\\n总销售额: {df['销售额'].sum()}")
print(f"总利润: {df['利润'].sum()}")
print(f"平均利润率: {df['利润率'].mean():.2f}%")

# 4. 结论输出
best_product = df.loc[df['利润'].idxmax()]
print(f"\\n利润最高的产品: {best_product['产品']} (利润: {best_product['利润']})")`
      },
      {
        id: '1.2',
        title: '数据分析的流程和方法',
        description: '数据分析的基本流程包括：数据收集、数据清洗、数据探索、数据建模和结果可视化。常用的数据分析方法有描述性分析、诊断性分析、预测性分析和处方性分析。',
        codeExample: `# 数据读取→清洗→分析→可视化的流程示例
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# 1. 数据读取
data = {
    '日期': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
    '访问量': [1000, 1200, None, 1500, 1400],
    '转化率': [0.05, 0.06, 0.04, None, 0.07],
    '收入': [5000, 7200, 4800, 8000, None]
}
df = pd.DataFrame(data)
print("原始数据:")
print(df)

# 2. 数据清洗
print("\\n缺失值统计:")
print(df.isnull().sum())

# 填充缺失值
df['访问量'] = df['访问量'].fillna(df['访问量'].mean())
df['转化率'] = df['转化率'].fillna(df['转化率'].median())
df['收入'] = df['收入'].fillna(df['收入'].mean())

print("\\n清洗后数据:")
print(df)

# 3. 数据分析
df['客单价'] = df['收入'] / (df['访问量'] * df['转化率'])
print("\\n分析结果:")
print(f"平均日访问量: {df['访问量'].mean():.0f}")
print(f"平均转化率: {df['转化率'].mean()*100:.2f}%")
print(f"总收入: {df['收入'].sum():.0f}")

# 4. 数据可视化
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
ax1.plot(df['日期'], df['访问量'], 'b-o')
ax1.set_title('日访问量趋势')
ax1.set_xlabel('日期')
ax1.set_ylabel('访问量')

ax2.bar(df['日期'], df['收入'], color='green')
ax2.set_title('日收入趋势')
ax2.set_xlabel('日期')
ax2.set_ylabel('收入（元）')

plt.tight_layout()
plt.savefig('data_process_demo.png', dpi=150)
print("\\n图表已保存为 data_process_demo.png")`
      },
      {
        id: '1.3',
        title: '数据分析工具介绍',
        description: '数据分析的常用工具包括：Python（pandas、numpy、matplotlib、scikit-learn等库）、R语言、SQL、Excel、Tableau等。Python因其丰富的库生态和易用性，成为数据分析的首选工具。',
        codeExample: `# 导入数据分析常用库
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LinearRegression

print("=== 数据分析常用库演示 ===")
print()

# 1. NumPy - 数值计算
print("1. NumPy 数组操作:")
arr = np.array([1, 2, 3, 4, 5])
print(f"   数组: {arr}")
print(f"   均值: {np.mean(arr)}")
print(f"   标准差: {np.std(arr):.2f}")
print()

# 2. Pandas - 数据处理
print("2. Pandas 数据框:")
df = pd.DataFrame({
    '姓名': ['张三', '李四', '王五'],
    '年龄': [25, 30, 28],
    '工资': [8000, 12000, 10000]
})
print(df)
print()

# 3. Matplotlib - 数据可视化
print("3. Matplotlib 绘图:")
x = np.linspace(0, 10, 100)
y = np.sin(x)
print(f"   生成了 {len(x)} 个数据点")
print()

# 4. Scikit-learn - 机器学习
print("4. Scikit-learn 机器学习:")
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])
model = LinearRegression()
model.fit(X, y)
print(f"   线性回归模型系数: {model.coef_[0]:.2f}")
print(f"   预测 x=6 时 y = {model.predict([[6]])[0]:.2f}")

print("\\n所有库导入成功，可以开始数据分析工作！")`
      },
      {
        id: '1.4',
        title: '数据分析的应用场景',
        description: '数据分析广泛应用于各个领域：商业分析（销售预测、客户细分、市场分析）、金融风控（信用评估、反欺诈）、医疗健康（疾病预测、药物研发）、智能制造（质量控制、预测性维护）、互联网（推荐系统、用户行为分析）等。',
        codeExample: `# 不同场景的简单示例
import pandas as pd
import numpy as np

print("=== 数据分析应用场景示例 ===\\n")

# 场景1: 销售数据分析
print("【场景1】销售数据分析 - 计算各区域销售占比")
sales_data = {
    '区域': ['华东', '华南', '华北', '西南', '西北'],
    '销售额': [52000, 45000, 38000, 28000, 15000]
}
df_sales = pd.DataFrame(sales_data)
df_sales['占比'] = (df_sales['销售额'] / df_sales['销售额'].sum() * 100).round(2)
print(df_sales)
print(f"销售总额: {df_sales['销售额'].sum()} 元\\n")

# 场景2: 客户分级
print("【场景2】客户分级 - RFM模型简化版")
customers = pd.DataFrame({
    '客户ID': ['C001', 'C002', 'C003', 'C004', 'C005'],
    '最近消费(天)': [5, 30, 15, 60, 10],
    '消费频率': [12, 3, 8, 2, 15],
    '消费金额': [5000, 800, 3000, 500, 8000]
})
# 简单打分
customers['R得分'] = pd.cut(customers['最近消费(天)'], bins=[0, 7, 30, 90, 365], labels=[4, 3, 2, 1])
customers['F得分'] = pd.cut(customers['消费频率'], bins=[0, 3, 6, 10, 100], labels=[1, 2, 3, 4])
customers['M得分'] = pd.cut(customers['消费金额'], bins=[0, 1000, 3000, 6000, 100000], labels=[1, 2, 3, 4])
print(customers[['客户ID', 'R得分', 'F得分', 'M得分']])
print()

# 场景3: 简单的库存预测
print("【场景3】库存需求预测 - 移动平均法")
history = [120, 135, 128, 142, 150, 145, 160, 158, 170, 165]
window = 3
forecast = np.mean(history[-window:])
print(f"历史销量: {history}")
print(f"近{window}个月平均销量: {forecast:.0f}")
print(f"建议备货量: {forecast * 1.2:.0f} (含20%安全库存)")`
      }
    ]
  },
  {
    id: 2,
    title: '第2章 统计学基础',
    description: '学习统计学的基本概念和常用统计量，为数据分析奠定理论基础。',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-500',
    knowledgePoints: [
      {
        id: '2.1',
        title: '描述性统计',
        description: '描述性统计是通过图表或数学方法，对数据资料进行整理、分析，并对数据的分布状态、数字特征和随机变量之间关系进行估计和描述的方法。常用指标包括：均值、中位数、众数、方差、标准差、分位数等。',
        codeExample: `# 用 numpy 计算均值/中位数/方差/标准差
import numpy as np
import pandas as pd

# 示例数据：某班级学生的考试成绩
scores = [65, 72, 80, 75, 92, 88, 78, 85, 90, 70,
          68, 82, 76, 95, 87, 73, 69, 81, 98, 77]

print("=== 描述性统计分析 ===")
print(f"成绩数据: {scores}")
print(f"数据个数: {len(scores)}")
print()

# 使用 NumPy 计算
print("【NumPy 计算结果】")
mean_score = np.mean(scores)
median_score = np.median(scores)
var_score = np.var(scores, ddof=1)  # 样本方差
std_score = np.std(scores, ddof=1)  # 样本标准差
min_score = np.min(scores)
max_score = np.max(scores)

print(f"均值 (Mean): {mean_score:.2f}")
print(f"中位数 (Median): {median_score:.2f}")
print(f"方差 (Variance): {var_score:.2f}")
print(f"标准差 (Std Dev): {std_score:.2f}")
print(f"最小值 (Min): {min_score}")
print(f"最大值 (Max): {max_score}")
print(f"极差 (Range): {max_score - min_score}")
print()

# 使用 Pandas 计算更全面的统计量
print("【Pandas describe() 完整统计】")
df = pd.DataFrame({'成绩': scores})
print(df.describe())
print()

# 计算分位数
q1 = np.percentile(scores, 25)
q3 = np.percentile(scores, 75)
iqr = q3 - q1
print(f"第一四分位数 (Q1): {q1}")
print(f"第三四分位数 (Q3): {q3}")
print(f"四分位距 (IQR): {iqr}")`
      },
      {
        id: '2.2',
        title: '概率分布',
        description: '概率分布是描述随机变量取值的概率规律的函数。常见的离散分布有二项分布、泊松分布等；连续分布有正态分布、指数分布、均匀分布等。正态分布是最重要的概率分布之一，呈对称的钟形曲线。',
        codeExample: `# 生成正态分布数据并绘图
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== 概率分布演示 ===\\n")

# 1. 正态分布
print("【正态分布】")
mu = 100  # 均值
sigma = 15  # 标准差
n = 1000  # 样本量

np.random.seed(42)
normal_data = np.random.normal(mu, sigma, n)
print(f"均值: {np.mean(normal_data):.2f} (理论值: {mu})")
print(f"标准差: {np.std(normal_data):.2f} (理论值: {sigma})")

# 验证经验法则（68-95-99.7法则）
within_1std = np.sum((normal_data > mu - sigma) & (normal_data < mu + sigma)) / n * 100
within_2std = np.sum((normal_data > mu - 2*sigma) & (normal_data < mu + 2*sigma)) / n * 100
within_3std = np.sum((normal_data > mu - 3*sigma) & (normal_data < mu + 3*sigma)) / n * 100
print(f"68%法则验证: {within_1std:.1f}% 数据在1个标准差内")
print(f"95%法则验证: {within_2std:.1f}% 数据在2个标准差内")
print(f"99.7%法则验证: {within_3std:.1f}% 数据在3个标准差内")
print()

# 2. 二项分布
print("【二项分布】")
n_trials = 10  # 试验次数
p = 0.5  # 成功概率
binom_data = np.random.binomial(n_trials, p, 1000)
print(f"抛硬币{n_trials}次，1000次模拟的平均正面数: {np.mean(binom_data):.2f} (期望: {n_trials*p})")
print()

# 3. 绘制分布图
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

# 正态分布直方图
ax1.hist(normal_data, bins=30, density=True, alpha=0.7, color='skyblue', edgecolor='white')
x = np.linspace(mu - 4*sigma, mu + 4*sigma, 100)
ax1.plot(x, stats.norm.pdf(x, mu, sigma), 'r-', linewidth=2, label='理论正态分布')
ax1.set_title('正态分布直方图', fontsize=12)
ax1.set_xlabel('数值')
ax1.set_ylabel('概率密度')
ax1.legend()
ax1.grid(True, alpha=0.3)

# 二项分布柱状图
unique, counts = np.unique(binom_data, return_counts=True)
ax2.bar(unique, counts/len(binom_data), color='lightgreen', edgecolor='white', alpha=0.7)
ax2.set_title(f'二项分布 (n={n_trials}, p={p})', fontsize=12)
ax2.set_xlabel('成功次数')
ax2.set_ylabel('概率')
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('probability_distributions.png', dpi=150)
print("分布图已保存为 probability_distributions.png")`
      },
      {
        id: '2.3',
        title: '假设检验基础',
        description: '假设检验是根据样本数据来推断总体参数或总体分布的一种统计方法。基本步骤包括：提出原假设(H0)和备择假设(H1)、选择检验统计量、确定显著性水平、计算p值、做出判断。p值小于显著性水平(通常0.05)则拒绝原假设。',
        codeExample: `# t检验示例
import numpy as np
from scipy import stats

print("=== 假设检验演示 ===")
print()

print("【案例】某工厂声称其产品平均重量为100克")
print("质检部门抽取了20个样品进行检验...")
print()

# 样本数据
np.random.seed(42)
sample_weight = np.random.normal(98, 5, 20)  # 样本均值98，标准差5

print(f"样本数据: {np.round(sample_weight, 2)}")
print(f"样本数量: {len(sample_weight)}")
print(f"样本均值: {np.mean(sample_weight):.2f} 克")
print(f"样本标准差: {np.std(sample_weight, ddof=1):.2f} 克")
print()

# 单样本t检验
print("【单样本t检验】")
print("原假设 H0: μ = 100 (产品平均重量为100克)")
print("备择假设 H1: μ ≠ 100 (产品平均重量不等于100克)")
print()

t_statistic, p_value = stats.ttest_1samp(sample_weight, 100)

print(f"t统计量: {t_statistic:.4f}")
print(f"p值: {p_value:.4f}")
print()

alpha = 0.05
print(f"显著性水平 α = {alpha}")
if p_value < alpha:
    print(f"结论: p值({p_value:.4f}) < α({alpha})，拒绝原假设")
    print("     有充分证据表明产品平均重量不等于100克")
else:
    print(f"结论: p值({p_value:.4f}) ≥ α({alpha})，不拒绝原假设")
    print("     没有足够证据表明产品平均重量不等于100克")
print()

# 独立样本t检验
print("【独立样本t检验】")
print("比较两个班级的考试成绩是否有显著差异")
print()

class_a = np.random.normal(75, 8, 30)
class_b = np.random.normal(80, 7, 30)

print(f"A班平均成绩: {np.mean(class_a):.2f}")
print(f"B班平均成绩: {np.mean(class_b):.2f}")
print()

t_stat2, p_value2 = stats.ttest_ind(class_a, class_b)

print(f"t统计量: {t_stat2:.4f}")
print(f"p值: {p_value2:.4f}")
print()

if p_value2 < 0.05:
    print("结论: 两个班级的成绩存在显著差异")
else:
    print("结论: 两个班级的成绩没有显著差异")`
      }
    ]
  },
  {
    id: 3,
    title: '第3章 数据可视化',
    description: '学习使用Python进行数据可视化，掌握各种图表的绘制方法和优化技巧。',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-500',
    knowledgePoints: [
      {
        id: '3.1',
        title: 'matplotlib基础',
        description: 'Matplotlib是Python中最常用的数据可视化库，可以绘制折线图、柱状图、散点图、饼图、直方图等多种图表。它提供了丰富的定制化选项，可以灵活控制图表的各个元素。',
        codeExample: `# 折线图/柱状图/散点图示例
import matplotlib.pyplot as plt
import numpy as np

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== Matplotlib 基础图表示例 ===\\n")

# 准备数据
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales_a = [120, 150, 180, 165, 210, 240]
sales_b = [100, 130, 160, 175, 195, 220]
np.random.seed(42)
ad_spend = np.array([20, 25, 30, 28, 35, 40])

# 创建画布
fig, axes = plt.subplots(2, 2, figsize=(14, 10))
print("正在生成图表...")

# 1. 折线图
ax1 = axes[0, 0]
ax1.plot(months, sales_a, 'b-o', label='产品A', linewidth=2, markersize=8)
ax1.plot(months, sales_b, 'r--s', label='产品B', linewidth=2, markersize=8)
ax1.set_title('月度销售趋势（折线图）', fontsize=13, fontweight='bold')
ax1.set_xlabel('月份')
ax1.set_ylabel('销售额（万元）')
ax1.legend(loc='upper left')
ax1.grid(True, linestyle='--', alpha=0.7)
print("✓ 折线图完成")

# 2. 柱状图
ax2 = axes[0, 1]
x = np.arange(len(months))
width = 0.35
bars1 = ax2.bar(x - width/2, sales_a, width, label='产品A', color='#3498db', edgecolor='white')
bars2 = ax2.bar(x + width/2, sales_b, width, label='产品B', color='#e74c3c', edgecolor='white')
ax2.set_title('各月销售对比（柱状图）', fontsize=13, fontweight='bold')
ax2.set_xlabel('月份')
ax2.set_ylabel('销售额（万元）')
ax2.set_xticks(x)
ax2.set_xticklabels(months)
ax2.legend()
# 添加数值标签
for bar in bars1:
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 3,
             f'{int(bar.get_height())}', ha='center', fontsize=9)
for bar in bars2:
    ax2.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 3,
             f'{int(bar.get_height())}', ha='center', fontsize=9)
print("✓ 柱状图完成")

# 3. 散点图
ax3 = axes[1, 0]
ax3.scatter(ad_spend, sales_a, c='green', s=100, alpha=0.7, edgecolors='white', linewidth=2)
# 添加趋势线
z = np.polyfit(ad_spend, sales_a, 1)
p = np.poly1d(z)
ax3.plot(ad_spend, p(ad_spend), "r--", alpha=0.8)
ax3.set_title('广告投入 vs 销售额（散点图）', fontsize=13, fontweight='bold')
ax3.set_xlabel('广告投入（万元）')
ax3.set_ylabel('销售额（万元）')
ax3.grid(True, linestyle='--', alpha=0.7)
print("✓ 散点图完成")

# 4. 饼图
ax4 = axes[1, 1]
total_sales = [sum(sales_a), sum(sales_b)]
labels = ['产品A', '产品B']
colors = ['#3498db', '#e74c3c']
explode = (0.05, 0)
ax4.pie(total_sales, explode=explode, labels=labels, colors=colors,
        autopct='%1.1f%%', shadow=True, startangle=90)
ax4.set_title('上半年销售占比（饼图）', fontsize=13, fontweight='bold')
print("✓ 饼图完成")

plt.tight_layout()
plt.savefig('matplotlib_basics.png', dpi=150, bbox_inches='tight')
print(f"\\n图表已保存为 matplotlib_basics.png")`
      },
      {
        id: '3.2',
        title: 'seaborn高级可视化',
        description: 'Seaborn是基于Matplotlib的高级可视化库，提供了更美观的默认样式和更丰富的统计图表。常用的高级图表包括：热力图（展示相关性矩阵）、箱线图（展示数据分布和离群值）、小提琴图、配对图等。',
        codeExample: `# 热力图/箱线图示例
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== Seaborn 高级可视化示例 ===\\n")

# 生成示例数据
np.random.seed(42)
n = 100
data = {
    '数学': np.random.normal(75, 10, n),
    '语文': np.random.normal(78, 8, n),
    '英语': np.random.normal(72, 12, n),
    '物理': np.random.normal(70, 15, n),
    '化学': np.random.normal(73, 11, n),
    '班级': np.random.choice(['一班', '二班', '三班'], n)
}
df = pd.DataFrame(data)

print("示例数据（前5行）:")
print(df.head())
print(f"数据形状: {df.shape}")
print()

# 创建画布
fig, axes = plt.subplots(2, 2, figsize=(16, 12))
print("正在生成图表...")

# 1. 相关性热力图
ax1 = axes[0, 0]
corr_matrix = df.drop('班级', axis=1).corr()
sns.heatmap(corr_matrix, annot=True, cmap='RdYlBu_r', center=0,
            fmt='.2f', ax=ax1, square=True, cbar_kws={'shrink': 0.8})
ax1.set_title('科目成绩相关性热力图', fontsize=13, fontweight='bold')
print("✓ 热力图完成")

# 2. 箱线图
ax2 = axes[0, 1]
df_melted = df.melt(id_vars='班级', var_name='科目', value_name='成绩')
sns.boxplot(x='科目', y='成绩', data=df_melted, ax=ax2, palette='Set2')
ax2.set_title('各科目成绩分布箱线图', fontsize=13, fontweight='bold')
ax2.set_xlabel('科目')
ax2.set_ylabel('成绩')
ax2.grid(True, alpha=0.3, axis='y')
print("✓ 箱线图完成")

# 3. 小提琴图
ax3 = axes[1, 0]
sns.violinplot(x='班级', y='数学', data=df, ax=ax3, palette='Pastel1')
sns.stripplot(x='班级', y='数学', data=df, color='black', size=3, alpha=0.5, ax=ax3)
ax3.set_title('各班数学成绩小提琴图', fontsize=13, fontweight='bold')
ax3.set_xlabel('班级')
ax3.set_ylabel('数学成绩')
print("✓ 小提琴图完成")

# 4. 直方图+密度图
ax4 = axes[1, 1]
for cls in df['班级'].unique():
    subset = df[df['班级'] == cls]
    sns.histplot(subset['数学'], kde=True, label=cls, alpha=0.5, ax=ax4)
ax4.set_title('数学成绩分布直方图', fontsize=13, fontweight='bold')
ax4.set_xlabel('数学成绩')
ax4.set_ylabel('频数')
ax4.legend()
ax4.grid(True, alpha=0.3)
print("✓ 直方图完成")

plt.tight_layout()
plt.savefig('seaborn_advanced.png', dpi=150, bbox_inches='tight')
print(f"\\n图表已保存为 seaborn_advanced.png")`
      },
      {
        id: '3.3',
        title: '图表优化技巧',
        description: '好的图表不仅要准确展示数据，还要美观易读。优化技巧包括：设置合适的中文字体、添加清晰的标题和标签、使用合适的配色方案、添加图例、调整布局、保存高质量图片等。',
        codeExample: `# 设置中文、标题、图例
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

print("=== 图表优化技巧演示 ===\\n")

# 创建一个美观的图表示例
fig, ax = plt.subplots(figsize=(10, 6))

# 1. 设置中文字体（关键！）
plt.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei', 'Arial Unicode MS']
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

print("✓ 中文字体已设置")

# 2. 设置整体风格
sns.set_style("whitegrid")
sns.set_palette("husl")

# 准备数据
x = np.linspace(0, 10, 100)
y1 = np.sin(x) * 10 + 50
y2 = np.cos(x) * 8 + 45
y3 = np.linspace(30, 70, 100)

# 3. 绘制多条曲线
ax.plot(x, y1, linewidth=2.5, label='产品A销量', marker='o', markevery=10, markersize=6)
ax.plot(x, y2, linewidth=2.5, label='产品B销量', marker='s', markevery=10, markersize=6)
ax.plot(x, y3, linewidth=2.5, label='总趋势', linestyle='--', alpha=0.7)

print("✓ 数据曲线已绘制")

# 4. 设置标题
ax.set_title('产品销售趋势分析报告', 
             fontsize=18, 
             fontweight='bold',
             pad=20,
             color='#2c3e50')

# 5. 设置坐标轴标签
ax.set_xlabel('时间（月）', fontsize=13, labelpad=10)
ax.set_ylabel('销量（万件）', fontsize=13, labelpad=10)

# 6. 设置图例
ax.legend(loc='upper left', 
          fontsize=11,
          frameon=True,
          fancybox=True,
          shadow=True,
          borderpad=1)

print("✓ 标题、标签、图例已设置")

# 7. 设置网格
ax.grid(True, linestyle='--', alpha=0.6, color='gray')

# 8. 设置坐标轴范围
ax.set_xlim(0, 10)
ax.set_ylim(20, 75)

# 9. 添加注释和箭头
peak_idx = np.argmax(y1)
ax.annotate(f'最高点: {y1[peak_idx]:.1f}万', 
            xy=(x[peak_idx], y1[peak_idx]),
            xytext=(x[peak_idx]+1, y1[peak_idx]+5),
            arrowprops=dict(facecolor='red', shrink=0.05, width=2),
            fontsize=10,
            color='red',
            fontweight='bold')

print("✓ 注释和箭头已添加")

# 10. 美化边框
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_linewidth(1.5)
ax.spines['bottom'].set_linewidth(1.5)

# 11. 调整布局
plt.tight_layout()

# 12. 保存高清图片
plt.savefig('optimized_chart.png', dpi=300, bbox_inches='tight', facecolor='white')
print(f"\\n✓ 图表已保存为 optimized_chart.png")
print("  - DPI: 300 (高清)")
print("  - 格式: PNG")
print("  - 包含: 中文标题、图例、注释、网格")`
      }
    ]
  },
  {
    id: 4,
    title: '第4章 数据预处理',
    description: '学习数据预处理的基本方法，包括数据清洗、数据转换和特征工程，为后续分析和建模做好准备。',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-500',
    knowledgePoints: [
      {
        id: '4.1',
        title: '数据清洗',
        description: '数据清洗是数据预处理的第一步，主要处理缺失值、异常值、重复值等问题。缺失值处理方法包括删除、均值/中位数/众数填充、插值法等；异常值可以通过箱线图、3σ原则识别并处理。',
        codeExample: `# 缺失值处理示例
import pandas as pd
import numpy as np

print("=== 数据清洗演示 ===\\n")

# 创建含有缺失值的示例数据
np.random.seed(42)
data = {
    '姓名': ['张三', '李四', '王五', '赵六', '钱七', '孙八', '周九', '吴十'],
    '年龄': [25, 30, np.nan, 28, 35, np.nan, 40, 33],
    '工资': [8000, np.nan, 12000, 9000, 15000, 11000, np.nan, 13000],
    '部门': ['技术部', '市场部', '技术部', np.nan, '财务部', '市场部', '技术部', '财务部'],
    '入职日期': ['2020-01-15', '2019-06-20', '2021-03-10', '2020-08-05', 
                np.nan, '2018-11-20', '2017-04-15', '2020-07-01']
}
df = pd.DataFrame(data)

print("原始数据:")
print(df)
print()

# 1. 检测缺失值
print("【1. 缺失值检测】")
print(df.isnull().sum())
print(f"\\n缺失值比例:\\n{df.isnull().mean() * 100:.2f}%")
print()

# 2. 删除缺失值（演示）
print("【2. 删除缺失值】")
df_dropped = df.dropna()
print(f"删除缺失值后行数: {len(df_dropped)} (原行数: {len(df)})")
print(df_dropped[['姓名', '年龄', '工资']])
print()

# 3. 数值型数据填充（均值/中位数）
print("【3. 数值型缺失值填充】")
df_filled = df.copy()

# 年龄用均值填充
mean_age = df_filled['年龄'].mean()
df_filled['年龄'] = df_filled['年龄'].fillna(mean_age).round(1)
print(f"年龄 - 均值填充: {mean_age:.1f}")

# 工资用中位数填充
median_salary = df_filled['工资'].median()
df_filled['工资'] = df_filled['工资'].fillna(median_salary)
print(f"工资 - 中位数填充: {median_salary}")
print()

# 4. 分类型数据填充（众数）
print("【4. 分类型缺失值填充】")
mode_dept = df_filled['部门'].mode()[0]
df_filled['部门'] = df_filled['部门'].fillna(mode_dept)
print(f"部门 - 众数填充: {mode_dept}")
print()

# 5. 前向/后向填充
print("【5. 时间类数据填充（前向填充）】")
df_filled['入职日期'] = df_filled['入职日期'].ffill()
print(f"入职日期 - 前向填充完成")
print()

# 6. 处理重复值
print("【6. 重复值处理】")
df_with_dup = pd.concat([df_filled, df_filled.iloc[0:2]], ignore_index=True)
print(f"添加重复数据后行数: {len(df_with_dup)}")
df_cleaned = df_with_dup.drop_duplicates()
print(f"去重后行数: {len(df_cleaned)}")
print()

print("清洗后的数据:")
print(df_filled)`
      },
      {
        id: '4.2',
        title: '数据转换',
        description: '数据转换是将数据转换成适合分析或建模的形式，包括：数据标准化（使数据均值为0，标准差为1）、归一化（将数据缩放到[0,1]区间）、数据编码（类别转数值）、对数变换等。',
        codeExample: `# 数据标准化/归一化示例
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, MinMaxScaler

print("=== 数据转换演示 ===\\n")

# 示例数据
data = {
    '年龄': [22, 25, 30, 35, 40, 45, 50, 55],
    '收入(千)': [5, 8, 12, 18, 25, 35, 50, 80],
    '工作年限': [0, 2, 5, 8, 12, 18, 25, 32],
    '消费等级': ['低', '低', '中', '中', '中', '高', '高', '高']
}
df = pd.DataFrame(data)

print("原始数据:")
print(df)
print()

# 1. 标准化 (Standardization) - Z-score
print("【1. 标准化 (StandardScaler)】")
print("公式: z = (x - mean) / std")
print("结果: 均值=0, 标准差=1")
print()

scaler_standard = StandardScaler()
df_standardized = df.copy()
numeric_cols = ['年龄', '收入(千)', '工作年限']
df_standardized[numeric_cols] = scaler_standard.fit_transform(df[numeric_cols])

print("标准化后的数据:")
print(df_standardized[numeric_cols].round(4))
print()
print("验证 - 各列均值:", df_standardized[numeric_cols].mean().round(4).values)
print("验证 - 各列标准差:", df_standardized[numeric_cols].std().round(4).values)
print()

# 2. 归一化 (Normalization) - MinMax
print("【2. 归一化 (MinMaxScaler)】")
print("公式: x_norm = (x - min) / (max - min)")
print("结果: 范围 [0, 1]")
print()

scaler_minmax = MinMaxScaler()
df_normalized = df.copy()
df_normalized[numeric_cols] = scaler_minmax.fit_transform(df[numeric_cols])

print("归一化后的数据:")
print(df_normalized[numeric_cols].round(4))
print()
print("验证 - 各列最小值:", df_normalized[numeric_cols].min().round(4).values)
print("验证 - 各列最大值:", df_normalized[numeric_cols].max().round(4).values)
print()

# 3. 标签编码
print("【3. 标签编码 (类别转数值)】")
df_encoded = df.copy()
rank_map = {'低': 0, '中': 1, '高': 2}
df_encoded['消费等级_编码'] = df_encoded['消费等级'].map(rank_map)
print(df_encoded[['消费等级', '消费等级_编码']])
print()

# 4. One-Hot 编码
print("【4. One-Hot 编码】")
df_onehot = pd.get_dummies(df, columns=['消费等级'], prefix='消费等级')
print(df_onehot.columns.tolist())
print(df_onehot)
print()

# 5. 对数变换（处理偏态分布）
print("【5. 对数变换】")
df_log = df.copy()
df_log['收入_log'] = np.log1p(df_log['收入(千)'])
print("收入偏度:", df['收入(千)'].skew().round(4))
print("收入log偏度:", df_log['收入_log'].skew().round(4))`
      },
      {
        id: '4.3',
        title: '特征工程',
        description: '特征工程是从原始数据中提取有用特征的过程，包括：特征选择（筛选重要特征）、特征构造（创建新特征）、特征编码（类别特征处理）等。好的特征可以显著提升模型性能。',
        codeExample: `# 特征选择/编码示例
import pandas as pd
import numpy as np
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.preprocessing import OneHotEncoder

print("=== 特征工程演示 ===\\n")

# 构建示例数据
np.random.seed(42)
n = 200
data = {
    '年龄': np.random.randint(18, 65, n),
    '性别': np.random.choice(['男', '女'], n),
    '学历': np.random.choice(['高中', '大专', '本科', '硕士', '博士'], n),
    '城市等级': np.random.choice(['一线', '二线', '三线', '四线'], n),
    '工作年限': np.random.randint(0, 40, n),
    '项目数量': np.random.randint(0, 20, n),
    '加班时长': np.random.randint(0, 100, n),
    '绩效评分': np.random.randint(60, 100, n),
}
df = pd.DataFrame(data)
# 构造目标变量（薪资），与多个特征相关
df['薪资'] = (df['年龄'] * 50 + 
             df['工作年限'] * 200 + 
             df['项目数量'] * 300 + 
             df['绩效评分'] * 20 +
             np.random.normal(0, 1000, n)).astype(int)

print("原始数据（前5行）:")
print(df.head())
print(f"数据形状: {df.shape}")
print()

# 1. 特征构造
print("【1. 特征构造】")
df_engineered = df.copy()

# 构造新特征
df_engineered['年龄分组'] = pd.cut(df_engineered['年龄'], 
                                 bins=[18, 30, 45, 65], 
                                 labels=['青年', '中年', '中老年'])
df_engineered['工作效率'] = df_engineered['项目数量'] / (df_engineered['工作年限'] + 1)
df_engineered['经验年限比'] = df_engineered['工作年限'] / (df_engineered['年龄'] - 18 + 1)

print("新增特征: 年龄分组、工作效率、经验年限比")
print()

# 2. 类别特征编码
print("【2. 类别特征编码】")

# 有序编码（学历有顺序）
edu_order = {'高中': 0, '大专': 1, '本科': 2, '硕士': 3, '博士': 4}
df_engineered['学历_编码'] = df_engineered['学历'].map(edu_order)

# One-Hot编码（城市等级、性别）
df_encoded = pd.get_dummies(df_engineered, columns=['性别', '城市等级'], drop_first=True)

print("编码后特征列:", [col for col in df_encoded.columns if col not in ['年龄', '学历', '年龄分组']])
print()

# 3. 特征选择
print("【3. 特征选择（基于F检验）】")

# 准备数值型特征
feature_cols = ['年龄', '工作年限', '项目数量', '加班时长', '绩效评分', 
                '学历_编码', '工作效率', '经验年限比']
X = df_encoded[feature_cols]
y = df_encoded['薪资']

# 使用SelectKBest选择最好的5个特征
selector = SelectKBest(score_func=f_regression, k=5)
X_selected = selector.fit_transform(X, y)

# 输出特征得分
feature_scores = pd.DataFrame({
    '特征': feature_cols,
    'F值得分': selector.scores_.round(2),
    'p值': selector.pvalues_.round(6)
}).sort_values('F值得分', ascending=False)

print(feature_scores.to_string(index=False))
print()
print("选中的Top 5特征:", [feature_cols[i] for i in selector.get_support(indices=True)])
print()

# 4. 特征重要性可视化
print("【4. 特征重要性排名】")
for i, row in feature_scores.head(5).iterrows():
    print(f"  {row['特征']}: F值 = {row['F值得分']:.2f}")`
      }
    ]
  },
  {
    id: 5,
    title: '第5章 机器学习基础',
    description: '了解机器学习的基本概念和算法，掌握使用Python进行机器学习的基本技能。',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-500',
    knowledgePoints: [
      {
        id: '5.1',
        title: '机器学习概述',
        description: '机器学习是人工智能的一个分支，它使计算机能够从数据中学习并改进性能，而无需进行明确的编程。机器学习主要分为监督学习、无监督学习和强化学习三大类。线性回归是最基础的监督学习算法之一。',
        codeExample: `# 简单的线性回归示例
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== 线性回归示例 ===\\n")

# 1. 准备数据
print("【1. 准备数据】")
np.random.seed(42)
X = np.random.rand(100, 1) * 10  # 工作经验（年）
y = 3000 + 2000 * X + np.random.randn(100, 1) * 2000  # 薪资

print(f"样本数量: {len(X)}")
print(f"工作经验范围: {X.min():.1f} - {X.max():.1f} 年")
print(f"薪资范围: {y.min():.0f} - {y.max():.0f} 元")
print()

# 2. 划分训练集和测试集
print("【2. 划分数据集】")
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(f"训练集: {len(X_train)} 个样本")
print(f"测试集: {len(X_test)} 个样本")
print()

# 3. 创建并训练模型
print("【3. 训练线性回归模型】")
model = LinearRegression()
model.fit(X_train, y_train)
print(f"回归系数 (斜率): {model.coef_[0][0]:.2f}")
print(f"截距: {model.intercept_[0]:.2f}")
print(f"回归方程: y = {model.coef_[0][0]:.2f}x + {model.intercept_[0]:.2f}")
print()

# 4. 模型预测
print("【4. 模型预测】")
y_pred = model.predict(X_test)

# 展示预测结果
comparison = pd.DataFrame({
    '工作经验(年)': X_test.flatten().round(1),
    '实际薪资': y_test.flatten().round(0),
    '预测薪资': y_pred.flatten().round(0),
    '误差': (y_test - y_pred).flatten().round(0)
})
print(comparison.head(8).to_string(index=False))
print()

# 5. 模型评估
print("【5. 模型评估】")
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)
print(f"均方误差 (MSE): {mse:.2f}")
print(f"均方根误差 (RMSE): {rmse:.2f}")
print(f"R² 得分: {r2:.4f}")
print()

# 6. 可视化
print("【6. 结果可视化】")
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# 左图：训练数据和回归线
ax1.scatter(X_train, y_train, color='blue', alpha=0.6, label='训练数据')
X_line = np.linspace(0, 10, 100).reshape(-1, 1)
y_line = model.predict(X_line)
ax1.plot(X_line, y_line, 'r-', linewidth=2, label='回归直线')
ax1.set_xlabel('工作经验（年）')
ax1.set_ylabel('薪资（元）')
ax1.set_title('线性回归模型（训练集）')
ax1.legend()
ax1.grid(True, alpha=0.3)

# 右图：测试集预测结果
ax2.scatter(y_test, y_pred, color='green', alpha=0.6)
ax2.plot([y.min(), y.max()], [y.min(), y.max()], 'r--', linewidth=2, label='完美预测线')
ax2.set_xlabel('实际薪资')
ax2.set_ylabel('预测薪资')
ax2.set_title('预测结果对比（测试集）')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('linear_regression.png', dpi=150)
print("图表已保存为 linear_regression.png")`
      },
      {
        id: '5.2',
        title: '监督学习',
        description: '监督学习是机器学习的一种类型，它使用带有标签的训练数据来学习从输入到输出的映射关系。常见的监督学习算法包括：线性回归（回归问题）、逻辑回归（分类问题）、决策树、随机森林、支持向量机等。',
        codeExample: `# 分类问题示例（逻辑回归）
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
from sklearn.preprocessing import StandardScaler

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== 逻辑回归分类示例 ===\\n")

# 1. 准备数据（预测是否购买产品）
print("【1. 准备数据】")
np.random.seed(42)
n = 200

# 特征：年龄、收入
age = np.random.randint(18, 70, n)
income = np.random.randint(30, 200, n)  # 单位：千元

# 构造标签：年龄适中且收入高的更容易购买
buy_prob = 1 / (1 + np.exp(-(0.05*age + 0.03*income - 5)))
purchased = (buy_prob > 0.5).astype(int)

df = pd.DataFrame({
    '年龄': age,
    '月收入(千)': income,
    '是否购买': purchased
})

print(f"样本数量: {n}")
print(f"购买者: {purchased.sum()} 人 ({purchased.mean()*100:.1f}%)")
print(f"未购买者: {n - purchased.sum()} 人")
print()
print("数据示例（前8行）:")
print(df.head(8).to_string(index=False))
print()

# 2. 数据预处理
print("【2. 数据预处理】")
X = df[['年龄', '月收入(千)']]
y = df['是否购买']

# 特征标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.3, random_state=42)
print(f"训练集: {len(X_train)} 样本")
print(f"测试集: {len(X_test)} 样本")
print()

# 3. 训练逻辑回归模型
print("【3. 训练逻辑回归模型】")
model = LogisticRegression(random_state=42)
model.fit(X_train, y_train)
print(f"模型系数: {model.coef_[0].round(4)}")
print(f"截距: {model.intercept_[0]:.4f}")
print()

# 4. 模型预测和评估
print("【4. 模型评估】")
y_pred = model.predict(X_test)
y_prob = model.predict_proba(X_test)[:, 1]

accuracy = accuracy_score(y_test, y_pred)
print(f"准确率: {accuracy:.4f} ({accuracy*100:.2f}%)")
print()

print("混淆矩阵:")
cm = confusion_matrix(y_test, y_pred)
print(f"              预测未购买  预测购买")
print(f"实际未购买     {cm[0][0]:>8d}  {cm[0][1]:>8d}")
print(f"实际购买       {cm[1][0]:>8d}  {cm[1][1]:>8d}")
print()

print("分类报告:")
print(classification_report(y_test, y_pred, target_names=['未购买', '购买']))

# 5. 可视化决策边界
print("【5. 决策边界可视化】")
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# 左图：数据分布
scatter = ax1.scatter(df['年龄'], df['月收入(千)'], c=df['是否购买'], 
                     cmap='RdYlGn', edgecolors='black', alpha=0.7)
ax1.set_xlabel('年龄')
ax1.set_ylabel('月收入（千元）')
ax1.set_title('用户购买行为分布')
ax1.legend(handles=scatter.legend_elements()[0], labels=['未购买', '购买'])
ax1.grid(True, alpha=0.3)

# 右图：决策边界
x_min, x_max = X_scaled[:, 0].min() - 0.5, X_scaled[:, 0].max() + 0.5
y_min, y_max = X_scaled[:, 1].min() - 0.5, X_scaled[:, 1].max() + 0.5
xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.02),
                     np.arange(y_min, y_max, 0.02))
Z = model.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

ax2.contourf(xx, yy, Z, alpha=0.3, cmap='RdYlGn')
ax2.scatter(X_test[:, 0], X_test[:, 1], c=y_test, cmap='RdYlGn', 
            edgecolors='black', alpha=0.7)
ax2.set_xlabel('年龄（标准化）')
ax2.set_ylabel('月收入（标准化）')
ax2.set_title('逻辑回归决策边界（测试集）')
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('logistic_regression.png', dpi=150)
print("图表已保存为 logistic_regression.png")`
      },
      {
        id: '5.3',
        title: '无监督学习',
        description: '无监督学习是机器学习的一种类型，它使用没有标签的数据来发现数据中的内在结构和模式。常见的无监督学习算法包括：K-Means聚类（将数据分成K个簇）、层次聚类、主成分分析(PCA)（降维）等。',
        codeExample: `# KMeans聚类示例
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

print("=== K-Means 聚类示例 ===\\n")

# 1. 生成模拟数据（客户消费行为）
print("【1. 准备客户数据】")
np.random.seed(42)

# 生成4个簇的客户数据
cluster_centers = np.array([
    [20, 20],   # 低收入低消费
    [60, 30],   # 中收入低消费
    [40, 70],   # 中收入高消费
    [80, 85]    # 高收入高消费
])

X_list = []
for center in cluster_centers:
    cluster_points = center + np.random.randn(50, 2) * 8
    X_list.append(cluster_points)

X = np.vstack(X_list)
df = pd.DataFrame(X, columns=['年收入(万)', '年消费(万)'])

print(f"客户数量: {len(df)}")
print(f"收入范围: {df['年收入(万)'].min():.1f} - {df['年收入(万)'].max():.1f} 万")
print(f"消费范围: {df['年消费(万)'].min():.1f} - {df['年消费(万)'].max():.1f} 万")
print()

# 2. 数据标准化
print("【2. 数据标准化】")
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("✓ 数据已标准化")
print()

# 3. 确定最佳聚类数（肘部法则）
print("【3. 确定最佳聚类数（肘部法则）】")
inertias = []
silhouette_scores = []
k_range = range(2, 10)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(X_scaled)
    inertias.append(kmeans.inertia_)
    sil_score = silhouette_score(X_scaled, kmeans.labels_)
    silhouette_scores.append(sil_score)
    print(f"  k={k}: 轮廓系数 = {sil_score:.4f}")

print()

# 4. 执行K-Means聚类
print("【4. K-Means 聚类 (k=4)】")
kmeans = KMeans(n_clusters=4, random_state=42, n_init=10)
kmeans.fit(X_scaled)
df['聚类标签'] = kmeans.labels_

print(f"聚类结果分布:")
for i in range(4):
    count = (df['聚类标签'] == i).sum()
    cluster_data = df[df['聚类标签'] == i]
    print(f"  簇 {i}: {count} 人, 平均收入={cluster_data['年收入(万)'].mean():.1f}万, "
          f"平均消费={cluster_data['年消费(万)'].mean():.1f}万")
print()

# 5. 客户画像
print("【5. 客户分群画像】")
cluster_names = ['低价值客户', '潜力型客户', '消费型客户', '高价值客户']
# 根据实际聚类结果重新命名
cluster_means = df.groupby('聚类标签')[['年收入(万)', '年消费(万)']].mean()
sorted_clusters = (cluster_means['年收入(万)'] + cluster_means['年消费(万)']).sort_values().index
label_mapping = {old: new for new, old in enumerate(sorted_clusters)}
df['客户类型'] = df['聚类标签'].map(lambda x: cluster_names[label_mapping[x]])

for name in cluster_names:
    count = (df['客户类型'] == name).sum()
    subset = df[df['客户类型'] == name]
    print(f"  {name}: {count}人, 收入{subset['年收入(万)'].mean():.1f}万, 消费{subset['年消费(万)'].mean():.1f}万")
print()

# 6. 可视化
print("【6. 聚类结果可视化】")
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))

# 左图：原始数据
ax1.scatter(df['年收入(万)'], df['年消费(万)'], alpha=0.6, c='gray', edgecolors='white')
ax1.set_xlabel('年收入（万元）')
ax1.set_ylabel('年消费（万元）')
ax1.set_title('客户消费行为数据（聚类前）')
ax1.grid(True, alpha=0.3)

# 右图：聚类结果
colors = ['#e74c3c', '#f39c12', '#3498db', '#2ecc71']
for i, name in enumerate(cluster_names):
    subset = df[df['客户类型'] == name]
    ax2.scatter(subset['年收入(万)'], subset['年消费(万)'], 
                c=colors[i], label=name, alpha=0.7, edgecolors='white')
ax2.set_xlabel('年收入（万元）')
ax2.set_ylabel('年消费（万元）')
ax2.set_title('客户分群结果（聚类后）')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig('kmeans_clustering.png', dpi=150)
print("图表已保存为 kmeans_clustering.png")`
      }
    ]
  }
]

export default function DataAnalysisCourse() {
  const [expandedChapters, setExpandedChapters] = useState<Set<number>>(new Set())
  const [expandedCodes, setExpandedCodes] = useState<Set<string>>(new Set())
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId)
      } else {
        newSet.add(chapterId)
      }
      return newSet
    })
  }

  const toggleCode = (pointId: string) => {
    setExpandedCodes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(pointId)) {
        newSet.delete(pointId)
      } else {
        newSet.add(pointId)
      }
      return newSet
    })
  }

  const copyCode = async (code: string, pointId: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(pointId)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  G
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">gyq的学习页面</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                首页
              </Link>
              <Link to="/#courses" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                课程列表
              </Link>
              <Link to="/#about" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                关于我
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 课程头部 */}
      <header className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">数据分析技术</h1>
              <p className="text-xl opacity-90">高职大二第二学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                📊
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 课程内容 */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 课程介绍 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              课程介绍
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                《数据分析技术》是商务数据分析与应用专业的核心课程，旨在培养学生运用数据分析工具和方法解决实际商业问题的能力。
                本课程在学生已掌握Python基础、数据采集与处理、商务数据分析与应用基础等课程的基础上，进一步深化数据分析技能，
                重点培养学生的数据可视化、统计分析、机器学习基础等能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                通过本课程的学习，学生将能够运用所学知识分析实际商业数据，为企业决策提供数据支持，
                具备初步的数据分析师岗位所需的技能和素养。
              </p>
            </div>
          </section>

          {/* 学习目标 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              学习目标
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">知识目标</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    掌握数据分析的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解数据可视化的原理和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解统计分析的基本原理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉机器学习的基本概念和算法
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">能力目标</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python进行数据清洗和预处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用可视化工具创建数据图表
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够进行基本的统计分析和假设检验
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够运用机器学习算法解决简单的预测问题
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 课程大纲 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-600">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              课程大纲
            </h2>
            <div className="space-y-4">
              {chaptersData.map((chapter) => {
                const isExpanded = expandedChapters.has(chapter.id)
                return (
                  <div key={chapter.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300">
                    <div
                      className={`flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300 border-l-4 ${chapter.borderColor}`}
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`${chapter.bgColor} ${chapter.color} text-sm font-semibold px-3 py-1 rounded-full`}>
                            第{chapter.id}章
                          </span>
                          <h3 className="text-xl font-semibold text-gray-900">{chapter.title.replace(/第\d章\s/, '')}</h3>
                        </div>
                        <p className="text-gray-600">{chapter.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          共 {chapter.knowledgePoints.length} 个知识点
                        </p>
                      </div>
                      <div className={`transform transition-transform duration-300 ml-4 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                          <polyline points="6 9 12 15 18 9"/>
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="p-6 pt-0 space-y-4">
                        {chapter.knowledgePoints.map((point) => {
                          const isCodeExpanded = expandedCodes.has(point.id)
                          const isCopied = copiedCode === point.id
                          return (
                            <div key={point.id} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow duration-300">
                              <div className="flex items-start gap-3 mb-4">
                                <span className={`${chapter.bgColor} ${chapter.color} font-bold text-sm rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0`}>
                                  {point.id}
                                </span>
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h4>
                                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                                </div>
                              </div>
                              <div className="ml-11">
                                <button
                                  onClick={() => toggleCode(point.id)}
                                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isCodeExpanded ? `bg-gray-200 text-gray-700` : `${chapter.bgColor} ${chapter.color} hover:opacity-80`}`}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"/>
                                    <polyline points="8 6 2 12 8 18"/>
                                  </svg>
                                  {isCodeExpanded ? '收起代码示例' : '查看代码示例'}
                                </button>
                                <div
                                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isCodeExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                >
                                  <div className="relative rounded-lg overflow-hidden">
                                    <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                                      <span className="text-gray-400 text-xs font-mono">Python</span>
                                      <button
                                        onClick={() => copyCode(point.codeExample, point.id)}
                                        className="text-gray-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
                                      >
                                        {isCopied ? (
                                          <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                                              <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                            <span className="text-green-400">已复制</span>
                                          </>
                                        ) : (
                                          <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                                            </svg>
                                            复制代码
                                          </>
                                        )}
                                      </button>
                                    </div>
                                    <div className="bg-gray-900 p-4 overflow-x-auto">
                                      <pre className="text-gray-100 text-sm font-mono leading-relaxed whitespace-pre-wrap break-words">
                                        <code>{point.codeExample}</code>
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* 课程资源 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              课程资源
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-2xl mb-4">
                  📚
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">教材与参考资料</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>《Python数据分析》</li>
                  <li>《数据可视化实战》</li>
                  <li>《统计学习方法》</li>
                  <li>《机器学习实战》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>Jupyter Notebook</li>
                  <li>NumPy, Pandas</li>
                  <li>Matplotlib, Seaborn</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>案例分析与小组讨论</li>
                  <li>项目实践与汇报</li>
                  <li>在线资源学习</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 考核方式 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              考核方式
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">平时成绩 (40%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>课堂参与</span>
                      <span>10%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>作业完成情况</span>
                      <span>15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>实验报告</span>
                      <span>15%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">期末成绩 (60%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>数据分析项目</span>
                      <span>40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>期末考试</span>
                      <span>20%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 理论知识测验 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-purple-600">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              理论知识测验
            </h2>
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">检验你的学习成果</h3>
                  <p className="text-lg opacity-90 mb-4">
                    通过12道精选选择题，全面检验你对数据分析技术理论知识的掌握程度。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      📊 描述性统计
                    </span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      🔧 数据预处理
                    </span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      📈 数据可视化
                    </span>
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                      🤖 机器学习
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link 
                    to="/data-analysis-quiz" 
                    className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <span className="mr-2">📝</span>
                    开始测验
                  </Link>
                  <Link 
                    to="/data-analysis-tech" 
                    className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:bg-opacity-10 transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="mr-2">💻</span>
                    实训项目
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 深入学习 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              深入学习
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-semibold mb-4">想要学习更多高级数据分析技术？</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                探索数据分析的高级技术和实践应用，掌握专业的数据分析师技能，提升你的就业竞争力。
              </p>
              <Link 
                to="/deep-learning/data-analysis" 
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                开始深入学习
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="mb-4">© 2026 gyq的个人学习页面. 保留所有权利.</p>
            <div className="flex justify-center space-x-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                返回首页
              </Link>
              <Link to="/#courses" className="text-gray-400 hover:text-white transition-colors duration-300">
                课程列表
              </Link>
              <Link to="/#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                关于我
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}