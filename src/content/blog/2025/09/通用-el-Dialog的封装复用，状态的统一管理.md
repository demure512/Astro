---
title: "通用-el-Dialog的封装复用，状态的统一管理"
categories: Code
tags: ["Dialog", "通用组件"]
id: "aae2df7ec1772be4"
date: 2025-09-12 18:18:25
cover: "封面图URL (为空默认随机内置封面 /public/assets/images/banner)"
---

:::note
在实际开发的时候，总会避免不了使用 el 的组件库里面的各种组件，尤其是很多表格图标都涉及到了 loading 和打开关闭状态。于是有了以下是封装的对话框状态，包括加载、打开、关闭、异步加载。
:::

### 对话框管理 Composable

#### 统一管理对话框的显示、隐藏和加载状态

```ts
import { ref } from "vue";

/**
 * 对话框管理 Composable
 * 统一管理对话框的显示、隐藏和加载状态
 */
export function useDialog() {
  const dialogVisible = ref(false);
  const loading = ref(false);

  /**
   * 打开对话框
   */
  const openDialog = () => {
    dialogVisible.value = true;
  };

  /**
   * 关闭对话框
   */
  const closeDialog = () => {
    dialogVisible.value = false;
    loading.value = false;
  };

  /**
   * 设置加载状态
   */
  const setLoading = (state: boolean) => {
    loading.value = state;
  };

  /**
   * 带加载状态的异步操作包装器
   */
  const withLoading = async <T>(asyncFn: () => Promise<T>): Promise<T> => {
    loading.value = true;
    try {
      return await asyncFn();
    } finally {
      loading.value = false;
    }
  };

  return {
    dialogVisible,
    loading,
    openDialog,
    closeDialog,
    setLoading,
    withLoading,
  };
}
```
