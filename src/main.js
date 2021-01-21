import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import StoreResource from "../app-store";

Vue.config.productionTip = false
Vue.use(Vuex);

export const store = new StoreResource().Store(Vuex).store;
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
