# 🚀 GitHub Pages 部署教程

## 快速部署到您的GitHub

### 📋 部署前准备

1. **确保您有GitHub账户**
2. **在本地安装Git**

### 🔧 部署步骤

#### 步骤1: 创建GitHub仓库

1. 登录GitHub，点击右上角 "+"
2. 选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `your-username.github.io` 或自定义名称
   - **Visibility**: Public（免费版需要公开）
   - ✅ 勾选 "Add a README file"
4. 点击 "Create repository"

#### 步骤2: 修改配置文件

**重要**: 修改 `vite.config.ts` 中的 `base` 路径：

```typescript
// 如果仓库名是 username.github.io
base: '/',

// 如果仓库名是其他名称（如 portfolio-website）
base: '/your-repository-name/',
```

#### 步骤3: 上传代码

1. **克隆您的仓库**：
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **复制项目文件**：
   - 将当前项目的所有文件复制到克隆的仓库目录中
   - 确保包含 `.github/workflows/deploy.yml` 文件

3. **提交并推送**：
   ```bash
   git add .
   git commit -m "🎉 Initial commit: Add portfolio website"
   git push origin main
   ```

#### 步骤4: 配置GitHub Pages

1. 在GitHub仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. **Source** 选择 "GitHub Actions"
4. 保存设置

#### 步骤5: 等待部署完成

1. 点击 "Actions" 标签查看部署进度
2. 等待绿色 ✅ 显示部署成功
3. 部署通常需要2-5分钟

### 🌐 访问您的网站

部署成功后访问：
- `https://your-username.github.io/` （如果仓库名是 username.github.io）
- `https://your-username.github.io/repository-name/` （其他仓库名）

### 🔄 更新网站

以后要更新网站，只需：
```bash
git add .
git commit -m "✨ Update website"
git push origin main
```

GitHub Actions会自动重新部署！

### ⚠️ 常见问题

**问题1: 404页面错误**
- 检查 `vite.config.ts` 中的 `base` 路径是否正确
- 确认GitHub Pages设置为 "GitHub Actions"

**问题2: 样式丢失**
- 确认 `base` 路径配置正确
- 清除浏览器缓存重试

**问题3: Actions失败**
- 查看 Actions 标签中的错误信息
- 确认所有依赖都在 `package.json` 中

### 🎯 自定义域名（可选）

如果您有自己的域名：

1. 在 `public/` 目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名服务商处配置DNS：
   - A记录指向GitHub Pages IP
   - 或CNAME记录指向 `your-username.github.io`

---

🎉 **恭喜！您的高级感个人展示网站现已成功部署到GitHub Pages！**

如有问题，请查看GitHub Actions的日志或联系技术支持。
