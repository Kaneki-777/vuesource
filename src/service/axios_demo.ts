/*
 * @Desc:
 * @version:
 * @Date: 2022-05-30 16:09:53
 * @LastEditTime: 2022-05-30 16:45:44
 */
import axios from 'axios'
// axios的实例对象
// axios.get({
//   url: 'http://123.207.32.32:8000/home/multidata'
// })
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res.data)
// })

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'coder',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
// axios
//   .post('http://httpbin.org/post', {
//     params: {
//       name: 'coder',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios
  .get('/get', {
    params: {
      name: 'coder',
      age: 18
    },
    timeout: 5000
  })
  .then((res) => {
    console.log(res.data)
  })
axios
  .post('/post', {
    params: {
      name: 'coder',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

axios.interceptors.request.use(
  (config) => {
    console.log('成功')
    return config
  },
  (err) => {
    console.log('err')
    return err
  }
)

axios.interceptors.response.use(
  (config) => {
    console.log('成功')
    return config
  },
  (err) => {
    console.log('err')
    return err
  }
)
