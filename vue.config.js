/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 08:54:17
 * @LastEditTime: 2022-06-02 10:36:39
 */
const { defineConfig } = require('@vue/cli-service')
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
  // 1.vue cli 配置
  outputDir: './build',
  // 2.webpack属性完全一致，最后会合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
}
