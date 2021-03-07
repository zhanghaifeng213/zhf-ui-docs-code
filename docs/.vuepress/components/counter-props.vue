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
        <td>count</td>
        <td>设置起始数量</td>
        <td>Number</td>
        <td>——</td>
        <td>1</td>
      </tr>
      <tr>
        <td>min</td>
        <td>设置最小数量</td>
        <td>Number</td>
        <td>——</td>
        <td>1</td>
      </tr>
      <tr>
        <td>max</td>
        <td>设置最大数量</td>
        <td>Number</td>
        <td>——</td>
        <td>9999</td>
      </tr>
      <tr>
        <td>step</td>
        <td>设置数量增减步长</td>
        <td>Number</td>
        <td>——</td>
        <td>1</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>设置禁用状态</td>
        <td>Boolean</td>
        <td>——</td>
        <td>false</td>
      </tr>
      <tr>
        <td>isHover</td>
        <td>是否显示hover效果</td>
        <td>Boolean</td>
        <td>——</td>
        <td>true</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "CounterProps",
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