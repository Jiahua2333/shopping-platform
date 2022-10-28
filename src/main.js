import Vue from 'vue'
import App from './App.vue'

//全局组件--三级联动组件,轮播图
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel"

//注册全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

//引入路由, 仓库
import router from "@/router";
import store from "@/store";

//引入MockSever.js----mock数据
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.min.css"

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //注册路由，路由组件和非路由组件身上都有$router & $route属性
  router,
  store,
}).$mount('#app')
