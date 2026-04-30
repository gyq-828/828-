import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { autocompletion, CompletionContext, CompletionResult } from '@codemirror/autocomplete';

export default function PythonTraining() {
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
        3: '使用elif处理多个条件，最后用 else处理其他情况'
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
      if (trimmedCode.includes('print') && trimmedCode.includes('hello')) {
        correctCount++;
        feedbackList.push('✓ 成功输出了Hello World');
      }
      if (trimmedCode.includes('print') && (trimmedCode.includes('名字') || /name/.test(trimmedCode))) {
        correctCount++;
        feedbackList.push('✓ 成功输出了名字');
      }
    }
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
    else if (projectId === 3) {
      if (trimmedCode.includes('+') && trimmedCode.includes('10')) correctCount++;
      if (trimmedCode.includes('*') && trimmedCode.includes('8')) correctCount++;
      if (trimmedCode.includes('/')) correctCount++;
      if (trimmedCode.includes('**') || trimmedCode.includes('pow')) correctCount++;
    }
    else if (projectId === 4) {
      if (trimmedCode.includes('+') && trimmedCode.includes('hello')) correctCount++;
      if (trimmedCode.includes('str(')) correctCount++;
      if (trimmedCode.includes('f"') || trimmedCode.includes("f'")) correctCount++;
    }
    else if (projectId === 5) {
      if (trimmedCode.includes('if')) correctCount++;
      if (trimmedCode.includes('elif') || trimmedCode.includes('else')) correctCount++;
      if (trimmedCode.includes('input')) correctCount++;
      if (trimmedCode.includes('>=') || trimmedCode.includes('>')) correctCount++;
    }
    else if (projectId === 6) {
      if (trimmedCode.includes('for') && trimmedCode.includes('range')) correctCount++;
      if (trimmedCode.includes('while')) correctCount++;
      if (trimmedCode.includes('in') && trimmedCode.includes('fruits')) correctCount++;
      if (trimmedCode.includes('+=') || trimmedCode.includes('total')) correctCount++;
    }
    else if (projectId === 7) {
      if (trimmedCode.includes('[') && trimmedCode.includes(']')) correctCount++;
      if (trimmedCode.includes('append')) correctCount++;
      if (trimmedCode.includes('del') || trimmedCode.includes('remove')) correctCount++;
      if (trimmedCode.includes('sort')) correctCount++;
    }
    else if (projectId === 8) {
      if (trimmedCode.includes('{') && trimmedCode.includes('}')) correctCount++;
      if (trimmedCode.includes('[')) correctCount++;
      if (trimmedCode.includes('items')) correctCount++;
      if (trimmedCode.includes('get')) correctCount++;
    }
    else if (projectId === 9) {
      if (trimmedCode.includes('def')) correctCount++;
      if (trimmedCode.includes('return')) correctCount++;
      if (trimmedCode.includes('=') && trimmedCode.includes('10')) correctCount++;
      if (trimmedCode.includes('print') || trimmedCode.includes('greet')) correctCount++;
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
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
      <header className="pt-24 pb-12 bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Python实训项目</h1>
              <p className="text-xl opacity-90">10个精选练习项目，适合Python小白入门</p>
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
                《Python实训项目》是专为Python初学者设计的实践课程，通过10个精心设计的练习项目，
                从Hello World开始，逐步带你掌握Python的核心知识点。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                每个项目都包含：
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>📋 详细的任务说明</li>
                <li>💡 关键步骤提示</li>
                <li>💻 交互式代码编辑器</li>
                <li>🎯 自动评分系统</li>
                <li>✅ 参考答案</li>
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
                    <span className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
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
                    className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-300 font-medium"
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
