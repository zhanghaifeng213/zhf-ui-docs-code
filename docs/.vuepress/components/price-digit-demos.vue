<template>
  <div class="contentWrapper">
    <div class="componentsMessage">
      <price unit="￥" value="666.00" autofix :reserve-digit="2" unit-color="#3963bc" unit-size="14"></price>

      <!-- <div v-if="showCode" class="dispalyCode" @click="showCode=false">
        <span>▲ <span>隐藏代码</span></span>
      </div> -->
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
  name: "PriceDigitDemos",
  components: {
  },
  methods: {

  },
  mounted() {

  },
  data() {
    return {

      content:
        `
<price unit="￥" value="666.00" autofix :reserve-digit="2" unit-color="#3963bc" unit-size="14"></price>
`.trim(),
      showCode: false
    }
  }
}
</script>

<style scoped>
.contentWrapper {
  margin-top: 10px;
}
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
