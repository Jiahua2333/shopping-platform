import axios from "axios";
import nProgress from "nprogress";

import "nprogress/nprogress.css";

const mockRequests = axios.create({
    baseURL:"/mock",
    timeout:5000,
});

mockRequests.interceptors.request.use((config) => {
    nProgress.start();
    return config;
});

mockRequests.interceptors.response.use(
    (res) => {
        nProgress.done();
        return res.data;
    },
    (err)=>{
        alert("服务器响应数据失败")
    },
);

export default mockRequests;