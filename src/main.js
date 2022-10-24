import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from "@/router"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //注册路由，路由组件和非路由组件身上都有$router & $route属性
  router,
}).$mount('#app')
