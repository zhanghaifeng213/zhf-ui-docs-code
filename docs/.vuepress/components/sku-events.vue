<template>
  <div>
    <table width="100%">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
      <tr>
        <td>shopping</td>
        <td>点击底部按钮时触发</td>
        <td>{orderWay, sku, skuCount, spuId}</td>
      </tr>
      <tr>
        <td>specchange</td>
        <td>点击sku属性选项触发</td>
        <td>{currentValues, missingKeys, noSpec, skuIntact}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SkuEvents",
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