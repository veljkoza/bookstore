import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import StoreResource from "../app-store";
import '@/_assets/tailwind.css'
import'@/_assets/style.css'
Vue.config.productionTip = false
Vue.use(Vuex);

export const store = new StoreResource().Store(Vuex).store;
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
