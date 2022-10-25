//引入请求函数
import {reqGetCategoryList} from "@/api";

// 首页仓库
const state = { 
    categoryList: [],
};
// 首页actions，用户处理派发actions的地方，可用于异步语句，发送http请求
const actions = {
    //reqGetCategoryList返回一个Promise对象
    //需要异步操作，async 和 await
    async getCategoryList({commit}){
        const result = await reqGetCategoryList();
        if(result.code === 200){
            commit("GETCATEGORYLIST", result.data);
        }
    },
};
// 首页mutations,唯一能修改state的地方
const mutations = {
    GETCATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    },
};
// 首页计算属性
const getters = {

};

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters,
};

