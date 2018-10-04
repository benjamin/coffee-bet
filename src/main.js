import Vue from "vue";
import App from "./App.vue";
import store from "./store.js";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  data: { store },
  render: h => h(App)
}).$mount("#app");
