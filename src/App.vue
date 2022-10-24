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
    };
</script>
