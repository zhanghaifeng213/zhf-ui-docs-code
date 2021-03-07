---
title: 数量选择器 Counter
sidebarDepth: 2
---

# 数量选择器 Counter

## 基础用法

### 示例代码

通过`count`属性设置起始数量，默认值为`1`。

通过`min`属性设置最小数量，默认值为`1`。

通过`max`属性设置最大数量，默认值为`9999`。

<template><counter-demos></counter-demos></template>

### 设置数量增减步长

通过`step`属性设置数量增减步长，默认值为`1`。

<template><counter-step-demos></counter-step-demos></template>

### 设置禁用状态

通过`disabled`属性设置数量选择器禁用状态。默认值为`false`。

<template><counter-disabled-demos></counter-disabled-demos></template>

## API

### Props

<template><counter-props></counter-props></template>

### Events

<template><counter-events></counter-events></template>

:::tip
way 值介绍：

icon 为点击加（减）号触发的超出事件。
input 为输入框数字超出事件。
parameter 为输入的参数导致的超出事件。
:::

### 数量选择器外部样式类

<template><counter-custom-class></counter-custom-class></template>
