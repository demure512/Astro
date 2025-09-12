# 🍥 Astro 主题 vhAstro-Theme

## 🚀 vhAstro-Theme：一款基于 Astro 构建的优雅的响应式博客主题

**「当极简主义遇上工程之美」**

在线演示 ➡️ [https://demure.pages.dev](https://demure.pages.dev)

## ✨ 功能特性

- [x] 简洁的响应式设计
- [x] 流畅的动画和页面过渡
- [x] 丝滑的阻尼滚动效果
- [x] 顶部Banner
- [x] 两列布局
- [x] 阅读时间
- [x] 字数统计
- [x] 代码块
- [x] 语法高亮
- [x] 图片懒加载
- [x] 图片灯箱
- [x] LivePhoto
- [x] LaTex 数学公式
- [x] 赞赏功能
- [x] 评论 - 内置【Twikoo、Waline】
- [x] 本地搜索
- [x] 公告
- [x] 标签
- [x] 分类
- [x] 归档
- [x] 动态
- [x] 关于
- [x] 留言板
- [x] 推荐文章
- [x] 置顶文章
- [x] 谷歌广告
- [x] 侧边栏选择性展示
- [x] 内置 404 页面
- [x] Sitemap 支持
- [x] RSS 支持
- [x] 活跃的社区支持
- [x] 广泛的现代框架兼容性
- [x] 高效的性能优化
- [x] 优秀的开发体验

## 🚀 使用方法

### 使用 Github 

- 进行本地开发，Clone 新的仓库，执行 `npm install` 以安装依赖
- 通过配置文件 `src/config.ts` 自定义博客
- 执行 npm newpost '文章标题' 创建新文章，并在 src/content/posts/ 目录中编辑
- 执行 npm newtalk '动态内容' 创建新动态，并在 src/content/page_data/ 中编辑
- 参考官方指南将博客部署至 Vercel, Netlify,Cloudflare Pages, GitHub Pages 等

### Vercel 自动部署

[![vhAstro-Theme](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/demure512/Astro)

### Cloudflare Pages 自动部署

[![vhAstro-Theme](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/workers-and-pages/create/deploy-to-workers&repository=https://github.com/demure512/Astro)


###标签管理
```自定义替换Code
&.vh-cat-Code {
                /* 默认渐变色起始 */
                --gradient-color-1: #f48600;
                /* 默认渐变色中间 */
                --gradient-color-2: #ffa12e;
                /* 默认渐变色结束 */
                --gradient-color-3: #ffe9c9;
              }
```


### 本地开发

```bash
# 安装依赖
npm install
# 本地开发
npm dev
# 构建静态文件
npm build
# 创建新文章
npm run newpost '文章标题'
# 创建新动态
npm run newtalk '动态内容'
```

### 说说动态

```js
// 配置文件 src/page_data/Talking.ts
export default {
	// API 接口请求优先，数据格式保持和 data 一致
	api: "",
	// api 为空则使用 data 静态数据
	// 注意：图片请用 vh-img-flex 类包裹
	data: [
    {
      "date": "2025-04-21 23:55:10",
      "tags": [
        "测试",
        "ES模块"
      ],
      "content": "测试一下新建的脚本~"
    },
    {
      "date": "2024-12-09 16:16:06",
      "tags": [
        "日常"
      ],
      "content": "记录第一条说说"
    }
  ]
};
```

## 📄 文章格式

```md
---
title: 标题
categories: 分类
tags:
  - 标签1
  - 标签2
id: 文章ID
date: 文章创建日期
updated: 文章更新日期
cover: "封面图URL (为空默认随机内置封面 /public/assets/images/banner)"
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
<!-- 页面独有 -->
type: "links" # 页面类型
comment: false # 关闭页面评论（默认开启）
---
```


## ✅ Lighthouse

![vhAstro-Theme-Lighthouse](https://uxiaohan.github.io/v2/2025/03/1742543844078.svg)

## 🌈 项目结构

```t
.
├── public              => 静态资源
├── script              => 命令
├── src
│   ├── components      => 组件
│   │   └── blog        => 博客文章数据
│   │   ├── layouts         => Layout 布局
│   │   ├── page_data       => 页面数据
│   │   ├── pages
│   │   │   ├── about                        => 关于页面
│   │   │   ├── archives                     => 归档页面
│   │   │   ├── article                      => 文章页面
│   │   │   ├── categories                   => 分类页面
│   │   │   ├── message                      => 留言页面
│   │   │   ├── tag                          => 标签页面
│   │   │   ├── talking                      => 动态页面
│   │   │   ├── [...page].astro              => 首页分页
│   │   │   ├── 404.astro                    => 404页面
│   │   │   ├── robots.txt.ts                => 爬虫文件
│   │   │   └── rss.xml.ts                   => RSS文件
│   │   ├── plugins             => 插件
│   │   ├── scripts             => 脚本
│   │   ├── styles              => 样式
│   │   ├── type                => 类型
│   │   ├── utils               => 工具
│   │   ├── content.config.ts   => 内容配置
│   │   ├── config.ts           => 配置
│   ├── tsconfig.json       => Typescript 配置
│   ├── astro.config.mjs    => Astro 配置
│   ├── package.json        => 依赖管理
│   └── pnpm-lock.yaml      => 依赖锁定文件
```

## ⚙️ 项目配置
```js
export default {
  Title: 'DEMURE✖️DEMURE',
  Site: 'https://demure.pages.dev',
  Subtitle: '高山仰止，景行行止。',
  Description: 'Demure博客 涵盖Vue框架、Node.js、Serverless等，并涉及Unity、JAVA、HTML、JavaScript、APP、Wechat小程序开发等领域。同时，博客也分享记录我的生活。',
  Author: '.Demure',
  Motto: '高山仰止，景行行止。.',
  Avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/76f5132dgy1hl3iw85zwbj215o2i5kjo.webp',
  // 网站创建时间
  CreateTime: '2024-06-29',
  // 首页打字机文案列表
  TypeWriteList: [
    '高山仰止，景行行止。',
    "Make the future I want.",
  ],
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    cover: '/assets/images/home-banner.webp'
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#eabfff",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '归档', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/uxiaohan', icon: 'WebSite_github' },
    { text: '每日热榜', link: 'https://hot.vvhan.com', icon: 'WebSite_hot' },
    { text: '骤雨重山图床', link: 'https://wp-cdn.4ce.cn', icon: 'WebSite_img' },
    { text: 'HanAnalytics', link: 'https://analytics.vvhan.com', icon: 'WebSite_analytics' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示个人标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: ''
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: ''
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.vvhan.com', siteId: 'Hello-HanHexoBlog' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-xxxxxxxxxx',
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '/assets/images/alipay.webp',
    // 微信收款码
    WeChat: '/assets/images/wechat.webp'
  }
}
```