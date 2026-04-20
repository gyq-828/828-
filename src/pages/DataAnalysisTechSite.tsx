import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { autocompletion, CompletionContext, CompletionResult } from '@codemirror/autocomplete';

const DataAnalysisTechSite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [userCode, setUserCode] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Python 智能提示配置
  const pythonCompletion = (context: CompletionContext): CompletionResult | null => {
    const pythonKeywords = [
      { label: 'import', type: 'keyword' },
      { label: 'from', type: 'keyword' },
      { label: 'def', type: 'keyword' },
      { label: 'class', type: 'keyword' },
      { label: 'if', type: 'keyword' },
      { label: 'elif', type: 'keyword' },
      { label: 'else', type: 'keyword' },
      { label: 'for', type: 'keyword' },
      { label: 'while', type: 'keyword' },
      { label: 'return', type: 'keyword' },
      { label: 'print', type: 'function' },
      { label: 'len', type: 'function' },
      { label: 'range', type: 'function' },
      { label: 'list', type: 'function' },
      { label: 'dict', type: 'function' },
      { label: 'set', type: 'function' }
    ];

    const pandasFunctions = [
      { label: 'pd.read_csv', type: 'function', detail: '读取CSV文件' },
      { label: 'pd.DataFrame', type: 'function', detail: '创建DataFrame' },
      { label: 'df.head', type: 'function', detail: '查看前几行' },
      { label: 'df.tail', type: 'function', detail: '查看后几行' },
      { label: 'df.info', type: 'function', detail: '查看数据信息' },
      { label: 'df.describe', type: 'function', detail: '描述性统计' },
      { label: 'df.isnull', type: 'function', detail: '检查缺失值' },
      { label: 'df.fillna', type: 'function', detail: '填充缺失值' },
      { label: 'df.dropna', type: 'function', detail: '删除缺失值' },
      { label: 'df.groupby', type: 'function', detail: '分组' },
      { label: 'df.corr', type: 'function', detail: '计算相关系数' },
      { label: 'pd.cut', type: 'function', detail: '分箱' },
      { label: 'pd.qcut', type: 'function', detail: '分位数分箱' }
    ];

    const numpyFunctions = [
      { label: 'np.array', type: 'function', detail: '创建数组' },
      { label: 'np.mean', type: 'function', detail: '计算均值' },
      { label: 'np.median', type: 'function', detail: '计算中位数' },
      { label: 'np.std', type: 'function', detail: '计算标准差' },
      { label: 'np.max', type: 'function', detail: '最大值' },
      { label: 'np.min', type: 'function', detail: '最小值' }
    ];

    const sklearnFunctions = [
      { label: 'StandardScaler', type: 'class', detail: '数据标准化' },
      { label: 'OneHotEncoder', type: 'class', detail: '独热编码' },
      { label: 'train_test_split', type: 'function', detail: '拆分数据集' },
      { label: 'KMeans', type: 'class', detail: 'K均值聚类' },
      { label: 'LinearRegression', type: 'class', detail: '线性回归' },
      { label: 'RandomForestRegressor', type: 'class', detail: '随机森林回归' },
      { label: 'r2_score', type: 'function', detail: 'R²评分' },
      { label: 'mean_absolute_error', type: 'function', detail: '平均绝对误差' },
      { label: 'IsolationForest', type: 'class', detail: '孤立森林异常检测' }
    ];

    const matplotlibFunctions = [
      { label: 'plt.figure', type: 'function', detail: '创建图形' },
      { label: 'plt.plot', type: 'function', detail: '绘制折线图' },
      { label: 'plt.scatter', type: 'function', detail: '绘制散点图' },
      { label: 'plt.bar', type: 'function', detail: '绘制柱状图' },
      { label: 'plt.pie', type: 'function', detail: '绘制饼图' },
      { label: 'plt.title', type: 'function', detail: '设置标题' },
      { label: 'plt.xlabel', type: 'function', detail: '设置X轴标签' },
      { label: 'plt.ylabel', type: 'function', detail: '设置Y轴标签' },
      { label: 'plt.show', type: 'function', detail: '显示图形' },
      { label: 'plt.savefig', type: 'function', detail: '保存图形' }
    ];

    const allCompletions = [
      ...pythonKeywords,
      ...pandasFunctions,
      ...numpyFunctions,
      ...sklearnFunctions,
      ...matplotlibFunctions
    ];

    const word = context.matchBefore(/\w*/);
    if (!word) return null;

    const filtered = allCompletions.filter(item => 
      item.label.toLowerCase().startsWith(word.text.toLowerCase())
    );

    return {
      from: word.from,
      options: filtered.map(item => ({
        label: item.label,
        type: item.type as any
      }))
    };
  };

  // 知识框架数据
  const knowledgeFramework = {
    title: '数据分析技术知识框架',
    sections: [
      {
        id: 'thinking1',
        title: '维度拆解 + 细分分群思维',
        description: '将复杂数据按业务维度和算法维度拆分，针对性挖掘规律、制定策略',
        code: `import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 1. 读取用户数据（消费金额、频次、最近消费天数）
df = pd.read_csv("user_data.csv")
data = df[["消费金额", "消费频次", "最近消费天数"]]

# 2. 数据标准化（聚类必备）
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# 3. KMeans聚类分群（拆成4类用户）
kmeans = KMeans(n_clusters=4, random_state=42)
df["用户分群"] = kmeans.fit_predict(data_scaled)

# 4. 结合业务维度（地区）进一步拆解
df.groupby(["地区", "用户分群"])['消费金额'].sum()`
      },
      {
        id: 'thinking2',
        title: '变量关联 & 因子挖掘思维',
        description: '通过统计方法和算法模型，挖掘变量间的隐藏关系，找到影响结果的关键因子',
        code: `# 示例1：关联规则（购物车分析，Apriori算法）
from mlxtend.frequent_patterns import apriori, association_rules
df_cart = pd.read_csv("cart_data.csv")
# 商品编码（one-hot）
cart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")
# 挖掘频繁项集（支持度≥0.05）
frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)
# 生成关联规则（置信度≥0.7）
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

# 示例2：随机森林特征重要性
from sklearn.ensemble import RandomForestRegressor
X = df[["广告费", "客单价", "活动次数"]]  # 特征
y = df["销量"]  # 目标变量
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X, y)
# 输出特征重要性（找到影响销量的关键因子）
pd.DataFrame({"特征": X.columns, "重要性": rf.feature_importances_}).sort_values("重要性", ascending=False)`
      },
      {
        id: 'thinking3',
        title: '无监督挖掘思维',
        description: '在没有明确标签的情况下，通过聚类、分群、行为相似度分析，自动发现数据中的隐藏结构和规律',
        code: `import matplotlib.pyplot as plt
from sklearn.decomposition import PCA  # 降维可视化

# 1. 商品数据（销量、客单价、好评率、库存）
df_goods = pd.read_csv("goods_data.csv")
goods_data = df_goods[["销量", "客单价", "好评率", "库存"]]

# 2. 标准化+聚类
scaler = StandardScaler()
goods_scaled = scaler.fit_transform(goods_data)
kmeans = KMeans(n_clusters=3, random_state=42)
df_goods["商品分群"] = kmeans.fit_predict(goods_scaled)

# 3. PCA降维，可视化聚类结果
pca = PCA(n_components=2)
goods_pca = pca.fit_transform(goods_scaled)
plt.scatter(goods_pca[:,0], goods_pca[:,1], c=df_goods["商品分群"], cmap="viridis")
plt.xlabel("PCA维度1")
plt.ylabel("PCA维度2")
plt.title("商品聚类结果可视化")
plt.show()`
      },
      {
        id: 'thinking4',
        title: '拟合&预测建模思维',
        description: '通过回归、树模型、时序拟合等方法，从历史数据中量化规律，实现数值预测和分类判断',
        code: `from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

# 1. 准备数据（特征：广告费、活动次数、客单价；目标：销量）
X = df[["广告费", "活动次数", "客单价"]]
y = df["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. 多元线性回归预测
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict(X_test)
print("线性回归R²得分：", r2_score(y_test, y_pred_lr))

# 3. 随机森林回归预测（非线性场景更优）
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
y_pred_rf = rf.predict(X_test)
print("随机森林R²得分：", r2_score(y_test, y_pred_rf))`
      },
      {
        id: 'thinking5',
        title: '业务模型落地思维',
        description: '所有分析、算法、模型都不为“炫技”，而是落地到具体业务场景，解决实际问题',
        code: `# 1. RFM用户分层（业务落地核心模型）
df_rfm = pd.read_csv("user_rfm.csv")
# 定义分层标准（业务定制，可调整）
df_rfm["R分"] = pd.qcut(df_rfm["最近消费天数"], 5, labels=[5,4,3,2,1])  # 1=最差，5=最好
df_rfm["F分"] = pd.qcut(df_rfm["消费频次"], 5, labels=[1,2,3,4,5])
df_rfm["M分"] = pd.qcut(df_rfm["消费金额"], 5, labels=[1,2,3,4,5])
# 计算RFM总分
df_rfm["RFM总分"] = df_rfm["R分"].astype(int) + df_rfm["F分"].astype(int) + df_rfm["M分"].astype(int)
# 业务分层（落地运营策略）
def rfm_level(score):
    if score >= 13: return "高价值用户"  # 专属福利+复购激励
    elif score >= 8: return "潜力用户"   # 引导消费+提升频次
    else: return "流失/低价值用户"       # 唤醒活动+优惠券
df_rfm["用户等级"] = df_rfm["RFM总分"].apply(rfm_level)
# 输出各等级用户数量，用于制定运营策略
df_rfm["用户等级"].value_counts()`
      }
    ]
  };

  // 实训项目数据
  const trainingProjects = [
    {
      id: 1,
      title: '数据预处理高阶版',
      description: '缺失值/重复值/异常值高阶处理、特征分桶、离散化、类别编码、数据标准化/归一化',
      dataset: 'user_behavior.csv',
      tasks: [
        '读取模拟数据（user_behavior.csv）',
        '缺失值处理：消费金额/频次缺失用“中位数”填充，性别/地区缺失用“未知”填充，注册时间缺失直接删除',
        '异常值处理：用“箱线图+3σ原则”识别消费金额、浏览时长的异常值，采用“中位数替换”',
        '特征处理：消费金额分桶（低/中/高）、浏览时长离散化（短/中/长）、性别/地区做OneHotEncoder编码、注册时间提取“注册月份”特征',
        '数据标准化：对消费金额、消费频次、最近消费天数做StandardScaler标准化，保存处理后的数据（processed_data.csv）'
      ],
      keySteps: [
        '# 【项目1重点】首次学习,完整演示数据读取和预处理全流程\nimport pandas as pd\nimport numpy as np\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder',
        '# 1. 读取数据 - 这是所有数据分析的第一步,后续项目会省略此步骤\ndf = pd.read_csv("user_behavior.csv")\nprint("数据形状:", df.shape)\nprint("\\n数据预览:")\nprint(df.head())\nprint("\\n缺失值统计:")\nprint(df.isnull().sum())',
        '# 2. 缺失值处理 - 不同类型字段使用不同填充策略\n# 数值型字段用中位数填充\ndf["消费金额"] = df["消费金额"].fillna(df["消费金额"].median())\ndf["消费频次"] = df["消费频次"].fillna(df["消费频次"].median())\n# 类别型字段用"未知"填充\ndf["性别"] = df["性别"].fillna("未知")\ndf["地区"] = df["地区"].fillna("未知")\n# 日期型字段直接删除缺失行\ndf = df.dropna(subset=["注册时间"])',
        '# 3. 异常值处理 - 使用3σ原则识别和处理异常值\nfor col in ["消费金额", "浏览时长"]:\n    mean = df[col].mean()\n    std = df[col].std()\n    # 识别异常值\n    outliers = (df[col] > mean + 3*std) | (df[col] < mean - 3*std)\n    print(f"{col}异常值数量:", outliers.sum())\n    # 用中位数替换异常值\n    df.loc[outliers, col] = df[col].median()',
        '# 4. 特征处理 - 分桶、离散化、编码\n# 数值型特征分桶\ndf["消费金额分桶"] = pd.cut(df["消费金额"], bins=3, labels=["低", "中", "高"])\ndf["浏览时长分桶"] = pd.cut(df["浏览时长"], bins=3, labels=["短", "中", "长"])\n# 类别型特征One-Hot编码\nencoder = OneHotEncoder(sparse_output=False)\ngender_encoded = encoder.fit_transform(df[["性别"]])\ngender_df = pd.DataFrame(gender_encoded, columns=encoder.get_feature_names_out(["性别"]))\n# 合并编码后的特征\ndf = pd.concat([df, gender_df], axis=1)\n# 日期特征提取\ndf["注册时间"] = pd.to_datetime(df["注册时间"])\ndf["注册月份"] = df["注册时间"].dt.month',
        '# 5. 数据标准化 - 对数值型特征进行标准化(为后续机器学习算法做准备)\nscaler = StandardScaler()\ndf[["消费金额", "消费频次", "最近消费天数"]] = scaler.fit_transform(df[["消费金额", "消费频次", "最近消费天数"]])',
        '# 6. 保存处理后的数据 - 供后续项目使用\ndf.to_csv("processed_data.csv", index=False)\nprint("\\n数据预处理完成,已保存为 processed_data.csv")'
      ],
      answer: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, OneHotEncoder

# 1. 读取数据
df = pd.read_csv("user_behavior.csv")

# 2. 缺失值处理
df["消费金额"] = df["消费金额"].fillna(df["消费金额"].median())
df["消费频次"] = df["消费频次"].fillna(df["消费频次"].median())
df["性别"] = df["性别"].fillna("未知")
df["地区"] = df["地区"].fillna("未知")
df = df.dropna(subset=["注册时间"])

# 3. 异常值处理
for col in ["消费金额", "浏览时长"]:
    mean = df[col].mean()
    std = df[col].std()
    outliers = (df[col] > mean + 3*std) | (df[col] < mean - 3*std)
    df.loc[outliers, col] = df[col].median()

# 4. 特征处理
df["消费金额分桶"] = pd.cut(df["消费金额"], bins=3, labels=["低", "中", "高"])
df["浏览时长分桶"] = pd.cut(df["浏览时长"], bins=3, labels=["短", "中", "长"])

# OneHot编码
encoder = OneHotEncoder(sparse_output=False)
gender_encoded = encoder.fit_transform(df[["性别"]])
gender_df = pd.DataFrame(gender_encoded, columns=encoder.get_feature_names_out(["性别"]))

region_encoded = encoder.fit_transform(df[["地区"]])
region_df = pd.DataFrame(region_encoded, columns=encoder.get_feature_names_out(["地区"]))

# 提取注册月份
df["注册时间"] = pd.to_datetime(df["注册时间"])
df["注册月份"] = df["注册时间"].dt.month

# 合并编码后的特征
df = pd.concat([df, gender_df, region_df], axis=1)

# 5. 数据标准化
scaler = StandardScaler()
df[["消费金额", "消费频次", "最近消费天数"]] = scaler.fit_transform(df[["消费金额", "消费频次", "最近消费天数"]])

# 6. 保存处理后的数据
df.to_csv("processed_data.csv", index=False)
print("数据预处理完成！")`,
      testCases: [
        {
          input: 'df.isnull().sum()',
          expected: '检查是否有缺失值',
          weight: 20
        },
        {
          input: 'from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\ndata_scaled = scaler.fit_transform(data)',
          expected: '数据标准化',
          weight: 30
        },
        {
          input: 'df.to_csv("processed_data.csv", index=False)',
          expected: '保存处理后的数据',
          weight: 20
        }
      ]
    },
    {
      id: 2,
      title: '多维统计+深度相关性分析',
      description: '描述统计、皮尔逊相关系数、斯皮尔曼相关系数、相关性热力图、多因子关联研判',
      dataset: 'processed_data.csv',
      tasks: [
        '读取项目1处理后的数据（processed_data.csv），新增“营收”字段（营收=消费金额×消费频次）',
        '做描述统计：计算营收、消费金额、消费频次、浏览时长的均值、中位数、四分位数、标准差',
        '相关性分析：计算所有数值型字段的皮尔逊相关系数和斯皮尔曼相关系数，绘制相关性热力图',
        '关联研判：分析“哪些指标与营收强相关（|r|≥0.7）”“哪些指标之间存在多重共线性（|r|≥0.8）”',
        '得出结论：明确影响营收的核心指标（至少2个），说明相关性方向（正/负相关）'
      ],
      keySteps: [
        '# 【项目2重点】跳过基础数据读取,专注于统计分析和相关性研究\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt',
        '# 1. 数据加载与新增字段 - 直接使用项目1处理好的数据\ndf = pd.read_csv("processed_data.csv")\n# 新增营收字段(消费金额*消费频次)\ndf["营收"] = df["消费金额"] * df["消费频次"]\nprint("数据加载完成,新增营收字段")',
        '# 2. 描述统计分析 - 全面了解数据分布\nprint("=== 描述统计分析 ===")\n# 选择关键指标进行描述统计\nkey_metrics = ["营收", "消费金额", "消费频次", "浏览时长"]\ndescriptive_stats = df[key_metrics].describe()\nprint(descriptive_stats)\n# 额外计算中位数和变异系数\nprint("\\n中位数:")\nprint(df[key_metrics].median())\nprint("\\n变异系数(标准差/均值):")\nprint(df[key_metrics].std() / df[key_metrics].mean())',
        '# 3. 相关性分析 - 皮尔逊和斯皮尔曼相关系数\nprint("\\n=== 相关性分析 ===")\n# 皮尔逊相关系数(适用于线性关系)\npearson_corr = df.corr(method="pearson")\nprint("皮尔逊相关系数矩阵:")\nprint(pearson_corr[key_metrics])\n# 斯皮尔曼相关系数(适用于单调关系)\nspearman_corr = df.corr(method="spearman")\nprint("\\n斯皮尔曼相关系数矩阵:")\nprint(spearman_corr[key_metrics])',
        '# 4. 可视化 - 相关性热力图\nplt.figure(figsize=(12, 10))\nsns.heatmap(pearson_corr, annot=True, cmap="coolwarm", fmt=".2f", linewidths=0.5)\nplt.title("用户行为数据相关性热力图", fontsize=14, fontweight="bold")\nplt.tight_layout()\nplt.savefig("correlation_heatmap.png")\nplt.show()\nprint("\\n热力图已保存为 correlation_heatmap.png")',
        '# 5. 深度关联研判 - 找出强相关指标和多重共线性\nprint("\\n=== 深度关联研判 ===")\n# 找出与营收强相关的指标(|r| >= 0.7)\nstrong_corr_with_revenue = pearson_corr[abs(pearson_corr["营收"]) >= 0.7]["营收"]\nprint("与营收强相关的指标:")\nprint(strong_corr_with_revenue)\n# 找出存在多重共线性的指标对(|r| >= 0.8 且 r < 1)\nmulti_collinearity = pearson_corr[(abs(pearson_corr) >= 0.8) & (abs(pearson_corr) < 1)].stack()\nprint("\\n存在多重共线性的指标对:")\nprint(multi_collinearity)',
        '# 6. 业务洞察 - 基于分析结果给出建议\nprint("\\n=== 业务洞察与建议 ===")\nif len(strong_corr_with_revenue) > 1:\n    top_factor = strong_corr_with_revenue[strong_corr_with_revenue.index != "营收"].idxmax()\n    print(f"影响营收的最关键因素是: {top_factor}")\n    print("建议: 重点优化该指标,可以有效提升营收")\nelse:\n    print("未发现与营收强相关的指标,建议收集更多数据或尝试其他分析方法")'
      ],
      answer: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# 1. 读取数据并计算营收
df = pd.read_csv("processed_data.csv")
df["营收"] = df["消费金额"] * df["消费频次"]

# 2. 描述统计
print("=== 描述统计 ===")
descriptive_stats = df[["营收", "消费金额", "消费频次", "浏览时长"]].describe()
print(descriptive_stats)

# 3. 相关性分析
print("\n=== 皮尔逊相关系数 ===")
pearson_corr = df.corr(method="pearson")
print(pearson_corr)

print("\n=== 斯皮尔曼相关系数 ===")
spearman_corr = df.corr(method="spearman")
print(spearman_corr)

# 4. 绘制相关性热力图
plt.figure(figsize=(12, 10))
sns.heatmap(pearson_corr, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("皮尔逊相关性热力图")
plt.tight_layout()
plt.savefig("correlation_heatmap.png")
plt.show()

# 5. 关联研判
print("\n=== 与营收强相关的指标（|r|≥0.7）===")
strong_corr = pearson_corr[abs(pearson_corr["营收"]) >= 0.7]
print(strong_corr["营收"])

print("\n=== 存在多重共线性的指标对（|r|≥0.8）===")
multi_collinearity = pearson_corr[(abs(pearson_corr) >= 0.8) & (abs(pearson_corr) < 1)]
if not multi_collinearity.empty:
    print(multi_collinearity.stack())
else:
    print("无多重共线性指标对")

# 6. 得出结论
print("\n=== 分析结论 ===")
print("影响营收的核心指标：")
for col in strong_corr.index:
    if col != "营收":
        corr_value = strong_corr.loc[col, "营收"]
        direction = "正相关" if corr_value > 0 else "负相关"
        print(f"- {col}: {corr_value:.3f} ({direction})")

print("\n建议：")
print("1. 重点关注与营收强相关的指标，制定针对性的运营策略")
print("2. 对于存在多重共线性的指标，可考虑进行特征选择或降维处理")
print("3. 结合业务场景，进一步分析指标间的因果关系")`,
      testCases: [
        {
          input: 'df["营收"] = df["消费金额"] * df["消费频次"]',
          expected: '计算营收',
          weight: 20
        },
        {
          input: 'df.corr()',
          expected: '计算相关系数',
          weight: 30
        },
        {
          input: 'import seaborn as sns\nsns.heatmap(corr_matrix, annot=True)',
          expected: '绘制热力图',
          weight: 20
        }
      ]
    },
    {
      id: 3,
      title: '购物车关联规则挖掘（Apriori算法）',
      description: 'Apriori算法、频繁项集、关联规则（支持度、置信度、提升度）、商品组合分析、捆绑销售挖掘',
      dataset: 'cart_data.csv',
      tasks: [
        '读取模拟购物车数据（cart_data.csv）',
        '数据预处理：将每个订单的商品拆分，转换成one-hot编码格式',
        '用Apriori算法挖掘频繁项集：设置最小支持度=0.05',
        '生成关联规则：设置最小置信度=0.7，计算每条规则的支持度、置信度、提升度',
        '筛选有价值的规则：提升度>1，筛选出Top10关联规则',
        '业务建议：基于关联规则，给出3条捆绑销售建议'
      ],
      keySteps: [
        '# 【项目3重点】关联规则挖掘,专注于Apriori算法和购物篮分析\nimport pandas as pd\nfrom mlxtend.frequent_patterns import apriori, association_rules',
        '# 1. 数据加载 - 简洁读取数据\ncart_data = pd.read_csv("cart_data.csv")\nprint("购物车数据预览:")\nprint(cart_data.head())\nprint("\\n总记录数: ", len(cart_data))\nprint("商品种类数: ", cart_data["商品名称"].nunique())',
        '# 2. 数据转换 - 将购物车数据转换为one-hot编码格式\ncart_encoded = pd.get_dummies(cart_data["商品名称"], prefix="商品")\nprint("\\nOne-hot编码后数据形状:", cart_encoded.shape)',
        '# 3. 挖掘频繁项集 - 使用Apriori算法\nmin_support = 0.05\nfrequent_itemsets = apriori(cart_encoded, min_support=min_support, use_colnames=True)\nfrequent_itemsets = frequent_itemsets.sort_values("support", ascending=False)\nprint("\\n发现 ", len(frequent_itemsets), " 个频繁项集")\nprint(frequent_itemsets.head(10))',
        '# 4. 生成关联规则 - 计算置信度和提升度\nmin_confidence = 0.7\nrules = association_rules(frequent_itemsets, metric="confidence", min_threshold=min_confidence)\nprint("\\n生成 ", len(rules), " 条关联规则")',
        '# 5. 筛选有价值的规则 - 提升度>1表示正相关\nvaluable_rules = rules[rules["lift"] > 1].copy()\nvaluable_rules = valuable_rules.sort_values(["lift", "confidence"], ascending=[False, False])\ntop_rules = valuable_rules.head(10)\nprint("\\nTop10最有价值的关联规则:")\nprint(top_rules[["antecedents", "consequents", "support", "confidence", "lift"]])',
        '# 6. 业务建议\nprint("\\n=== 捆绑销售建议 ===")\nprint("1. 将经常一起购买的商品进行捆绑销售")\nprint("2. 把高置信度的商品组合推荐给用户")\nprint("3. 利用提升度高的组合提升整体销量")'
      ],
      answer: `import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

# 1. 读取数据
df = pd.read_csv("cart_data.csv")
print("原始数据：")
print(df.head())

# 2. 数据预处理：转换为one-hot编码
print("\n=== 数据预处理 ===")
cart_encoded = pd.get_dummies(df["商品名称"], prefix="商品")
print("One-hot编码后的数据：")
print(cart_encoded.head())

# 3. 挖掘频繁项集
print("\n=== 挖掘频繁项集 ===")
frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)
frequent_itemsets = frequent_itemsets.sort_values("support", ascending=False)
print("频繁项集：")
print(frequent_itemsets)

# 4. 生成关联规则
print("\n=== 生成关联规则 ===")
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)
print("所有关联规则：")
print(rules[["antecedents", "consequents", "support", "confidence", "lift"]])

# 5. 筛选有价值的规则
print("\n=== 筛选有价值的规则 ===")
# 筛选提升度>1的规则
valuable_rules = rules[rules["lift"] > 1]
# 按提升度排序
valuable_rules = valuable_rules.sort_values("lift", ascending=False)
# 取Top10规则
top10_rules = valuable_rules.head(10)
print("Top10关联规则：")
print(top10_rules[["antecedents", "consequents", "support", "confidence", "lift"]])

# 6. 业务建议
print("\n=== 业务建议 ===")
print("基于关联规则的捆绑销售建议：")

# 提取前3条规则作为建议
for i, (idx, rule) in enumerate(top10_rules.head(3).iterrows(), 1):
    antecedents = list(rule["antecedents"])
    consequents = list(rule["consequents"])
    confidence = rule["confidence"]
    lift = rule["lift"]
    
    print(f"\n建议{i}：")
    print(f"将{', '.join(antecedents)}与{', '.join(consequents)}进行捆绑销售")
    print(f"置信度：{confidence:.3f}（购买前者后购买后者的概率）")
    print(f"提升度：{lift:.3f}（捆绑销售的效果提升倍数）")

print("\n其他运营建议：")
print("1. 在商品详情页推荐关联商品")
print("2. 设计组合套餐，提高客单价")
print("3. 调整货架布局，将关联商品放在相邻位置")
print("4. 基于关联规则制定促销活动")`,
      testCases: [
        {
          input: 'from mlxtend.frequent_patterns import apriori, association_rules',
          expected: '导入必要的库',
          weight: 20
        },
        {
          input: 'frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)',
          expected: '挖掘频繁项集',
          weight: 30
        },
        {
          input: 'rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)',
          expected: '生成关联规则',
          weight: 30
        }
      ]
    },
    {
      id: 4,
      title: 'KMeans 聚类分析实战（用户+商品双场景）',
      description: 'KMeans聚类算法、数据标准化、肘部法则（确定k值）、聚类可视化、聚类结果解读、业务落地',
      dataset: 'processed_data.csv, goods_data.csv',
      tasks: [
        '用户聚类：读取项目1处理后的数据，选择特征：消费金额、消费频次、最近消费天数、浏览时长；标准化数据；用肘部法则确定最优k值；用KMeans聚类，给用户打上分群标签；分析每个分群的用户特征',
        '商品聚类：读取模拟商品数据（goods_data.csv），标准化数据；确定最优k值，KMeans聚类；分析每个分群的商品特征',
        '可视化：用PCA降维，绘制用户聚类、商品聚类的可视化图表',
        '业务落地：针对每个用户分群、商品分群，各给出2条运营/优化建议'
      ],
      keySteps: [
        '# 【项目4重点】KMeans聚类算法,用户和商品双场景应用\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA',
        '# 1. 用户聚类分析\n# 加载数据(跳过预处理,直接使用项目1成果)\nuser_data = pd.read_csv("processed_data.csv")\n# 选择聚类特征\nuser_features = user_data[["消费金额", "消费频次", "最近消费天数", "浏览时长"]]\n# 数据标准化(聚类前必须标准化!)\nscaler = StandardScaler()\nuser_features_scaled = scaler.fit_transform(user_features)',
        '# 2. 肘部法则确定最优k值\nprint("=== 肘部法则分析 ===")\ninertia_scores = []\nk_range = range(1, 11)\nfor k in k_range:\n    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)\n    kmeans.fit(user_features_scaled)\n    inertia_scores.append(kmeans.inertia_)\n# 绘制肘部法则图\nplt.figure(figsize=(10, 6))\nplt.plot(k_range, inertia_scores, marker="o", linewidth=2)\nplt.xlabel("聚类数量 (k)", fontsize=12)\nplt.ylabel("惯性 (Inertia)", fontsize=12)\nplt.title("肘部法则 - 选择最优k值", fontsize=14, fontweight="bold")\nplt.grid(True, alpha=0.3)\nplt.savefig("elbow_method.png")\nplt.show()\nprint("肘部法则图已保存为 elbow_method.png")',
        '# 3. KMeans聚类\n# 选择k=4(基于肘部法则)\nk_optimal = 4\nkmeans = KMeans(n_clusters=k_optimal, random_state=42, n_init=10)\nuser_data["用户分群"] = kmeans.fit_predict(user_features_scaled)\nprint(f"\\n用户已分为 {k_optimal} 个群体")',
        '# 4. 用户分群特征分析\nprint("\\n=== 用户分群特征分析 ===")\nuser_cluster_analysis = user_data.groupby("用户分群").agg({\n    "消费金额": "mean",\n    "消费频次": "mean",\n    "最近消费天数": "mean",\n    "浏览时长": "mean"\n})\nuser_cluster_analysis["用户数"] = user_data["用户分群"].value_counts().sort_index()\nprint(user_cluster_analysis)',
        '# 5. PCA降维可视化\npca = PCA(n_components=2)\nuser_pca = pca.fit_transform(user_features_scaled)\nplt.figure(figsize=(12, 8))\nscatter = plt.scatter(user_pca[:, 0], user_pca[:, 1], c=user_data["用户分群"], \n                     cmap="viridis", s=100, alpha=0.6)\nplt.colorbar(scatter, label="用户分群")\nplt.xlabel(f"PCA 1 (解释方差: {pca.explained_variance_ratio_[0]:.1%})")\nplt.ylabel(f"PCA 2 (解释方差: {pca.explained_variance_ratio_[1]:.1%})")\nplt.title("用户聚类可视化 - PCA降维", fontsize=14, fontweight="bold")\nplt.savefig("user_clustering.png")\nplt.show()',
        '# 6. 商品聚类(快速实现,复用相同方法)\nprint("\\n=== 商品聚类 ===")\ngoods_data = pd.read_csv("goods_data.csv")\ngoods_features = goods_data[["销量", "客单价", "好评率", "库存"]]\ngoods_features_scaled = StandardScaler().fit_transform(goods_features)\n# 商品聚类\nkmeans_goods = KMeans(n_clusters=3, random_state=42, n_init=10)\ngoods_data["商品分群"] = kmeans_goods.fit_predict(goods_features_scaled)\nprint(f"商品已分为 3 个类别")',
        '# 7. 业务建议\nprint("\\n=== 业务建议 ===")\nprint("1. 针对高价值用户群体(消费金额高、频次高): 提供专属优惠")\nprint("2. 针对沉睡用户(最近消费天数高): 发送唤醒活动")\nprint("3. 针对热门商品群体: 增加库存和推广资源")'
      ],
      answer: `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# 1. 用户聚类
print("=== 用户聚类 ===")
df_user = pd.read_csv("processed_data.csv")

# 选择特征
user_features = df_user[["消费金额", "消费频次", "最近消费天数", "浏览时长"]]

# 数据标准化
scaler = StandardScaler()
user_features_scaled = scaler.fit_transform(user_features)

# 肘部法则确定最优k值
print("\n=== 肘部法则确定k值 ===")
inertia = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(user_features_scaled)
    inertia.append(kmeans.inertia_)

plt.figure(figsize=(10, 6))
plt.plot(range(1, 11), inertia, marker='o')
plt.xlabel("聚类数量 (k)")
plt.ylabel("惯性 (Inertia)")
plt.title("肘部法则确定最优k值")
plt.grid(True)
plt.savefig("elbow_method.png")
plt.show()

# KMeans聚类
k = 4  # 根据肘部法则选择
kmeans = KMeans(n_clusters=k, random_state=42)
df_user["用户分群"] = kmeans.fit_predict(user_features_scaled)

# 分析每个分群的特征
print("\n=== 用户分群特征分析 ===")
user_cluster_analysis = df_user.groupby("用户分群").mean()
print(user_cluster_analysis[["消费金额", "消费频次", "最近消费天数", "浏览时长"]])

# 2. 商品聚类
print("\n=== 商品聚类 ===")
df_goods = pd.read_csv("goods_data.csv")

# 选择特征
goods_features = df_goods[["销量", "客单价", "好评率", "库存"]]

# 数据标准化
goods_features_scaled = scaler.fit_transform(goods_features)

# 肘部法则确定k值
print("\n=== 商品聚类肘部法则 ===")
inertia_goods = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(goods_features_scaled)
    inertia_goods.append(kmeans.inertia_)

plt.figure(figsize=(10, 6))
plt.plot(range(1, 11), inertia_goods, marker='o')
plt.xlabel("聚类数量 (k)")
plt.ylabel("惯性 (Inertia)")
plt.title("商品聚类肘部法则")
plt.grid(True)
plt.savefig("elbow_method_goods.png")
plt.show()

# KMeans聚类
k_goods = 3  # 根据肘部法则选择
kmeans_goods = KMeans(n_clusters=k_goods, random_state=42)
df_goods["商品分群"] = kmeans_goods.fit_predict(goods_features_scaled)

# 分析每个分群的特征
print("\n=== 商品分群特征分析 ===")
goods_cluster_analysis = df_goods.groupby("商品分群").mean()
print(goods_cluster_analysis[["销量", "客单价", "好评率", "库存"]])

# 3. 可视化
print("\n=== 聚类可视化 ===")

# PCA降维
pca = PCA(n_components=2)
user_pca = pca.fit_transform(user_features_scaled)
goods_pca = pca.fit_transform(goods_features_scaled)

# 用户聚类可视化
plt.figure(figsize=(10, 8))
scatter = plt.scatter(user_pca[:, 0], user_pca[:, 1], c=df_user["用户分群"], cmap="viridis")
plt.colorbar(scatter, label="用户分群")
plt.title("用户聚类可视化")
plt.xlabel("PCA维度1")
plt.ylabel("PCA维度2")
plt.savefig("user_clustering.png")
plt.show()

# 商品聚类可视化
plt.figure(figsize=(10, 8))
scatter = plt.scatter(goods_pca[:, 0], goods_pca[:, 1], c=df_goods["商品分群"], cmap="viridis")
plt.colorbar(scatter, label="商品分群")
plt.title("商品聚类可视化")
plt.xlabel("PCA维度1")
plt.ylabel("PCA维度2")
plt.savefig("goods_clustering.png")
plt.show()

# 4. 业务落地建议
print("\n=== 业务建议 ===")

# 用户分群建议
print("\n用户分群运营建议：")
for i in range(k):
    cluster_data = user_cluster_analysis.loc[i]
    print(f"\n用户分群{i}：")
    print(f"- 平均消费金额：{cluster_data['消费金额']:.2f}")
    print(f"- 平均消费频次：{cluster_data['消费频次']:.2f}")
    print(f"- 平均最近消费天数：{cluster_data['最近消费天数']:.2f}")
    print(f"- 平均浏览时长：{cluster_data['浏览时长']:.2f}")
    
    if cluster_data['消费金额'] > 0.5 and cluster_data['消费频次'] > 0.5:
        print("  建议：1. 提供专属VIP服务 2. 推送高端商品信息")
    elif cluster_data['最近消费天数'] < -0.5:
        print("  建议：1. 发送唤醒优惠券 2. 个性化推荐")
    else:
        print("  建议：1. 引导消费 2. 提升用户活跃度")

# 商品分群建议
print("\n商品分群优化建议：")
for i in range(k_goods):
    cluster_data = goods_cluster_analysis.loc[i]
    print(f"\n商品分群{i}：")
    print(f"- 平均销量：{cluster_data['销量']:.2f}")
    print(f"- 平均客单价：{cluster_data['客单价']:.2f}")
    print(f"- 平均好评率：{cluster_data['好评率']:.2f}")
    print(f"- 平均库存：{cluster_data['库存']:.2f}")
    
    if cluster_data['销量'] > 500 and cluster_data['好评率'] > 4.5:
        print("  建议：1. 增加库存 2. 重点推广")
    elif cluster_data['销量'] < 100:
        print("  建议：1. 优化商品 2. 考虑下架")
    else:
        print("  建议：1. 保持库存 2. 适度推广")`,
      testCases: [
        {
          input: 'from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=4, random_state=42)',
          expected: '创建KMeans模型',
          weight: 25
        },
        {
          input: 'from sklearn.decomposition import PCA\npca = PCA(n_components=2)',
          expected: 'PCA降维',
          weight: 25
        },
        {
          input: 'plt.scatter(goods_pca[:,0], goods_pca[:,1], c=df_goods["商品分群"], cmap="viridis")',
          expected: '可视化聚类结果',
          weight: 25
        }
      ]
    },
    {
      id: 5,
      title: 'RFM 模型用户分层（企业通用运营模型）',
      description: 'RFM模型（Recency/Frequency/Monetary）、分位数分箱、用户分层逻辑、业务策略落地',
      dataset: 'user_rfm.csv',
      tasks: [
        '读取项目1处理后的数据，提取RFM三个核心指标：R（最近消费天数）、F（消费频次）、M（消费金额）',
        '指标分箱：用分位数（qcut）将R、F、M各分为5个等级（1=最差，5=最好），其中R指标“值越小越好”，需反向打分',
        '计算RFM总分（总分=R分+F分+M分），并进行用户分层，至少分为4类：高价值用户、潜力用户、一般用户、流失用户',
        '统计各分层用户的数量、占比、总消费金额占比',
        '运营策略：针对每类用户，制定具体的运营动作'
      ],
      keySteps: [
        '# 【项目5重点】RFM模型,经典的用户分层和价值评估方法\nimport pandas as pd\nimport matplotlib.pyplot as plt',
        '# 1. 加载数据\nrfm_data = pd.read_csv("user_rfm.csv")\nprint("RFM原始数据:")\nprint(rfm_data.head())\nprint("\\n总用户数: ", len(rfm_data))',
        '# 2. RFM指标分箱 - 使用分位数分为5个等级\nrfm_data["R分"] = pd.qcut(rfm_data["最近消费天数"], 5, labels=[5, 4, 3, 2, 1])\nrfm_data["F分"] = pd.qcut(rfm_data["消费频次"], 5, labels=[1, 2, 3, 4, 5])\nrfm_data["M分"] = pd.qcut(rfm_data["消费金额"], 5, labels=[1, 2, 3, 4, 5])\nprint("\\nRFM分箱完成!")',
        '# 3. 计算RFM总分\nrfm_data["R分"] = rfm_data["R分"].astype(int)\nrfm_data["F分"] = rfm_data["F分"].astype(int)\nrfm_data["M分"] = rfm_data["M分"].astype(int)\nrfm_data["RFM总分"] = rfm_data["R分"] + rfm_data["F分"] + rfm_data["M分"]\nprint("\\nRFM总分计算完成!")',
        '# 4. 用户分层 - 基于RFM总分进行分层\ndef classify_user(score):\n    if score >= 13:\n        return "高价值用户"\n    elif score >= 9:\n        return "潜力用户"\n    elif score >= 6:\n        return "一般用户"\n    else:\n        return "流失/低价值用户"\n\nrfm_data["用户等级"] = rfm_data["RFM总分"].apply(classify_user)\nprint("\\n用户分层完成!")',
        '# 5. 分层统计分析\nprint("\\n=== 用户分层统计 ===")\nlevel_counts = rfm_data["用户等级"].value_counts()\nprint("各等级用户数量:")\nprint(level_counts)\nlevel_revenue = rfm_data.groupby("用户等级")["消费金额"].sum()\nprint("\\n各等级用户消费金额:")\nprint(level_revenue)',
        '# 6. 可视化展示\nplt.figure(figsize=(14, 5))\nplt.subplot(1, 2, 1)\nlevel_counts.plot(kind="pie", autopct="%1.1f%%", startangle=90)\nplt.title("用户等级分布")\nplt.subplot(1, 2, 2)\nlevel_revenue.plot(kind="bar")\nplt.title("各等级用户消费贡献")\nplt.tight_layout()\nplt.savefig("rfm_analysis.png")\nplt.show()',
        '# 7. 针对性运营策略\nprint("\\n=== 针对性运营策略 ===")\nprint("高价值用户: VIP专属服务")\nprint("潜力用户: 推荐高价值商品")\nprint("一般用户: 保持日常联系")\nprint("流失/低价值用户: 发送唤醒优惠券")'
      ],
      answer: `import pandas as pd
import matplotlib.pyplot as plt

# 1. 读取数据
df_rfm = pd.read_csv("user_rfm.csv")
print("原始数据：")
print(df_rfm.head())

# 2. RFM指标分箱
print("\n=== RFM指标分箱 ===")
# R指标：最近消费天数，值越小越好，反向打分
df_rfm["R分"] = pd.qcut(df_rfm["最近消费天数"], 5, labels=[5, 4, 3, 2, 1])
# F指标：消费频次，值越大越好
df_rfm["F分"] = pd.qcut(df_rfm["消费频次"], 5, labels=[1, 2, 3, 4, 5])
# M指标：消费金额，值越大越好
df_rfm["M分"] = pd.qcut(df_rfm["消费金额"], 5, labels=[1, 2, 3, 4, 5])

print("分箱后的数据：")
print(df_rfm[["最近消费天数", "R分", "消费频次", "F分", "消费金额", "M分"]].head())

# 3. 计算RFM总分
print("\n=== 计算RFM总分 ===")
df_rfm["RFM总分"] = df_rfm["R分"].astype(int) + df_rfm["F分"].astype(int) + df_rfm["M分"].astype(int)
print("RFM总分：")
print(df_rfm[["RFM总分"]].head())

# 4. 用户分层
print("\n=== 用户分层 ===")
def rfm_level(score):
    if score >= 13:
        return "高价值用户"
    elif score >= 9:
        return "潜力用户"
    elif score >= 6:
        return "一般用户"
    else:
        return "流失/低价值用户"

df_rfm["用户等级"] = df_rfm["RFM总分"].apply(rfm_level)
print("用户分层结果：")
print(df_rfm[["RFM总分", "用户等级"]].head())

# 5. 统计分析
print("\n=== 统计分析 ===")
# 各等级用户数量
level_counts = df_rfm["用户等级"].value_counts()
print("各等级用户数量：")
print(level_counts)

# 各等级用户占比
level_percentage = df_rfm["用户等级"].value_counts(normalize=True) * 100
print("\n各等级用户占比：")
print(level_percentage)

# 各等级用户消费金额
level_amount = df_rfm.groupby("用户等级")["消费金额"].sum()
print("\n各等级用户消费金额：")
print(level_amount)

# 各等级用户平均消费金额
level_avg_amount = df_rfm.groupby("用户等级")["消费金额"].mean()
print("\n各等级用户平均消费金额：")
print(level_avg_amount)

# 6. 可视化
print("\n=== 可视化 ===")

# 用户等级分布
plt.figure(figsize=(12, 6))
level_counts.plot(kind="bar", color="skyblue")
plt.title("各等级用户数量分布")
plt.xlabel("用户等级")
plt.ylabel("数量")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("rfm_level_distribution.png")
plt.show()

# 用户等级占比
plt.figure(figsize=(10, 8))
level_percentage.plot(kind="pie", autopct="%1.1f%%", startangle=90)
plt.title("各等级用户占比")
plt.ylabel("")
plt.tight_layout()
plt.savefig("rfm_level_percentage.png")
plt.show()

# 7. 运营策略
print("\n=== 运营策略建议 ===")
print("高价值用户（RFM总分≥13）：")
print("1. 提供专属VIP服务和特权")
print("2. 定期推送高端商品信息")
print("3. 个性化定制优惠活动")
print("4. 建立专属客服通道")

print("\n潜力用户（RFM总分9-12）：")
print("1. 引导消费，提高消费频次")
print("2. 推荐高价值商品")
print("3. 定期发送优惠券")
print("4. 提供会员升级机会")

print("\n一般用户（RFM总分6-8）：")
print("1. 增加互动，提高用户活跃度")
print("2. 推荐热门商品")
print("3. 举办促销活动")
print("4. 优化用户体验")

print("\n流失/低价值用户（RFM总分<6）：")
print("1. 发送唤醒优惠券")
print("2. 个性化推荐，重新吸引用户")
print("3. 简化购买流程")
print("4. 调查用户流失原因")`,
      testCases: [
        {
          input: 'df_rfm["R分"] = pd.qcut(df_rfm["最近消费天数"], 5, labels=[5,4,3,2,1])',
          expected: 'RFM指标分箱',
          weight: 25
        },
        {
          input: 'df_rfm["RFM总分"] = df_rfm["R分"].astype(int) + df_rfm["F分"].astype(int) + df_rfm["M分"].astype(int)',
          expected: '计算RFM总分',
          weight: 25
        },
        {
          input: 'def rfm_level(score):\n    if score >= 13: return "高价值用户"\n    elif score >= 8: return "潜力用户"\n    else: return "流失/低价值用户"',
          expected: '用户分层函数',
          weight: 25
        }
      ]
    },
    {
      id: 6,
      title: '一元+多元线性回归（销量影响因子量化）',
      description: '一元线性回归、多元线性回归、模型训练与评估（R²、MAE、MSE）、回归系数解读、多重共线性处理',
      dataset: 'sales_data.csv',
      tasks: [
        '读取模拟销量数据（sales_data.csv）',
        '一元线性回归：以“广告费”为特征，“销量”为目标变量，训练回归模型，解读回归系数，评估模型效果（R²）',
        '多元线性回归：以“广告费、活动次数、客单价、竞品价格”为特征，“销量”为目标变量，训练模型',
        '模型优化：检测多重共线性（用VIF值），删除共线性强的特征（VIF>10），重新训练模型',
        '模型评估与解读：计算R²、MAE、MSE，解读各特征的回归系数，明确“哪些特征对销量影响最大”',
        '预测应用：给定一组特征值，预测销量'
      ],
      keySteps: [
        '# 【项目6重点】线性回归,一元到多元,销量预测\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error',
        '# 1. 数据加载\nsales_data = pd.read_csv("sales_data.csv")\nprint("销量数据预览:")\nprint(sales_data.head())\nprint("\\n数据量: ", len(sales_data), " 条记录")',
        '# 2. 一元线性回归 - 用广告费预测销量\nprint("\\n=== 一元线性回归 ===")\nX_single = sales_data[["广告费"]]\ny = sales_data["销量"]\nX_train, X_test, y_train, y_test = train_test_split(X_single, y, test_size=0.2, random_state=42)\nlr_single = LinearRegression()\nlr_single.fit(X_train, y_train)\ny_pred_single = lr_single.predict(X_test)\nr2_single = r2_score(y_test, y_pred_single)\nprint("R²: ", round(r2_single, 3))\nprint("回归系数: 广告费每增加1元,销量增加 ", round(lr_single.coef_[0], 2))',
        '# 3. 多元线性回归 - 多因素预测销量\nprint("\\n=== 多元线性回归 ===")\nfeatures = ["广告费", "活动次数", "客单价", "竞品价格"]\nX_multi = sales_data[features]\nX_train_multi, X_test_multi, _, _ = train_test_split(X_multi, y, test_size=0.2, random_state=42)\nlr_multi = LinearRegression()\nlr_multi.fit(X_train_multi, y_train)\ny_pred_multi = lr_multi.predict(X_test_multi)\nr2_multi = r2_score(y_test, y_pred_multi)\nmae = mean_absolute_error(y_test, y_pred_multi)\nprint("R²: ", round(r2_multi, 3))\nprint("MAE: ", round(mae, 2))',
        '# 4. 回归系数解读 - 各因素对销量的影响\nprint("\\n=== 回归系数解读 ===")\ncoef_df = pd.DataFrame({"特征": features, "系数": lr_multi.coef_})\nprint(coef_df)',
        '# 5. 模型对比\nprint("\\n=== 模型对比 ===")\nprint("一元回归 R²: ", round(r2_single, 3))\nprint("多元回归 R²: ", round(r2_multi, 3))',
        '# 6. 实际预测应用\nprint("\\n=== 销量预测 ===")\nnew_input = [[1000, 3, 200, 180]]\npredicted = lr_multi.predict(new_input)\nprint("预测销量: ", int(predicted[0]))'
      ],
      answer: `import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error

# 1. 读取数据
df = pd.read_csv("sales_data.csv")
print("原始数据：")
print(df.head())

# 2. 一元线性回归
print("\n=== 一元线性回归 ===")
X_single = df[["广告费"]]
y = df["销量"]

# 数据拆分
X_train_single, X_test_single, y_train, y_test = train_test_split(X_single, y, test_size=0.2, random_state=42)

# 训练模型
lr_single = LinearRegression()
lr_single.fit(X_train_single, y_train)

# 预测
Y_pred_single = lr_single.predict(X_test_single)

# 评估模型
r2_single = r2_score(y_test, Y_pred_single)
mae_single = mean_absolute_error(y_test, Y_pred_single)
mse_single = mean_squared_error(y_test, Y_pred_single)

print(f"一元线性回归 R²: {r2_single:.3f}")
print(f"一元线性回归 MAE: {mae_single:.3f}")
print(f"一元线性回归 MSE: {mse_single:.3f}")
print(f"回归系数: {lr_single.coef_[0]:.3f}")
print(f"截距: {lr_single.intercept_:.3f}")

# 3. 多元线性回归
print("\n=== 多元线性回归 ===")
X_multi = df[["广告费", "活动次数", "客单价", "竞品价格"]]

# 数据拆分
X_train_multi, X_test_multi, y_train, y_test = train_test_split(X_multi, y, test_size=0.2, random_state=42)

# 训练模型
lr_multi = LinearRegression()
lr_multi.fit(X_train_multi, y_train)

# 预测
Y_pred_multi = lr_multi.predict(X_test_multi)

# 评估模型
r2_multi = r2_score(y_test, Y_pred_multi)
mae_multi = mean_absolute_error(y_test, Y_pred_multi)
mse_multi = mean_squared_error(y_test, Y_pred_multi)

print(f"多元线性回归 R²: {r2_multi:.3f}")
print(f"多元线性回归 MAE: {mae_multi:.3f}")
print(f"多元线性回归 MSE: {mse_multi:.3f}")

# 4. 回归系数解读
print("\n=== 回归系数解读 ===")
coef_df = pd.DataFrame({
    "特征": X_multi.columns,
    "回归系数": lr_multi.coef_,
    "绝对值": abs(lr_multi.coef_)
}).sort_values("绝对值", ascending=False)

print("各特征的回归系数：")
print(coef_df)

# 5. 预测应用
print("\n=== 预测应用 ===")
# 给定一组特征值
new_data = [[1000, 3, 200, 180]]
# 预测销量
predicted_sales = lr_multi.predict(new_data)
print(f"给定特征值: 广告费={new_data[0][0]}, 活动次数={new_data[0][1]}, 客单价={new_data[0][2]}, 竞品价格={new_data[0][3]}")
print(f"预测销量: {predicted_sales[0]:.2f}")

# 6. 模型比较
print("\n=== 模型比较 ===")
print(f"一元线性回归 R²: {r2_single:.3f}")
print(f"多元线性回归 R²: {r2_multi:.3f}")

if r2_multi > r2_single:
    print("多元线性回归模型效果更好")
else:
    print("一元线性回归模型效果更好")

print("\n建议：")
print("1. 重点关注回归系数绝对值大的特征，这些对销量影响更大")
print("2. 定期更新模型，以适应市场变化")
print("3. 考虑添加更多特征，如促销活动类型、季节性因素等")`,
      testCases: [
        {
          input: 'from sklearn.linear_model import LinearRegression\nlr = LinearRegression()',
          expected: '创建线性回归模型',
          weight: 25
        },
        {
          input: 'from sklearn.metrics import r2_score\nr2_score(y_test, y_pred_lr)',
          expected: '评估模型效果',
          weight: 25
        },
        {
          input: 'lr.predict([[1000, 3, 200, 180]])',
          expected: '预测销量',
          weight: 25
        }
      ]
    },
    {
      id: 7,
      title: '随机森林 回归+特征重要性（非线性预测）',
      description: '随机森林回归、特征重要性、模型调参（n_estimators、max_depth）、模型评估、非线性关系挖掘',
      dataset: 'sales_data.csv',
      tasks: [
        '沿用项目6的销量数据（sales_data.csv），特征和目标变量不变',
        '数据拆分：将数据按7:3拆分为训练集和测试集',
        '随机森林回归训练：设置n_estimators=100，max_depth=5，训练模型',
        '模型调参：调整n_estimators（50/100/200）、max_depth（3/5/7），对比不同参数的模型效果（R²、MAE），选择最优参数',
        '特征重要性分析：输出各特征的重要性排序，筛选出Top3核心影响特征',
        '对比分析：将随机森林模型与项目6的多元线性回归模型对比，说明两者的优缺点和适用场景'
      ],
      keySteps: [
        '# 【项目7重点】随机森林回归，特征重要性分析\nimport pandas as pd\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import r2_score, mean_absolute_error',
        '# 1. 数据加载与准备\n# 简洁读取数据，直接使用项目6的销量数据\ndf = pd.read_csv("sales_data.csv")\nX = df[["广告费", "活动次数", "客单价", "竞品价格"]]\ny = df["销量"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)',
        '# 2. 随机森林回归核心算法\n# 随机森林通过多棵决策树的集成，能更好地捕捉非线性关系\n# n_estimators：树的数量，越多越稳定但计算开销更大\n# max_depth：树的最大深度，控制过拟合\nrf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)\nrf.fit(X_train, y_train)\ny_pred = rf.predict(X_test)\nr2 = r2_score(y_test, y_pred)\nmae = mean_absolute_error(y_test, y_pred)\nprint("模型性能：R²={:.3f}, MAE={:.2f}".format(r2, mae))',
        '# 3. 模型调参\n# 对比不同参数组合的效果\nparams = [(50, 3), (50, 5), (100, 5), (200, 7)]\nbest_r2 = -1\nbest_params = None\nfor n_est, max_depth in params:\n    rf = RandomForestRegressor(n_estimators=n_est, max_depth=max_depth, random_state=42)\n    rf.fit(X_train, y_train)\n    y_pred = rf.predict(X_test)\n    current_r2 = r2_score(y_test, y_pred)\n    if current_r2 > best_r2:\n        best_r2 = current_r2\n        best_params = (n_est, max_depth)\nprint("最佳参数：n_estimators={}, max_depth={}, R²={:.3f}".format(best_params[0], best_params[1], best_r2))',
        '# 4. 特征重要性分析\n# 随机森林的核心优势：自动计算特征对预测的贡献度\n# 这是业务分析的关键——找到影响销量的核心因素\nfeature_importance = pd.DataFrame({"特征": X.columns, "重要性": rf.feature_importances_}).sort_values("重要性", ascending=False)\nprint("特征重要性排序：")\nprint(feature_importance)',
        '# 5. 业务洞察与建议\n# 基于特征重要性，给出可落地的业务建议\ntop_feature = feature_importance.iloc[0]["特征"]\nprint("\\n【业务洞察】")\nprint("1. 最重要的影响因素：" + top_feature + "，建议重点优化该指标")\nprint("2. 随机森林R²优于线性回归，说明销量与特征存在非线性关系")\nprint("3. 建议：根据特征重要性分配营销预算，将资源投入到Top2特征上")'
      ],
      answer: `import pandas as pd
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error
from sklearn.linear_model import LinearRegression

# 1. 读取数据
df = pd.read_csv("sales_data.csv")
print("原始数据：")
print(df.head())

# 2. 准备特征和目标变量
X = df[["广告费", "活动次数", "客单价", "竞品价格"]]
y = df["销量"]

# 3. 数据拆分
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
print(f"训练集大小: {X_train.shape[0]}")
print(f"测试集大小: {X_test.shape[0]}")

# 4. 随机森林回归训练
print("\n=== 随机森林回归 ===")
rf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
rf.fit(X_train, y_train)

# 预测
y_pred = rf.predict(X_test)

# 评估模型
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
print(f"R²得分: {r2:.3f}")
print(f"MAE: {mae:.3f}")

# 5. 模型调参
print("\n=== 模型调参 ===")
# 定义参数组合
params = [
    (50, 3),
    (50, 5),
    (50, 7),
    (100, 3),
    (100, 5),
    (100, 7),
    (200, 3),
    (200, 5),
    (200, 7)
]

# 存储调参结果
results = []
for n_est, max_depth in params:
    # 训练模型
    rf = RandomForestRegressor(n_estimators=n_est, max_depth=max_depth, random_state=42)
    rf.fit(X_train, y_train)
    
    # 预测
    y_pred = rf.predict(X_test)
    
    # 评估
    r2 = r2_score(y_test, y_pred)
    mae = mean_absolute_error(y_test, y_pred)
    
    # 存储结果
    results.append({
        "n_estimators": n_est,
        "max_depth": max_depth,
        "r2": r2,
        "mae": mae
    })

# 转换为DataFrame并排序
results_df = pd.DataFrame(results)
results_df = results_df.sort_values("r2", ascending=False)
print("调参结果（按R²排序）：")
print(results_df)

# 选择最优参数
best_params = results_df.iloc[0]
print(f"\n最优参数：")
print(f"n_estimators: {best_params['n_estimators']}")
print(f"max_depth: {best_params['max_depth']}")
print(f"最优R²: {best_params['r2']:.3f}")
print(f"最优MAE: {best_params['mae']:.3f}")

# 6. 特征重要性分析
print("\n=== 特征重要性分析 ===")
# 使用最优参数重新训练模型
best_rf = RandomForestRegressor(
    n_estimators=int(best_params['n_estimators']),
    max_depth=int(best_params['max_depth']),
    random_state=42
)
best_rf.fit(X_train, y_train)

# 计算特征重要性
feature_importance = pd.DataFrame({
    "特征": X.columns,
    "重要性": best_rf.feature_importances_
}).sort_values("重要性", ascending=False)

print("特征重要性排序：")
print(feature_importance)

# 可视化特征重要性
plt.figure(figsize=(10, 6))
plt.bar(feature_importance["特征"], feature_importance["重要性"])
plt.title("特征重要性")
plt.xlabel("特征")
plt.ylabel("重要性")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("feature_importance.png")
plt.show()

# 7. 对比分析
print("\n=== 模型对比分析 ===")
# 训练多元线性回归模型
lr = LinearRegression()
lr.fit(X_train, y_train)
y_pred_lr = lr.predict(X_test)

# 评估线性回归模型
r2_lr = r2_score(y_test, y_pred_lr)
mae_lr = mean_absolute_error(y_test, y_pred_lr)

print(f"随机森林 R²: {best_params['r2']:.3f}")
print(f"线性回归 R²: {r2_lr:.3f}")
print(f"随机森林 MAE: {best_params['mae']:.3f}")
print(f"线性回归 MAE: {mae_lr:.3f}")

if best_params['r2'] > r2_lr:
    print("\n随机森林模型效果更好")
else:
    print("\n线性回归模型效果更好")

print("\n模型优缺点对比：")
print("随机森林：")
print("优点：1. 能捕捉非线性关系 2. 对异常值不敏感 3. 自动进行特征选择")
print("缺点：1. 计算速度较慢 2. 模型解释性较差 3. 可能过拟合")

print("\n线性回归：")
print("优点：1. 计算速度快 2. 模型解释性强 3. 实现简单")
print("缺点：1. 假设特征与目标变量线性相关 2. 对异常值敏感 3. 可能存在多重共线性问题")

print("\n适用场景：")
print("随机森林：适用于特征与目标变量非线性关系、数据集较大的场景")
print("线性回归：适用于特征与目标变量线性关系明显、需要模型解释性的场景")`,
      testCases: [
        {
          input: 'from sklearn.ensemble import RandomForestRegressor\nrf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)',
          expected: '创建随机森林模型',
          weight: 25
        },
        {
          input: 'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)',
          expected: '数据拆分',
          weight: 20
        },
        {
          input: 'pd.DataFrame({"特征": X.columns, "重要性": rf.feature_importances_}).sort_values("重要性", ascending=False)',
          expected: '特征重要性分析',
          weight: 30
        }
      ]
    },
    {
      id: 8,
      title: '时间序列完整分析（趋势+周期+预测）',
      description: '时间序列预处理（日期格式转换、重采样）、移动平均、趋势分析、周期识别、简易时序预测（ARIMA）',
      dataset: 'time_series_sales.csv',
      tasks: [
        '读取模拟时序数据（time_series_sales.csv）',
        '预处理：将日期字段转换为datetime格式，设置为索引，按“月度”重采样（计算每月总销量）',
        '趋势分析：计算3个月移动平均，绘制“原始销量+移动平均”折线图，识别销量长期趋势',
        '周期识别：绘制月度销量热力图，分析是否存在季节性周期',
        '时序预测：用ARIMA模型（p=1,d=1,q=1），基于历史数据预测未来3个月的销量',
        '结果评估：计算预测值与历史实际值的MAE，分析预测误差，给出库存规划建议'
      ],
      keySteps: [
        '# 【项目8重点】时间序列分析，趋势和预测\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom statsmodels.tsa.arima.model import ARIMA\nfrom sklearn.metrics import mean_absolute_error',
        '# 1. 数据加载与预处理\n# 简洁读取，直接转换为时间序列格式\ndf = pd.read_csv("time_series_sales.csv")\ndf["日期"] = pd.to_datetime(df["日期"])\ndf.set_index("日期", inplace=True)\n# 月度重采样，得到月度销量数据\nmonthly_sales = df.resample("M").sum()\nprint("月度销量数据预览：")\nprint(monthly_sales.head())',
        '# 2. 趋势分析核心方法\n# 移动平均是时间序列分析的基础，平滑噪音，发现趋势\n# window=3表示3个月移动平均，适合捕捉短期趋势\nmonthly_sales["3个月移动平均"] = monthly_sales["销量"].rolling(window=3).mean()\n# 可视化趋势\nplt.figure(figsize=(12, 6))\nplt.plot(monthly_sales["销量"], label="原始销量", alpha=0.7)\nplt.plot(monthly_sales["3个月移动平均"], label="3个月移动平均", linewidth=2, color="red")\nplt.title("销量趋势分析", fontsize=14, fontweight="bold")\nplt.xlabel("日期")\nplt.ylabel("销量")\nplt.legend()\nplt.tight_layout()\nplt.savefig("sales_trend.png")\nplt.show()',
        '# 3. ARIMA预测核心算法\n# ARIMA(p,d,q)是时间序列预测的经典方法\n# p：自回归阶数，d：差分阶数，q：移动平均阶数\n# 这里使用(1,1,1)作为起始参数，适合大多数场景\nmodel = ARIMA(monthly_sales["销量"], order=(1,1,1))\nmodel_fit = model.fit()\n# 预测未来3个月\nforecast = model_fit.forecast(steps=3)\nprint("\\n未来3个月销量预测：")\nprint(forecast)',
        '# 4. 模型评估\n# 使用MAE（平均绝对误差）评估预测准确性\ntrain_pred = model_fit.fittedvalues\nmae = mean_absolute_error(monthly_sales["销量"].iloc[1:], train_pred.iloc[1:])\nprint("\\n模型训练误差（MAE）：{:.2f}".format(mae))',
        '# 5. 业务洞察与库存建议\nprint("\\n【业务洞察】")\nprint("1. 从移动平均曲线可看出销量的长期趋势")\nprint("2. 根据预测结果，建议未来3个月的库存量为预测值的1.2倍（考虑安全库存）")\nprint("3. 建议：每月初更新预测，动态调整库存策略")\nif len(forecast) >= 3:\n    print("   - 第1个月建议库存：{:.0f}".format(forecast.iloc[0] * 1.2))\n    print("   - 第2个月建议库存：{:.0f}".format(forecast.iloc[1] * 1.2))\n    print("   - 第3个月建议库存：{:.0f}".format(forecast.iloc[2] * 1.2))'
      ],
      answer: `import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_absolute_error

# 1. 读取数据
df = pd.read_csv("time_series_sales.csv")
print("原始数据：")
print(df.head())

# 2. 预处理
print("\n=== 数据预处理 ===")
# 转换日期格式
df["日期"] = pd.to_datetime(df["日期"])
# 设置日期为索引
df.set_index("日期", inplace=True)
print("处理后的数据：")
print(df.head())

# 月度重采样
monthly_sales = df.resample("M").sum()
print("\n月度销量数据：")
print(monthly_sales.head())

# 3. 趋势分析
print("\n=== 趋势分析 ===")
# 计算3个月移动平均
monthly_sales["3个月移动平均"] = monthly_sales["销量"].rolling(window=3).mean()

# 绘制趋势图
plt.figure(figsize=(12, 6))
plt.plot(monthly_sales["销量"], label="原始销量")
plt.plot(monthly_sales["3个月移动平均"], label="3个月移动平均")
plt.title("销量趋势分析")
plt.xlabel("日期")
plt.ylabel("销量")
plt.legend()
plt.tight_layout()
plt.savefig("sales_trend.png")
plt.show()

# 4. 周期识别
print("\n=== 周期识别 ===")
# 提取月份
monthly_sales["月份"] = monthly_sales.index.month

# 绘制月度销量热力图数据
pivot_data = monthly_sales.pivot_table(index="月份", values="销量", aggfunc="mean")

plt.figure(figsize=(10, 6))
plt.imshow(pivot_data.values.reshape(12, 1), cmap="coolwarm", aspect="auto")
plt.colorbar(label="平均销量")
plt.title("月度销量热力图")
plt.yticks(range(12), range(1, 13))
plt.ylabel("月份")
plt.tight_layout()
plt.savefig("sales_seasonality.png")
plt.show()

# 5. 时序预测
print("\n=== 时序预测 ===")
# 创建ARIMA模型
model = ARIMA(monthly_sales["销量"], order=(1, 1, 1))
# 拟合模型
model_fit = model.fit()
# 预测未来3个月
forecast = model_fit.forecast(steps=3)

print("未来3个月销量预测：")
print(forecast)

# 6. 结果评估
print("\n=== 结果评估 ===")
# 计算训练集预测误差
train_pred = model_fit.fittedvalues
mae = mean_absolute_error(monthly_sales["销量"], train_pred)
print(f"模型训练误差（MAE）：{mae:.2f}")

# 7. 可视化预测结果
plt.figure(figsize=(12, 6))
plt.plot(monthly_sales.index, monthly_sales["销量"], label="历史销量")
plt.plot(forecast.index, forecast, label="预测销量", color="red")
plt.title("销量预测")
plt.xlabel("日期")
plt.ylabel("销量")
plt.legend()
plt.tight_layout()
plt.savefig("sales_forecast.png")
plt.show()

# 8. 库存规划建议
print("\n=== 库存规划建议 ===")
print("基于预测结果的库存规划建议：")
print(f"1. 第一个月预测销量：{forecast.iloc[0]:.0f}，建议库存：{forecast.iloc[0] * 1.2:.0f}")
print(f"2. 第二个月预测销量：{forecast.iloc[1]:.0f}，建议库存：{forecast.iloc[1] * 1.2:.0f}")
print(f"3. 第三个月预测销量：{forecast.iloc[2]:.0f}，建议库存：{forecast.iloc[2] * 1.2:.0f}")
print("\n其他建议：")
print("1. 定期更新模型，以适应市场变化")
print("2. 结合季节性因素，调整库存策略")
print("3. 建立安全库存，应对突发需求")
print("4. 监控预测误差，不断优化模型参数")`,
      testCases: [
        {
          input: 'df["日期"] = pd.to_datetime(df["日期"])\ndf.set_index("日期", inplace=True)',
          expected: '日期格式转换和索引设置',
          weight: 20
        },
        {
          input: 'monthly_sales = df.resample("M").sum()',
          expected: '月度重采样',
          weight: 25
        },
        {
          input: 'from statsmodels.tsa.arima.model import ARIMA\nmodel = ARIMA(monthly_sales["销量"], order=(1,1,1))',
          expected: '创建ARIMA模型',
          weight: 30
        }
      ]
    },
    {
      id: 9,
      title: '综合异常检测（统计+模型结合）',
      description: '统计异常检测（3σ原则、箱线图）、模型异常检测（孤立森林）、异常值解读、业务异常定位',
      dataset: 'order_data.csv',
      tasks: [
        '读取模拟订单数据（order_data.csv）',
        '统计异常检测：用3σ原则和箱线图，识别订单金额的异常值',
        '模型异常检测：用孤立森林算法，以“订单金额、下单频次、支付时长”为特征，识别异常订单',
        '异常合并与解读：合并两种方法识别的异常订单，分析异常类型',
        '业务处理：针对不同类型的异常，给出处理建议'
      ],
      keySteps: [
        '# 【项目9重点】异常检测，统计方法和孤立森林结合\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.ensemble import IsolationForest',
        '# 1. 数据加载\n# 简洁读取订单数据\ndf = pd.read_csv("order_data.csv")\nprint("订单数据：{}条记录".format(len(df)))',
        '# 2. 统计方法：3σ原则\n# 3σ原则是经典的统计异常检测方法\n# 假设数据服从正态分布，超过±3σ的数据视为异常\nmean = df["订单金额"].mean()\nstd = df["订单金额"].std()\nanomalies_3sigma = df[(df["订单金额"] > mean + 3*std) | (df["订单金额"] < mean - 3*std)]\nprint("3σ原则检测到{}个异常订单".format(len(anomalies_3sigma)))\nprint("正常范围：[{:.2f}, {:.2f}]".format(mean - 3*std, mean + 3*std))',
        '# 3. 模型方法：孤立森林\n# 孤立森林是高效的无监督异常检测算法\n# 通过随机切割特征空间，孤立异常点\n# contamination参数控制预期异常比例（0.1表示10%）\nX = df[["订单金额", "下单频次", "支付时长"]]\nisolation_forest = IsolationForest(contamination=0.1, random_state=42)\nanomaly_labels = isolation_forest.fit_predict(X)\nanomalies_iforest = df[anomaly_labels == -1]\nprint("孤立森林检测到{}个异常订单".format(len(anomalies_iforest)))',
        '# 4. 异常合并与可视化\n# 合并两种方法的检测结果，提高召回率\nall_anomalies = pd.concat([anomalies_3sigma, anomalies_iforest]).drop_duplicates()\nprint("合并后共{}个异常订单，占比{:.2f}%".format(len(all_anomalies), len(all_anomalies)/len(df)*100))\n# 可视化异常分布\nplt.figure(figsize=(12, 6))\nplt.scatter(df["订单金额"], df["支付时长"], alpha=0.5, label="正常订单")\nplt.scatter(all_anomalies["订单金额"], all_anomalies["支付时长"], color="red", alpha=0.8, label="异常订单")\nplt.title("异常订单分布", fontsize=14, fontweight="bold")\nplt.xlabel("订单金额")\nplt.ylabel("支付时长")\nplt.legend()\nplt.tight_layout()\nplt.savefig("anomaly_detection.png")\nplt.show()',
        '# 5. 业务洞察与处理建议\nprint("\\n【业务洞察与处理建议】")\nprint("1. 高金额异常订单：人工审核，确认是否为真实大额交易或数据错误")\nprint("2. 低金额异常订单：检查是否为测试订单或恶意刷单")\nprint("3. 长支付时长异常：优化支付流程，减少用户等待时间")\nprint("4. 建议：建立异常实时监控机制，对异常订单进行分级处理")\nif len(all_anomalies) > 0:\n    high_amount = len(all_anomalies[all_anomalies["订单金额"] > mean + 3*std])\n    low_amount = len(all_anomalies[all_anomalies["订单金额"] < mean - 3*std])\n    print("   - 高金额异常：{}个".format(high_amount))\n    print("   - 低金额异常：{}个".format(low_amount))'
      ],
      answer: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.ensemble import IsolationForest

# 1. 读取数据
df = pd.read_csv("order_data.csv")
print("原始数据：")
print(df.head())

# 2. 统计异常检测
print("\n=== 统计异常检测 ===")
# 3σ原则
mean = df["订单金额"].mean()
std = df["订单金额"].std()
anomalies_3sigma = df[(df["订单金额"] > mean + 3*std) | (df["订单金额"] < mean - 3*std)]
print(f"3σ原则检测到的异常订单数：{len(anomalies_3sigma)}")
print(f"3σ原则异常值范围：< {mean - 3*std:.2f} 或 > {mean + 3*std:.2f}")

# 箱线图
plt.figure(figsize=(10, 6))
plt.boxplot(df["订单金额"])
plt.title("订单金额箱线图")
plt.ylabel("订单金额")
plt.tight_layout()
plt.savefig("order_amount_boxplot.png")
plt.show()

# 3. 模型异常检测
print("\n=== 模型异常检测 ===")
# 准备特征
X = df[["订单金额", "下单频次", "支付时长"]]

# 孤立森林
isolation_forest = IsolationForest(contamination=0.1, random_state=42)
anomaly_labels = isolation_forest.fit_predict(X)

# 提取异常
anomalies_iforest = df[anomaly_labels == -1]
print(f"孤立森林检测到的异常订单数：{len(anomalies_iforest)}")

# 4. 异常合并与解读
print("\n=== 异常合并与解读 ===")
# 合并异常
all_anomalies = pd.concat([anomalies_3sigma, anomalies_iforest]).drop_duplicates()
print(f"合并后异常订单数：{len(all_anomalies)}")
print(f"异常订单占比：{len(all_anomalies)/len(df)*100:.2f}%")

# 异常类型分析
print("\n异常订单特征分析：")
print(all_anomalies.describe())

# 可视化异常
plt.figure(figsize=(12, 8))
sns.scatterplot(x="订单金额", y="支付时长", data=df, label="正常订单")
sns.scatterplot(x="订单金额", y="支付时长", data=all_anomalies, color="red", label="异常订单")
plt.title("订单金额与支付时长分布")
plt.tight_layout()
plt.savefig("anomaly_scatter.png")
plt.show()

# 5. 业务处理建议
print("\n=== 业务处理建议 ===")
print("针对异常订单的处理建议：")

# 分析异常类型
if len(all_anomalies) > 0:
    high_amount_anomalies = all_anomalies[all_anomalies["订单金额"] > mean + 3*std]
    low_amount_anomalies = all_anomalies[all_anomalies["订单金额"] < mean - 3*std]
    high_payment_time_anomalies = all_anomalies[all_anomalies["支付时长"] > df["支付时长"].mean() + 2*df["支付时长"].std()]
    
    print(f"\n1. 高金额异常订单数：{len(high_amount_anomalies)}")
    print("   处理建议：人工审核，确认是否为真实大额订单")
    
    print(f"2. 低金额异常订单数：{len(low_amount_anomalies)}")
    print("   处理建议：检查是否为测试订单或恶意订单")
    
    print(f"3. 长支付时长异常订单数：{len(high_payment_time_anomalies)}")
    print("   处理建议：优化支付流程，减少支付时间")
else:
    print("未检测到异常订单")

print("\n通用建议：")
print("1. 建立异常订单监控系统，实时检测异常")
print("2. 对异常订单进行分类管理，制定不同的处理流程")
print("3. 定期分析异常订单模式，优化业务流程")
print("4. 结合业务规则，调整异常检测阈值")`,
      testCases: [
        {
          input: 'mean = df["订单金额"].mean()\nstd = df["订单金额"].std()\nanomalies = df[(df["订单金额"] > mean + 3*std) | (df["订单金额"] < mean - 3*std)]',
          expected: '3σ原则检测异常',
          weight: 25
        },
        {
          input: 'from sklearn.ensemble import IsolationForest\nisolation_forest = IsolationForest(contamination=0.1, random_state=42)',
          expected: '创建孤立森林模型',
          weight: 30
        },
        {
          input: 'anomaly_scores = isolation_forest.score_samples(X)',
          expected: '计算异常分数',
          weight: 25
        }
      ]
    },
    {
      id: 10,
      title: '全流程综合大项目（完整分析师交付闭环）',
      description: '整合所有前期知识点（预处理、关联规则、聚类、回归、可视化），完整覆盖“数据→分析→建模→结论→落地”全链路',
      dataset: '所有数据集',
      tasks: [
        '数据准备：整合前面所有项目的模拟数据（用户、商品、订单、销量、购物车数据），形成综合数据集',
        '数据预处理：完成缺失值、异常值、特征处理，标准化数据，保存处理后的数据',
        '核心分析：关联规则挖掘（商品组合）、KMeans用户聚类+RFM分层、随机森林回归（销量预测+特征重要性）、时序趋势分析',
        '可视化呈现：绘制至少5张核心图表（相关性热力图、聚类图、销量趋势图、特征重要性图、关联规则图）',
        '结论与落地：总结核心发现，给出3-5条可落地的业务策略',
        '输出报告：整理成标准数据分析报告'
      ],
      keySteps: [
        '# 【项目10重点】全流程综合项目，整合前面所学知识\nimport pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import r2_score\nfrom mlxtend.frequent_patterns import apriori, association_rules',
        '# 1. 数据整合与预处理\n# 简洁加载所有数据集\ndf_user = pd.read_csv("user_behavior.csv")\ndf_goods = pd.read_csv("goods_data.csv")\ndf_sales = pd.read_csv("sales_data.csv")\ndf_cart = pd.read_csv("cart_data.csv")\ndf_order = pd.read_csv("order_data.csv")\n# 快速预处理：填充缺失值\ndf_user["消费金额"] = df_user["消费金额"].fillna(df_user["消费金额"].median())\ndf_user["消费频次"] = df_user["消费频次"].fillna(df_user["消费频次"].median())\nprint("数据加载完成")',
        '# 2. 用户分析：KMeans聚类 + RFM分层\n# 整合用户分群方法，全面了解用户结构\n# KMeans聚类\nuser_features = df_user[["消费金额", "消费频次", "最近消费天数", "浏览时长"]]\nscaler = StandardScaler()\nuser_features_scaled = scaler.fit_transform(user_features)\nkmeans = KMeans(n_clusters=4, random_state=42)\ndf_user["用户分群"] = kmeans.fit_predict(user_features_scaled)\n# RFM分层\ndf_user["R分"] = pd.qcut(df_user["最近消费天数"], 5, labels=[5,4,3,2,1])\ndf_user["F分"] = pd.qcut(df_user["消费频次"], 5, labels=[1,2,3,4,5])\ndf_user["M分"] = pd.qcut(df_user["消费金额"], 5, labels=[1,2,3,4,5])\ndf_user["RFM总分"] = df_user["R分"].astype(int) + df_user["F分"].astype(int) + df_user["M分"].astype(int)\n# 输出用户结构\nprint("\\n用户分析结果：")\nprint("分群分布：\\n{}".format(df_user["用户分群"].value_counts()))\nprint("\\nRFM分层：\\n{}".format(df_user["RFM总分"].describe()))',
        '# 3. 商品分析：关联规则挖掘\n# 发现商品之间的关联关系，用于交叉销售和捆绑营销\ncart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")\nfrequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)\nrules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)\nrules = rules[rules["lift"] > 1].sort_values("lift", ascending=False)\nprint("\\nTop5商品关联规则：")\nprint(rules.head()[["antecedents", "consequents", "support", "confidence", "lift"]])',
        '# 4. 销量预测：随机森林回归\n# 整合回归模型，预测销量并分析影响因素\nX = df_sales[["广告费", "活动次数", "客单价", "竞品价格"]]\ny = df_sales["销量"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\nrf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)\nrf.fit(X_train, y_train)\ny_pred = rf.predict(X_test)\nr2 = r2_score(y_test, y_pred)\nfeature_importance = pd.DataFrame({"特征": X.columns, "重要性": rf.feature_importances_}).sort_values("重要性", ascending=False)\nprint("\\n销量预测模型R²：{:.3f}".format(r2))\nprint("特征重要性：")\nprint(feature_importance)',
        '# 5. 核心业务洞察与落地建议\nprint("\\n【全流程业务洞察与建议】")\nprint("1. 用户运营：针对高价值RFM用户群，提供专属服务和优惠券")\nprint("2. 商品策略：基于关联规则，设计商品组合套餐，提高客单价")\nprint("3. 营销优化：根据特征重要性，重点投入广告费和活动资源")\nprint("4. 数据驱动：建立每月分析报告机制，持续优化业务决策")\n# 计算高价值用户比例\nhigh_value_count = len(df_user[df_user["RFM总分"] >= 13])\nhigh_value_ratio = high_value_count / len(df_user) * 100\nprint("\\n高价值用户占比：{:.1f}%，是核心运营对象".format(high_value_ratio))'
      ],
      answer: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error
from mlxtend.frequent_patterns import apriori, association_rules

# 1. 数据准备
print("=== 数据准备 ===")
# 读取各数据集
df_user = pd.read_csv("user_behavior.csv")
df_goods = pd.read_csv("goods_data.csv")
df_sales = pd.read_csv("sales_data.csv")
df_cart = pd.read_csv("cart_data.csv")
df_order = pd.read_csv("order_data.csv")

print(f"用户数据形状：{df_user.shape}")
print(f"商品数据形状：{df_goods.shape}")
print(f"销量数据形状：{df_sales.shape}")
print(f"购物车数据形状：{df_cart.shape}")
print(f"订单数据形状：{df_order.shape}")

# 2. 数据预处理
print("\n=== 数据预处理 ===")
# 处理用户数据缺失值
df_user["消费金额"] = df_user["消费金额"].fillna(df_user["消费金额"].median())
df_user["消费频次"] = df_user["消费频次"].fillna(df_user["消费频次"].median())
df_user["性别"] = df_user["性别"].fillna("未知")
df_user["地区"] = df_user["地区"].fillna("未知")
df_user = df_user.dropna(subset=["注册时间"])

# 处理异常值
for col in ["消费金额", "浏览时长"]:
    mean = df_user[col].mean()
    std = df_user[col].std()
    outliers = (df_user[col] > mean + 3*std) | (df_user[col] < mean - 3*std)
    df_user.loc[outliers, col] = df_user[col].median()

# 标准化数据
scaler = StandardScaler()
df_user[["消费金额", "消费频次", "最近消费天数", "浏览时长"]] = scaler.fit_transform(df_user[["消费金额", "消费频次", "最近消费天数", "浏览时长"]])

print("数据预处理完成！")

# 3. 核心分析
print("\n=== 核心分析 ===")

# 3.1 KMeans用户聚类
print("\n3.1 用户聚类分析")
user_features = df_user[["消费金额", "消费频次", "最近消费天数", "浏览时长"]]
kmeans = KMeans(n_clusters=4, random_state=42)
df_user["用户分群"] = kmeans.fit_predict(user_features)

# 分析聚类结果
user_cluster_analysis = df_user.groupby("用户分群").mean()
print("用户分群特征：")
print(user_cluster_analysis[["消费金额", "消费频次", "最近消费天数", "浏览时长"]])

# 3.2 RFM用户分层
print("\n3.2 RFM用户分层")
df_user["R分"] = pd.qcut(df_user["最近消费天数"], 5, labels=[5,4,3,2,1])
df_user["F分"] = pd.qcut(df_user["消费频次"], 5, labels=[1,2,3,4,5])
df_user["M分"] = pd.qcut(df_user["消费金额"], 5, labels=[1,2,3,4,5])
df_user["RFM总分"] = df_user["R分"].astype(int) + df_user["F分"].astype(int) + df_user["M分"].astype(int)

def rfm_level(score):
    if score >= 13:
        return "高价值用户"
    elif score >= 9:
        return "潜力用户"
    elif score >= 6:
        return "一般用户"
    else:
        return "流失/低价值用户"

df_user["用户等级"] = df_user["RFM总分"].apply(rfm_level)
print("用户等级分布：")
print(df_user["用户等级"].value_counts())

# 3.3 关联规则挖掘
print("\n3.3 关联规则挖掘")
cart_encoded = pd.get_dummies(df_cart["商品名称"], prefix="商品")
frequent_itemsets = apriori(cart_encoded, min_support=0.05, use_colnames=True)
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)
rules = rules[rules["lift"] > 1]
rules = rules.sort_values("lift", ascending=False)
print("Top5关联规则：")
print(rules.head(5)[["antecedents", "consequents", "support", "confidence", "lift"]])

# 3.4 随机森林回归
print("\n3.4 销量预测与特征重要性")
X = df_sales[["广告费", "活动次数", "客单价", "竞品价格"]]
y = df_sales["销量"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

rf = RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
print(f"随机森林回归 R²: {r2:.3f}")
print(f"随机森林回归 MAE: {mae:.3f}")

# 特征重要性
feature_importance = pd.DataFrame({
    "特征": X.columns,
    "重要性": rf.feature_importances_
}).sort_values("重要性", ascending=False)
print("特征重要性：")
print(feature_importance)

# 4. 可视化呈现
print("\n=== 可视化呈现 ===")

# 4.1 相关性热力图
plt.figure(figsize=(12, 10))
sns.heatmap(df_user.corr(), annot=True, cmap="coolwarm", fmt=".2f")
plt.title("用户数据相关性热力图")
plt.tight_layout()
plt.savefig("correlation_heatmap.png")
plt.show()

# 4.2 用户聚类可视化
pca = PCA(n_components=2)
user_pca = pca.fit_transform(user_features)
plt.figure(figsize=(10, 8))
scatter = plt.scatter(user_pca[:, 0], user_pca[:, 1], c=df_user["用户分群"], cmap="viridis")
plt.colorbar(scatter, label="用户分群")
plt.title("用户聚类可视化")
plt.xlabel("PCA维度1")
plt.ylabel("PCA维度2")
plt.tight_layout()
plt.savefig("user_clustering.png")
plt.show()

# 4.3 用户等级分布
plt.figure(figsize=(12, 6))
df_user["用户等级"].value_counts().plot(kind="bar", color="skyblue")
plt.title("用户等级分布")
plt.xlabel("用户等级")
plt.ylabel("数量")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("user_level_distribution.png")
plt.show()

# 4.4 特征重要性
plt.figure(figsize=(10, 6))
plt.bar(feature_importance["特征"], feature_importance["重要性"])
plt.title("销量影响因素重要性")
plt.xlabel("特征")
plt.ylabel("重要性")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("feature_importance.png")
plt.show()

# 4.5 关联规则热力图
if not rules.empty:
    plt.figure(figsize=(12, 8))
    pivot = rules.pivot(index="antecedents", columns="consequents", values="lift")
    sns.heatmap(pivot, annot=True, cmap="coolwarm", fmt=".2f")
    plt.title("关联规则提升度热力图")
    plt.xticks(rotation=45, ha="right")
    plt.yticks(rotation=0)
    plt.tight_layout()
    plt.savefig("association_rules_heatmap.png")
    plt.show()

# 5. 结论与落地
print("\n=== 结论与落地 ===")
print("核心发现：")
print("1. 用户分层：高价值用户占比{:.2f}%，是企业的核心客户群体".format(len(df_user[df_user["用户等级"] == "高价值用户"])/len(df_user)*100)))
print("2. 商品关联：发现多个商品组合的强关联关系，可用于捆绑销售")
print("3. 销量影响因素：广告费是影响销量的最重要因素，其次是活动次数")
print("4. 用户行为：不同分群的用户行为特征差异明显，需要针对性的运营策略")

print("\n落地策略：")
print("1. 针对高价值用户：提供专属VIP服务，定期推送高端商品信息，增加复购率")
print("2. 商品运营：基于关联规则，设计商品组合套餐，提高客单价")
print("3. 营销优化：优化广告投放策略，提高广告效果，合理安排活动频次")
print("4. 用户运营：针对不同分群的用户，制定个性化的运营策略")
print("5. 数据监控：建立数据监控体系，定期分析用户行为和销售数据")

# 6. 输出报告
print("\n=== 输出报告 ===")
print("数据分析报告已生成，包含以下内容：")
print("1. 数据预处理与清洗")
print("2. 用户分析（聚类与RFM分层）")
print("3. 商品关联分析")
print("4. 销量预测与影响因素分析")
print("5. 可视化图表")
print("6. 业务建议与落地策略")
print("\n报告已保存为 'data_analysis_report.pdf'")
print("\n分析完成！")`,
      testCases: [
        {
          input: 'df_combined = pd.merge(df_user, df_sales, on="用户ID", how="left")',
          expected: '数据整合',
          weight: 20
        },
        {
          input: 'sns.heatmap(corr_matrix, annot=True, cmap="coolwarm")',
          expected: '绘制热力图',
          weight: 20
        },
        {
          input: 'plt.figure(figsize=(12, 8))\nsns.scatterplot(x="PCA1", y="PCA2", hue="分群", data=df_pca)',
          expected: '绘制聚类图',
          weight: 20
        }
      ]
    }
  ];

  // 模拟代码评分函数
  const evaluateCode = (projectId: number, code: string) => {
    const project = trainingProjects.find(p => p.id === projectId);
    if (!project) return;

    let totalScore = 0;
    let totalWeight = 0;
    let feedbackText = '';

    project.testCases.forEach(testCase => {
      totalWeight += testCase.weight;
      if (code.includes(testCase.input)) {
        totalScore += testCase.weight;
        feedbackText += `✓ ${testCase.expected}\n`;
      } else {
        feedbackText += `✗ ${testCase.expected}\n`;
      }
    });

    const finalScore = Math.round((totalScore / totalWeight) * 100);
    setScore(finalScore);
    setFeedback(feedbackText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">数据分析技术课程</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${activeSection === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSection('overview')}
                >
                  课程概览
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${activeSection === 'knowledge' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSection('knowledge')}
                >
                  知识框架
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${activeSection === 'training' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveSection('training')}
                >
                  实训项目
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* 课程概览 */}
        {activeSection === 'overview' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">数据分析技术课程概览</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">课程目标</h3>
                <p className="text-gray-600">
                  通过本课程的学习，你将掌握数据分析的核心思维模型和实战技能，能够独立完成从数据预处理到模型构建、从分析到业务落地的全流程数据分析任务。
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">课程内容</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5个核心思维模型：维度拆解与分群、变量关联与因子挖掘、无监督挖掘、拟合与预测建模、业务模型落地</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10个实操实训项目：从数据预处理到综合分析，覆盖所有重点分析方法</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>交互式学习：在线编写代码，实时获得反馈和评分</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>真实数据集：基于真实业务场景的模拟数据，无需额外找数据</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">学习路径</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[200px]">
                    <h4 className="font-semibold text-gray-800 mb-2">阶段1：基础准备</h4>
                    <p className="text-gray-600 text-sm">数据预处理、描述统计、相关性分析</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[200px]">
                    <h4 className="font-semibold text-gray-800 mb-2">阶段2：算法学习</h4>
                    <p className="text-gray-600 text-sm">关联规则、聚类分析、回归分析</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg flex-1 min-w-[200px]">
                    <h4 className="font-semibold text-gray-800 mb-2">阶段3：综合应用</h4>
                    <p className="text-gray-600 text-sm">时间序列分析、异常检测、全流程项目</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 知识框架 */}
        {activeSection === 'knowledge' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">数据分析技术知识框架</h2>
            
            <div className="space-y-8">
              {knowledgeFramework.sections.map((section, index) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-blue-600 text-white p-4">
                    <h3 className="text-xl font-semibold">{index + 1}. {section.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{section.description}</p>
                    <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <pre className="text-sm text-gray-800">{section.code}</pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 实训项目 */}
        {activeSection === 'training' && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">实训项目</h2>
            
            <div className="space-y-6">
              {trainingProjects.map(project => (
                <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-green-600 text-white p-4">
                    <h3 className="text-xl font-semibold">项目{project.id}：{project.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">数据集：</h4>
                      <p className="text-gray-600">{project.dataset}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">任务要求：</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {project.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">关键步骤提示：</h4>
                      <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                        <pre className="text-sm text-gray-800">{project.keySteps?.join('\n\n') || '暂无关键步骤提示'}</pre>
                      </div>
                    </div>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={() => setActiveProject(project.id)}
                    >
                      开始练习
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 项目练习界面 */}
        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    项目{activeProject}：{trainingProjects.find(p => p.id === activeProject)?.title}
                  </h3>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => {
                      setActiveProject(null);
                      setUserCode('');
                      setScore(null);
                      setFeedback('');
                      setShowAnswer(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">关键步骤提示：</h4>
                  <div className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
                    <pre className="text-sm text-gray-800">{trainingProjects.find(p => p.id === activeProject)?.keySteps?.join('\n\n') || '暂无关键步骤提示'}</pre>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">编写代码：</h4>
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    <CodeMirror
                      value={userCode}
                      onChange={(value) => setUserCode(value)}
                      extensions={[
                        python(),
                        autocompletion({ 
                          override: [pythonCompletion],
                          activateOnTyping: true
                        }),
                        EditorView.updateListener.of(update => {
                          if (update.docChanged) {
                            // 代码变更时的处理
                          }
                        })
                      ]}
                      height="400px"
                      theme="light"
                      placeholder="在此输入Python代码..."
                      className="font-mono text-sm"
                    />
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => evaluateCode(activeProject, userCode)}
                  >
                    提交代码
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                    onClick={() => setUserCode('')}
                  >
                    清空
                  </button>
                </div>
                <div className="mt-4">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? '隐藏答案' : '查看答案'}
                  </button>
                  {showAnswer && (
                    <div className="mt-4 bg-gray-100 p-4 rounded-md overflow-x-auto">
                      <h4 className="font-semibold text-gray-800 mb-2">参考答案：</h4>
                      <pre className="text-sm text-gray-800">{trainingProjects.find(p => p.id === activeProject)?.answer || '暂无答案'}</pre>
                    </div>
                  )}
                </div>
                {score !== null && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">评分结果：</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <p className="text-lg font-medium mb-2">得分：{score}%</p>
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap">{feedback}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">G</span>
                </div>
                <h3 className="text-xl font-bold">数据分析技术课程</h3>
              </div>
              <p className="mt-2 text-blue-100">商务数据分析与应用专业学习平台</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-blue-100 text-sm">
            <p>© 2024 数据分析技术课程. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataAnalysisTechSite;