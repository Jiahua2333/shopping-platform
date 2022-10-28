<template>
    <div>
        <!-- 三级联动全局组件 -->
        <TypeNav />
        <ListContainer />
        <Recommend />
        <Rank />
        <Like />
        <Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
        <Brand />
    </div>
</template>

<script>

import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from 'vuex';

export default {
    name: "Home",
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted(){
        this.$store.dispatch("aboutHome/getFloorList")
    },
    computed:{
        ...mapState("aboutHome", ["floorList"]),
    },
};
</script>

<style></style>
