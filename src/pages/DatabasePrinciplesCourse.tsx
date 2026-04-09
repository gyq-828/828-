import React from 'react';
import { Link } from 'react-router-dom';

const DatabasePrinciplesCourse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">GYQ's Learning Hub</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">首页</Link></li>
              <li><Link to="/python" className="text-gray-600 hover:text-blue-600 transition-colors">Python基础</Link></li>
              <li><Link to="/data-analysis" className="text-gray-600 hover:text-blue-600 transition-colors">数据分析技术</Link></li>
              <li><Link to="/data-collection" className="text-gray-600 hover:text-blue-600 transition-colors">数据采集与处理</Link></li>
              <li><Link to="/supply-chain" className="text-gray-600 hover:text-blue-600 transition-colors">供应链数据分析</Link></li>
              <li><Link to="/database" className="text-blue-600 font-medium">数据库原理</Link></li>
              <li><Link to="/financial" className="text-gray-600 hover:text-blue-600 transition-colors">财务数据分析</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-blue-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">数据库原理与应用</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            本课程旨在培养学生掌握数据库系统的基本原理和应用技能，能够设计和管理数据库，为数据分析提供基础支持。
          </p>
        </div>

        {/* Course Introduction */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">课程介绍</h2>
          <p className="text-gray-600 leading-relaxed">
            数据库原理与应用是商务数据分析与应用专业的核心课程，主要介绍数据库系统的基本概念、数据模型、SQL语言、数据库设计和数据库管理等内容。
            通过本课程的学习，学生将能够理解数据库系统的工作原理，掌握SQL语言的使用，具备数据库设计和管理的能力，为后续的数据分析课程打下坚实的基础。
          </p>
        </section>

        {/* Learning Objectives */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">学习目标</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">掌握数据库系统的基本概念和原理</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">学会使用SQL语言进行数据查询和操作</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够进行数据库设计和规范化</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">掌握数据库管理和维护的基本技能</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">能够将数据库技术应用于实际业务场景</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">了解数据库安全和优化的基本方法</span>
            </li>
          </ul>
        </section>

        {/* Course Outline */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">课程大纲</h2>
          
          <div className="space-y-8">
            {/* Chapter 1 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第1章 数据库系统概述</h3>
              <ul className="space-y-2 text-gray-600">
                <li>1.1 数据库的基本概念</li>
                <li>1.2 数据库系统的组成</li>
                <li>1.3 数据库管理系统的功能</li>
                <li>1.4 数据库系统的发展历程</li>
                <li>1.5 数据库技术的应用领域</li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第2章 数据模型</h3>
              <ul className="space-y-2 text-gray-600">
                <li>2.1 数据模型的基本概念</li>
                <li>2.2 概念模型</li>
                <li>2.3 关系模型</li>
                <li>2.4 层次模型和网状模型</li>
                <li>2.5 面向对象数据模型</li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第3章 关系数据库基础</h3>
              <ul className="space-y-2 text-gray-600">
                <li>3.1 关系的基本概念</li>
                <li>3.2 关系代数</li>
                <li>3.3 关系演算</li>
                <li>3.4 关系的完整性约束</li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第4章 SQL语言基础</h3>
              <ul className="space-y-2 text-gray-600">
                <li>4.1 SQL语言概述</li>
                <li>4.2 数据定义语句（DDL）</li>
                <li>4.3 数据操纵语句（DML）</li>
                <li>4.4 数据查询语句（SELECT）</li>
                <li>4.5 视图的创建和使用</li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第5章 数据库设计</h3>
              <ul className="space-y-2 text-gray-600">
                <li>5.1 数据库设计的基本步骤</li>
                <li>5.2 需求分析</li>
                <li>5.3 概念结构设计</li>
                <li>5.4 逻辑结构设计</li>
                <li>5.5 物理结构设计</li>
                <li>5.6 数据库实施和维护</li>
              </ul>
            </div>

            {/* Chapter 6 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第6章 数据库规范化</h3>
              <ul className="space-y-2 text-gray-600">
                <li>6.1 函数依赖</li>
                <li>6.2 范式理论</li>
                <li>6.3 第一范式（1NF）</li>
                <li>6.4 第二范式（2NF）</li>
                <li>6.5 第三范式（3NF）</li>
                <li>6.6 BCNF范式</li>
              </ul>
            </div>

            {/* Chapter 7 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第7章 数据库管理与维护</h3>
              <ul className="space-y-2 text-gray-600">
                <li>7.1 数据库管理员的职责</li>
                <li>7.2 数据库安全性管理</li>
                <li>7.3 数据库完整性管理</li>
                <li>7.4 数据库备份与恢复</li>
                <li>7.5 数据库性能优化</li>
              </ul>
            </div>

            {/* Chapter 8 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">第8章 数据库应用开发</h3>
              <ul className="space-y-2 text-gray-600">
                <li>8.1 数据库应用系统架构</li>
                <li>8.2 ODBC和JDBC</li>
                <li>8.3 数据库连接池</li>
                <li>8.4 事务处理</li>
                <li>8.5 并发控制</li>
                <li>8.6 数据库应用案例分析</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Resources */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">课程资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">参考教材</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 《数据库系统概论》，王珊、萨师煊，高等教育出版社</li>
                <li>• 《SQL必知必会》，Alan Beaulieu，人民邮电出版社</li>
                <li>• 《数据库设计与应用》，程学先，清华大学出版社</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">在线资源</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <a href="#" className="text-blue-600 hover:underline">W3Schools SQL教程</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">MySQL官方文档</a></li>
                <li>• <a href="#" className="text-blue-600 hover:underline">PostgreSQL官方文档</a></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">软件工具</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• MySQL</li>
                <li>• PostgreSQL</li>
                <li>• SQL Server</li>
                <li>• SQLite</li>
                <li>• Navicat for MySQL</li>
                <li>• DBeaver</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">实践项目</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 学生信息管理系统数据库设计</li>
                <li>• 图书管理系统数据库设计</li>
                <li>• 企业销售数据管理系统</li>
                <li>• 电商平台数据库设计</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Methods */}
        <section className="mb-12 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">考核方式</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">平时作业</span>
              <span className="text-gray-600">20%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">SQL实践</span>
              <span className="text-gray-600">25%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">数据库设计项目</span>
              <span className="text-gray-600">25%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-700">期末考试</span>
              <span className="text-gray-600">30%</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-bold">G</span>
                </div>
                <h3 className="text-xl font-bold">GYQ's Learning Hub</h3>
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
            <p>© 2024 GYQ's Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DatabasePrinciplesCourse;