import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { autocompletion, CompletionContext, CompletionResult } from '@codemirror/autocomplete';

export default function PythonCourse() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [userCode, setUserCode] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeTab, setActiveTab] = useState('theory');

  useEffect(() => {
    console.log('Active project changed:', activeProject);
  }, [activeProject]);

  const pythonCompletion = (context: CompletionContext): CompletionResult | null => {
    const pythonKeywords = [
      { label: 'print', type: 'function', detail: '输出内容' },
      { label: 'input', type: 'function', detail: '获取用户输入' },
      { label: 'len', type: 'function', detail: '获取长度' },
      { label: 'range', type: 'function', detail: '生成数字序列' },
      { label: 'int', type: 'function', detail: '转换为整数' },
      { label: 'str', type: 'function', detail: '转换为字符串' },
      { label: 'float', type: 'function', detail: '转换为浮点数' },
      { label: 'list', type: 'function', detail: '创建列表' },
      { label: 'dict', type: 'function', detail: '创建字典' },
      { label: 'type', type: 'function', detail: '查看数据类型' },
      { label: 'abs', type: 'function', detail: '绝对值' },
      { label: 'max', type: 'function', detail: '最大值' },
      { label: 'min', type: 'function', detail: '最小值' },
      { label: 'sum', type: 'function', detail: '求和' },
      { label: 'sorted', type: 'function', detail: '排序' },
      { label: 'append', type: 'method', detail: '添加元素' },
      { label: 'remove', type: 'method', detail: '移除元素' },
      { label: 'split', type: 'method', detail: '分割字符串' },
      { label: 'strip', type: 'method', detail: '去除空格' },
      { label: 'upper', type: 'method', detail: '转大写' },
      { label: 'lower', type: 'method', detail: '转小写' }
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
      title: 'Hello World - 你的第一个Python程序',
      description: '学习使用print()函数输出文字，这是编程的第一步！',
      tasks: [
        '使用print()函数输出"Hello, World!"',
        '尝试输出你自己的名字'
      ],
      keySteps: [
        'print("Hello, World!")',
        'print("我的名字是XXX")'
      ],
      answer: '# 输出Hello World\nprint("Hello, World!")\n\n# 输出你的名字\nprint("我的名字是张三")',
      hints: {
        1: 'print()函数用于在屏幕上显示内容，记得用双引号或单引号包围文字！',
        2: '可以把print()函数当作在屏幕上"打印"文字的工具。'
      }
    },
    {
      id: 2,
      title: '变量和数据类型 - Python的积木',
      description: '学习如何存储数据，理解数字、字符串和布尔值',
      tasks: [
        '创建一个变量name，存储你的名字',
        '创建一个变量age，存储你的年龄',
        '创建一个变量is_student，标记是否是学生',
        '使用print()输出这三个变量'
      ],
      keySteps: [
        'name = "张三"',
        'age = 18',
        'is_student = True',
        'print(name, age, is_student)'
      ],
      answer: '# 创建变量\nname = "张三"\nage = 18\nis_student = True\n\n# 输出变量\nprint("姓名:", name)\nprint("年龄:", age)\nprint("是否是学生:", is_student)',
      hints: {
        1: '变量就像一个盒子，可以存放数据。用等号=来赋值。',
        2: '数字不用引号，布尔值用True或False（首字母大写）。',
        3: '字符串（文字）需要用引号包围。'
      }
    },
    {
      id: 3,
      title: '基本运算 - 数学计算器',
      description: '学习Python中的加、减、乘、除等数学运算',
      tasks: [
        '计算10 + 5的结果并输出',
        '计算8 * 6的结果并输出',
        '计算20 / 4的结果并输出',
        '计算2的10次方'
      ],
      keySteps: [
        '加法: a = 10 + 5',
        '乘法: b = 8 * 6',
        '除法: c = 20 / 4',
        '幂运算: d = 2 ** 10'
      ],
      answer: '# 加法\nprint("10 + 5 =", 10 + 5)\n\n# 乘法\nprint("8 * 6 =", 8 * 6)\n\n# 除法\nprint("20 / 4 =", 20 / 4)\n\n# 幂运算\nprint("2的10次方 =", 2 ** 10)',
      hints: {
        1: '+ - * / 是基本的数学运算符',
        2: '** 表示幂运算（次方）',
        3: '// 表示整除，% 表示取余数'
      }
    },
    {
      id: 4,
      title: '字符串操作 - 文字拼接师',
      description: '学习字符串的拼接、格式化和常用操作',
      tasks: [
        '将"Hello"和"World"拼接成一个字符串',
        '将数字转换为字符串并拼接',
        '使用f-string格式化输出你的姓名和年龄'
      ],
      keySteps: [
        '拼接: "Hello" + " " + "World"',
        '转字符串: str(18)',
        'f-string: f"姓名:{name}, 年龄:{age}"'
      ],
      answer: '# 方法1: 使用+号拼接\ntext1 = "Hello" + " " + "World"\nprint(text1)\n\n# 方法2: 使用f-string格式化\nname = "张三"\nage = 18\ntext2 = f"我叫{name}，今年{age}岁"\nprint(text2)',
      hints: {
        1: '使用+号可以拼接字符串，使用f-string更方便格式化',
        2: 'f-string的格式是: f"文字{变量名}文字"',
        3: 'str()函数可以将数字转换为字符串'
      }
    },
    {
      id: 5,
      title: '条件判断 - 智能选择器',
      description: '学习if-elif-else语句，让程序做选择',
      tasks: [
        '判断一个数是否大于10',
        '判断成绩等级：>=90优秀，>=80良好，>=60及格，否则不及格',
        '使用input()获取用户输入的年龄，判断是否成年'
      ],
      keySteps: [
        'if 条件:',
        '    print("条件成立")',
        'age = int(input("请输入年龄: "))',
        'if age >= 18: print("成年")'
      ],
      answer: '# 示例1: 判断成绩\nscore = 85\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 示例2: 判断年龄\nage = int(input("请输入年龄: "))\nif age >= 18:\n    print("已成年")\nelse:\n    print("未成年")',
      hints: {
        1: 'if后面要加冒号:',
        2: '注意缩进，Python用缩进来区分代码块',
        3: 'input()返回的是字符串，需要int()转换为数字'
      }
    },
    {
      id: 6,
      title: '循环入门 - 重复执行专家',
      description: '学习for循环和while循环，让程序重复执行任务',
      tasks: [
        '使用for循环输出数字1到5',
        '使用while循环输出数字1到5',
        '使用for循环遍历列表["苹果", "香蕉", "橙子"]',
        '计算1+2+3+...+100的和'
      ],
      keySteps: [
        'for i in range(1, 6):',
        '    print(i)',
        'while 条件:',
        '    执行语句'
      ],
      answer: '# for循环输出1-5\nfor i in range(1, 6):\n    print(i)\n\n# while循环输出1-5\ni = 1\nwhile i <= 5:\n    print(i)\n    i += 1\n\n# 遍历列表\nfruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(fruit)\n\n# 计算1+2+...+100\ntotal = 0\nfor i in range(1, 101):\n    total += i\nprint("1+2+...+100 =", total)',
      hints: {
        1: 'range(1, 6)生成1,2,3,4,5',
        2: 'range(101)生成0到100',
        3: 'while循环需要手动改变循环变量，避免死循环'
      }
    },
    {
      id: 7,
      title: '列表操作 - 数据集合',
      description: '学习列表的创建、添加、修改和删除操作',
      tasks: [
        '创建一个包含3个数字的列表',
        '向列表中添加一个元素',
        '删除列表中的第一个元素',
        '对列表进行排序'
      ],
      keySteps: [
        '创建: my_list = [1, 2, 3]',
        '添加: my_list.append(4)',
        '删除: del my_list[0]',
        '排序: my_list.sort()'
      ],
      answer: '# 创建列表\nnumbers = [3, 1, 4, 1, 5]\n\n# 添加元素\nnumbers.append(9)\nprint("添加后:", numbers)\n\n# 删除元素\ndel numbers[0]\nprint("删除后:", numbers)\n\n# 排序\nnumbers.sort()\nprint("排序后:", numbers)\n\n# 反转\nnumbers.reverse()\nprint("反转后:", numbers)',
      hints: {
        1: '列表索引从0开始',
        2: 'append()在末尾添加，insert()在指定位置插入',
        3: 'del删除指定位置的元素，remove()删除指定值的元素'
      }
    },
    {
      id: 8,
      title: '字典操作 - 键值对大师',
      description: '学习字典的创建、访问、修改和遍历',
      tasks: [
        '创建一个存储学生信息的字典',
        '访问字典中的某个值',
        '向字典添加新的键值对',
        '遍历字典的所有键和值'
      ],
      keySteps: [
        '创建: my_dict = {"name": "张三", "age": 18}',
        '访问: my_dict["name"]',
        '添加: my_dict["city"] = "北京"',
        '遍历: for key, value in my_dict.items():'
      ],
      answer: '# 创建字典\nstudent = {\n    "name": "张三",\n    "age": 18,\n    "score": 95\n}\n\n# 访问值\nprint("姓名:", student["name"])\n\n# 添加键值对\nstudent["city"] = "北京"\nprint("城市:", student.get("city"))\n\n# 遍历字典\nfor key, value in student.items():\n    print(f"{key}: {value}")',
      hints: {
        1: '字典用大括号{}，键值对用key: value格式',
        2: '访问不存在的键会报错，用get()更安全',
        3: 'items()返回所有键值对'
      }
    },
    {
      id: 9,
      title: '函数定义 - 代码复用专家',
      description: '学习如何定义和调用函数，提高代码复用性',
      tasks: [
        '定义一个问候函数，接收名字参数',
        '定义一个计算平方的函数',
        '使用默认参数定义一个加法函数',
        '使用return返回计算结果'
      ],
      keySteps: [
        'def greet(name):',
        '    print(f"你好,{name}!")',
        'def square(x):',
        '    return x * x'
      ],
      answer: '# 问候函数\ndef greet(name):\n    print(f"你好, {name}!")\n\ngreet("张三")\n\n# 计算平方\ndef square(x):\n    return x ** 2\n\nresult = square(5)\nprint("5的平方:", result)\n\n# 加法函数（带默认参数）\ndef add(a, b=10):\n    return a + b\n\nprint("5 + 10 =", add(5))\nprint("5 + 3 =", add(5, 3))',
      hints: {
        1: '函数用def关键字定义，后面跟函数名和括号',
        2: '参数放在括号里，用逗号分隔',
        3: 'return返回结果，没有return的函数返回None'
      }
    },
    {
      id: 10,
      title: '综合练习 - 小型计算器',
      description: '综合运用所学知识，创建一个简单的计算器程序',
      tasks: [
        '创建加减乘除四个函数',
        '使用input()获取用户输入的两个数字',
        '使用条件语句根据运算符执行相应计算',
        '处理除数为零的情况'
      ],
      keySteps: [
        'def add(a, b): return a + b',
        'num1 = float(input("第一个数: "))',
        'num2 = float(input("第二个数: "))',
        'if operator == "+": result = add(num1, num2)'
      ],
      answer: '# 定义运算函数\ndef add(a, b): return a + b\ndef subtract(a, b): return a - b\ndef multiply(a, b): return a * b\ndef divide(a, b): \n    if b != 0:\n        return a / b\n    return "错误: 除数不能为零"\n\n# 获取用户输入\nnum1 = float(input("请输入第一个数: "))\nnum2 = float(input("请输入第二个数: "))\noperator = input("请输入运算符(+,-,*,/): ")\n\n# 执行运算\nif operator == "+":\n    result = add(num1, num2)\nelif operator == "-":\n    result = subtract(num1, num2)\nelif operator == "*":\n    result = multiply(num1, num2)\nelif operator == "/":\n    result = divide(num1, num2)\nelse:\n    result = "错误: 无效的运算符"\n\nprint(f"结果: {num1} {operator} {num2} = {result}")',
      hints: {
        1: '用float()处理小数输入',
        2: '记得处理除数为零的边界情况',
        3: '使用elif处理多个条件，最后用else处理其他情况'
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

    // 项目1: Hello World
    if (projectId === 1) {
      if (trimmedCode.includes('print') && trimmedCode.includes('hello')) {
        correctCount++;
        feedbackList.push('✓ 成功输出了Hello World');
      }
      if (trimmedCode.includes('print') && (trimmedCode.includes('名字') || /name/.test(trimmedCode))) {
        correctCount++;
        feedbackList.push('✓ 成功输出了名字');
      }
    }
    // 项目2: 变量和数据类型
    else if (projectId === 2) {
      if (trimmedCode.includes('name') && /[=\s]+/.test(trimmedCode)) {
        correctCount++;
        feedbackList.push('✓ 创建了name变量');
      }
      if (trimmedCode.includes('age') && /\d+/.test(trimmedCode)) {
        correctCount++;
        feedbackList.push('✓ 创建了age变量');
      }
      if (trimmedCode.includes('student') || trimmedCode.includes('true') || trimmedCode.includes('false')) {
        correctCount++;
        feedbackList.push('✓ 创建了布尔变量');
      }
      if (trimmedCode.includes('print')) {
        correctCount++;
        feedbackList.push('✓ 使用了print输出');
      }
    }
    // 项目3: 基本运算
    else if (projectId === 3) {
      if (trimmedCode.includes('+') && trimmedCode.includes('10')) correctCount++;
      if (trimmedCode.includes('*') && trimmedCode.includes('8')) correctCount++;
      if (trimmedCode.includes('/')) correctCount++;
      if (trimmedCode.includes('**') || trimmedCode.includes('pow')) correctCount++;
    }
    // 项目4: 字符串操作
    else if (projectId === 4) {
      if (trimmedCode.includes('+') && trimmedCode.includes('hello')) correctCount++;
      if (trimmedCode.includes('str(')) correctCount++;
      if (trimmedCode.includes('f"') || trimmedCode.includes("f'")) correctCount++;
    }
    // 项目5: 条件判断
    else if (projectId === 5) {
      if (trimmedCode.includes('if')) correctCount++;
      if (trimmedCode.includes('elif') || trimmedCode.includes('else')) correctCount++;
      if (trimmedCode.includes('input')) correctCount++;
      if (trimmedCode.includes('>=') || trimmedCode.includes('>')) correctCount++;
    }
    // 项目6: 循环
    else if (projectId === 6) {
      if (trimmedCode.includes('for') && trimmedCode.includes('range')) correctCount++;
      if (trimmedCode.includes('while')) correctCount++;
      if (trimmedCode.includes('in') && trimmedCode.includes('fruits')) correctCount++;
      if (trimmedCode.includes('+=') || trimmedCode.includes('total')) correctCount++;
    }
    // 项目7: 列表
    else if (projectId === 7) {
      if (trimmedCode.includes('[') && trimmedCode.includes(']')) correctCount++;
      if (trimmedCode.includes('append')) correctCount++;
      if (trimmedCode.includes('del') || trimmedCode.includes('remove')) correctCount++;
      if (trimmedCode.includes('sort')) correctCount++;
    }
    // 项目8: 字典
    else if (projectId === 8) {
      if (trimmedCode.includes('{') && trimmedCode.includes('}')) correctCount++;
      if (trimmedCode.includes('[')) correctCount++;
      if (trimmedCode.includes('items')) correctCount++;
      if (trimmedCode.includes('get')) correctCount++;
    }
    // 项目9: 函数
    else if (projectId === 9) {
      if (trimmedCode.includes('def')) correctCount++;
      if (trimmedCode.includes('return')) correctCount++;
      if (trimmedCode.includes('=') && trimmedCode.includes('10')) correctCount++;
      if (trimmedCode.includes('print') || trimmedCode.includes('greet')) correctCount++;
    }
    // 项目10: 综合计算器
    else if (projectId === 10) {
      if (trimmedCode.includes('def') && trimmedCode.includes('add')) correctCount++;
      if (trimmedCode.includes('input')) correctCount++;
      if (trimmedCode.includes('if') && trimmedCode.includes('elif')) correctCount++;
      if (trimmedCode.includes('zero') || trimmedCode.includes('!=') || trimmedCode.includes('/')) correctCount++;
    }

    const finalScore = Math.round((correctCount / totalTasks) * 100);
    setScore(finalScore);
    setFeedback(feedbackList.length > 0 ? feedbackList.join('\n') : '请尝试完成更多任务！');
  };

  const toggleSection = (sectionId: string) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Python基础</h1>
              <p className="text-xl opacity-90">高职大二第一学期课程</p>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="h-16 w-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl">
                🐍
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
                《Python基础》是商务数据分析与应用专业的入门课程，旨在培养学生掌握Python编程语言的基础知识和基本技能。
                本课程是后续数据分析、数据采集与处理等课程的基础，通过本课程的学习，学生将具备使用Python进行简单编程的能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                Python是一种简单易学、功能强大的编程语言，广泛应用于数据分析、人工智能、Web开发等领域。
                本课程将从Python的基本语法开始，逐步引导学生掌握Python的核心概念和编程技巧。
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
                    掌握Python的基本语法和数据类型
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    理解Python的控制结构和函数
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    了解Python的模块和包的概念
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    熟悉Python的常用标准库
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
                    能够编写简单的Python程序
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python进行基本的数据处理
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够使用Python的常用库
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-500 mt-1 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    能够调试和解决Python程序中的基本问题
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
              <div className="space-y-6">
                {/* 第1章 */}
                <div className="border border-blue-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter1')}>
                    <h3 className="text-xl font-semibold text-white">第1章 Python概述</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter1' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter1' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">了解Python的基本概念、特点和应用领域，掌握Python的安装和环境配置。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.1</span>
                            Python的简介和特点
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>简介：</strong>Python是一种高级编程语言，由Guido van Rossum于1991年创造。它以简洁、易读的语法著称，强调代码的可读性。</p>
                            <p><strong>特点：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>简洁易读：语法简洁清晰，强调可读性</li>
                              <li>跨平台：可在Windows、macOS、Linux等多个平台运行</li>
                              <li>丰富的生态系统：拥有大量第三方库和框架</li>
                              <li>动态类型：变量不需要声明类型</li>
                              <li>面向对象：支持面向对象编程</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.2</span>
                            Python的应用领域
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>数据分析：</strong>使用pandas、numpy、matplotlib等库进行数据处理和可视化</li>
                              <li><strong>人工智能：</strong>使用tensorflow、pytorch等框架进行机器学习和深度学习</li>
                              <li><strong>Web开发：</strong>使用django、flask等框架开发Web应用</li>
                              <li><strong>自动化：</strong>自动化测试、数据处理等任务</li>
                              <li><strong>科学计算：</strong>科学研究中的数值计算</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.3</span>
                            Python的安装和环境配置
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>安装步骤：</strong></p>
                            <ol className="list-decimal list-inside space-y-1 pl-2">
                              <li>访问Python官网：https://www.python.org</li>
                              <li>下载适合您操作系统的Python版本</li>
                              <li>运行安装程序，确保勾选"Add Python to PATH"</li>
                              <li>验证安装：在命令行输入python --version</li>
                            </ol>
                            <p><strong>环境配置：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>使用pip安装第三方库：pip install package_name</li>
                              <li>使用虚拟环境：python -m venv venv</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="bg-blue-100 text-blue-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">1.4</span>
                            Python的开发工具介绍
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>PyCharm：</strong>功能强大的Python IDE，提供代码补全、调试等功能</li>
                              <li><strong>Visual Studio Code：</strong>轻量级编辑器，通过插件支持Python开发</li>
                              <li><strong>Jupyter Notebook：</strong>交互式开发环境，适合数据分析和教学</li>
                              <li><strong>IDLE：</strong>Python自带的简单编辑器</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 第2章 */}
                <div className="border border-green-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter2')}>
                    <h3 className="text-xl font-semibold text-white">第2章 Python基础语法</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter2' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter2' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的基本语法，包括变量、数据类型、运算符和表达式。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.1</span>
                            变量和数据类型
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>变量：</strong>变量是存储数据的容器。在Python中，变量不需要声明类型。</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre># 变量赋值
name = "张三"  # 字符串
age = 20       # 整数
height = 1.75 # 浮点数
is_student = True # 布尔值

print(name, age, height, is_student)</pre>
                            </div>
                            <p><strong>基本数据类型：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li><strong>整数(int)：</strong>没有小数部分的数字</li>
                              <li><strong>浮点数(float)：</strong>包含小数的数字</li>
                              <li><strong>字符串(str)：</strong>用单引号或双引号括起来的文本</li>
                              <li><strong>布尔值(bool)：</strong>只有True和False两个值</li>
                            </ul>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.2</span>
                            运算符和表达式
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>算术运算符：</strong></p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                              <li>加法：+</li>
                              <li>减法：-</li>
                              <li>乘法：*</li>
                              <li>除法：/</li>
                              <li>整除：//</li>
                              <li>取余：%</li>
                              <li>幂运算：**</li>
                            </ul>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a // b) # 3
print(a % b)  # 1
print(a ** b) # 1000</pre>
                            </div>
                            <p><strong>比较运算符：</strong>==, !=, &gt;, &lt;, &gt;=, &lt;=</p>
                            <p><strong>逻辑运算符：</strong>and, or, not</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.3</span>
                            输入和输出
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>输出：</strong>使用print()函数输出内容</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>{`print("Hello, World!")
name = "张三"
print(f"你好，{name}！")`}</pre>
                            </div>
                            <p><strong>输入：</strong>使用input()函数获取用户输入</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>{`name = input("请输入你的名字：")
print(f"你好，{name}！")`}</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                            <span className="bg-green-100 text-green-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">2.4</span>
                            注释和代码风格
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>单行注释：</strong>使用#符号</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre># 这是一个单行注释
print("Hello") # 这也是一个单行注释</pre>
                            </div>
                            <p><strong>多行注释：</strong>使用三引号</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>"""
这是一个多行注释
可以写多行内容
"""
print("Hello")</pre>
                            </div>
                            <p><strong>代码风格：</strong>遵循PEP 8规范，使用4空格缩进，适当的空行和命名规范。</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 第3章 */}
                <div className="border border-purple-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter3')}>
                    <h3 className="text-xl font-semibold text-white">第3章 控制结构</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter3' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter3' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的控制结构，包括条件语句和循环语句。</p>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.1</span>
                            条件语句（if-elif-else）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>基本语法：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>age = 18
