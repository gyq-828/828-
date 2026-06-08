// 代码质量检查工具

export interface CodeQualityIssue {
  type: 'warning' | 'error' | 'info';
  line: number;
  message: string;
  suggestion?: string;
}

export interface CodeQualityReport {
  score: number;
  issues: CodeQualityIssue[];
  suggestions: string[];
}

/**
 * 检查代码质量
 * @param code 要检查的代码字符串
 * @returns 代码质量报告
 */
export function checkCodeQuality(code: string): CodeQualityReport {
  const issues: CodeQualityIssue[] = [];
  const suggestions: string[] = [];
  const lines = code.split('\n');

  // 检查缩进（基础检查）
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    // 检查行长度
    if (line.length > 100) {
      issues.push({
        type: 'warning',
        line: lineNum,
        message: '行长度超过100字符，建议换行',
        suggestion: '将长句拆分为多行'
      });
    }

    // 检查是否有注释
    if (line.trim().startsWith('#') && index < 3 && lines.length > 10) {
      suggestions.push('代码包含注释，良好实践！');
    }
  });

  // 检查导入语句
  if (!code.includes('import')) {
    issues.push({
      type: 'warning',
      line: 1,
      message: '未检测到导入语句，确保导入了必要的库',
    });
  }

  // 检查print语句
  const hasPrint = code.includes('print(');
  if (!hasPrint && lines.length > 5) {
    issues.push({
      type: 'warning',
      line: lines.length,
      message: '未检测到输出语句，建议添加print展示结果',
    });
  }

  // 计算质量分数
  let score = 100;
  const errorCount = issues.filter(i => i.type === 'error').length;
  const warningCount = issues.filter(i => i.type === 'warning').length;
  
  score -= errorCount * 10;
  score -= warningCount * 5;
  score = Math.max(0, Math.min(100, score));

  // 正向建议
  if (code.includes('try') && code.includes('except')) {
    suggestions.push('使用了错误处理，优秀！');
  }
  if (code.includes('def ')) {
    suggestions.push('定义了函数，模块化做得好！');
  }

  return {
    score,
    issues,
    suggestions
  };
}

/**
 * 格式化代码
 * @param code 要格式化的代码字符串
 * @returns 格式化后的代码
 */
export function formatCode(code: string): string {
  // 简单的格式化：移除多余空行
  const lines = code.split('\n');
  let result: string[] = [];
  let lastWasEmpty = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') {
      if (!lastWasEmpty) {
        result.push('');
        lastWasEmpty = true;
      }
    } else {
      result.push(line);
      lastWasEmpty = false;
    }
  }
  
  return result.join('\n');
}
