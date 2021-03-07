---
title: 快速上手
---

# 快速上手

## 使用之前

您应该在一定程度上了解 vue 的相关概念、基础知识，这样在使用本框架的时候会更顺利。

## 全局引用

在项目的入口文件（一般是 `main.js`）中配置：

```js
import Vue from "vue";
import App from "./App.vue";
import ZhfUI from "zhf-ui";
import "zhf-ui/dist/zhf-ui.css";

Vue.use(ZhfUI);

new Vue({
  el: "#app",
  render: h => h(App)
});
```

以上代码便完成了 zhf-ui 的引入。需要注意的是，样式文件需要单独引入。

## 按需引用

我们可以只引入需要的组件，以达到减小项目体积的目的。

如您只希望引入 Counter 和 Price，那么需要在项目入口文件中写入：

```js
import Vue from "vue";
import { Counter, Price } from "zhf-ui";
import "zhf-ui/dist/zhf-ui.css";
import App from "./App.vue";

Vue.component(Counter.name, Counter);
Vue.component(Price.name, Price);

new Vue({
  el: "#app",
  render: h => h(App)
});
```
