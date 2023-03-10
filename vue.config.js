const { defineConfig } = require('@vue/cli-service')

const timeStamp = new Date().getTime()

module.exports = defineConfig({
  publicPath:"./",  // apk 打包
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/d
        // target: 'http://192.168.0.113:8188/',
        target: 'http://172.16.65.249/',   // 测试环境
        // target: 'http://172.16.21.234:80/',   // 老左


        // target:process.env.VUE_APP_SERVER_API_BASE,
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': '/'
          // '^/stage-api': '/dev-api'
        }
      },
    }
  },
  configureWebpack:{
    output: {
      filename: `js/js[name].${timeStamp}.js`,
      chunkFilename: `js/chunk.[id].${timeStamp}.js`,
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    extract: {
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/chunk.[id].${timeStamp}.css`,
    }
  }
})
