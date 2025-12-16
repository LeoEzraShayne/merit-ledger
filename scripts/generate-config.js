#!/usr/bin/env node
/**
 * 生成 config.json 文件
 * 用于生产环境部署时生成配置文件
 * 
 * 优先级：
 * 1. 环境变量 VITE_GOOGLE_CLIENT_ID
 * 2. 命令行参数
 * 3. 环境变量 GOOGLE_CLIENT_ID
 * 
 * 如果没有提供，会跳过生成（Vite 会使用环境变量）
 */

import { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

const googleClientId = 
  process.env.VITE_GOOGLE_CLIENT_ID || 
  process.argv[2] || 
  process.env.GOOGLE_CLIENT_ID;

// 如果没有提供 Google Client ID，跳过生成（Vite 会使用环境变量）
if (!googleClientId) {
  console.warn('⚠️  警告：未提供 Google Client ID');
  console.warn('  构建将继续，但 Google 登录功能可能不可用');
  console.warn('  建议在 Vercel 环境变量中设置 VITE_GOOGLE_CLIENT_ID');
  console.warn('');
  // 不退出，让构建继续（Vite 会尝试使用环境变量）
  process.exit(0);
}

const config = {
  googleClientId: googleClientId
};

const configPath = resolve(process.cwd(), 'config.json');

// 如果已存在 config.json，跳过生成（避免覆盖）
if (existsSync(configPath)) {
  console.log('ℹ️  config.json 已存在，跳过生成');
  process.exit(0);
}

writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');

console.log('✓ 已生成 config.json');
console.log(`  Google Client ID: ${googleClientId.substring(0, 20)}...`);

