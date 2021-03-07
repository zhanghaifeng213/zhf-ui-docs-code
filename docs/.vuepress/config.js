module.exports = {
  //页面顶部title
  title: "zhf-ui",
  //页面描述
  description: "zhf-ui 是基于 Vue 2.0 实现的移动端组件库",
  base: "/zhf-ui-docs/",
  themeConfig: {
    sidebar: [
      "/introduce/",
      {
        title: "入门",
        children: ["/install/", "/get-start/"]
      },
      {
        title: "组件",
        children: [
          "/components/sku.md",
          "/components/counter.md",
          "/components/price.md"
        ]
      }
    ],
    nav: [{ text: "GitHub", link: "https://github.com/zhanghaifeng213/zhf-ui" }]
  }
};
