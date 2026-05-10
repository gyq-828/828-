import React from 'react'
import { Link } from 'react-router-dom'

export default function DataCollectionCourse() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">数据采集与处理</h1>
              <p className="text-xl opacity-90">高职大二第一学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🔍
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
                《数据采集与处理》是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据采集、清洗、转换和预处理的技能。
                本课程在学生已掌握Python基础的基础上，进一步学习如何从各种来源获取数据，并进行有效的处理和管理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                数据采集与处理是数据分析的基础环节，直接影响后续分析结果的质量。
                通过本课程的学习，学生将能够熟练使用各种工具和技术获取数据，并进行清洗和预处理，为后续的数据分析做好准备。
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
                    掌握数据采集的基本概念和方法
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解数据清洗和预处理的重要性
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解各种数据格式和存储方式
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉数据质量评估的方法
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
                    能够使用Python进行网络数据采集
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够处理各种格式的数据文件
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够进行数据清洗和预处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够评估和提高数据质量
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
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="space-y-8">
                {/* 第1章 */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第1章 数据采集概述</h3>
                  <p className="text-gray-600 mb-4">了解数据采集的基本概念、重要性和应用场景，掌握数据采集的基本流程和方法。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.1</span>
                      数据采集的概念和重要性
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.2</span>
                      数据采集的应用场景
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.3</span>
                      数据采集的基本流程
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">1.4</span>
                      数据采集的方法和工具
                    </li>
                  </ul>
                </div>

                {/* 第2章 */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第2章 网络数据采集</h3>
                  <p className="text-gray-600 mb-4">学习使用Python进行网络数据采集，包括HTTP请求、HTML解析和爬虫开发。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.1</span>
                      <div>
                        <strong>HTTP协议基础</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• HTTP请求方法：GET（获取）、POST（提交）、PUT（更新）、DELETE（删除）</li>
                          <li>• 请求头（Headers）：User-Agent、Cookie、Authorization等</li>
                          <li>• 响应状态码：200成功、404未找到、403禁止访问、500服务器错误</li>
                          <li>• URL结构：协议://主机:端口/路径?查询参数</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.2</span>
                      <div>
                        <strong>requests库使用</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 安装：pip install requests</li>
                          <li>• 发送GET请求：requests.get(url, params, headers)</li>
                          <li>• 发送POST请求：requests.post(url, data, json)</li>
                          <li>• 处理响应：response.status_code、response.text、response.json()</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.3</span>
                      <div>
                        <strong>BeautifulSoup解析HTML</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 安装：pip install beautifulsoup4</li>
                          <li>• 解析HTML：BeautifulSoup(html, 'html.parser')</li>
                          <li>• 选择器：find()、find_all()、select()</li>
                          <li>• 获取内容：.text、.get('href')、.attrs</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.4</span>
                      <div>
                        <strong>正则表达式提取数据</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 常用模式：\d（数字）、\w（字母数字）、\s（空白）</li>
                          <li>• 量词：*（0次以上）、+（1次以上）、?（0或1次）</li>
                          <li>• re.findall()、re.search()、re.match()</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">2.5</span>
                      <div>
                        <strong>反爬虫策略应对</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 设置User-Agent伪装浏览器</li>
                          <li>• 控制请求频率，避免被封IP</li>
                          <li>• 使用代理IP池</li>
                          <li>• 处理登录认证和验证码</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">📝</span>
                      <div className="bg-blue-50 p-3 rounded-lg w-full">
                        <strong>例题：发送GET请求获取天气数据</strong>
                        <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                          <pre>{`import requests
import json

# 发送GET请求获取天气信息
def get_weather(city_code):
    url = f"http://t.weather.sojson.com/api/weather/city/{city_code}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()  # 检查HTTP错误
        
        data = response.json()
        
        if data['status'] == 200:
            weather = data['data']
            print(f"城市: {weather['city']}")
            print(f"温度: {weather['wendan']}")
            print(f"天气: {weather['forecast'][0]['type']}")
            print(f"湿度: {weather['shidu']}")
            print(f"风力: {weather['forecast'][0]['fl']}")
            return weather
        else:
            print("获取天气信息失败")
            
    except requests.RequestException as e:
        print(f"请求错误: {e}")

# 使用示例
weather_data = get_weather("101010100")  # 北京天气代码

# POST请求示例：提交表单数据
def login_demo():
    url = "https://example.com/api/login"
    data = {
        "username": "user123",
        "password": "pass123"
    }
    
    response = requests.post(url, data=data)
    print(response.json())`}</pre>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">📝</span>
                      <div className="bg-green-50 p-3 rounded-lg w-full">
                        <strong>例题：爬取豆瓣电影Top250</strong>
                        <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                          <pre>{`import requests
from bs4 import BeautifulSoup
import re

def get_douban_top250():
    movies = []
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Cookie': 'your_cookie_here'  # 需要登录后的Cookie
    }
    
    for start in range(0, 250, 25):
        url = f"https://movie.douban.com/top250?start={start}"
        
        try:
            response = requests.get(url, headers=headers, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 查找电影条目
            items = soup.select('div.item')
            
            for item in items:
                # 电影标题
                title = item.select_one('span.title').text
                
                # 评分
                rating = item.select_one('span.rating_num').text
                
                # 评价人数
                people = item.select_one('span.inq')
                comment = people.text if people else "暂无评价"
                
                # 年份和国家
                info = item.select_one('divbd').text
                year = re.search(r'\\d{4}', info)
                year = year.group() if year else "未知"
                
                movies.append({
                    'title': title,
                    'rating': float(rating),
                    'year': year,
                    'comment': comment
                })
                
            print(f"已爬取 {len(movies)} 部电影")
            
        except Exception as e:
            print(f"爬取出错: {e}")
            
    return movies

# 运行爬虫
movies = get_douban_top250()

# 保存为CSV
import pandas as pd
df = pd.DataFrame(movies)
df.to_csv('douban_top250.csv', index=False, encoding='utf-8-sig')
print("数据已保存到 douban_top250.csv")`}</pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 第3章 */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第3章 API数据采集</h3>
                  <p className="text-gray-600 mb-4">学习如何通过API获取数据，包括RESTful API和GraphQL API的使用。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.1</span>
                      API的基本概念
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.2</span>
                      RESTful API的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.3</span>
                      GraphQL API的使用
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.4</span>
                      API认证和授权
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">3.5</span>
                      API数据的处理和存储
                    </li>
                  </ul>
                </div>

                {/* 第4章 */}
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第4章 数据格式与存储</h3>
                  <p className="text-gray-600 mb-4">学习各种数据格式的特点和处理方法，以及数据存储的基本原理。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.1</span>
                      常见数据格式（CSV、JSON、XML等）
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.2</span>
                      数据格式的转换
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.3</span>
                      文件系统存储
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.4</span>
                      数据库存储
                    </li>
                    <li className="flex items-start">
                      <span className="bg-yellow-100 text-yellow-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">4.5</span>
                      云存储服务
                    </li>
                  </ul>
                </div>

                {/* 第5章 */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第5章 数据清洗</h3>
                  <p className="text-gray-600 mb-4">学习数据清洗的基本方法和技术，包括处理缺失值、异常值和重复值。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.1</span>
                      <div>
                        <strong>数据质量评估</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 完整性：是否有缺失值</li>
                          <li>• 准确性：数据是否正确</li>
                          <li>• 一致性：数据格式是否统一</li>
                          <li>• 时效性：数据是否最新</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.2</span>
                      <div>
                        <strong>缺失值处理</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 删除法：删除缺失行或列</li>
                          <li>• 填充法：均值填充、中位数填充、众数填充</li>
                          <li>• 插值法：线性插值、多项式插值</li>
                          <li>• 预测填充：使用机器学习模型预测填充</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.3</span>
                      <div>
                        <strong>异常值检测</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 3σ原则：超过均值±3倍标准差为异常</li>
                          <li>• 箱线图法：超出1.5倍IQR的数据为异常</li>
                          <li>• Z-score法：Z-score绝对值大于3为异常</li>
                          <li>• 孤立森林算法</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.4</span>
                      <div>
                        <strong>重复值处理</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 检测重复行：duplicated()</li>
                          <li>• 删除重复行：drop_duplicates()</li>
                          <li>• 保留策略：保留第一条或最后一条</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">5.5</span>
                      <div>
                        <strong>数据类型转换</strong>
                        <ul className="text-sm text-gray-600 ml-4">
                          <li>• 字符串转数值：pd.to_numeric()</li>
                          <li>• 日期转换：pd.to_datetime()</li>
                          <li>• 类型推断：infer_objects()</li>
                          <li>• 统一格式：去除空格、统一大小写</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">📝</span>
                      <div className="bg-blue-50 p-3 rounded-lg w-full">
                        <strong>例题：清洗脏数据、处理缺失值</strong>
                        <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                          <pre>{`import pandas as pd
import numpy as np

# 创建包含脏数据的DataFrame
data = {
    'name': ['张三', '李四', None, '王五', '赵六', '张三'],
    'age': [25, '30岁', 35, np.nan, 28, 25],
    'salary': ['15000', 'N/A', 18000, 16000, '20000', 15000],
    'join_date': ['2020-01-15', '2020/03/20', '2021-05-10', '2020-07-01', '2021-02-15', '2020-01-15']
}
df = pd.DataFrame(data)

print("=== 原始数据 ===")
print(df)
print("\\n数据信息:")
print(df.info())

# 1. 处理重复值
print("\\n=== 删除重复值 ===")
df = df.drop_duplicates()
print(df)

# 2. 处理缺失值
print("\\n=== 处理缺失值 ===")
print("缺失值统计:")
print(df.isnull().sum())

# 数值型用均值填充
df['age'] = pd.to_numeric(df['age'], errors='coerce')
df['age'].fillna(df['age'].mean(), inplace=True)

# 分类型用众数填充
df['name'].fillna(df['name'].mode()[0], inplace=True)

# 3. 数据类型转换
print("\\n=== 数据类型转换 ===")
df['salary'] = df['salary'].replace('N/A', np.nan)
df['salary'] = pd.to_numeric(df['salary'], errors='coerce')
df['salary'].fillna(df['salary'].median(), inplace=True)

df['join_date'] = pd.to_datetime(df['join_date'])

# 4. 去除空格和统一格式
df['name'] = df['name'].str.strip()

print("\\n清洗后的数据:")
print(df)
print("\\n数据类型:")
print(df.dtypes)`}</pre>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">📝</span>
                      <div className="bg-green-50 p-3 rounded-lg w-full">
                        <strong>例题：异常值检测与处理</strong>
                        <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm mt-2 overflow-x-auto">
                          <pre>{`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建包含异常值的销售数据
np.random.seed(42)
sales = np.random.normal(1000, 200, 100)
sales[95:100] = [5000, 6000, -500, 8000, 10000]  # 添加异常值

df = pd.DataFrame({'sales': sales})

print("=== 异常值检测 ===")

# 方法1：3σ原则
mean = df['sales'].mean()
std = df['sales'].std()
lower_bound = mean - 3 * std
upper_bound = mean + 3 * std

outliers_3sigma = df[(df['sales'] < lower_bound) | (df['sales'] > upper_bound)]
print(f"3σ原则检测到的异常值: {len(outliers_3sigma)} 个")
print(f"异常值范围: < {lower_bound:.2f} 或 > {upper_bound:.2f}")

# 方法2：箱线图法（IQR）
Q1 = df['sales'].quantile(0.25)
Q3 = df['sales'].quantile(0.75)
IQR = Q3 - Q1
lower_whisker = Q1 - 1.5 * IQR
upper_whisker = Q3 + 1.5 * IQR

outliers_iqr = df[(df['sales'] < lower_whisker) | (df['sales'] > upper_whisker)]
print(f"\\nIQR法检测到的异常值: {len(outliers_iqr)} 个")
print(f"异常值范围: < {lower_whisker:.2f} 或 > {upper_whisker:.2f}")

# 可视化
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# 箱线图
axes[0].boxplot(df['sales'])
axes[0].set_title('箱线图')
axes[0].set_ylabel('销售额')

# 直方图
axes[1].hist(df['sales'], bins=30, edgecolor='black')
axes[1].axvline(lower_bound, color='r', linestyle='--', label='3σ下界')
axes[1].axvline(upper_bound, color='r', linestyle='--', label='3σ上界')
axes[1].set_title('分布直方图')
axes[1].set_xlabel('销售额')
axes[1].legend()

plt.tight_layout()
plt.savefig('outlier_detection.png', dpi=300)
plt.show()

# 处理异常值：将异常值替换为边界值
df_clean = df.copy()
df_clean['sales'] = df_clean['sales'].clip(lower=lower_whisker, upper=upper_whisker)
print(f"\\n处理后的数据范围: [{df_clean['sales'].min():.2f}, {df_clean['sales'].max():.2f}]")`}</pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* 第6章 */}
                <div className="border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第6章 数据预处理</h3>
                  <p className="text-gray-600 mb-4">学习数据预处理的方法和技术，包括特征工程、数据转换和数据集成。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.1</span>
                      特征工程概述
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.2</span>
                      特征选择
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.3</span>
                      特征提取
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.4</span>
                      数据转换和编码
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">6.5</span>
                      数据集成
                    </li>
                  </ul>
                </div>

                {/* 第7章 */}
                <div className="border-l-4 border-teal-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第7章 大数据处理</h3>
                  <p className="text-gray-600 mb-4">学习处理大规模数据的方法和技术，包括并行处理和分布式计算。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.1</span>
                      大数据的概念和挑战
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.2</span>
                      并行处理技术
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.3</span>
                      分布式计算框架
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.4</span>
                      使用Dask处理大规模数据
                    </li>
                    <li className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">7.5</span>
                      大数据处理最佳实践
                    </li>
                  </ul>
                </div>

                {/* 第8章 */}
                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">第8章 数据采集与处理实战</h3>
                  <p className="text-gray-600 mb-4">通过实际项目，学习如何完成从数据采集到处理的完整流程。</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.1</span>
                      项目规划和需求分析
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.2</span>
                      数据采集方案设计
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.3</span>
                      数据处理流程实现
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.4</span>
                      数据质量评估和优化
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-100 text-pink-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">8.5</span>
                      项目展示和总结
                    </li>
                  </ul>
                </div>
              </div>
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
                  <li>《Python网络爬虫权威指南》</li>
                  <li>《数据清洗实战》</li>
                  <li>《Python数据分析》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>requests库</li>
                  <li>BeautifulSoup库</li>
                  <li>Scrapy框架</li>
                  <li>Pandas库</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>多做项目练习</li>
                  <li>在线资源学习</li>
                  <li>参与数据采集社区</li>
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
                      <span>20%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>实验报告</span>
                      <span>10%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">期末成绩 (60%)</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>数据采集与处理项目</span>
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