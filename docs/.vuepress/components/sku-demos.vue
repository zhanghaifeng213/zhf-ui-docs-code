<template>
  <div class="contentWrapper">
    <div class="componentsMessage">
      <div class="sku-container">
        <div class="sku-wrap">
          <realm :spu="spu" @shopping="onShopping" :minCount="2" @specchange="onSpecChange" :order-way="orderWay"></realm>
        </div>
        <div class="sku-wrap2">
          <realm :spu="spu2" priceUnit="$" @shopping="onShopping" @specchange="onSpecChange" :order-way="orderWay2" placement="bottom"></realm>
        </div>
      </div>
      <div v-if="showCode" class="dispalyCode" @click="showCode=false">
        <span>▲ <span>隐藏代码</span></span>
      </div>
      <div>
        <pre v-if="showCode" class="preClass"><code>{{content}}</code></pre>
      </div>
    </div>
    <div class="dispalyCode" @click="showCode=!showCode">
      <span v-if="!showCode">▼ <span>显示代码</span></span>
      <span v-if="showCode">▲ <span>隐藏代码</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkuDemos",
  components: {
  },
  methods: {
    async initSpuData() {
      this.initDemo1()
      this.initDemo2()
    },
    initDemo1() {
      this.spu =
        {
          "id": 2,
          "sku_list": [{
            "id": 2,
            "price": 77.76,
            "discount_price": null,
            "img": "http://i1.sleeve.7yue.pro/assets/2d22ffec-b1c1-43e0-ad21-25aa5c26ab34.png",
            "title": "金属灰·七龙珠",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 45,
              "value": "金属灰"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 9,
              "value": "七龙珠"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 14,
              "value": "小号 S"
            }],
            "code": "2$1-45#3-9#4-14",
            "stock": 0
          }, {
            "id": 3,
            "price": 66,
            "discount_price": 59,
            "img": "http://i1.sleeve.7yue.pro/assets/c6b52c90-5b10-4823-baef-6c37d3d3532f.png",
            "title": "青芒色·灌篮高手",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 42,
              "value": "青芒色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 10,
              "value": "灌篮高手"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 15,
              "value": "中号 M"
            }],
            "code": "2$1-42#3-10#4-15",
            "stock": 996
          }, {
            "id": 4,
            "price": 88,
            "discount_price": null,
            "img": "http://i1.sleeve.7yue.pro/assets/c6b52c90-5b10-4823-baef-6c37d3d3532f.png",
            "title": "青芒色·圣斗士",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 42,
              "value": "青芒色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 11,
              "value": "圣斗士"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 16,
              "value": "大号  L"
            }],
            "code": "2$1-42#3-11#4-16",
            "stock": 8
          }, {
            "id": 5,
            "price": 77,
            "discount_price": 59,
            "img": "http://i1.sleeve.7yue.pro/assets/09f32ac8-1af4-4424-b221-44b10bd0986e.png",
            "title": "橘黄色·七龙珠",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 44,
              "value": "橘黄色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 9,
              "value": "七龙珠"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 14,
              "value": "小号 S"
            }],
            "code": "2$1-44#3-9#4-14",
            "stock": 0
          }],
          "sketch_spec_id": 1,
          "default_sku_id": 2
        }
    },
    initDemo2() {
      this.spu2 =
        {
          "id": 10,
          "sku_list": [{
            "id": 16,
            "price": 72,
            "discount_price": 68,
            "img": "http://i1.sleeve.talelin.com/spu/moshui1/1.png",
            "title": "碳素墨水",
            "specs": [],
            "stock": 38
          }]
        }
    },
    onShopping(val) {
      console.log(val)
      const { orderWay, sku, skuCount } = val
      let str = `${orderWay === 'cart' ? '加入购物车' : '购买'} "${sku.title}",数量为${skuCount}`
      alert(str)
    },
    onSpecChange(val) {
      console.log(val)
    }
  },
  mounted() {
    this.initSpuData()
  },
  data() {
    return {
      spu: null,
      spu2: null,
      orderWay: 'cart',
      orderWay2: 'buy',
      content:
        `
<template>
  <div id="app">
    <div class="sku-container">
      <div class="sku-wrap">
        <realm :spu="spu" @shopping="onShopping" :minCount="2" @specchange="onSpecChange" :order-way="orderWay"></realm>
      </div>
      <div class="sku-wrap2">
        <realm :spu="spu2" priceUnit="$" @shopping="onShopping" @specchange="onSpecChange" :order-way="orderWay2" placement="bottom"></realm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spu: null,
      spu2: null,
      orderWay: 'cart',
      orderWay2: 'buy'
    }
  },
  mounted() {
    this.initSpuData()
  },
  methods: {
    initSpuData() {
      this.initDemo1()
      this.initDemo2()
    },
    initDemo1(){
      this.spu =
        {
          "id": 2,
          "sku_list": [{
            "id": 2,
            "price": 77.76,
            "discount_price": null,
            "img": "http://i1.sleeve.7yue.pro/assets/2d22ffec-b1c1-43e0-ad21-25aa5c26ab34.png",
            "title": "金属灰·七龙珠",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 45,
              "value": "金属灰"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 9,
              "value": "七龙珠"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 14,
              "value": "小号 S"
            }],
            "code": "2$1-45#3-9#4-14",
            "stock": 0
          }, {
            "id": 3,
            "price": 66,
            "discount_price": 59,
            "img": "http://i1.sleeve.7yue.pro/assets/c6b52c90-5b10-4823-baef-6c37d3d3532f.png",
            "title": "青芒色·灌篮高手",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 42,
              "value": "青芒色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 10,
              "value": "灌篮高手"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 15,
              "value": "中号 M"
            }],
            "code": "2$1-42#3-10#4-15",
            "stock": 996
          }, {
            "id": 4,
            "price": 88,
            "discount_price": null,
            "img": "http://i1.sleeve.7yue.pro/assets/c6b52c90-5b10-4823-baef-6c37d3d3532f.png",
            "title": "青芒色·圣斗士",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 42,
              "value": "青芒色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 11,
              "value": "圣斗士"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 16,
              "value": "大号  L"
            }],
            "code": "2$1-42#3-11#4-16",
            "stock": 8
          }, {
            "id": 5,
            "price": 77,
            "discount_price": 59,
            "img": "http://i1.sleeve.7yue.pro/assets/09f32ac8-1af4-4424-b221-44b10bd0986e.png",
            "title": "橘黄色·七龙珠",
            "spu_id": 2,
            "specs": [{
              "key_id": 1,
              "key": "颜色",
              "value_id": 44,
              "value": "橘黄色"
            }, {
              "key_id": 3,
              "key": "图案",
              "value_id": 9,
              "value": "七龙珠"
            }, {
              "key_id": 4,
              "key": "尺码",
              "value_id": 14,
              "value": "小号 S"
            }],
            "code": "2$1-44#3-9#4-14",
            "stock": 0
          }],
          "sketch_spec_id": 1,
          "default_sku_id": 2
        }
    },
    initDemo2(){
      this.spu2 =
        {
          "id": 10,
          "sku_list": [{
            "id": 16,
            "price": 72,
            "discount_price": 68,
            "img": "http://i2.sleeve.7yue.pro/m25.png",
            "title": "碳素墨水",
            "specs": [],
            "stock": 38
          }]
        }
    },
    onShopping(val) {
      console.log(val)
    },
    onSpecChange(val) {
      console.log(val)
    }
  }
}
\<\/script>
<style lang="scss">
.sku-container {
  display: flex;
}
.sku-wrap {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
}
.sku-wrap2 {
  position: relative;
  width: 375px;
  height: 667px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
  background: rgba(0, 0, 0, 0.7);
}
</style>
`.trim(),
      showCode: false
    }
  }
}
</script>

<style scoped>
.contentWrapper:hover {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
}
.contentWrapper:hover .dispalyCode {
  background-color: #f9fafc;
  color: rgb(194, 194, 194);
}
.contentWrapper .componentsMessage {
  border: 1px solid #ebebeb;
  padding: 20px 20px 20px;
  overflow: hidden;
}
.contentWrapper .dispalyCode {
  margin-top: -1px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ebebeb;
  font-size: 12px;
}
.contentWrapper .dispalyCode > span {
  font-size: 12px;
  padding-left: 6px;
}
.sku-container {
  display: flex;
}
.sku-wrap {
  position: relative;
  width: 375px;
  height: 568px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
}
.sku-wrap2 {
  position: relative;
  width: 375px;
  height: 568px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
  background: rgba(0, 0, 0, 0.7);
}
</style>
