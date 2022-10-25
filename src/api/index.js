//统一管理项目接口的模块
//引入二次封装的axios实例（带有请求，响应拦截器）
import requests from "./ajax";

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
export const requestCategoryList = () =>  requests.get(`/product/getBaseCategoryList`);