/*
 * @Desc:
 * @version:
 * @Date: 2022-05-30 16:45:25
 * @LastEditTime: 2022-06-06 10:11:28
 */
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
