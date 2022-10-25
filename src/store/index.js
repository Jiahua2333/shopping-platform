//引入vuex 和 vue
import Vuex from "vuex";
import Vue from "vue";

//使用插件
Vue.use(Vuex);

//引入所需要的模块仓库
import aboutHome from "./home";

export default  new Vuex.Store({
    modules: {
        aboutHome,
    },
});