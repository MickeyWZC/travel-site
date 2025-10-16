# 旅游网站项目

一个现代化的旅游目的地浏览和预订平台，采用 Vue 3 + TypeScript + Tailwind CSS 构建。

## 功能特点

- ✨ 响应式设计，完美适配桌面端、平板端和移动端
- 🎨 蓝绿配色方案，清新自然的视觉体验
- 🖼️ 高质量图片来自 Unsplash 和 Pexels
- 📱 现代化的用户界面和流畅的交互体验
- 🔍 目的地浏览和搜索功能
- 📝 完整的预订流程和表单验证
- 💰 实时价格计算和订单摘要

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Vite** - 下一代前端构建工具
- **Vue Router** - 官方路由管理器
- **Pinia** - Vue 3 状态管理库

## 项目结构

```
travel-site/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # Vue 组件
│   │   ├── common/      # 公共组件
│   │   ├── home/        # 主页组件
│   │   └── booking/     # 预订页组件
│   ├── views/           # 页面视图
│   ├── router/          # 路由配置
│   ├── store/           # 状态管理
│   ├── types/           # TypeScript 类型定义
│   ├── utils/           # 工具函数
│   ├── App.vue          # 根组件
│   └── main.ts          # 应用入口
├── public/              # 公共静态资源
└── PRD.md              # 产品需求文档
```

## 开始使用

### 前置要求

- Node.js (v16 或更高版本)
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 页面说明

### 主页 (/)

- 英雄区域 - 全屏背景图和搜索功能
- 热门目的地展示 - 卡片式网格布局
- 特色服务 - 四大核心服务亮点
- 用户评价 - 轮播展示客户反馈

### 预订页面 (/booking)

- 个人信息表单 - 姓名、邮箱、电话、国家
- 行程信息表单 - 目的地、日期、人数、房间类型
- 订单摘要 - 实时显示价格和行程信息
- 表单验证 - 实时验证和错误提示
- 预订确认 - 成功提交后显示订单号

## 设计规范

### 配色方案

- Primary Blue: `#3B82F6`
- Primary Green: `#10B981`
- Deep Blue: `#1E40AF`
- Light Green: `#34D399`

### 响应式断点

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 开发计划

详细的开发计划和功能需求请参考 [PRD.md](./PRD.md)

## License

MIT License

## 联系方式

如有问题或建议，欢迎联系我们。

