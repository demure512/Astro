---
title: "UniApp Note"
categories: Tech
tags: ['UniApp','note']
id: "42ff9be78822acce"
date: 2025-05-01 01:33:17
cover: "https://wp-cdn.4ce.cn/v2/wvYDM6S.png"
---

:::note{type='success'}
UniApp技术笔记
:::


# UniApp框架
![屏幕截图 2025-05-01 013500.png](https://wp-cdn.4ce.cn/v2/0SJW6ko.png)

## 生命周期

UniApp中存在三类生命周期：

### 应用生命周期
- **onLaunch**: 应用初始化完成时触发(全局只触发一次)
- **onShow**: 应用启动或从后台进入前台显示时触发
- **onHide**: 应用从前台进入后台时触发

### 页面生命周期
- **onLoad**: 页面加载时触发，参数为上个页面传递的数据
- **onShow**: 页面显示/切入前台时触发
- **onReady**: 页面初次渲染完成时触发
- **onHide**: 页面隐藏/切入后台时触发
- **onUnload**: 页面卸载时触发
- **onReachBottom**: 页面滚动到底部时触发(可在pages.json中配置触发距离)
- **onPullDownRefresh**: 用户下拉刷新时触发
- **onPageScroll**: 监听页面滚动事件
- **onBackPress**: 页面返回事件(可阻止默认返回行为)
- **onTabItemTap**: 点击底部tab时触发

### 组件生命周期
- **beforeCreate**: 实例初始化前调用
- **created**: 实例创建完成后调用
- **beforeMount**: 挂载开始前调用
- **mounted**: 挂载到实例后调用
- **beforeUpdate**: 数据更新前调用(仅H5支持)
- **updated**: 数据更新后调用(仅H5支持)
- **beforeDestroy**: 实例销毁前调用
- **destroyed**: 实例销毁后调用

## 页面加载时序
1. 根据pages.json配置创建页面，原生导航栏最先显示
2. 创建静态DOM元素
3. 触发onLoad(此时页面未显示)
4. 页面转场动画开始
5. 页面触发onReady(DOM树可用)
6. 转场动画结束

## 组件化开发

UniApp支持两种组件注册方式：

### 全局组件注册
在main.js中使用Vue.component注册全局组件：
```js
import PageHead from './components/page-head.vue'
Vue.component('page-head', PageHead)
```

### easycom组件规范
无需引用和注册，按需自动引入组件：
- 组件放在components目录
- 符合`components/组件名称/组件名称.vue`格式
- 可在pages.json的easycom节点进行个性化设置

## 路由系统

UniApp的路由由框架统一管理，基于pages.json配置，不支持vue-router。

### 路由方法
- **uni.navigateTo**: 保留当前页面，跳转到应用内的非tabBar页面
- **uni.redirectTo**: 关闭当前页面，跳转到应用内的非tabBar页面
- **uni.reLaunch**: 关闭所有页面，打开到应用内的页面
- **uni.switchTab**: 跳转到tabBar页面，并关闭其他非tabBar页面
- **uni.navigateBack**: 关闭当前页面，返回上一页面或多级页面

### 页面间通信
- **URL参数传递**: 通过路由URL传递参数：`?id=1&name=uniapp`
- **EventChannel**: 提供页面间的事件通信机制：
  ```js
  // 发送页面
  uni.navigateTo({
    url: '/pages/test',
    events: {
      // 接收被打开页面数据
      acceptData: function(data) {
        console.log(data)
      }
    },
    success: function(res) {
      // 向被打开页面发送数据
      res.eventChannel.emit('sendData', { data: 'hello' })
    }
  })
  
  // 接收页面
  onLoad: function() {
    const eventChannel = this.getOpenerEventChannel()
    // 向打开页发送数据
    eventChannel.emit('acceptData', { data: 'world' })
    // 接收打开页数据
    eventChannel.on('sendData', function(data) {
      console.log(data)
    })
  }
  ```
- **全局事件通信**:
  ```js
  // 发送事件
  uni.$emit('update', { msg: '数据更新' })
  
  // 监听事件
  uni.$on('update', function(data) {
    console.log(data.msg)
  })
  
  // 取消监听
  uni.$off('update')
  ```

## 开发注意事项

1. 页面跳转有层级限制，不能无限跳转新页面
2. 跳转到tabBar页面只能使用switchTab
3. 路由加载时序会影响性能，在onLoad中联网获取数据更高效
4. 组件生命周期与页面生命周期不同，注意区分使用场景
5. 在tabBar页面互相切换时，会触发各自的onShow和onHide
6. 路由API的目标页面必须在pages.json中注册
7. 页面销毁时要清理定时器等资源，避免内存泄漏

通过合理利用UniApp的生命周期、组件化和路由系统，可以构建高效、流畅的跨平台应用。
