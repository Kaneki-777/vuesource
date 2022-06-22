/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 08:54:17
 * @LastEditTime: 2022-06-20 08:41:10
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// import './service/axios_demo'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'

import router from './router'
import store from './store'
import { globalRegister } from './global'
// import hyRequest from './service'
import { setupStore } from './store'

const app = createApp(App)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn
})
setupStore()
app.use(globalRegister)
app.use(router)
app.mount('#app')

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的res')
//       return res
//     }
//   }
// })

// interface DataType {
//   data: any
//   success: boolean
// }
// hyRequest
//   .get<DataType>({
//     url: '/home/multidata',
//     showLoading: true
//   })
//   .then((res) => {
//     // console.log(res.data)
//     // console.log(res.returnCode)
//     console.log(res.success)
//   })
console.log(process.env.NODE_ENV)
