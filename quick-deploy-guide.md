# 🚀 一键部署到GitHub Pages指南

## 🎯 最简单的部署方法

### 方法一：使用GitHub Web界面（推荐新手）

1. **Fork项目**
   - 访问项目页面，点击右上角 "Fork" 按钮
   - 在您的账户下创建项目副本

2. **修改配置**
   - 在Fork的仓库中，编辑 `vite.config.ts` 文件
   - 将 `base: '/portfolio-website/'` 改为 `base: '/您的仓库名/'`
   - 如果仓库名是 `username.github.io`，则改为 `base: '/'`

3. **启用GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 保存设置

4. **等待部署**
   - 查看 Actions 标签，等待绿色✅
   - 访问 `https://your-username.github.io/repository-name/`

### 方法二：本地Git操作（适合有经验用户）

```bash
# 1. 克隆您的仓库
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

# 2. 复制项目文件到仓库目录
# （将aceternity-portfolio目录下的所有文件复制过来）

# 3. 修改vite.config.ts中的base路径

# 4. 提交并推送
git add .
git commit -m "🎉 Deploy portfolio website"
git push origin main
```

## ⚙️ 重要配置项

### 必须修改的文件

**1. vite.config.ts**
```typescript
export default defineConfig({
  // 根据您的仓库名修改
  base: '/your-repository-name/', // 或者 '/' 如果是 username.github.io
})
```

**2. 确认文件结构**
```
your-repository/
├── .github/workflows/deploy.yml  ✅ 必须有
├── src/                          ✅ 必须有
├── public/                       ✅ 必须有
├── package.json                  ✅ 必须有
├── vite.config.ts                ✅ 必须有
└── README.md
```

## 🔍 部署检查清单

- [ ] GitHub仓库已创建
- [ ] 项目文件已上传
- [ ] `vite.config.ts` 中的 `base` 路径正确
- [ ] `.github/workflows/deploy.yml` 文件存在
- [ ] GitHub Pages 设置为 "GitHub Actions"
- [ ] Actions 工作流运行成功（绿色✅）

## 🌐 访问地址规则

| 仓库名类型 | 访问地址 |
|-----------|----------|
| `username.github.io` | `https://username.github.io/` |
| `portfolio-website` | `https://username.github.io/portfolio-website/` |
| `my-blog` | `https://username.github.io/my-blog/` |

## ⚠️ 常见问题快速解决

### 问题1: 404页面
**解决方法**: 
- 检查 `base` 路径是否与仓库名匹配
- 确认 GitHub Pages 设置正确

### 问题2: 样式丢失
**解决方法**:
- 确认 `base` 路径配置正确
- 强制刷新浏览器（Ctrl+F5）

### 问题3: Actions失败
**解决方法**:
- 查看 Actions 标签中的错误日志
- 确认所有文件都正确上传

## 🎊 部署成功后

1. **网站访问正常** ✅
2. **所有功能工作** ✅
3. **更新方式**: 直接 git push 即可自动重新部署
4. **自定义域名**: 可选配置自己的域名

---

## 📞 需要帮助？

如果部署过程中遇到问题：
1. 检查 Actions 标签中的错误信息
2. 确认所有配置文件正确
3. 查看详细的 [DEPLOYMENT.md](./DEPLOYMENT.md) 文档

**🎉 预祝部署成功！享受您的个人展示网站！**
