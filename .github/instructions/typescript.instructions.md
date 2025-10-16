---
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript 编码规范

本文档定义了旅游网站项目中 TypeScript 代码的编写标准和最佳实践。

## 目录
- [命名规范](#命名规范)
- [类型定义](#类型定义)
- [函数和方法](#函数和方法)
- [Vue 3 组合式 API](#vue-3-组合式-api)
- [接口和类型别名](#接口和类型别名)
- [枚举](#枚举)
- [导入导出](#导入导出)
- [注释规范](#注释规范)
- [最佳实践](#最佳实践)

---

## 命名规范

### 变量和函数
- 使用 **camelCase** 驼峰命名法
- 使用有意义的描述性名称
- 布尔值变量使用 `is`、`has`、`should` 等前缀

```typescript
// ✅ 推荐
const userName = 'John';
const isActive = true;
const hasPermission = false;
const shouldUpdate = true;

function getUserData() { }
function handleSubmit() { }

// ❌ 不推荐
const user_name = 'John';
const active = true;
const x = false;
```

### 常量
- 使用 **UPPER_SNAKE_CASE** 全大写下划线命名
- 对于配置常量和枚举值

```typescript
// ✅ 推荐
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
const DEFAULT_PAGE_SIZE = 10;

export const ROOM_TYPES = [
  { value: 'single', label: '单人房' },
  { value: 'double', label: '双人房' },
];
```

### 接口和类型
- **接口（Interface）** 使用 **PascalCase** 帕斯卡命名法
- **类型别名（Type）** 使用 **PascalCase** 帕斯卡命名法
- 不使用 `I` 前缀

```typescript
// ✅ 推荐
interface User {
  id: string;
  name: string;
}

type UserRole = 'admin' | 'user' | 'guest';

interface BookingFormData {
  name: string;
  email: string;
}

// ❌ 不推荐
interface IUser { }
interface user { }
type userRole = string;
```

### 类和组件
- 使用 **PascalCase** 帕斯卡命名法

```typescript
// ✅ 推荐
class UserService { }
class BookingManager { }

// Vue 组件
// Header.vue
// DestinationCard.vue
// BookingForm.vue
```

### 文件命名
- **组件文件**: PascalCase (`Header.vue`, `BookingForm.vue`)
- **工具函数文件**: camelCase (`validation.ts`, `formatters.ts`)
- **类型定义文件**: camelCase (`destination.ts`, `booking.ts`)
- **Store 文件**: camelCase (`destinations.ts`, `booking.ts`)

---

## 类型定义

### 明确的类型注解
- 始终为函数参数和返回值添加类型
- 对于复杂对象，使用接口或类型别名

```typescript
// ✅ 推荐
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

const getUserById = (id: string): Promise<User> => {
  return api.get(`/users/${id}`);
};

// ❌ 不推荐
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

### 避免使用 any
- 尽量避免使用 `any` 类型
- 使用 `unknown` 代替 `any`（如果类型确实未知）
- 使用泛型或联合类型

```typescript
// ✅ 推荐
function processData<T>(data: T): T {
  return data;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: unknown) {
  if (isSuccessResponse(response)) {
    // 类型守卫
  }
}

// ❌ 不推荐
function processData(data: any): any {
  return data;
}
```

### 使用类型守卫
- 使用自定义类型守卫进行运行时类型检查

```typescript
// ✅ 推荐
interface Destination {
  id: string;
  name: string;
}

function isDestination(obj: unknown): obj is Destination {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}
```

---

## 函数和方法

### 函数签名
- 明确定义参数类型和返回类型
- 使用可选参数和默认参数

```typescript
// ✅ 推荐
function formatPrice(
  price: number,
  currency: string = 'CNY',
  decimals?: number
): string {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals ?? 2,
  }).format(price);
}

// 使用接口定义复杂参数
interface SearchOptions {
  query: string;
  limit?: number;
  offset?: number;
}

function searchDestinations(options: SearchOptions): Destination[] {
  // ...
}
```

### 箭头函数 vs 普通函数
- 优先使用箭头函数，除非需要 `this` 绑定
- 工具函数使用箭头函数

```typescript
// ✅ 推荐
const add = (a: number, b: number): number => a + b;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 需要 this 时使用普通函数
class Calculator {
  value = 0;
  
  increment(): void {
    this.value++;
  }
}
```

### 异步函数
- 始终使用 `async/await` 代替 Promise 链
- 明确定义返回的 Promise 类型

```typescript
// ✅ 推荐
async function fetchDestinations(): Promise<Destination[]> {
  try {
    const response = await api.get<Destination[]>('/destinations');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch destinations:', error);
    throw error;
  }
}

// ❌ 不推荐
function fetchDestinations() {
  return api.get('/destinations')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
}
```

---

## Vue 3 组合式 API

### Setup 函数
- 使用 `<script setup>` 语法糖
- 明确定义 Props 和 Emits 类型

```typescript
// ✅ 推荐
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Destination } from '@/types/destination';

interface Props {
  destination: Destination;
  showDetails?: boolean;
}

interface Emits {
  select: [id: string];
  update: [destination: Destination];
}

const props = withDefaults(defineProps<Props>(), {
  showDetails: false,
});

const emit = defineEmits<Emits>();

const isSelected = ref(false);
const displayName = computed(() => props.destination.name.toUpperCase());

const handleClick = (): void => {
  emit('select', props.destination.id);
};
</script>
```

### Composables
- 将可复用逻辑提取到 composables
- 使用 `use` 前缀命名

```typescript
// ✅ 推荐
// useBooking.ts
import { ref, computed } from 'vue';
import type { BookingFormData } from '@/types/booking';

export function useBooking() {
  const formData = ref<BookingFormData>({
    name: '',
    email: '',
    // ...
  });

  const isValid = computed(() => {
    return formData.value.name !== '' && formData.value.email !== '';
  });

  const submitBooking = async (): Promise<void> => {
    // 提交逻辑
  };

  return {
    formData,
    isValid,
    submitBooking,
  };
}
```

### Ref 类型定义
- 明确定义 ref 的类型

```typescript
// ✅ 推荐
import { ref, Ref } from 'vue';

const count = ref<number>(0);
const user = ref<User | null>(null);
const destinations = ref<Destination[]>([]);

// 对于复杂类型
interface FormState {
  name: string;
  email: string;
}

const formState: Ref<FormState> = ref({
  name: '',
  email: '',
});
```

---

## 接口和类型别名

### 接口 Interface
- 用于定义对象的形状
- 可以被扩展和实现

```typescript
// ✅ 推荐
interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
}

interface PopularDestination extends Destination {
  featured: boolean;
  views: number;
}

// 可选属性
interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

// 只读属性
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}
```

### 类型别名 Type
- 用于联合类型、交叉类型、基本类型别名
- 更灵活但不能被扩展

```typescript
// ✅ 推荐
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

// 交叉类型
type UserWithPermissions = User & {
  permissions: string[];
  role: UserRole;
};

// 函数类型
type ValidationFunction = (value: string) => boolean;
type EventHandler = (event: Event) => void;
```

### 选择 Interface vs Type
- 优先使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型、交叉类型、函数类型

```typescript
// ✅ 推荐
interface User {
  id: string;
  name: string;
}

type UserRole = 'admin' | 'user' | 'guest';
type Callback = () => void;
```

---

## 枚举

### 优先使用联合类型
- 在大多数情况下，使用字符串字面量联合类型代替枚举

```typescript
// ✅ 推荐
type RoomType = 'single' | 'double' | 'suite';
type PaymentMethod = 'card' | 'alipay' | 'wechat';

// 配合对象使用
const ROOM_TYPES = {
  SINGLE: 'single',
  DOUBLE: 'double',
  SUITE: 'suite',
} as const;

type RoomType = typeof ROOM_TYPES[keyof typeof ROOM_TYPES];
```

### 使用枚举的场景
- 需要数值枚举时
- 需要反向映射时

```typescript
// ✅ 适当使用枚举
enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
```

---

## 导入导出

### 导入顺序
- 按照以下顺序组织导入：
  1. Vue 核心库
  2. 第三方库
  3. 项目内部模块（使用别名）
  4. 相对路径导入
  5. 类型导入（使用 `import type`）

```typescript
// ✅ 推荐
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import { useBookingStore } from '@/store/booking';
import { formatPrice } from '@/utils/formatters';
import Header from '@/components/common/Header.vue';

import type { Destination } from '@/types/destination';
import type { User } from '@/types/user';
```

### 命名导出 vs 默认导出
- 工具函数和类型定义使用命名导出
- Vue 组件使用默认导出

```typescript
// utils/validation.ts - 命名导出
export const validateEmail = (email: string): boolean => { };
export const validatePhone = (phone: string): boolean => { };

// types/destination.ts - 命名导出
export interface Destination { }
export type DestinationCategory = 'beach' | 'mountain' | 'city';

// Header.vue - 默认导出
export default defineComponent({
  name: 'Header',
});

// 或使用 <script setup>（自动默认导出）
```

### 使用路径别名
- 使用 `@` 别名代替相对路径

```typescript
// ✅ 推荐
import { useBookingStore } from '@/store/booking';
import type { Destination } from '@/types/destination';

// ❌ 不推荐
import { useBookingStore } from '../../../store/booking';
import type { Destination } from '../../../types/destination';
```

---

## 注释规范

### JSDoc 注释
- 为公共 API 添加 JSDoc 注释
- 包含参数说明、返回值、示例

```typescript
/**
 * 计算两个日期之间的天数
 * @param startDate - 开始日期（ISO 格式字符串）
 * @param endDate - 结束日期（ISO 格式字符串）
 * @returns 两个日期之间的天数
 * @example
 * calculateDays('2025-01-01', '2025-01-10') // 返回 9
 */
export const calculateDays = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * 验证邮箱格式是否有效
 * @param email - 待验证的邮箱地址
 * @returns 如果邮箱格式有效返回 true，否则返回 false
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

### 代码注释
- 解释"为什么"而不是"是什么"
- 复杂逻辑添加注释
- 使用中文注释（本项目规范）

```typescript
// ✅ 推荐
// 由于 API 返回的日期格式不一致，需要统一转换
const normalizedDate = convertToISODate(apiDate);

// 防止快速连续点击导致重复提交
const isSubmitting = ref(false);

// ❌ 不推荐
// 设置 count 为 0
const count = 0;
```

---

## 最佳实践

### 1. 使用严格的 TypeScript 配置

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true
  }
}
```

### 2. 避免类型断言
- 尽量通过类型守卫和类型推断
- 仅在确实必要时使用类型断言

```typescript
// ✅ 推荐
if (isDestination(data)) {
  console.log(data.name); // TypeScript 知道这是 Destination
}

// ⚠️ 谨慎使用
const element = document.getElementById('app') as HTMLDivElement;

// ❌ 避免
const data = response as any;
```

### 3. 使用工具类型
- 充分利用 TypeScript 内置工具类型

```typescript
// Partial - 将所有属性变为可选
type PartialDestination = Partial<Destination>;

// Pick - 选择特定属性
type DestinationPreview = Pick<Destination, 'id' | 'name' | 'image'>;

// Omit - 排除特定属性
type DestinationWithoutPrice = Omit<Destination, 'price'>;

// Required - 将所有属性变为必填
type RequiredBooking = Required<BookingFormData>;

// Readonly - 将所有属性变为只读
type ReadonlyDestination = Readonly<Destination>;

// Record - 创建键值对类型
type DestinationMap = Record<string, Destination>;
```

### 4. 泛型的使用
- 创建可复用的类型安全组件

```typescript
// API 响应包装器
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await axios.get<ApiResponse<T>>(url);
  return response.data;
}

// 使用
const destinations = await fetchData<Destination[]>('/api/destinations');
```

### 5. 空值处理
- 使用可选链和空值合并运算符

```typescript
// ✅ 推荐
const userName = user?.profile?.name ?? 'Guest';
const price = destination?.price ?? 0;

// 可选链调用
user?.notify?.('New message');

// ❌ 不推荐
const userName = user && user.profile && user.profile.name || 'Guest';
```

### 6. 类型安全的数组操作

```typescript
// ✅ 推荐
const destinations: Destination[] = [];

destinations.forEach((dest: Destination) => {
  console.log(dest.name);
});

const names = destinations.map((dest) => dest.name); // string[]
const cheapDestinations = destinations.filter((dest) => dest.price < 5000);
```

### 7. 错误处理
- 定义自定义错误类型
- 使用类型守卫处理错误

```typescript
class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

// 使用
try {
  await fetchData();
} catch (error) {
  if (isApiError(error)) {
    console.error(`API Error ${error.status}: ${error.message}`);
  } else {
    console.error('Unknown error:', error);
  }
}
```

### 8. 不可变数据
- 使用 `as const` 创建只读常量
- 使用 `Readonly` 类型

```typescript
// ✅ 推荐
const COUNTRIES = [
  '中国',
  '美国',
  '日本',
] as const;

type Country = typeof COUNTRIES[number];

const config: Readonly<Config> = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};
```

---

## 代码检查和格式化

### ESLint 配置
确保启用 TypeScript ESLint 规则：

```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
}
```

### 常用规则
- `@typescript-eslint/explicit-function-return-type` - 要求函数有明确返回类型
- `@typescript-eslint/no-explicit-any` - 禁止使用 any
- `@typescript-eslint/no-unused-vars` - 禁止未使用的变量
- `@typescript-eslint/strict-boolean-expressions` - 严格的布尔表达式

---

## 总结

遵循这些 TypeScript 编码规范将帮助我们：

✅ 提高代码质量和可维护性  
✅ 减少运行时错误  
✅ 改善开发体验（更好的 IDE 支持）  
✅ 促进团队协作  
✅ 使代码更易于重构  

记住：**类型安全是 TypeScript 的核心价值，充分利用类型系统的强大功能！**

---

**文档版本**: v1.0  
**最后更新**: 2025-10-16

