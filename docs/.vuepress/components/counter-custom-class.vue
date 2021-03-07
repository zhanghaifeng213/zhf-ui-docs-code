<template>
  <div>
    <!-- customClass: String,
    disabledClass: String,
    symbolClass: String,
    countClass: String -->
    <table width="100%">
      <tr>
        <th>类名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>customClass</td>
        <td>设置数量选择器整体容器的外部样式类</td>
      </tr>
      <tr>
        <td>symbolClass</td>
        <td>设置数量选择器加（减）号容器的外部样式类</td>
      </tr>
      <tr>
        <td>disabledClass</td>
        <td>设置数量选择器数字容器禁用状态的外部样式类</td>
      </tr>
      <tr>
        <td>countClass</td>
        <td>设置数量选择器数字容器的外部样式类</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CounterCustomClass",
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