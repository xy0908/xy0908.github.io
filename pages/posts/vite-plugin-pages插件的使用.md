---
title: vite-plugin-pages插件的使用
date: 2023-6-7
updated: 2023-6-7
categories: 文章
tags:
  - 文章
  - 笔记
top: 2
---

#### vite-plugin-pages插件的使用


#### 1.下载插件
```js
// 我使用的是pnpm
pnpm install vite-plugin-pages
pnpm install vue-router
```

#### 2.作用
 - #### vite-plugin-vite
   - 可以读取指定的目录文件，自动化生成路由信息，不需要自己去逐个页面配置
   - vite-plugin-pages默认指定的页面文件夹是 pages，默认指定的页面是 index.vue，所以最好先在pages文件夹下面创建一个 index.vue文件
 - #### vue-router
   - vite-plugin-pages基于vue-router，所以使用的时候还是要安装vue-router


#### 3.vite.config.ts 文件中配置
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 1.引入插件
import Pages from  'vite-plugin-pages'
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     /**
         * 默认为文件夹为pages时，不需要配置
         * 
         * 如果不想使用pages为默认文件夹的时候 就需要配置
         * 如果使用views为文件时
         *      dirs:[ { dir: "src/views", baseRoute: "" }],
         *      importMode: "async"
         * 
         * 指定需要生成路由的文件
         *      识别带有vue和md后缀的文件为路由（md文件需要有插件支持）
         *      extensions: ['vue', 'md'],
         * 
         * 加载方式
         *      类型:  'sync' | 'async' |  (stirng)=> 'sync' : 'async'
         *          可以直接设定全局的路由加载方式，也可以通过设置syncIndex配置项来转换为同步加载
         *          也可以通过传入一个方法，通过返回 sync 和 async 来确定加载方式
         *          importMode: 'async',
         *      
        */
    Pages({
        dirs:[ { dir: "src/views", baseRoute: "" }],

        extensions: ['vue', 'md'],

        importMode: 'async',
        // 只要包含fruits的路由，就会变为异步懒加载
        // importMode(path) {
        //   return path.includes('fruits') ? 'async' : 'sync'
        // },

    })
  ],
})
```


#### 4.env.d.ts文件中的配置
```js
// 如果使用了ts 那么就需要设置全局变量

//注释：主要是加入下面这行，否则main.ts页面会报红
/// <reference types="vite-plugin-pages/client" />
```


#### 5.main.ts文件中的配置
```js
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
//自动读取pages目录下的页面，不需要自己再写routes
// 引入可能会报红，但是别着急，下一步会解决
import generatedRoutes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})

const app = createApp(App)
app.use(router).mount('#app')
```

#### 6.使用 
```js
// 现在就可以正常使用了
// 直接在app.vue 设置路由渲染出口
<script setup lang="ts">

</script>

<template>
  <router-view />
</template>
```
```js
// pages文件夹下的文件名称就是对应的路由

//  pages/index.vue  路由地址 http://127.0.0.1:5173
//  pages/qaq.vue   路由地址 http://127.0.0.1:5173/qaq
//  pages/xyouo.vue  路由地址 http://127.0.0.1:5173/xyouo
```
