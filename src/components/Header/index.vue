<template>
    <!-- 头部 -->
    <header class="header">
        <!-- 头部上层 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎你！</p>
                    <p>
                        <span>请</span>
                        <router-link to="/login" href="#">登录</router-link>
                        <router-link to="/register" href="#" class="register"
                            >免费注册</router-link
                        >
                    </p>
                </div>
                <div class="typeList">
                    <a href="#">我的订单</a>
                    <a href="#">我的购物车</a>
                    <a href="#">我的尚品汇</a>
                    <a href="#">尚品汇会员</a>
                    <a href="#">企业采购</a>
                    <a href="#">关注尚品汇</a>
                    <a href="#">合作招商</a>
                    <a href="#">商家后台</a>
                </div>
            </div>
        </div>
        <!-- 头部下层 -->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link class="logo" to="/home">
                    <img src="./logo.png" alt="尚品汇" />
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input
                        type="text"
                        id="autocomplete"
                        class="input-error input-xxlarge"
                        v-model="keyword"
                    />
                    <button
                        class="sui-btn btn-xlarge btn-danger"
                        type="button"
                        @click="goSearch"
                    >
                        搜索
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data(){
        return{
            keyword:"",
        };
    },
    methods: {
        goSearch() {
            //路由传递参数
            //1. 字符串形式
            // this.$router.push("/search/" + this.keyword + "?k=" + this.keyword.toUpperCase());
            //2. 模板字符串形式
            // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
            //3. 对象
            this.$router.push({
                name: "search",
                params: {
                    keyword:this.keyword,
                },
                query:{
                    k:this.keyword.toUpperCase(),
                },
            });
        },
    },
};
</script>

<style lang="less" scoped>
.header {
    // &符号就表示对父选择器的引用（header > .top）
    // A>B{ }表示A标签的第一代子标签B,而第一代子标签B里面的所有B标签不会被选到
    & > .top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    //A+B{  }表示在A标签之后、紧挨着A标签的下一个兄弟标签B。
                    & + a {
                        border-left: 1px solid #b3aeae;
                    }
                }
            }
        }
    }

    & > .bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #ea4a36;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}

// .header {
//     & > .top {
//         background-color: #eaeaea;
//         height: 30px;
//         line-height: 30px;

//         .container {
//             width: 1200px;
//             margin: 0 auto;
//             overflow: hidden;

//             .loginList {
//                 float: left;

//                 p {
//                     float: left;
//                     margin-right: 10px;

//                     .register {
//                         border-left: 1px solid #b3aeae;
//                         padding: 0 5px;
//                         margin-left: 5px;
//                     }
//                 }
//             }

//             .typeList {
//                 float: right;

//                 a {
//                     padding: 0 10px;

//                     & + a {
//                         border-left: 1px solid #b3aeae;
//                     }
//                 }
//             }
//         }
//     }

//     & > .bottom {
//         width: 1200px;
//         margin: 0 auto;
//         overflow: hidden;

//         .logoArea {
//             float: left;

//             .logo {
//                 img {
//                     width: 175px;
//                     margin: 25px 45px;
//                 }
//             }
//         }

//         .searchArea {
//             float: right;
//             margin-top: 35px;

//             .searchForm {
//                 overflow: hidden;

//                 input {
//                     box-sizing: border-box;
//                     width: 490px;
//                     height: 32px;
//                     padding: 0px 4px;
//                     border: 2px solid #ea4a36;
//                     float: left;

//                     &:focus {
//                         outline: none;
//                     }
//                 }

//                 button {
//                     height: 32px;
//                     width: 68px;
//                     background-color: #ea4a36;
//                     border: none;
//                     color: #fff;
//                     float: left;
//                     cursor: pointer;

//                     &:focus {
//                         outline: none;
//                     }
//                 }
//             }
//         }
//     }
// }
</style>
