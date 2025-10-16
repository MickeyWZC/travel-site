# 项目安装和启动指南

## 当前状态

✅ 项目文件已全部创建完成
❌ 系统中未检测到 Node.js 和 npm

## 安装步骤

### 1. 安装 Node.js

请访问 Node.js 官网下载并安装：
- 官网地址: https://nodejs.org/
- 推荐版本: LTS (长期支持版本)
- macOS 安装方式：
  - 方法一：从官网下载 .pkg 安装包
  - 方法二：使用 Homebrew: `brew install node`

### 2. 验证安装

安装完成后，打开终端运行以下命令验证：

```bash
node --version
npm --version
```

应该看到类似输出：
```
v18.x.x
9.x.x
```

### 3. 安装项目依赖

在项目目录下运行：

```bash
cd /Users/wangzc/Desktop/pupu/travel-site
npm install
```

这将安装所有必要的依赖包：
- vue (Vue 3 框架)
- vue-router (路由管理)
- pinia (状态管理)
- tailwindcss (CSS 框架)
- vite (构建工具)
- typescript (类型支持)
- 等等...

### 4. 启动开发服务器

依赖安装完成后，运行：

```bash
npm run dev
```

### 5. 访问网站

浏览器打开显示的地址，通常是：
```
http://localhost:5173
```

## 项目已创建的内容

### ✅ 配置文件
- package.json - 项目依赖配置
- vite.config.ts - Vite 构建配置
- tsconfig.json - TypeScript 配置
- tailwind.config.js - Tailwind CSS 配置
- postcss.config.js - PostCSS 配置

### ✅ 页面视图
- Home.vue - 主页
- Booking.vue - 预订页

### ✅ 公共组件
- Header.vue - 导航栏（响应式菜单）
- Footer.vue - 页脚
- Button.vue - 按钮组件
- Loading.vue - 加载组件

### ✅ 主页组件
- HeroSection.vue - 英雄区域（全屏背景图、搜索栏）
- DestinationCard.vue - 目的地卡片
- DestinationGrid.vue - 目的地网格展示
- FeaturesSection.vue - 特色服务展示
- Testimonials.vue - 用户评价轮播

### ✅ 预订页组件
- BookingForm.vue - 预订表单（含实时验证）
- OrderSummary.vue - 订单摘要（实时价格计算）
- FormInput.vue - 表单输入组件
- SuccessModal.vue - 预订成功弹窗

### ✅ 状态管理
- destinations.ts - 目的地数据管理（含6个预设目的地）
- booking.ts - 预订数据管理

### ✅ 工具函数
- validation.ts - 表单验证（邮箱、电话、日期等）
- formatters.ts - 数据格式化（价格、日期、天数计算）
- constants.ts - 常量定义

### ✅ 类型定义
- destination.ts - 目的地类型
- booking.ts - 预订类型
- common.ts - 通用类型

### ✅ 路由配置
- router/index.ts - 路由定义（主页和预订页）

### ✅ 样式文件
- assets/styles/main.css - Tailwind CSS 入口和全局样式

### ✅ 文档
- PRD.md - 完整的产品需求文档
- README.md - 项目说明文档

## 功能特性

### 主页功能
1. **响应式导航栏** - 桌面端横向菜单，移动端汉堡菜单
2. **英雄区域** - Unsplash 高质量背景图，搜索栏，CTA 按钮
3. **热门目的地** - 6个精选目的地卡片（马尔代夫、瑞士、京都、巴黎、新西兰、圣托里尼）
4. **特色服务** - 4个核心服务亮点展示
5. **用户评价** - 3条真实评价的轮播展示
6. **页脚** - 完整的公司信息、快速链接、联系方式

### 预订页功能
1. **个人信息表单** - 姓名、邮箱、电话、国家选择
2. **行程信息表单** - 目的地、日期、人数、房间类型
3. **实时表单验证** - 邮箱格式、电话格式、日期有效性
4. **订单摘要** - 实时显示选择的目的地、日期、人数和价格
5. **价格计算** - 自动计算成人和儿童（7折）的总价
6. **预订成功反馈** - 显示订单号和确认信息

## 响应式设计

- **移动端** (< 640px): 单列布局，汉堡菜单
- **平板端** (640px - 1024px): 双列布局
- **桌面端** (> 1024px): 多列布局，侧边栏

## 设计特色

- 🎨 蓝色和绿色主题配色
- 🖼️ 高质量 Unsplash 图片
- ✨ 平滑过渡动画和悬停效果
- 📱 完美的移动端适配
- 🚀 快速加载和优秀性能

## 下一步

1. 安装 Node.js
2. 运行 `npm install`
3. 运行 `npm run dev`
4. 在浏览器中访问并体验网站

祝您使用愉快！🎉