if age &gt;= 18:
    print("成年人")
elif age &gt;= 13:
    print("青少年")
else:
    print("儿童")</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.2</span>
                            循环语句（for循环）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>遍历列表：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print(fruit)

# 使用range()函数
for i in range(5):
    print(i)</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.3</span>
                            循环语句（while循环）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>基本语法：</strong></p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>count = 0
while count &lt; 5:
    print(count)
    count += 1</pre>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                            <span className="bg-purple-100 text-purple-800 font-semibold rounded-full h-6 w-6 flex items-center justify-center mr-2">3.4</span>
                            循环控制语句（break、continue）
                          </h4>
                          <div className="text-gray-700 space-y-2">
                            <p><strong>break：</strong>跳出当前循环</p>
                            <p><strong>continue：</strong>跳过本次循环，继续下一次</p>
                            <div className="bg-gray-800 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                              <pre>for i in range(10):
    if i == 5:
        break  # 跳出循环
    if i == 3:
        continue  # 跳过i=3
    print(i)</pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 后续章节可以继续添加，这里为了简化先添加前3章 */}
                {/* 第4章到第8章的按钮保持原样，但需要添加对应的内容 */}
                <div className="border border-yellow-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter4')}>
                    <h3 className="text-xl font-semibold text-white">第4章 函数</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter4' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter4' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的函数定义和使用，包括参数传递和返回值。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-red-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter5')}>
                    <h3 className="text-xl font-semibold text-white">第5章 数据结构</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter5' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter5' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的常用数据结构，包括列表、元组、字典和集合。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-indigo-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter6')}>
                    <h3 className="text-xl font-semibold text-white">第6章 文件操作</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter6' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter6' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的文件操作，包括文件的打开、读写和关闭。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-teal-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter7')}>
                    <h3 className="text-xl font-semibold text-white">第7章 异常处理</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter7' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter7' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的异常处理机制，包括异常的捕获和处理。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-pink-200 rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-4 cursor-pointer flex justify-between items-center" onClick={() => toggleSection('chapter8')}>
                    <h3 className="text-xl font-semibold text-white">第8章 模块和包</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-white transition-transform duration-300 ${expandedSection === 'chapter8' ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  {expandedSection === 'chapter8' && (
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">学习Python的模块和包的概念，掌握模块的导入和使用。</p>
                      <div className="text-center py-8 text-gray-500">
                        <p>💡 学习提示：点击展开更多章节查看详细内容</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* 实训项目标签页 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-orange-600">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              Python基础实训项目
            </h2>
            
            {/* 标签页导航 */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  className={`px-6 py-3 font-semibold transition-colors duration-300 ${
                    activeTab === 'theory'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('theory')}
                >
                  📖 理论学习
                </button>
                <button
                  className={`px-6 py-3 font-semibold transition-colors duration-300 ${
                    activeTab === 'practice'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('practice')}
                >
                  💻 实训练习
                </button>
              </div>

              {activeTab === 'practice' && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                      <span className="text-2xl mr-2">🎯</span>
                      Python小白入门实训系统
                    </h3>
                    <p className="text-gray-700 mb-4">
                      专为初学者设计的10个实训项目，从Hello World开始，逐步带你掌握Python核心知识。
                      每个项目都有详细的任务说明、关键步骤提示和参考答案。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {trainingProjects.map((project) => (
                        <button
                          key={project.id}
                          onClick={() => setActiveProject(project.id)}
                          className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2 rounded-lg border-2 border-blue-200 hover:border-blue-600 transition-all duration-300 font-medium text-sm shadow-sm"
                        >
                          项目{project.id}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'theory' && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                  <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📚</span>
                    理论学习要点
                  </h3>
                  <p className="text-gray-700 mb-4">
                    通过上方的课程大纲学习理论知识，然后在下方进行实践练习。理论与实践相结合，学习效果更佳！
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-700 mb-2">💡 学习建议</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 先看理论，再做练习</li>
                        <li>• 遇到问题先思考，再看答案</li>
                        <li>• 多动手敲代码，不要只看不练</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-green-700 mb-2">🎯 练习目标</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 完成10个基础实训项目</li>
                        <li>• 掌握Python基本语法</li>
                        <li>• 能够独立编写简单程序</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
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
                  <li>《Python编程：从入门到实践》</li>
                  <li>《Python基础教程》</li>
                  <li>《Python官方文档》</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-2xl mb-4">
                  💻
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">工具与软件</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Python 3.9+</li>
                  <li>PyCharm</li>
                  <li>Jupyter Notebook</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">学习方法</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>理论学习与实践相结合</li>
                  <li>多做练习和项目</li>
                  <li>在线资源学习</li>
                  <li>参与编程社区</li>
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
                      <span>编程项目</span>
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
                {/* 项目描述 */}
                <div className="mb-4">
                  <p className="text-gray-700 text-lg">
                    {trainingProjects.find(p => p.id === activeProject)?.description}
                  </p>
                </div>

                {/* 任务要求 */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📋 任务要求：</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 bg-blue-50 p-4 rounded-lg">
                    {trainingProjects.find(p => p.id === activeProject)?.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                {/* 关键步骤提示 */}
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

                {/* 代码编辑器 */}
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

                {/* 操作按钮 */}
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

                {/* 答案显示 */}
                {showAnswer && (
                  <div className="mt-4 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✅ 参考答案：</h4>
                    <pre className="text-sm text-green-700 whitespace-pre-wrap bg-white p-3 rounded border border-green-200 overflow-x-auto">
                      {trainingProjects.find(p => p.id === activeProject)?.answer}
                    </pre>
                  </div>
                )}

                {/* 评分结果 */}
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