#!/usr/bin/env node

/**
 * GitHub Pages 部署检查脚本
 * 用于验证项目配置是否适合部署到 GitHub Pages
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 检查 GitHub Pages 部署配置...\n');

const checks = [];
let hasErrors = false;

// 检查必需文件
function checkRequiredFiles() {
  const requiredFiles = [
    'package.json',
    'vite.config.ts',
    'src/App.tsx',
    '.github/workflows/deploy.yml'
  ];

  console.log('📁 检查必需文件:');
  
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`  ✅ ${file}`);
    } else {
      console.log(`  ❌ ${file} - 文件缺失`);
      hasErrors = true;
    }
  });
  console.log();
}

// 检查 package.json 配置
function checkPackageJson() {
  console.log('📦 检查 package.json:');
  
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (pkg.scripts && pkg.scripts.build) {
      console.log('  ✅ build 脚本存在');
    } else {
      console.log('  ❌ build 脚本缺失');
      hasErrors = true;
    }
    
    if (pkg.name && pkg.name !== 'react_repo') {
      console.log(`  ✅ 项目名称: ${pkg.name}`);
    } else {
      console.log('  ⚠️  建议修改项目名称');
    }
  } catch (error) {
    console.log('  ❌ package.json 格式错误');
    hasErrors = true;
  }
  console.log();
}

// 检查 Vite 配置
function checkViteConfig() {
  console.log('⚙️  检查 vite.config.ts:');
  
  try {
    const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
    
    if (viteConfig.includes('base:')) {
      const baseMatch = viteConfig.match(/base:\s*['"`](.*?)['"`]/);
      if (baseMatch) {
        const basePath = baseMatch[1];
        console.log(`  ✅ base 路径已配置: ${basePath}`);
        
        if (basePath === '/portfolio-website/') {
          console.log('  ⚠️  记得将 base 路径改为您的实际仓库名');
        }
      } else {
        console.log('  ❌ base 路径格式可能有误');
        hasErrors = true;
      }
    } else {
      console.log('  ❌ 缺少 base 路径配置');
      hasErrors = true;
    }
  } catch (error) {
    console.log('  ❌ vite.config.ts 读取失败');
    hasErrors = true;
  }
  console.log();
}

// 检查 GitHub Actions 工作流
function checkGitHubActions() {
  console.log('🔄 检查 GitHub Actions:');
  
  const workflowPath = '.github/workflows/deploy.yml';
  if (fs.existsSync(workflowPath)) {
    try {
      const workflow = fs.readFileSync(workflowPath, 'utf8');
      
      if (workflow.includes('actions/checkout@v4')) {
        console.log('  ✅ Checkout action 正确');
      } else {
        console.log('  ⚠️  Checkout action 版本可能需要更新');
      }
      
      if (workflow.includes('npm ci') || workflow.includes('npm install')) {
        console.log('  ✅ 依赖安装步骤存在');
      } else {
        console.log('  ❌ 缺少依赖安装步骤');
        hasErrors = true;
      }
      
      if (workflow.includes('npm run build')) {
        console.log('  ✅ 构建步骤存在');
      } else {
        console.log('  ❌ 缺少构建步骤');
        hasErrors = true;
      }
      
      if (workflow.includes('actions/deploy-pages')) {
        console.log('  ✅ 部署步骤存在');
      } else {
        console.log('  ❌ 缺少部署步骤');
        hasErrors = true;
      }
    } catch (error) {
      console.log('  ❌ 工作流文件读取失败');
      hasErrors = true;
    }
  } else {
    console.log('  ❌ GitHub Actions 工作流文件不存在');
    hasErrors = true;
  }
  console.log();
}

// 检查构建输出
function checkBuildOutput() {
  console.log('🏗️  检查构建配置:');
  
  try {
    const viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
    
    if (viteConfig.includes('outDir')) {
      console.log('  ✅ 输出目录已配置');
    } else {
      console.log('  ✅ 使用默认输出目录 (dist)');
    }
    
    if (fs.existsSync('dist')) {
      console.log('  ✅ dist 目录存在');
    } else {
      console.log('  ℹ️  dist 目录不存在（首次构建后会创建）');
    }
  } catch (error) {
    console.log('  ⚠️  构建配置检查失败');
  }
  console.log();
}

// 提供部署建议
function provideSuggestions() {
  console.log('💡 部署建议:');
  console.log('  1. 确保仓库是 Public（免费 GitHub Pages 要求）');
  console.log('  2. 在 GitHub 仓库设置中启用 Pages，选择 "GitHub Actions"');
  console.log('  3. 修改 vite.config.ts 中的 base 路径为您的仓库名');
  console.log('  4. 提交代码后，检查 Actions 标签页的部署状态');
  console.log('  5. 部署成功后，访问 https://your-username.github.io/repository-name/');
  console.log();
}

// 运行所有检查
function runAllChecks() {
  checkRequiredFiles();
  checkPackageJson();
  checkViteConfig();
  checkGitHubActions();
  checkBuildOutput();
  
  console.log('=' * 50);
  
  if (hasErrors) {
    console.log('❌ 发现配置问题，请修复后重新检查');
    console.log('📖 详细部署指南: README.md 或 DEPLOYMENT.md');
  } else {
    console.log('✅ 配置检查通过！项目已准备好部署到 GitHub Pages');
    console.log('🚀 下一步: 将代码推送到 GitHub 仓库');
  }
  
  console.log();
  provideSuggestions();
}

// 主函数
if (require.main === module) {
  runAllChecks();
}

module.exports = {
  checkRequiredFiles,
  checkPackageJson,
  checkViteConfig,
  checkGitHubActions,
  checkBuildOutput
};
