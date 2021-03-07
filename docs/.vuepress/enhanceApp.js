import SkuProps from "./components/sku-props.vue";
import SkuEvents from "./components/sku-events.vue";
import SkuCustomClass from "./components/sku-custom-class.vue";
import PriceDelDemos from "./components/price-del-demos.vue";
import PriceDigitDemos from "./components/price-digit-demos.vue";
import PriceColorSizeDemos from "./components/price-color-size-demos.vue";
import PriceProps from "./components/price-props.vue";
import PriceCustomClass from "./components/price-custom-class.vue";
import CounterDemos from "./components/counter-demos.vue";
import CounterStepDemos from "./components/counter-step-demos.vue";
import CounterDisabledDemos from "./components/counter-disabled-demos.vue";
import CounterProps from "./components/counter-props.vue";
import CounterEvents from "./components/counter-events.vue";
import CounterCustomClass from "./components/counter-custom-class.vue";
import Zhf from "zhf-ui";
// import { Realm } from "zhf-ui";
import "zhf-ui/dist/zhf-ui.css";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Zhf);
  // Vue.component(Realm.name, Realm);
  Vue.component(SkuProps.name, SkuProps);
  Vue.component(SkuEvents.name, SkuEvents);
  Vue.component(SkuCustomClass.name, SkuCustomClass);
  Vue.component(PriceDelDemos.name, PriceDelDemos);
  Vue.component(PriceDigitDemos.name, PriceDigitDemos);
  Vue.component(PriceColorSizeDemos.name, PriceColorSizeDemos);
  Vue.component(PriceProps.name, PriceProps);
  Vue.component(CounterDemos.name, CounterDemos);
  Vue.component(CounterStepDemos.name, CounterStepDemos);
  Vue.component(CounterDisabledDemos.name, CounterDisabledDemos);
  Vue.component(PriceCustomClass.name, PriceCustomClass);
  Vue.component(CounterProps.name, CounterProps);
  Vue.component(CounterEvents.name, CounterEvents);
  Vue.component(CounterCustomClass.name, CounterCustomClass);
};
