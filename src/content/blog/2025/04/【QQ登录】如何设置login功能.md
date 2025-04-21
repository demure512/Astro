---
title: "【QQ登录】如何设置login功能"
categories: Daily
tags: ['QQ登录']
id: "b816e4445e583b72"
date: 2024-10-21 23:32:21
cover: https://wp-cdn.4ce.cn/v2/Sidcz75.png
---

:::note
 QQ 登录功能
:::

# 如何为博客添加QQ登录功能

在我们的博客中，现在已经支持QQ登录功能，这使得访客可以通过QQ账号快速登录，并在留言板上发表评论，同时自动同步QQ头像。本教程将详细介绍如何设置这一功能。

## 1. 申请QQ互联应用

首先，您需要在QQ互联平台申请一个应用：

1. 访问 [QQ互联平台](https://connect.qq.com/)
2. 注册并登录您的开发者账号
3. 点击"应用管理" > "创建应用"
4. 填写应用信息，包括：
   - 应用名称（例如：您的博客名称）
   - 应用简介
   - 应用网站（您的博客URL）
   - 回调地址（您的Waline服务地址 + `/oauth/callback/qq`）
5. 创建完成后，您将获得 **App ID** 和 **App Key**

## 2. 配置Waline服务

要使QQ登录功能生效，您需要部署Waline服务并进行相关配置：

1. 如果您还没有部署Waline服务，请参考 [Waline官方文档](https://waline.js.org/guide/get-started.html) 进行部署
2. 部署时，需要设置以下环境变量：
   - `SECURE_DOMAINS`：您的博客域名
   - `QQ_ID`：QQ互联中获取的App ID
   - `QQ_SECRET`：QQ互联中获取的App Key

## 3. 配置博客配置文件

在您的博客配置文件 `src/config.ts` 中，需要填写以下信息：

```js
// 评论组件（只允许同时开启一个）
Comment: {
  // Waline 评论
  Waline: {
    enable: true,
    serverURL: 'https://您的Waline服务地址',
    // QQ登录配置
    login: 'enable',
    // QQ应用ID，需在QQ互联平台申请：https://connect.qq.com
    QQ: {
      appId: '您的QQ App ID',
      appKey: '您的QQ App Key'
    }
  }
}
```

## 4. 验证功能是否生效

完成上述配置后，访问您的博客留言板页面，应该可以看到登录按钮。点击登录，选择QQ登录方式，授权后即可使用QQ账号进行评论，您的QQ头像也会自动同步。

## 常见问题

### 1. 登录失败

- 检查QQ互联中的回调地址是否正确设置
- 确认`QQ_ID`和`QQ_SECRET`环境变量已正确配置
- 查看Waline服务的日志以获取更详细的错误信息

### 2. 无法同步头像

- 确保您已授权QQ互联获取用户信息权限
- Waline服务可能需要缓存清理

### 3. 安全提示

- 请不要在前端暴露您的App Key
- 定期检查QQ互联控制台中的应用调用情况

---

通过以上步骤，您的博客现在应该已经成功集成了QQ登录功能，让访客能够更便捷地参与到您的博客互动中来，并且通过同步QQ头像，让评论区更加生动有趣！ 