#!/usr/bin/env node
/**
 * 生成 config.json 文件
 * 用于生产环境部署时生成配置文件
 * 
 * 优先级：
 * 1. 环境变量 VITE_GOOGLE_CLIENT_ID
 * 2. 命令行参数
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';

const googleClientId = 
  process.env.VITE_GOOGLE_CLIENT_ID || 
  process.argv[2] || 
  process.env.GOOGLE_CLIENT_ID;

if (!googleClientId) {
  console.error('❌ 错误：未提供 Google Client ID');
  console.error('使用方法：');
  console.error('  VITE_GOOGLE_CLIENT_ID=your-id node scripts/generate-config.js');
  console.error('  或：node scripts/generate-config.js your-client-id');
  process.exit(1);
}

const config = {
  googleClientId: googleClientId
};

const configPath = resolve(process.cwd(), 'config.json');
writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');

console.log('✓ 已生成 config.json');
console.log(`  Google Client ID: ${googleClientId.substring(0, 20)}...`);

