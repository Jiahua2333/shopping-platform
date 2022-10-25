<template>
    <div class="outer">
        <Header></Header>
        <!-- 路由出口 -->
        <router-view></router-view>
        <!-- 只有在主页和搜索页面显示Footer组件 -->
        <Footer v-show="$route.meta.isShowFooter"></Footer>
    </div>
</template>

<script>

    import Header from "./components/Header";
    import Footer from "./components/Footer";

    export default {
        name: "App",
        components: {
            Header,Footer,
        },
        mounted(){
            // console.log(this.$store);
            //派发一个action||获取商品分类的三级列表的数据
            this.$store.dispatch('aboutHome/getCategoryList');
        }
    };
</script>
