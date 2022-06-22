/*
 * @Desc:
 * @version:
 * @Date: 2022-05-30 16:45:25
 * @LastEditTime: 2022-06-20 08:40:37
 */

// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://123.207.32.32:8000/'
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.rog/dev'
} else {
  BASE_URL = 'http://coderwhy.rog/dev'
}

export { BASE_URL, TIME_OUT }
