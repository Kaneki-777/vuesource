/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 08:54:17
 * @LastEditTime: 2022-06-02 18:34:47
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './service/axios_demo'

import App from './App.vue'

import router from './router'
import store from './store'
import hyRequest from './service'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
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

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: true
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
