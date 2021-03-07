---
title: SKU
---

# SKU

## 介绍

SPU 可以认为是一个抽象的名词或者是叫法，像商品，手机，水果，电影，物理，化学，数学等等

SKU 可以认为是一个抽象名词的一个具体实现，像一个单品，规格化了，可以通过颜色，型号，千克，具体名称，或者公式等等来表现或者表示抽象的那个叫法，具体化之后这个抽象的叫法就可以买卖了，或者说有价值了，或者说是一个标准，抽象化的有点虚，具体化的是实的
::: tip
该 SKU 组件支持属性的反选。显示原价与打折的价格，库存量及库存阈值，以选的属性和未选的属性。属性栏设置小图展示。
:::

## 基础用法

::: tip
传入的 spu 数据见[示例代码](#example),spu 数据格式见文档底部 [spu 数据格式](#spu-data)。
:::

```vue
<template>
  <realm
    :spu="spu"
    :minCount="minCount"
    :order-way="orderWay"
    @shopping="onShopping"
    @specchange="onSpecChange"
  >
  </realm>
</template>
<script>
export default {
  data(){
    return {
      spu: {...}, // 商品的spu数据
      minCount: 2, // sku最小数量
      orderWay: 'cart' // 底部按钮类型
    }
  },
  methods: {
    onShopping(val) {
      console.log(val)
    },
    onSpecChange(val) {
      console.log(val)
    }
  }
}
</script>
```

<div  id="example" style="height:3.6rem"></div>

## 示例

<template><sku-demos></sku-demos></template>

## API

### Props

<template><sku-props></sku-props></template>

### Events

<template><sku-events></sku-events></template>
::: tip 事件回调参数说明：

- `shopping`

  `orderWay`: 传入的底部按钮类型。
  `sku`: 所选的 sku 信息。
  `skuCount`: 所选的 sku 数量。
  `spuId`: 该 sku 所属的 spu 的 id。

- `specchange`

  `currentValues`: 所选的 sku 属性,类型 Array。
  `missingKeys`: 未选的 sku 属性,类型 Array。
  `noSpec`: 该 spu 下的 sku 是否有属性可选,类型 Boolean。
  `skuIntact`: 所选的属性是否完整,类型 Boolean。
  :::

### 外部样式类

<template><sku-custom-class></sku-custom-class></template>

<div  id="spu-data" style="height:3.6rem"></div>

### spu 数据格式

#### 类型 1: 有可选的 sku 属性

```JSON
{
  "id": 2, // 商品的spu id
  "sku_list": [ // 该spu下的sku列表
    {
      "id": 2, // sku id
      "price": 77.76, // sku 价格
      "discount_price": null, // sku 折后价格
      "img": "http://i1.sleeve.talelin.com/assets/2d22ffec-b1c1-43e0-ad21-25aa5c26ab34.png", // sku图片
      "title": "金属灰·七龙珠", // sku名称
      "spu_id": 2, // 该sku对应的spu id
      "specs": [ // 该sku 的属性列表
        {
          "key_id": 1, // 属性关键字id
          "key": "颜色", // 关键字名称
          "value_id": 45, // 关键字对应的值id
          "value": "金属灰" // 关键字对应的值名称
        }
      ],
      "code": "2$1-45#3-9#4-14", // 代表该sku的信息,前面的2为spu id,后面的数字对应属性关键字id和关键字对应的值id
      "stock": 0 // sku库存量
    }
  ],
  "sketch_spec_id": 1, // 默认属性带小图的属性关键字id
  "default_sku_id": 2 // 默认选中的sku id
}
```

#### 类型 2: 无可选的 sku 属性

```JSON
{
  "id": 10, // 商品的spu id
  "sku_list": [ // 该spu下的sku列表
    {
      "id": 16, // sku id
      "price": 72, // sku 价格
      "discount_price": 68, // sku 折后价格
      "img": "http://i1.sleeve.talelin.com/spu/moshui1/1.png", // sku图片
      "title": "碳素墨水", // sku名称
      "specs": [], // 该sku 的属性列表,无可选的 sku 属性需传一个空数组
      "stock": 38 // sku库存量
    }
  ]
}
```
