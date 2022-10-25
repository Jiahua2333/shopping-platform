//对axios进行二次封装
import axios from "axios";
import nProgress from "nprogress";

//nProgress 需要进行样式引入
import 'nprogress/nprogress.css';

//创建一个axios的实例
const requests = axios.create({
    //基础路径
    baseURL:"/api",
    //请求不能超过5秒
    timeout:10000,
});

//请求拦截器，发送请求时（还没发出去）处理一些事情
requests.interceptors.request.use((config) =>{
    //config(配置对象)
    //请求进度条开始移动
    nProgress.start();
    return config;
});

// 响应拦截器，当服务器做出响应是会执行
requests.interceptors.response.use(
    (res) => {
        //响应成功时，进度条结束
        nProgress.done();
        //响应成功时，返回响应数据
        return res.data;
    },
    (err) => {
        console.log(err);
        alert("服务器响应失败");
    }
);

//暴露axios的一个实例
export default requests;