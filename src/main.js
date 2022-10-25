import Vue from 'vue'
import App from './App.vue'

//全局组件--三级联动组件
import TypeNav from "@/components/TypeNav";

Vue.component(TypeNav.name, TypeNav);

//引入路由, 仓库
import router from "@/router";
import store from "@/store";


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //注册路由，路由组件和非路由组件身上都有$router & $route属性
  router,
  store,
}).$mount('#app')
