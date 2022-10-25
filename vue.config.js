const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭ESLINT校验工具，需要重启项目
  lintOnSave: false,
  // 配置代理，解决跨域问题
  devServer:{
    proxy:{
      "/api":{
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  }
})
