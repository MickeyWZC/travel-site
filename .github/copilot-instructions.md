# 旅游网站产品需求文档 (PRD)

## 项目概述

### 网站介绍
本项目旨在打造一个现代化的旅游目的地浏览和预订平台。网站采用响应式设计，为用户提供流畅的浏览体验和便捷的预订服务。通过直观的界面设计，用户可以轻松探索各类旅游目的地，并快速完成行程预订。

### 设计理念
- **配色方案**：以蓝色和绿色为主色调，营造清新、自然、可信赖的视觉体验
  - 蓝色代表天空与海洋，象征自由与探索
  - 绿色代表自然与生态，传递环保与健康的理念
- **响应式设计**：完美适配桌面端、平板端和移动端设备
- **图片资源**：所有图片均来自 Unsplash 和 Pexels，确保高质量视觉效果

---

## 技术栈

### 前端框架
- **Vue 3** - 采用 Composition API，提供更好的代码组织和类型推断
- **TypeScript** - 提供类型安全，提升代码质量和开发效率
- **Tailwind CSS** - 实用优先的 CSS 框架，快速构建响应式界面

### 构建工具
- **Vite** - 快速的开发服务器和构建工具

### 路由管理
- **Vue Router** - 官方路由管理器

### 状态管理
- **Pinia** - Vue 3 官方推荐的状态管理库

### 其他依赖
- **Axios** - HTTP 客户端（用于未来 API 集成）
- **VueUse** - Vue 组合式工具集
- **HeadlessUI** - 无样式 UI 组件库

---

## 页面功能详述

### 1. 主页 (Home Page)

#### 功能模块

##### 1.1 导航栏 (Navigation Bar)
- **Logo** - 网站品牌标识，点击返回首页
- **导航菜单**
  - 首页
  - 目的地
  - 关于我们
  - 联系方式
- **预订按钮** - 快速跳转到预订页面
- **响应式菜单** - 移动端显示汉堡菜单

##### 1.2 英雄区域 (Hero Section)
- **全屏背景图** - 来自 Unsplash/Pexels 的高质量旅游图片
- **标题和副标题** - 吸引用户的宣传语
- **CTA 按钮** - "开始探索"按钮，引导用户浏览目的地
- **搜索栏** - 快速搜索目的地功能

##### 1.3 热门目的地展示 (Popular Destinations)
- **卡片式布局** - 网格展示多个目的地
- **每个卡片包含**：
  - 目的地图片（Unsplash/Pexels）
  - 目的地名称
  - 简短描述
  - 价格区间
  - "查看详情"按钮
- **响应式网格**：
  - 桌面端：3-4 列
  - 平板端：2 列
  - 移动端：1 列

##### 1.4 特色服务 (Features Section)
- **服务亮点展示**
  - 专业导游服务
  - 精选住宿
  - 24/7 客服支持
  - 最优价格保证
- **图标 + 文字描述**

##### 1.5 用户评价 (Testimonials)
- **轮播展示客户评价**
- **每条评价包含**：
  - 用户头像
  - 用户姓名
  - 评分（星级）
  - 评价内容

##### 1.6 页脚 (Footer)
- **公司信息**
- **快速链接**
- **社交媒体图标**
- **版权信息**

---

### 2. 预订页面 (Booking Page)

#### 功能模块

##### 2.1 导航栏
- 与主页保持一致的导航栏设计

##### 2.2 预订表单 (Booking Form)
- **个人信息区域**
  - 姓名（必填）
  - 邮箱（必填，验证格式）
  - 电话号码（必填）
  - 国家/地区（下拉选择）

- **行程信息区域**
  - 目的地选择（下拉菜单）
  - 出发日期（日期选择器）
  - 返回日期（日期选择器）
  - 人数选择（成人/儿童）
  - 房间类型（单人房/双人房/套房）

- **特殊需求**
  - 文本域输入特殊要求

- **表单验证**
  - 实时验证输入
  - 错误提示信息
  - 必填项标识

##### 2.3 订单摘要 (Order Summary)
- **固定侧边栏**（桌面端）或折叠区域（移动端）
- **显示内容**：
  - 选择的目的地
  - 旅行日期
  - 总天数
  - 人数统计
  - 价格明细
  - 总价

##### 2.4 支付选项（预留）
- **支付方式选择**
  - 信用卡
  - 支付宝
  - 微信支付
- **安全提示**

##### 2.5 提交按钮
- **确认预订按钮**
- **加载状态显示**
- **成功/失败反馈**

##### 2.6 预订成功确认
- **模态框或跳转页面**
- **显示订单号**
- **确认邮件提示**
- **返回首页或查看订单按钮**

---

## 文件目录结构

