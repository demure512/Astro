#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const args = process.argv.slice(2);
const content = args[0] || ''; // 第一个参数作为说说内容

if (!content) {
  console.error('\x1b[31m%s\x1b[0m', '错误: 请提供说说内容');
  console.log('\x1b[36m%s\x1b[0m', '基本用法:');
  console.log('  npm run newtalk "你的说说内容"');
  console.log('\x1b[36m%s\x1b[0m', '自定义标签:');
  console.log('  npm run newtalk "你的说说内容" -- --tags=标签1,标签2');
  console.log('\x1b[36m%s\x1b[0m', '添加图片:');
  console.log('  npm run newtalk "说说文字 <div class=\\"vh-img-flex\\"><img src=\\"图片链接\\" alt=\\"描述\\"></div>"');
  console.log('\x1b[36m%s\x1b[0m', '添加多张图片:');
  console.log('  npm run newtalk "说说文字 <div class=\\"vh-img-flex\\"><img src=\\"图片1\\"></div><div class=\\"vh-img-flex\\"><img src=\\"图片2\\"></div>"');
  process.exit(1);
}

// 解析标签
let tags = ['日常']; // 默认标签
const tagsArg = args.find(arg => arg.startsWith('--tags='));
if (tagsArg) {
  const tagsPart = tagsArg.replace('--tags=', '');
  if (tagsPart) {
    tags = tagsPart.split(',').map(tag => tag.trim()).filter(Boolean);
  }
}

// 读取现有的Talking数据
const talkingFilePath = path.join(process.cwd(), 'src', 'page_data', 'Talking.ts');

try {
  const fileContent = fs.readFileSync(talkingFilePath, 'utf8');
  // 使用正则表达式提取data数组
  const dataMatch = fileContent.match(/data:\s*\[([\s\S]*?)\]\s*}/);
  
  if (!dataMatch) {
    throw new Error('无法解析Talking.ts文件');
  }
  
  // 保存文件开头和结尾部分
  const fileStart = fileContent.substring(0, fileContent.indexOf('data: [') + 'data: ['.length);
  const fileEnd = fileContent.substring(fileContent.indexOf('data: [') + 'data: ['.length + dataMatch[1].length);
  
  // 构建新的说说数据
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const newTalk = {
    date: now,
    tags: tags,
    content: content
  };
  
  // 处理内容以保留HTML结构但转义JSON字符串中的引号
  let processedContent = content
    .replace(/\\"/g, '\\\\"') // 先转义已经转义的引号，避免双重转义
    .replace(/"/g, '\\"');    // 转义普通引号
  
  // 格式化为字符串
  const newTalkStr = `
    {
      "date": "${newTalk.date}",
      "tags": [
        ${newTalk.tags.map(tag => `"${tag}"`).join(',\n        ')}
      ],
      "content": "${processedContent}"
    },`;
  
  // 合并并写入文件
  const newContent = fileStart + newTalkStr + dataMatch[1] + fileEnd;
  fs.writeFileSync(talkingFilePath, newContent, 'utf8');
  
  // 检测是否包含图片
  const hasImage = content.includes('vh-img-flex');
  
  console.log('\x1b[32m%s\x1b[0m', `✅ 已添加新说说${hasImage ? '(含图片)' : ''}: "${content.substring(0, 30)}${content.length > 30 ? '...' : ''}"`);
  console.log('\x1b[32m%s\x1b[0m', `🏷️ 标签: ${tags.join(', ')}`);
  console.log('\x1b[32m%s\x1b[0m', `🕒 时间: ${now}`);
  
  console.log('\x1b[33m%s\x1b[0m', '提示: 如需编辑或删除，请直接修改 src/page_data/Talking.ts 文件');
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', `错误: ${error.message}`);
  process.exit(1);
} 