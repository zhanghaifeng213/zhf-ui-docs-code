---
title: 价格 Price
sidebarDepth: 2
---

# 价格 Price

## 基础用法

### 价格及价格符号

通过 `value` 属性设定价格。

通过 `unit` 属性设置价格单位。默认值为`￥`。

通过 `mode` 属性设置价格类型，可选值为 `number`、`text`，默认值为 `number`。

通过`color`属性设置价格的颜色。
<template><price-demos></price-demos></template>

### 是否为删除态价格

通过`deleted`属性设置价格是否为删除态。默认值为`false`。

<template><price-del-demos></price-del-demos></template>

### 价格小数保留位数及自动补零

通过`reserve-digit`属性设置价格小数保留的位数。默认保留 2 位小数。

通过`autofix`属性设置自动补零。例如设置`value`为`666.00`，默认显示为`666`，开启自动补零可正常显示。

<template><price-digit-demos></price-digit-demos></template>

### 价格颜色及大小

通过`color`、`size`、`bold`属性设置价格整体的颜色、大小及字体粗细。

通过`unit-size`属性设置价格单位的大小。

通过`unit-color`属性设置价格单位的颜色。

通过`value-size`属性设置价格的大小。

通过`value-color`属性设置价格的颜色。

::: tip
`color`、`size`、`bold`可以被`unit-size`等属性覆盖。
:::

<template><price-color-size-demos></price-color-size-demos></template>

## API

### Props

<template><price-props></price-props></template>

### 价格外部样式类

<template><price-custom-class></price-custom-class></template>
