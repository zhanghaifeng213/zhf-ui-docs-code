<template>
  <div>
    <table width="100%">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      <tr>
        <td>spu</td>
        <td>spu数据</td>
        <td>Object</td>
        <td>见spu数据结构</td>
        <td>——</td>
      </tr>
      <tr>
        <td>orderWay</td>
        <td>底部按钮类型</td>
        <td>String</td>
        <td>cart / buy</td>
        <td>cart</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>组件显示位置</td>
        <td>Boolean</td>
        <td>top / bottom</td>
        <td>top</td>
      </tr>
      <tr>
        <td>priceUnit</td>
        <td>价格符号</td>
        <td>String</td>
        <td>——</td>
        <td>￥</td>
      </tr>
      <tr>
        <td>buyText</td>
        <td>orderWay为buy时的底部按钮文字</td>
        <td>String</td>
        <td>——</td>
        <td>立即购买</td>
      </tr>
      <tr>
        <td>addCartText</td>
        <td>orderWay为cart时的底部按钮文字</td>
        <td>String</td>
        <td>——</td>
        <td>加入购物车</td>
      </tr>
      <tr>
        <td>outStockText</td>
        <td>库存不足时的底部按钮文字</td>
        <td>String</td>
        <td>——</td>
        <td>暂时缺货</td>
      </tr>
      <tr>
        <td>counterText</td>
        <td>数量选择器左侧文字</td>
        <td>String</td>
        <td>——</td>
        <td>购买数量</td>
      </tr>
      <tr>
        <td>stockThreshold</td>
        <td>库存阈值。低于这个值会把库存数高亮显示</td>
        <td>Number</td>
        <td>——</td>
        <td>10</td>
      </tr>
      <tr>
        <td>minCount</td>
        <td>最小购买数量</td>
        <td>Number</td>
        <td>——</td>
        <td>1</td>
      </tr>
      <tr>
        <td>maxCount</td>
        <td>最大购买数量</td>
        <td>Number</td>
        <td>——</td>
        <td>99</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SkuProps",
  data() {
    return {}
  }
}
</script>

<style scoped>
table {
  display: table;
  border-collapse: collapse;
}
table td {
  text-align: center;
}
</style>