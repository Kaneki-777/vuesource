/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 08:54:17
 * @LastEditTime: 2022-06-06 10:12:15
 */
// const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// export const aa = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  // defineConfig: defineConfig({
  //   transpileDependencies: true
  // }),
  // 配置1.vue cli 配置
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 配置2.webpack属性完全一致，最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // 配置3
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
}
