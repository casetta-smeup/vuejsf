import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./plugins/element";

// css
import "@mdi/font/css/materialdesignicons.min.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
