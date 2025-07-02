# ✨ Aceternity Portfolio Website

一个现代化、高级感的个人展示网站，使用 Aceternity UI 组件库构建，集成了丰富的3D效果和动画交互功能。

## 🌟 功能特色

### 🎨 视觉效果
- **Aurora Background** - 动态极光渐变背景
- **3D Card Effect** - 鼠标悬停3D变换卡片
- **Moving Border** - 流动光效边框按钮
- **3D Animated Pin** - 3D动画特色按钮

### 📱 响应式布局
- **Floating Dock** - 浮动导航栏（社交媒体链接）
- **Timeline** - 个人历程时间线展示
- **GitHub Globe** - 全球足迹地图展示
- **File Upload** - 文件上传联系表单

### ⚡ 技术栈
- **React 18** + **TypeScript** - 现代化前端框架
- **Vite** - 快速构建工具
- **TailwindCSS** - 原子化CSS框架
- **Framer Motion** - 专业动画库
- **Three.js** - 3D渲染引擎

## 🚀 快速开始

### 本地开发

1. **安装依赖**：
   ```bash
   npm install
   ```

2. **启动开发服务器**：
   ```bash
   npm run dev
   ```

3. **构建生产版本**：
   ```bash
   npm run build
   ```

4. **预览构建结果**：
   ```bash
   npm run preview
   ```

## 🌐 部署到GitHub Pages

详细部署教程请查看：[DEPLOYMENT.md](./DEPLOYMENT.md)

### 快速部署步骤：

1. **Fork或下载此项目**
2. **修改 `vite.config.ts` 中的 `base` 路径**
3. **推送到您的GitHub仓库**
4. **在仓库设置中启用GitHub Pages**
5. **等待自动部署完成**

## 📁 项目结构

```
aceternity-portfolio/
├── src/
│   ├── components/
│   │   ├── aceternity/          # Aceternity UI组件
│   │   │   ├── aurora-background.tsx
│   │   │   ├── 3d-card.tsx
│   │   │   ├── floating-dock.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── github-globe.tsx
│   │   │   └── ...
│   │   └── ui/                  # 基础UI组件
│   ├── lib/                     # 工具函数
│   ├── hooks/                   # 自定义Hooks
│   └── App.tsx                  # 主应用文件
├── public/                      # 静态资源
├── .github/workflows/           # GitHub Actions配置
└── dist/                        # 构建输出目录
```

## 🎯 自定义配置

### 个人信息修改

在 `src/App.tsx` 中修改：
- 个人头像和基本信息
- 社交媒体链接
- 时间线数据
- 联系方式

### 样式定制

在 `tailwind.config.js` 中：
- 自定义颜色主题
- 调整动画效果
- 修改响应式断点

## 🛠️ 开发说明

### 组件说明

- **AuroraBackground**: 极光背景动画组件
- **ThreeDCard**: 3D卡片效果组件
- **FloatingDock**: 浮动导航栏组件
- **Timeline**: 时间线展示组件
- **GitHubGlobe**: 全球地图展示组件
- **FileUpload**: 文件上传组件
- **MovingBorder**: 动态边框按钮组件

### 依赖说明

主要依赖包：
- `framer-motion` - 动画库
- `three` + `@react-three/fiber` - 3D渲染
- `@tabler/icons-react` - 图标库
- `clsx` + `tailwind-merge` - 样式工具

## 📝 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**🎉 享受您的个人展示网站吧！**

如有问题，请查看部署文档或提交Issue。
