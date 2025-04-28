---
title: "Astro主题-优雅的vhAstro-Theme【使用文档】"
categories: Tutorial
tags: ["Astro", "主题", "博客", "vhAstro", "vhAstro-Theme"]
id: "astro-theme-vhastro-theme"
date: 2025-1-02 18:18:18
cover: "https://wp-cdn.4ce.cn/v2/glRPOSM.png"
recommend: true
---

:::note{type="success"}

🍇 Astro 活跃的社区支持、广泛的现代框架兼容性、高效的性能优化、优秀的开发体验以及原生 SEO 优化，支持 Markdown/MDX 编写内容，且允许开发者混合使用 React、Vue、Svelte 等主流框架的组件，是我心目中最适合构建博客这样的以内容驱动的网站的 Web 框架。

🍊 以 Astro 为基础开发的 vhAstro-Theme 主题模版，是一款优雅的响应式博客主题，它具有简洁的设计、流畅的动画和页面过渡。
:::

## 🚀 vhAstro-Theme：一款基于 Astro 构建的优雅的响应式博客主题

**「当极简主义遇上工程之美」**

![Astro主题 vhAstro-Theme](https://wp-cdn.4ce.cn/v2/YpK3qJc.jpeg)



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


### 标签管理
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
**添加日常** - 添加一条默认带"日常"标签的说说
```
npm run newtalk "这是我的新动态内容"
```

**带自定义标签** - 添加一条带有自定义标签的说说
```
npm run newtalk "今天去爬山了，风景真美" -- --tags=旅行,风景
```

**添加带图片的动态** - 使用HTML标签添加图片：
```
npm run newtalk "看看我今天拍的风景 <div class=\"vh-img-flex\"><img src=\"https://your-image-url.jpg\" alt=\"风景照片\"></div>"
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

**添加文章** - 添加标题文章
```
npm run newpost '添加文章标题'
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
│   │   └── layouts         => Layout 布局
│   │   └── page_data       => 页面数据
│   │   └── pages
│   │   │   ├── about                        => 关于页面
│   │   │   ├── archives                     => 归档页面
│   │   │   ├── article                      => 文章页面
│   │   │   ├── message                      => 留言页面
│   │   │   ├── talking                      => 动态页面
│   │   │   ├── [...page].astro              => 首页分页
│   │   │   ├── 404.astro                    => 404页面
│   │   │   ├── robots.txt.ts                => 爬虫文件
│   │   │   └── rss.xml.ts                   => RSS文件
│   │   └── plugins             => 插件
│   │   └── scripts             => 脚本
│   │   └── styles              => 样式
│   │   └── type                => 类型
│   │   └── utils               => 工具
│   │   └── content.config.ts   => 内容配置
│   │   └── config.ts           => 配置
│   ├── tsconfig.json       => Typescript 配置
│   ├── astro.config.mjs    => Astro 配置
│   └── package.json        => 依赖管理
└── pnpm-lock.yaml      => 依赖锁定文件
```


## 🌈 组件

### 文本加粗

```md
学习编程的路上 **永不止步** ，每天都有新收获
```

学习编程的路上 **永不止步** ，每天都有新收获

### 文本倾斜

```md
_静静地思考_ 往往能够找到解决问题的最佳方案
```

_静静地思考_ 往往能够找到解决问题的最佳方案

### 文本删除

```md
这个功能我 ~~明天~~ 今天就能完成
```

这个功能我 ~~明天~~ 今天就能完成

### 行内代码

```md
`Vscode` 是全宇宙最好的编辑器
```

`Vscode` 是全宇宙最好的编辑器

### 引用

```md
> 这是一个引用
```

> 这是一个引用

### 有序列表

```md
牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)
```

牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)


### 超链接

```md
[谷歌一下，你就懂了](http://google.com/)
```

[谷歌一下，你就懂了](http://google.com/)

### 3 行 3 列的表格

```md
| 框架 | 语言 | 特点 |
| :--: | :--: | :--: |
| React | JavaScript | 组件化 |
| Vue | JavaScript | 易上手 |
| Astro | TypeScript | 高性能 |
```

| 框架 | 语言 | 特点 |
| :--: | :--: | :--: |
| React | JavaScript | 组件化 |
| Vue | JavaScript | 易上手 |
| Astro | TypeScript | 高性能 |

### 代码块

```javascript
const obj = {
	name: "hi",
	age: 18
};
// 判断某个属性是否在对象里
console.log("name" in obj);
// 删除对象某个属性
console.log(delete obj.name);
// 将对象的属性名提取成数组
console.log(Object.keys(obj));
```

### H 标签

```md
<!-- H标签，页面标题即h1，不建议文章内使用h1标签 -->
## H2
### H3
#### H4
##### H5
```

## H2

### H3

#### H4

##### H5


### 数学公式

```latex
% 函数式
${f(x)=a_nx^n+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}}+\cdots$
% 四则运算
$2x - 5y =  8$
$3x + 9y =  -12$
$7x \times 2y \neq 3z$
% 希腊字母
$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$
% 三角函数、对数、指数
$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
% 运算符
$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$
% 集合符号
$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$
```
> 函数式

${f(x)=a_nx^n+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}}+\cdots$
> 四则运算

$2x - 5y =  8$
$3x + 9y =  -12$
$7x \times 2y \neq 3z$

> 希腊字母

$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$
> 三角函数、对数、指数

$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
> 运算符

$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$
> 集合符号

$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$


### 按钮组件

```md
<!-- 按钮组件 -->
::btn[标题]{link="URL 链接"}
<!-- 支持类型：info、success、warning、error、import -->
::btn[按钮]{link="链接" type="info"}
```

::btn[按钮]{link="https://www.baidu.com"}
::btn[按钮]{link="https://www.baidu.com" type="info"}
::btn[按钮]{link="https://www.baidu.com" type="success"}
::btn[按钮]{link="https://www.baidu.com" type="warning"}
::btn[按钮]{link="https://www.baidu.com" type="error"}
::btn[按钮]{link="https://www.baidu.com" type="import"}

### Note 组件

```md
<!-- note组件 -->
:::note
这是 note 组件 默认主题
:::
<!-- 支持类型：info、success、warning、error、import -->
:::note{type="info"}
这是 note 组件 success 主题
:::
```

:::note
这是 note 组件 默认主题
:::

:::note{type="info"}
这是 note 组件 info 主题
:::

:::note{type="success"}
这是 note 组件 success 主题
:::

:::note{type="warning"}
这是 note 组件 warning 主题
:::

:::note{type="error"}
这是 note 组件 error 主题
:::

:::note{type="import"}
这是 note 组件 import 主题
:::

### Picture 组件

```md
:::picture
![Astro](https://wp-cdn.4ce.cn/v2/mpjwleN.jpeg)
![Astro](https://wp-cdn.4ce.cn/v2/wTVw1rS.jpeg)
![Astro](https://wp-cdn.4ce.cn/v2/O1KlGx8.jpeg)
:::
```

:::picture
![Astro](https://wp-cdn.4ce.cn/v2/mpjwleN.jpeg)
![Astro](https://wp-cdn.4ce.cn/v2/wTVw1rS.jpeg)
![Astro](https://wp-cdn.4ce.cn/v2/O1KlGx8.jpeg)
:::

### LivePhoto 组件

```md
<!-- 纵向图片 -->
::vhLivePhoto{photo="https://static.vvhan.com/img/1.webp" video="https://static.vvhan.com/img/1.mp4" type="y"}
<!-- 横向图片 -->
::vhLivePhoto{photo="https://static.vvhan.com/img/2.webp" video="https://static.vvhan.com/img/2.mp4"}
```

::vhLivePhoto{photo="/assets/livephoto/1.webp" video="/assets/livephoto/1.mp4" type="y"}

::vhLivePhoto{photo="/assets/livephoto/2.webp" video="/assets/livephoto/2.mp4"}

### Music 组件

```md
<!-- id 支持：歌曲 id / 歌单 id / 专辑 id / 搜索关键词
type 支持：song, playlist, album, search（默认值：song）
server 支持：netease, tencent, kugou, xiami, baidu（默认值：netease） -->
<!-- 单曲 -->
::vhMusic{id="1474697967"}
<!-- 列表 -->
::vhMusic{id="173901981" type="playlist"}
```

::vhMusic{id="1474697967"}
::vhMusic{id="173901981" type="playlist"}

### Video 组件

```md
::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
```

::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
