---
title: vite配置文件处理细节
date: 2023-6-9
updated: 2023-6-9
categories: 文章
tags:
  - 文章
  - 笔记
top: 3
---

#### vite 配置文件处理细节

1. vite配置文件语法提示
   1. 如果使用的是webstorm,那么你可以得到很好的语法提示
   2. 如果你使用的是vscode或者其他的编译器,则需要做一些特殊处理
```js
//  vite.config.js

// 1. 使用 defineConfig
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖 不进行
  },
});

// 2.  使用jsDoc
/**
 * @type import("vite").UserConfig
 */
const viteConfig = {
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖 不进行依赖预构建
  },
};
export default viteConfig;
```
2. 关于环境的处理
   1. 过去我们使用webpack的时候,我们要区分配置文件的一个环境
      1. -webpack.dev.config
      2. -webpack.prod.config
      3. -webpack.base.config
      4. -wepackmerge
   2. 我们使用vite 他是怎么区分配置文件的一个环境呢？
```js
// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

//策略模式
const envResolver = {
  build: () => {
    console.log("生产环境");
    return { ...viteBaseConfig, ...viteProdConfig };
  },
  serve: () => {
    console.log("开发环境");
    return { ...viteBaseConfig, ...viteDevConfig };
  },
};

export default defineConfig(({ command }) => {
  // comand: "build" | serve
  // 是 build 还是 serve 取决于我们敲的命令 是开发 还是生产
  return envResolver[command]();
});
```
3. vite环境变量配置
  > 环境变量: 会根据当前代码环境产生值的变化的变量叫做环境变量
##### 代码环境:
  1. 开发环境
  2. 测试环境
  3. 预发布环境
  4. 灰度环境
  5. 生产环境

> #### 举个例子: 百度地图sdk,微信小程序sdk
>
>> APP_key: 在测试环境和生产环境还有开发环境 是不一样的key值
>
>>> 测试环境: 110
>>> 生产环境: 111
>>> 开发环境: 112

#### 在vite中环境变量的处理
  1. vite内置了 dotenv 这个第三方库
  > dotenv会自动读取 .env 这个文件,并解析这个文件中对应的环境变量 并将其注入到 process 对象下 
  但是,vite考虑到和其他配置的一些冲突问题,不会直接注入到process对象下
  >> 涉及到vite.config.js中的一些配置
  >>> 1. root
  >>> 2. envDir : 用来配置当前环境变量的文件地址
  >>>
  #### vite提供了补救措施: 我们可以调用vite的loadEnv来手动确认文件

```js
// 补救措施
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

//策略模式
const envResolver = {
  build: () => {
    console.log("生产环境");
    return { ...viteBaseConfig, ...viteProdConfig };
  },
  serve: () => {
    console.log("开发环境");
    return { ...viteBaseConfig, ...viteDevConfig }; // 新配置里可能会配置 env.Dir
  },
};

export default defineConfig(({ command, mode }) => {
 //  process node全局的环境变量
  // console.log("process", process.env);

  /**
   * mode是什么?
   *  我们运行项目的时候
   *    使用 yarn dev  会默认补齐 yarn dev --mode development  会将mode设置为 development 传递进来
   *    使用 yarn build 会默认补齐 yarn dev --mode production  会将mode设置为 production 传递进来
   */
  console.log("mode///", mode);

  /**
   * loadEnv()
   *    第一个参数: 对象 mode
   *    第二个参数: 当前 env 所在的目录   可以使用 process.cwd()方法
   *    第三个参数: .env的文件名称  默认是 .env
   *
   * process.cwd()  返回当前 node 的工作目录
   */

   /**
   * 当我们调用 loadEnv的时候, 它会做以下几件事:
   *    1. 直接找到 .env 文件 不解释, 并解析其中的环境, 放到一个对象中
   *    2. 会将传进来的mode这个变量值进行拼接， ```env.development```, 并根据我们提供的目录去取对应的配置文件并解析, 放到一个对象中
   *    3. 我们可以理解为
   *    ```js
   *      const baseEnvConfig = 读取.env配置
   *      const modeEnvConfig = 读取env相关的配置
   *      const lastEnvConfig = {...baseEnvConfig,...modeEnvConfig}
   *    ```
   *
   *    我们会先去读取 .env 这个文件  解析  存入对象
   *    然后读取mode这个变量, 根据我们的命令。
   *    如果是 yarn dev (默认补齐 yarn dev --mode developme)  那么 mode就等于 development  我们就读取 .env.development 这个文件 存入对象
   *    如果是 yarn build (默认补齐 yarn build --mode production)  那么 mode就等于 production  我们就读取 .env.production 这个文件 存入对象
   *    最后 我们会把 俩个对象 存入到一个对象中 第二次读取的配置 如果跟 第一次读取的配置 有相同的 就会覆盖
   */
  const env = loadEnv(mode, process.cwd(), "");

  // comand: "build" | serve
  // 是 build 还是 serve 取决于我们敲的命令 是开发 还是生产
  return envResolver[command]();
});
```
  2. 关于 .env 文件 
     1. .env: 所有环境都需要用到的环境变量
     2. .env.development: ==开发环境==需要用到的环境变量 默认情况下 vite 将我们的开发环境==取名为 development==
     3. .env.production: ==生产环境==需要用到的环境变量 默认情况下 vite 将我们的开发环境==取名为 production==
  3. 如果是==客户端== vite会将==对应的环境变量== 注入到 ==import.meta.env==里面去
     1. 因为vite做了==拦截==,为了防止我们将==隐私性的变量注入到 import.meta.env中==,所以做了一层拦截。 如果你的==环境变量不是以 VITE 开头的== 那么他就==不会==帮你注入到客户端中
     2. 如果我们想==更改这前缀==,可以使用==envPrefix==去配置
```js
// request.js文件
console.log(" import.meta.env----", import.meta.env);  // 输出结果 未达到预期
```
---

>  #### 补充一个小知识:
>>>   为什么vite.config.js 可以书写成 esmodule 的形式?
>>>
>>>   因为vite在读取 vite.config.js文件的时候 会率先node去解析文件语法,如果发现你是使用esmodule规范会直接将esmodule规范进行替换成common.js规范