```
travel-site/
├── public/                          # 静态资源
│   └── favicon.ico
├── src/
│   ├── assets/                      # 资源文件
│   │   ├── images/                  # 图片资源
│   │   └── styles/                  # 全局样式
│   │       └── main.css             # Tailwind CSS 入口
│   ├── components/                  # 公共组件
│   │   ├── common/                  # 通用组件
│   │   │   ├── Header.vue           # 导航栏
│   │   │   ├── Footer.vue           # 页脚
│   │   │   ├── Button.vue           # 按钮组件
│   │   │   └── Loading.vue          # 加载组件
│   │   ├── home/                    # 主页组件
│   │   │   ├── HeroSection.vue      # 英雄区域
│   │   │   ├── DestinationCard.vue  # 目的地卡片
│   │   │   ├── DestinationGrid.vue  # 目的地网格
│   │   │   ├── FeaturesSection.vue  # 特色服务
│   │   │   └── Testimonials.vue     # 用户评价
│   │   └── booking/                 # 预订页组件
│   │       ├── BookingForm.vue      # 预订表单
│   │       ├── OrderSummary.vue     # 订单摘要
│   │       ├── FormInput.vue        # 表单输入组件
│   │       └── SuccessModal.vue     # 成功确认弹窗
│   ├── views/                       # 页面视图
│   │   ├── Home.vue                 # 主页
│   │   └── Booking.vue              # 预订页
│   ├── router/                      # 路由配置
│   │   └── index.ts                 # 路由定义
│   ├── store/                       # 状态管理
│   │   ├── index.ts                 # Pinia 配置
│   │   ├── booking.ts               # 预订状态
│   │   └── destinations.ts          # 目的地数据
│   ├── types/                       # TypeScript 类型定义
│   │   ├── destination.ts           # 目的地类型
│   │   ├── booking.ts               # 预订类型
│   │   └── common.ts                # 通用类型
│   ├── utils/                       # 工具函数
│   │   ├── validation.ts            # 表单验证
│   │   ├── formatters.ts            # 格式化函数
│   │   └── constants.ts             # 常量定义
│   ├── api/                         # API 接口（预留）
│   │   ├── destinations.ts          # 目的地 API
│   │   └── booking.ts               # 预订 API
│   ├── App.vue                      # 根组件
│   └── main.ts                      # 应用入口
├── .gitignore                       # Git 忽略文件
├── index.html                       # HTML 入口
├── package.json                     # 项目依赖
├── tsconfig.json                    # TypeScript 配置
├── vite.config.ts                   # Vite 配置
├── tailwind.config.js               # Tailwind CSS 配置
├── postcss.config.js                # PostCSS 配置
├── README.md                        # 项目说明
└── PRD.md                           # 产品需求文档（本文件）
```

---

## 响应式断点设计

基于 Tailwind CSS 默认断点：

| 设备类型 | 断点 | 设计要点 |
|---------|------|---------|
| Mobile | < 640px | 单列布局，汉堡菜单，简化表单 |
| Tablet | 640px - 1024px | 双列布局，优化触控交互 |
| Desktop | > 1024px | 多列布局，悬停效果，侧边栏 |

---

## UI/UX 设计规范

### 配色方案
```css
主色调：
- Primary Blue: #3B82F6 (蓝色-500)
- Primary Green: #10B981 (绿色-500)
- Deep Blue: #1E40AF (蓝色-800)
- Light Green: #34D399 (绿色-400)

辅助色：
- Background: #F0F9FF (蓝色-50)
- Text Primary: #1F2937 (灰色-800)
- Text Secondary: #6B7280 (灰色-500)
- Border: #E5E7EB (灰色-200)
- White: #FFFFFF
```

### 字体规范
- **标题**: font-bold, text-3xl/4xl/5xl
- **副标题**: font-semibold, text-xl/2xl
- **正文**: font-normal, text-base
- **小字**: text-sm

### 间距规范
- **组件间距**: space-y-8, space-y-12
- **内边距**: p-4, p-6, p-8
- **外边距**: m-4, m-6, m-8

---

## 图片资源规划

### Unsplash 推荐关键词
- Tropical beach
- Mountain landscape
- City skyline
- Adventure travel
- Cultural landmarks
- Nature scenery

### Pexels 推荐关键词
- Travel destination
- Tourist attraction
- Vacation spot
- Exotic location
- Scenic view

### 图片规格建议
- **英雄区域**: 1920x1080px
- **目的地卡片**: 800x600px
- **特色图标**: 64x64px
- **用户头像**: 80x80px

---

## 开发阶段规划

### Phase 1: 项目初始化
- [ ] 创建 Vite + Vue 3 + TypeScript 项目
- [ ] 配置 Tailwind CSS
- [ ] 配置 Vue Router 和 Pinia
- [ ] 设置项目目录结构

### Phase 2: 主页开发
- [ ] 开发公共组件（Header, Footer）
- [ ] 开发英雄区域
- [ ] 开发目的地展示模块
- [ ] 开发特色服务模块
- [ ] 开发用户评价模块

### Phase 3: 预订页开发
- [ ] 开发预订表单组件
- [ ] 实现表单验证逻辑
- [ ] 开发订单摘要组件
- [ ] 实现预订流程

### Phase 4: 优化与测试
- [ ] 响应式适配测试
- [ ] 浏览器兼容性测试
- [ ] 性能优化
- [ ] 无障碍访问优化

---

## 未来扩展功能

- [ ] 用户登录/注册系统
- [ ] 个人中心和订单管理
- [ ] 目的地详情页
- [ ] 在线客服聊天
- [ ] 多语言支持
- [ ] 博客/旅游攻略板块
- [ ] 社交分享功能
- [ ] 积分和优惠券系统

---

## 性能指标目标

- **首屏加载时间**: < 2s
- **Lighthouse 评分**: > 90
- **响应式适配**: 完美支持主流设备
- **浏览器支持**: Chrome, Firefox, Safari, Edge (最新两个版本)

---

**文档版本**: v1.0  
**创建日期**: 2025-10-16  
**最后更新**: 2025-10-16

