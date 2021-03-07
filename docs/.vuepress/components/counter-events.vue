<template>
  <div>
    <table width="100%">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>回调参数</th>
        <th>备注</th>
      </tr>
      <tr>
        <td>lintap</td>
        <td>点击加（减）号及数字输入框失去焦点触发的事件</td>
        <td>{count,type} </td>
        <td>type值为reduce、add和blur</td>
      </tr>
      <tr>
        <td>linout</td>
        <td>数字超出可选范围触发的事件</td>
        <td>{type,way}</td>
        <td>type值为overflow_min、overflow_max,way值为icon、input、parameter</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CounterEvents",
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