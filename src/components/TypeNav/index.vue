<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex" @mouseenter="enterIndex">
                <h2 class="all">全部商品分类</h2>
                <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click.prevent="goSearch">
                        <div
                            class="item"
                            v-for="(c1, index) in categoryList"
                            :key="c1.categoryId"
                        >
                            <h3
                                @mouseenter="changeIndex(index)"
                                :class="{ cur: currIndex === index }"
                            >
                                <a
                                    :data-categoryName="c1.categoryName"
                                    :data-category1Id="c1.categoryId"
                                    href=""
                                >
                                    {{ c1.categoryName }}</a
                                >
                            </h3>
                            <div
                                class="item-list clearfix"
                                :style="{
                                    display:
                                        currIndex === index ? 'block' : 'none',
                                }"
                            >
                                <div class="subitem">
                                    <dl
                                        class="fore"
                                        v-for="c2 in c1.categoryChild"
                                        :key="c2.categoryId"
                                    >
                                        <dt>
                                            <a
                                                :data-categoryName="c2.categoryName"
                                                :data-category2Id="c2.categoryId"
                                                href=""
                                            >
                                                {{ c2.categoryName }}</a
                                            >
                                        </dt>
                                        <dd>
                                            <em
                                                v-for="c3 in c2.categoryChild"
                                                :key="c3.categoryId"
                                            >
                                                <a
                                                    :data-categoryName="
                                                        c3.categoryName
                                                    "
                                                    :data-category3Id="c3.categoryId"
                                                    href=""
                                                >
                                                    {{ c3.categoryName }}</a
                                                >
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
//按需引入：只是引入节流函数，其他的函数没有引入（模块），这样做的好处是，当你打包项目的时候体积会小一些
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
    name: "TypeNav",
    data() {
        return {
            //用于标识当前鼠标在那个类别
            currIndex: -1,
            //让subitem显示
            show: true,
        };
    },
    methods: {
        //throttle节流函数，在一段时间n（50毫秒），回调函数只执行一次
        //debounce防抖函数，用户在一段时间内多次触发回调函数，只有最后一次能执行，之前的都会去除
        changeIndex: throttle(function (index) {
            this.currIndex = index;
            // console.log(this.currIndex);
        }, 50),
        leaveIndex() {
            this.currIndex = -1;
            if(this.$route.path !== "/home") this.show = false;

        },
        enterIndex(){
            //直接下一行便有同样的功能？
            // this.show = true;
            if (this.$route.path !== "/home") {
                this.show = true;
            }
        },
        //路由跳转，可以用声明式方法<route-link></route-link>，但时由于此类时组件，在数量多的时候，占用内存会很大
        //goSeach可以绑定在每个item的a标签里，但是数量多的时候，会造成许多个goSeach回调函数，占用内存也比较大
        //把gosearch绑定在包含所有a标签的标签里，实现事件委托
        /**
         * 实现事件委托要解决的问题：
         * 1.如何区分a标签
         * 2.找到a标签，但如何区分一级，二级，三级分类
         */
        goSearch(event) {
            //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
            const {categoryname, category1id,category2id,category3id} = event.target.dataset;
            // console.log(categoryname, category1id,category2id,category3id);

            //第二个问题解决了：点击的到底是不是a标签（只要这个标签身上带有categoryname）一定是a标签
            if(categoryname){
                const location = {name:'search'};
                const query = {categoryName:categoryname};
                if(category1id) query.category1id = category1id;
                else if(category2id) query.category2id = category2id;
                else query.category3id = category3id;

                // console.log(query);
                location.query = query;
                // console.log(location);
                this.$router.push(location);
            }
        },
    },
    computed: {
        ...mapState("aboutHome", ["categoryList"]),
    },
    mounted() {
        if(this.$route.path !== "/home") this.show = false;
    },
};
</script>

<style lang="less" scoped>
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        // &:hover{
                        //     background-color:aqua;
                        // }
                        &.cur {
                            background-color: skyblue;
                        }

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    // &:hover {
                    //     .item-list {
                    //         display: block;
                    //     }
                    // }
                }
            }
        }
    }
}
</style>
