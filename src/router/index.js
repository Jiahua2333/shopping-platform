//配置路由

import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';

//重写路由器VueRouter.prototype原型对象身上的push和replace方法
//解决多次执行上面两个方法时（路径相同），产生NavigationDuplicated的警告错误
//原因：vue-router引入了promise，当传递参数多次且重复，会抛出异常，因此出现上面现象

//备份原来的push和replace方法
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;

//重写push方法
VueRouter.prototype.push = function(location, resolve, reject){
    //第一个形参：路由跳转的配置对象（query|params）
    //第二个参数：undefined|箭头函数（成功的回调）
    //第三个参数:undefined|箭头函数（失败的回调）

    /* 
        call 和 apply 区别
        1.相同点：都能函数的this的指向
        2.不同点：call的参数能传多个，用逗号隔开；apply参数用数组。
    */
   //利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    if(resolve && reject) originPush.call(this, location, resolve, reject);
    else originPush.call(this, location, ()=>{}, ()=>{});
}

//重写replace方法
VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject) originReplace.call(this, location, resolve, reject);
    else originReplace.call(this, location, ()=>{}, ()=>{});
}

//暴露设置好的路由
export default new VueRouter({
    //设置路由
    routes:[
        {
            path:"/home",
            component: Home,
            meta:{
                isShowFooter: true,
            }
        },
        {
            path:"/login",
            component: Login,
            meta:{
                isShowFooter: false,
            }
        },
        {
            path:"/register",
            component: Register,
            meta:{
                isShowFooter: false,
            }
        },
        {
            name:"search",
            path:"/search/:keyword?",
            component: Search,
            meta:{
                isShowFooter: true,
            }
        },
        //重定向，网页初始化的时，访问/，立刻定向到首页/home
        {
            path:"*",
            redirect:"/home"
        },
    ]
});