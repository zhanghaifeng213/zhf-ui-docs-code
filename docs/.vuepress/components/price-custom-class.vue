<template>
  <div>
    <table width="100%">
      <tr>
        <th>类名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>customClass</td>
        <td>设置价格整体容器的外部样式类</td>
      </tr>
      <tr>
        <td>unitClass</td>
        <td>覆盖价格单位的外部样式类</td>
      </tr>
      <tr>
        <td>valueClass</td>
        <td>覆盖价格数字部分的外部样式类</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "SkuCustomClass",
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