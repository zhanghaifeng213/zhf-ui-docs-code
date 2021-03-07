<template>
  <div>
    <table width="100%">
      <tr>
        <th>类名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>customClass</td>
        <td>设置SKU整体容器的外部样式类</td>
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