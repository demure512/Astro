---
title: 【Waline】如何设置评论系统
date: 2025-01-11
categories: Daily
tags: 
  - Waline
  - 评论系统
  - 博客教程

id: cloudflare-ip-dnspod-ddns
cover: https://i.imgur.com/8ctkZR0.jpg
recommend: true
---

:::note{type="info"}
 Waline 设置评论系统
:::


# 如何设置Waline评论系统

 本博客使用 Waline 作为评论系统，这是一个简单而强大的无后端评论系统。 本教程将引导您完成Waline设置过程，让您的访客能够在您的博客上留言互动。

## 什么是Waline？

 Waline 是一个基于 Valine 衍生的简洁、安全的评论系统，支持 Markdown 、图片上传、表情等功能，并且可以完全免费部署在 Vercel 等平台上。

## 部署步骤

###  1. 部署Waline服务端

1. 访问[Waline官方文档](https://waline.js.org/guide/get-started.html)
2. 点击"快速上手"中的"一键部署"按钮，跳转到Vercel
3. 如果您没有Vercel账号，可以使用GitHub账号登录
4. 填写项目名称，然后点击"Deploy"
5. 部署完成后，您将获得一个Waline服务地址，例如：`https://your-waline.vercel.app`

### 2. 配置数据存储

Waline支持多种数据库用于存储评论数据：

- **LeanCloud**（推荐）
- MongoDB
- MySQL/MariaDB
- SQLite
- PostgreSQL
- GitHub

以LeanCloud为例：

1. 注册并登录[LeanCloud国际版](https://leancloud.app/)
2. 创建一个应用
3. 在Vercel中，打开您刚刚部署的Waline项目
4. 进入"Settings" > "Environment Variables"
5. 添加以下环境变量：
   - `LEAN_ID`：LeanCloud应用的AppID
   - `LEAN_KEY`：LeanCloud应用的AppKey
   - `LEAN_MASTER_KEY`：LeanCloud应用的MasterKey

### 3. 配置博客

在您的博客配置文件 `src/config.ts` 中，找到Waline配置部分，填入您的Waline服务地址：

```js
Comment: {
  Waline: {
    enable: true,
    serverURL: 'https://your-waline.vercel.app', // 替换为您自己的Waline服务地址
  }
}
```

## 高级配置

### 自定义样式

Waline提供了丰富的CSS变量供你自定义评论区的样式。本博客已经预设了适合主题的样式，如果您想进一步自定义，可以编辑`src/components/Comment/Comment.less`文件。

### 评论管理

1. 访问您的Waline服务地址，例如：`https://your-waline.vercel.app/ui`
2. 首次使用需要注册一个账号
3. 注册后，您可以设置该账号为管理员，方法是在Vercel环境变量中添加：
   - `ADMIN_EMAIL`：您注册的邮箱地址

管理员可以进行评论置顶、审核、删除等操作。

## 常见问题

### 1. 评论不显示

- 检查serverURL是否正确配置
- 查看浏览器控制台是否有错误信息
- 确认Waline服务是否正常运行

### 2. 邮件通知不工作

Waline支持评论通知功能，需要配置额外的环境变量：

```
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
SITE_NAME=your-site-name
SITE_URL=https://your-site-url
```

### 3. 安全提示


- 定期备份您的评论数据
- 不要泄露您的数据库凭证
- 开启评论审核功能，防止垃圾评论

---

通过以上步骤，您应该已经成功设置了Waline评论系统。如果遇到问题，欢迎查阅[Waline官方文档](https://waline.js.org/)获取更详细的信息。 