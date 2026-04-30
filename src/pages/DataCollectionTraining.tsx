import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { autocompletion, CompletionContext, CompletionResult } from '@codemirror/autocomplete';

export default function DataCollectionTraining() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [userCode, setUserCode] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    console.log('Active project changed:', activeProject);
  }, [activeProject]);

  const pythonCompletion = (context: CompletionContext): CompletionResult | null => {
    const pythonKeywords = [
      { label: 'import', type: 'keyword' },
      { label: 'requests', type: 'module', detail: 'HTTP请求库' },
      { label: 'BeautifulSoup', type: 'class', detail: 'HTML解析库' },
      { label: 'bs4', type: 'module', detail: 'BeautifulSoup模块' },
      { label: 'json', type: 'module', detail: 'JSON处理' },
      { label: 'pandas', type: 'module', detail: '数据分析库' },
      { label: 'pd', type: 'variable', detail: 'pandas别名' },
      { label: 'openpyxl', type: 'module', detail: 'Excel操作' },
      { label: 'csv', type: 'module', detail: 'CSV文件处理' },
      { label: 'selenium', type: 'module', detail: '浏览器自动化' },
      { label: 'webdriver', type: 'class', detail: '浏览器驱动' },
      { label: 'time', type: 'module', detail: '时间处理' },
      { label: 'sleep', type: 'function', detail: '延时等待' },
      { label: 'get', type: 'method', detail: 'GET请求' },
      { label: 'post', type: 'method', detail: 'POST请求' },
      { label: 'find_all', type: 'method', detail: '查找所有元素' },
      { label: 'find', type: 'method', detail: '查找单个元素' },
      { label: 'text', type: 'property', detail: '获取文本' },
      { label: 'get_text', type: 'method', detail: '获取文本内容' },
      { label: 'attrs', type: 'property', detail: '获取属性' }
    ];

    const word = context.matchBefore(/\w*/);
    if (!word) return null;

    const filtered = pythonKeywords.filter(item => 
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

  const trainingProjects = [
    {
      id: 1,
      title: 'HTTP请求基础 - 网络爬虫入门',
      description: '学习使用Python发送HTTP请求，获取网页内容',
      tasks: [
        '使用requests库发送GET请求',
        '获取网页的HTML内容',
        '查看响应的状态码',
        '设置请求头模拟浏览器'
      ],
      keySteps: [
        'import requests',
        'response = requests.get(url)',
        'print(response.status_code)',
        'headers = {"User-Agent": "Mozilla/5.0..."}'
      ],
      answer: `import requests

# 简单的GET请求
url = "https://www.example.com"
response = requests.get(url)

# 查看状态码
print("状态码:", response.status_code)

# 查看HTML内容（前200个字符）
print("内容:", response.text[:200])

# 设置请求头
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}
response = requests.get(url, headers=headers)
print("带请求头的响应:", response.status_code)`,
      hints: {
        1: 'requests是Python最常用的HTTP库，用于发送网络请求',
        2: 'response.status_code表示请求是否成功（200表示成功）',
        3: '设置User-Agent可以模拟浏览器访问，避免被网站拦截'
      }
    },
    {
      id: 2,
      title: 'BeautifulSoup解析 - HTML结构解析',
      description: '学习使用BeautifulSoup解析HTML，提取需要的数据',
      tasks: [
        '解析HTML文档',
        '查找所有标题标签',
        '查找特定class的元素',
        '提取文本内容和链接'
      ],
      keySteps: [
        'from bs4 import BeautifulSoup',
        'soup = BeautifulSoup(html, "html.parser")',
        'soup.find_all("h1")',
        'soup.find("a", class_="link").get("href")'
      ],
      answer: `from bs4 import BeautifulSoup

html = """
<html>
    <head><title>示例页面</title></head>
    <body>
        <h1>标题1</h1>
        <h2>标题2</h2>
        <a href="https://example.com" class="link">链接</a>
        <p class="content">段落内容</p>
    </body>
</html>
"""

# 解析HTML
soup = BeautifulSoup(html, "html.parser")

# 查找所有标题
titles = soup.find_all(["h1", "h2"])
for title in titles:
    print("标题:", title.text)

# 查找特定class的元素
link = soup.find("a", class_="link")
if link:
    print("链接文本:", link.text)
    print("链接地址:", link.get("href"))

# 查找段落
content = soup.find("p", class_="content")
print("段落内容:", content.text)`,
      hints: {
        1: 'BeautifulSoup用于解析HTML和XML文档',
        2: 'html.parser是Python内置的解析器，无需额外安装',
        3: 'find()查找第一个匹配的元素，find_all()查找所有匹配元素'
      }
    },
    {
      id: 3,
      title: '正则表达式 - 灵活的数据提取',
      description: '学习使用正则表达式从文本中提取特定模式的数据',
      tasks: [
        '导入re模块',
        '使用re.search()查找匹配',
        '使用re.findall()查找所有匹配',
        '提取邮箱和电话号码'
      ],
      keySteps: [
        'import re',
        'pattern = r"\\d+"',
        're.findall(pattern, text)',
        're.match(r"\\w+@\\w+\\.\\w+", email)'
      ],
      answer: `import re

text = """
张三的手机号是13812345678，
李四的是13987654321。
邮箱: zhangsan@example.com, wangwu@company.cn
地址: 北京市朝阳区建国路88号
"""

# 提取所有手机号（11位数字）
phone_pattern = r"1[3-9]\\d{9}"
phones = re.findall(phone_pattern, text)
print("手机号:", phones)

# 提取所有邮箱
email_pattern = r"\\w+@\\w+\\.\\w+"
emails = re.findall(email_pattern, text)
print("邮箱:", emails)

# 查找特定模式
result = re.search(r"\\d+号", text)
if result:
    print("找到的门牌号:", result.group())

# 替换内容
new_text = re.sub(r"\\d{11}", "***********", text)
print("脱敏后:", new_text)`,
      hints: {
        1: '正则表达式用于匹配文本中的特定模式',
        2: 'r"..."表示原始字符串，避免转义字符问题',
        3: '1[3-9]\\d{9}匹配中国手机号格式'
      }
    },
    {
      id: 4,
      title: 'JSON数据处理 - API接口数据',
      description: '学习解析JSON格式的API响应数据',
      tasks: [
        '发送API请求获取JSON数据',
        '解析JSON响应',
        '提取特定字段',
        '处理嵌套的JSON数据'
      ],
      keySteps: [
        'response = requests.get(api_url)',
        'data = response.json()',
        'data["key"]',
        'for item in data["list"]:'
      ],
      answer: `import requests

# 模拟API响应（实际中从真实API获取）
api_response = {
    "code": 200,
    "message": "success",
    "data": {
        "total": 100,
        "users": [
            {"name": "张三", "age": 25, "city": "北京"},
            {"name": "李四", "age": 30, "city": "上海"},
            {"name": "王五", "age": 28, "city": "深圳"}
        ]
    }
}

# 模拟API请求（实际使用requests.get）
# response = requests.get("https://api.example.com/users")
# data = response.json()
data = api_response

# 检查响应状态
if data.get("code") == 200:
    print("请求成功!")
    
    # 提取数据
    total = data["data"]["total"]
    print(f"总用户数: {total}")
    
    # 处理用户列表
    users = data["data"]["users"]
    for user in users:
        name = user["name"]
        age = user["age"]
        city = user["city"]
        print(f"用户: {name}, 年龄: {age}, 城市: {city}")`,
      hints: {
        1: '很多API返回的数据都是JSON格式',
        2: 'response.json()直接解析JSON响应',
        3: 'JSON数据可以嵌套，使用键名逐层访问'
      }
    },
    {
      id: 5,
      title: 'CSV文件处理 - 数据存储与读取',
      description: '学习使用pandas读写CSV文件，处理表格数据',
      tasks: [
        '使用pandas读取CSV文件',
        '查看数据基本信息',
        '筛选特定条件的数据',
        '保存处理后的数据'
      ],
      keySteps: [
        'import pandas as pd',
        'df = pd.read_csv("data.csv")',
        'df.head()',
        'df.to_csv("output.csv", index=False)'
      ],
      answer: `import pandas as pd

# 模拟CSV数据（实际中从文件读取）
# df = pd.read_csv("sales_data.csv")
data = {
    "产品": ["手机", "电脑", "平板", "耳机"],
    "销量": [120, 85, 65, 200],
    "单价": [2999, 5999, 1999, 299],
    "城市": ["北京", "上海", "深圳", "广州"]
}
df = pd.create DataFrame(data)

# 查看数据基本信息
print("数据形状:", df.shape)
print("\\n前3行数据:")
print(df.head(3))

# 查看统计信息
print("\\n数据统计:")
print(df.describe())

# 筛选数据：销量大于100的产品
high_sales = df[df["销量"] > 100]
print("\\n高销量产品:")
print(high_sales)

# 计算销售额
df["销售额"] = df["销量"] * df["单价"]
print("\\n含销售额的数据:")
print(df)

# 保存到CSV
# df.to_csv("processed_data.csv", index=False, encoding="utf-8-sig")
print("\\n数据已准备好保存")`,
      hints: {
        1: 'pandas是Python数据分析的核心库',
        2: 'read_csv()用于读取CSV文件，to_csv()用于保存',
        3: 'index=False不保存行索引，encoding="utf-8-sig"支持中文'
      }
    },
    {
      id: 6,
      title: 'Excel数据处理 - 多工作表操作',
      description: '学习使用pandas和openpyxl处理Excel文件',
      tasks: [
        '读取Excel文件的多个工作表',
        '合并多个工作表的数据',
        '对数据进行排序和统计',
        '保存为新的Excel文件'
      ],
      keySteps: [
        'pd.read_excel("data.xlsx", sheet_name=None)',
        'pd.concat([df1, df2])',
        'df.sort_values("column")',
        'df.to_excel("output.xlsx", sheet_name="Sheet1")'
      ],
      answer: `import pandas as pd

# 模拟Excel数据
sales_jan = pd.DataFrame({
    "产品": ["手机", "电脑"],
    "销量": [120, 85],
    "月份": ["1月", "1月"]
})

sales_feb = pd.DataFrame({
    "产品": ["手机", "电脑"],
    "销量": [150, 95],
    "月份": ["2月", "2月"]
})

# 实际读取Excel
# df_jan = pd.read_excel("sales.xlsx", sheet_name="1月")
# df_feb = pd.read_excel("sales.xlsx", sheet_name="2月")

# 合并两个月的数据
all_sales = pd.concat([sales_jan, sales_feb], ignore_index=True)
print("合并后的数据:")
print(all_sales)

# 按销量排序
sorted_sales = all_sales.sort_values("销量", ascending=False)
print("\\n按销量排序:")
print(sorted_sales)

# 按产品分组统计
product_stats = all_sales.groupby("产品").agg({
    "销量": "sum"
}).reset_index()
print("\\n各产品总销量:")
print(product_stats)

# 保存到Excel
# with pd.ExcelWriter("combined_sales.xlsx") as writer:
#     all_sales.to_excel(writer, sheet_name="汇总", index=False)
#     product_stats.to_excel(writer, sheet_name="统计", index=False)
print("\\n数据已准备好保存为Excel")`,
      hints: {
        1: 'Excel文件可以包含多个工作表，使用sheet_name参数指定',
        2: 'pd.concat()用于合并多个DataFrame',
        3: 'groupby()用于分组统计，agg()指定聚合函数'
      }
    },
    {
      id: 7,
      title: '数据清洗 - 缺失值与异常值处理',
      description: '学习处理爬取数据中的缺失值和异常值',
      tasks: [
        '检测数据中的缺失值',
        '使用均值/中位数填充缺失值',
        '识别和处理异常值',
        '去除重复数据'
      ],
      keySteps: [
        'df.isnull().sum()',
        'df.fillna(df.mean())',
        'df[df["col"] > threshold]',
        'df.drop_duplicates()'
      ],
      answer: `import pandas as pd
import numpy as np

# 模拟有缺失值和异常值的数据
data = {
    "姓名": ["张三", "李四", np.nan, "王五", "赵六", "张三"],
    "年龄": [25, np.nan, 30, 28, -5, 25],
    "工资": [8000, 12000, np.nan, 9000, 8500, 8000],
    "部门": ["销售", "技术", "人事", "销售", "技术", "销售"]
}
df = pd.DataFrame(data)

print("原始数据:")
print(df)
print()

# 检测缺失值
print("缺失值统计:")
print(df.isnull().sum())

# 填充缺失值
df["年龄"].fillna(df["年龄"].median(), inplace=True)  # 中位数填充
df["工资"].fillna(df["工资"].mean(), inplace=True)    # 均值填充
df["姓名"].fillna("未知", inplace=True)               # 字符串用固定值填充
print("\\n填充缺失值后:")
print(df)

# 处理异常值：年龄不能为负数
df = df[df["年龄"] >= 0]
print("\\n去除异常年龄后:")
print(df)

# 去除重复数据
df.drop_duplicates(inplace=True)
print("\\n去除重复后:")
print(df)`,
      hints: {
        1: '缺失值处理方法：数值型用均值/中位数，文本型用固定值',
        2: '异常值需要根据业务逻辑定义阈值来识别',
        3: 'drop_duplicates()默认保留第一条重复记录'
      }
    },
    {
      id: 8,
      title: 'Selenium自动化 - 动态网页爬取',
      description: '学习使用Selenium模拟浏览器操作，处理动态加载的网页',
      tasks: [
        '启动Chrome浏览器',
        '打开网页并等待加载',
        '模拟点击和输入操作',
        '获取动态加载的内容'
      ],
      keySteps: [
        'from selenium import webdriver',
        'driver = webdriver.Chrome()',
        'driver.get("url")',
        'element = driver.find_element(By.ID, "id")',
        'driver.quit()'
      ],
      answer: `from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# 启动Chrome浏览器（需要下载chromedriver）
# driver = webdriver.Chrome(executable_path='chromedriver路径')

# 模拟浏览器操作
class MockBrowser:
    def __init__(self):
        self.current_url = "https://example.com"
        self.page_source = """
        <html>
            <body>
                <div id="content">
                    <h1>动态加载的内容</h1>
                    <button id="load-more">加载更多</button>
                    <input id="search" placeholder="搜索...">
                </div>
            </body>
        </html>
        """
    
    def get(self, url):
        print(f"打开网页: {url}")
        return self
    
    def find_element(self, by, value):
        print(f"查找元素: {by} = {value}")
        return MockElement()
    
    def quit(self):
        print("关闭浏览器")

class MockElement:
    def click(self):
        print("点击元素")
    
    def send_keys(self, text):
        print(f"输入文本: {text}")
    
    def text(self):
        return "元素文本内容"

# 实际使用
driver = MockBrowser()

# 打开网页
driver.get("https://example.com")

# 查找并操作元素
search_box = driver.find_element(By.ID, "search")
search_box.send_keys("Python教程")

button = driver.find_element(By.ID, "load-more")
button.click()

# 等待内容加载
time.sleep(2)

# 获取页面内容
print("页面已加载完成")

# 关闭浏览器
driver.quit()`,
      hints: {
        1: 'Selenium可以模拟真实浏览器的所有操作',
        2: '需要下载对应版本的chromedriver',
        3: 'WebDriverWait用于等待页面元素加载完成'
      }
    },
    {
      id: 9,
      title: '数据存储 - MySQL数据库操作',
      description: '学习使用Python连接MySQL数据库，存储爬取的数据',
      tasks: [
        '安装并导入pymysql库',
        '建立数据库连接',
        '创建数据表',
        '插入和查询数据'
      ],
      keySteps: [
        'import pymysql',
        'connection = pymysql.connect(host, user, password, database)',
        'cursor.execute("CREATE TABLE...")',
        'cursor.execute("INSERT INTO...")',
        'connection.commit()'
      ],
      answer: `import pymysql

# 数据库连接配置
config = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "your_password",
    "database": "crawl_data",
    "charset": "utf8mb4"
}

# 连接数据库
try:
    connection = pymysql.connect(**config)
    print("数据库连接成功!")
    
    cursor = connection.cursor()
    
    # 创建数据表
    create_table_sql = """
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        price DECIMAL(10, 2),
        category VARCHAR(50),
        create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    """
    cursor.execute(create_table_sql)
    print("数据表创建成功!")
    
    # 插入数据
    insert_sql = "INSERT INTO products (name, price, category) VALUES (%s, %s, %s)"
    products = [
        ("iPhone 15", 6999.00, "手机"),
        ("MacBook Pro", 12999.00, "电脑"),
        ("AirPods Pro", 1899.00, "配件")
    ]
    
    cursor.executemany(insert_sql, products)
    connection.commit()
    print(f"成功插入 {cursor.rowcount} 条数据!")
    
    # 查询数据
    cursor.execute("SELECT * FROM products WHERE price > 5000")
    results = cursor.fetchall()
    print("\\n高价产品:")
    for row in results:
        print(f"ID: {row[0]}, 名称: {row[1]}, 价格: {row[2]}")
    
    # 关闭连接
    cursor.close()
    connection.close()
    print("\\n数据库连接已关闭")
    
except Exception as e:
    print(f"数据库操作失败: {e}")`,
      hints: {
        1: 'pymysql是Python连接MySQL的库',
        2: '使用with或者finally确保连接正确关闭',
        3: 'SQL注入防护：使用参数化查询而非字符串拼接'
      }
    },
    {
      id: 10,
      title: '综合项目 - 电商数据采集系统',
      description: '综合运用所学知识，构建完整的电商数据采集系统',
      tasks: [
        '从多个页面采集商品数据',
        '处理商品图片和详情',
        '清洗和整理数据',
        '存储到数据库'
      ],
      keySteps: [
        'requests + BeautifulSoup 采集页面',
        '正则表达式提取关键信息',
        'pandas清洗和整理数据',
        'pymysql存储到MySQL'
      ],
      answer: `import requests
from bs4 import BeautifulSoup
import pandas as pd
import pymysql
import re
import time

class EcommerceCrawler:
    def __init__(self):
        self.base_url = "https://example-ecommerce.com"
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        self.products = []
    
    def fetch_product_list(self, page=1):
        """采集商品列表页"""
        url = f"{self.base_url}/products?page={page}"
        try:
            response = requests.get(url, headers=self.headers, timeout=10)
            soup = BeautifulSoup(response.text, "html.parser")
            
            product_cards = soup.find_all("div", class_="product-card")
            
            for card in product_cards:
                product = {}
                
                # 提取商品名称
                name_elem = card.find("h3", class_="product-name")
                product["name"] = name_elem.text.strip() if name_elem else ""
                
                # 提取价格（使用正则表达式提取数字）
                price_elem = card.find("span", class_="price")
                if price_elem:
                    price_text = price_elem.text
                    product["price"] = float(re.search(r"\\d+\\.?\\d*", price_text).group())
                
                # 提取商品链接
                link_elem = card.find("a", class_="product-link")
                product["url"] = self.base_url + link_elem.get("href") if link_elem else ""
                
                # 提取评分
                rating_elem = card.find("span", class_="rating")
                if rating_elem:
                    rating = re.search(r"(\\d+\\.?\\d*)", rating_elem.text)
                    product["rating"] = float(rating.group(1)) if rating else 0
                
                self.products.append(product)
                
            print(f"第{page}页采集完成，共{len(product_cards)}个商品")
            return len(product_cards)
            
        except Exception as e:
            print(f"采集失败: {e}")
            return 0
    
    def fetch_multiple_pages(self, start_page=1, end_page=5):
        """批量采集多个页面"""
        for page in range(start_page, end_page + 1):
            count = self.fetch_product_list(page)
            if count == 0:
                break
            time.sleep(2)  # 避免请求过快
    
    def clean_data(self):
        """清洗数据"""
        df = pd.DataFrame(self.products)
        
        # 去除重复
        df.drop_duplicates(subset=["name"], inplace=True)
        
        # 填充缺失值
        df["price"].fillna(df["price"].median(), inplace=True)
        df["rating"].fillna(0, inplace=True)
        
        # 添加采集时间
        df["crawl_time"] = pd.Timestamp.now()
        
        self.products = df
        print(f"数据清洗完成，共{len(df)}个商品")
        return df
    
    def save_to_database(self, db_config):
        """保存到数据库"""
        connection = pymysql.connect(**db_config)
        cursor = connection.cursor()
        
        # 创建表
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS ecommerce_products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(200),
                price DECIMAL(10, 2),
                rating DECIMAL(3, 2),
                url VARCHAR(500),
                crawl_time TIMESTAMP,
                UNIQUE KEY (name)
            )
        """)
        
        # 插入数据
        for _, row in self.products.iterrows():
            sql = """
                INSERT INTO ecommerce_products 
                (name, price, rating, url, crawl_time)
                VALUES (%s, %s, %s, %s, %s)
                ON DUPLICATE KEY UPDATE
                price = VALUES(price),
                rating = VALUES(rating)
            """
            cursor.execute(sql, (
                row["name"], row["price"], 
                row["rating"], row["url"], row["crawl_time"]
            ))
        
        connection.commit()
        cursor.close()
        connection.close()
        print("数据已保存到数据库!")
    
    def save_to_csv(self, filename="products.csv"):
        """保存到CSV"""
        self.products.to_csv(filename, index=False, encoding="utf-8-sig")
        print(f"数据已保存到{filename}!")

# 使用示例
if __name__ == "__main__":
    crawler = EcommerceCrawler()
    
    # 采集数据
    crawler.fetch_multiple_pages(1, 3)
    
    # 清洗数据
    crawler.clean_data()
    
    # 保存到CSV
    crawler.save_to_csv("ecommerce_products.csv")
    
    # 如需保存到数据库，取消注释
    # db_config = {"host": "localhost", "user": "root", "password": "xxx", "database": "test"}
    # crawler.save_to_database(db_config)`,
      hints: {
        1: '综合项目需要整合前面所有学到的技术',
        2: '注意遵守网站的robots.txt规则，不要过于频繁请求',
        3: '数据存储建议同时保存CSV和数据库，便于后续分析'
      }
    }
  ];

  const evaluateCode = (projectId: number, code: string) => {
    const trimmedCode = code.trim().toLowerCase();
    
    const project = trainingProjects.find(p => p.id === projectId);
    if (!project) return;

    let correctCount = 0;
    const totalTasks = project.tasks.length;
    const feedbackList: string[] = [];

    if (projectId === 1) {
      if (trimmedCode.includes('requests')) correctCount++;
      if (trimmedCode.includes('get')) correctCount++;
      if (trimmedCode.includes('status_code') || trimmedCode.includes('status')) correctCount++;
      if (trimmedCode.includes('header') || trimmedCode.includes('user-agent')) correctCount++;
    }
    else if (projectId === 2) {
      if (trimmedCode.includes('beautifulsoup') || trimmedCode.includes('bs4')) correctCount++;
      if (trimmedCode.includes('find_all') || trimmedCode.includes('find')) correctCount++;
      if (trimmedCode.includes('class_') || trimmedCode.includes('class')) correctCount++;
      if (trimmedCode.includes('text') || trimmedCode.includes('get_text')) correctCount++;
    }
    else if (projectId === 3) {
      if (trimmedCode.includes('re')) correctCount++;
      if (trimmedCode.includes('search') || trimmedCode.includes('findall')) correctCount++;
      if (trimmedCode.includes('pattern') || trimmedCode.includes('\\d+')) correctCount++;
      if (trimmedCode.includes('email') || trimmedCode.includes('@')) correctCount++;
    }
    else if (projectId === 4) {
      if (trimmedCode.includes('json') || trimmedCode.includes('response.json')) correctCount++;
      if (trimmedCode.includes('data') || trimmedCode.includes('get')) correctCount++;
      if (trimmedCode.includes('for') && trimmedCode.includes('in')) correctCount++;
      if (trimmedCode.includes('code') || trimmedCode.includes('200')) correctCount++;
    }
    else if (projectId === 5) {
      if (trimmedCode.includes('pandas') || trimmedCode.includes('pd')) correctCount++;
      if (trimmedCode.includes('read_csv') || trimmedCode.includes('csv')) correctCount++;
      if (trimmedCode.includes('head') || trimmedCode.includes('print')) correctCount++;
      if (trimmedCode.includes('to_csv') || trimmedCode.includes('save')) correctCount++;
    }
    else if (projectId === 6) {
      if (trimmedCode.includes('read_excel') || trimmedCode.includes('excel')) correctCount++;
      if (trimmedCode.includes('concat') || trimmedCode.includes('merge')) correctCount++;
      if (trimmedCode.includes('sort') || trimmedCode.includes('groupby')) correctCount++;
      if (trimmedCode.includes('to_excel') || trimmedCode.includes('writer')) correctCount++;
    }
    else if (projectId === 7) {
      if (trimmedCode.includes('isnull') || trimmedCode.includes('isna')) correctCount++;
      if (trimmedCode.includes('fillna') || trimmedCode.includes('median')) correctCount++;
      if (trimmedCode.includes('drop_duplicates') || trimmedCode.includes('drop')) correctCount++;
      if (trimmedCode.includes('dataframe') || trimmedCode.includes('df')) correctCount++;
    }
    else if (projectId === 8) {
      if (trimmedCode.includes('selenium') || trimmedCode.includes('webdriver')) correctCount++;
      if (trimmedCode.includes('get') || trimmedCode.includes('find_element')) correctCount++;
      if (trimmedCode.includes('click') || trimmedCode.includes('send_keys')) correctCount++;
      if (trimmedCode.includes('quit') || trimmedCode.includes('close')) correctCount++;
    }
    else if (projectId === 9) {
      if (trimmedCode.includes('pymysql') || trimmedCode.includes('mysql')) correctCount++;
      if (trimmedCode.includes('connect') || trimmedCode.includes('connection')) correctCount++;
      if (trimmedCode.includes('execute') || trimmedCode.includes('sql')) correctCount++;
      if (trimmedCode.includes('commit') || trimmedCode.includes('insert')) correctCount++;
    }
    else if (projectId === 10) {
      if (trimmedCode.includes('requests') || trimmedCode.includes('beautifulsoup')) correctCount++;
      if (trimmedCode.includes('pandas') || trimmedCode.includes('regex')) correctCount++;
      if (trimmedCode.includes('mysql') || trimmedCode.includes('to_csv')) correctCount++;
      if (trimmedCode.includes('for') && trimmedCode.includes('in')) correctCount++;
    }

    const finalScore = Math.round((correctCount / totalTasks) * 100);
    setScore(finalScore);
    setFeedback(feedbackList.length > 0 ? feedbackList.join('\n') : '请尝试完成更多任务！');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
      <header className="pt-24 pb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">数据采集处理实训项目</h1>
              <p className="text-xl opacity-90">10个精选练习项目，掌握数据采集核心技术</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🕷️
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
                《数据采集处理实训项目》涵盖从基础的HTTP请求到高级的数据库存储的完整数据采集流程。
                通过10个实战项目，你将掌握网络爬虫、数据清洗、数据存储等核心技能。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                每个项目都包含：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>🕷️ 网络请求与页面解析技术</li>
                <li>📊 数据清洗与预处理方法</li>
                <li>💾 数据库存储解决方案</li>
                <li>🔄 自动化数据采集系统构建</li>
              </ul>
            </div>
          </section>

          {/* 实训项目列表 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-600">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              选择实训项目
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
                      {project.id}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.tasks.length} 个任务
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setActiveProject(project.id)}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    开始练习
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* 项目练习界面模态框 */}
      {activeProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]" style={{ zIndex: 9999, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'auto' }}>
          <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6" style={{ pointerEvents: 'auto' }}>
            <div className="flex justify-between items-center mb-6 border-b pb-4">
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
            
            {trainingProjects.find(p => p.id === activeProject) && (
              <div>
                <div className="mb-4">
                  <p className="text-gray-700 text-lg">
                    {trainingProjects.find(p => p.id === activeProject)?.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📋 任务要求：</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 bg-blue-50 p-4 rounded-lg">
                    {trainingProjects.find(p => p.id === activeProject)?.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 关键步骤提示：</h4>
                  <div className="bg-yellow-50 p-4 rounded-lg space-y-2">
                    {trainingProjects.find(p => p.id === activeProject)?.keySteps.map((step, index) => (
                      <div key={index} className="text-gray-700 text-sm">
                        • {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💻 编写代码：</h4>
                  <div className="border border-gray-300 rounded-md overflow-hidden">
                    <CodeMirror
                      value={userCode}
                      onChange={(value) => setUserCode(value)}
                      extensions={[
                        python(),
                        autocompletion({ 
                          override: [pythonCompletion],
                          activateOnTyping: true
                        })
                      ]}
                      height="300px"
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
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? '隐藏答案' : '查看答案'}
                  </button>
                </div>

                {showAnswer && (
                  <div className="mt-4 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ 参考答案：</h4>
                    <pre className="text-sm text-green-700 whitespace-pre-wrap bg-white p-3 rounded border border-green-200 overflow-x-auto">
                      {trainingProjects.find(p => p.id === activeProject)?.answer}
                    </pre>
                  </div>
                )}

                {score !== null && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">🎯 评分结果：</h4>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 mb-2">得分：{score}%</p>
                      <div className="text-gray-700 whitespace-pre-wrap">
                        {feedback}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

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
