---
title: 在vite中处理css
date: 2023-6-8
updated: 2023-6-8
categories: 文章
tags:
  - 文章
  - 笔记
top: 1
---

#### vite中处理css

> vite天生就支持对css的直接处理
> > 1. vite读取到 main.js 中引用了 index.css
> > 2. 使用fs模块去读取 index.css 里的内容
> > 3. 创建一个style标签,把读取的内容copy到style标签里
> > 4. 将style标签插入到 index.html的head中
> > 5. 将该css文件中的内容直接替换为js脚本 (方便热更新或者css模块化) ---- 同时设置Content-Type为js,从而让浏览器以js脚本的形式去执行该css后缀的文件


----


- #### 场景
  - 一个组件最外层元素我们一般取名为: .wrapper
  - 一个组件最底层元素我们一般取名为: .footer

如果别人没看过你的源代码 也取名为 .footer那么会
```js
//componentA.js
import "./componentA.css";

const div = document.createElement("div");

document.body.appendChild(div);

div.className = "footer";
```
```js
//componentB.js
import "./componentB.css";

const div = document.createElement("div");

document.body.appendChild(div);

div.className = "footer";
```
```css
// componentA.css
.footer {
  width: 200px;
  height: 200px;
  background: skyblue;
}
```
```css
// componentB.css
.footer {
  width: 200px;
  height: 200px;
  background: skyblue;
}
```
```js
// main.js
import { createApp } from "vue";
import "../index.css";
import App from "./App.vue";

import "../request";

// vite处理css
import "../componentA";
import "../componentB";

createApp(App).mount("#app");
```
#### 结果: 样式被覆盖了 // 我们协调开发经常遇见的一个问题

----

#### 怎么解决?
#### 使用cssmodule
```js
//componentA.js
import componentACss from "./componentA.module.css"

console.log(componentBCss)  // 打印结果为一个对象

const div = document.createElement("div");

document.body.appendChild(div);

div.className = componentBCss.footer;
```
```js
//componentB.js
import componentBCss from "./componentB.module.css"

console.log(componentBCss)  // 打印结果为一个对象

const div = document.createElement("div");

document.body.appendChild(div);

div.className = componentBCss.footer;
```
```css
// componentA.module.css
.footer {
  width: 200px;
  height: 200px;
  background: skyblue;
}
```
```css
// componentB.module.css
.footer {
  width: 200px;
  height: 200px;
  background: skyblue;
}
```
----
#### cssmodule怎么实现的呢?
- #### 大概说一下流程 (全部都基于node)
  - module.css (module是一种约定,表示需要开启css模块化)
  - 他会将你的所有类名进行一定规则的替换 (将footer 替换成_footer_47wbz_1)
  - 同时创建一个映射对象 {footer:"_footer_47wbz_1"}
  - 将替换后的内容塞进style标签里然后放入到head标签里 (能读到index.html的文件内容)
  - 将 componentA.module.css内容进行全部抹除,替换成js脚本
  - 将创建的映射对象在脚本中进行默认导出
