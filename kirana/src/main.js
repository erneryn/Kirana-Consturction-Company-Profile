import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BButton } from "bootstrap-vue";
import VueMq from "vue-mq";
import AOS from "aos"
import 'aos/dist/aos.css';

Vue.component("b-button", BButton);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 768,
    laptop: 1250,
    desktop: Infinity
  }
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created(){
    AOS.init()
  },
  render: h => h(App)
}).$mount("#app");
