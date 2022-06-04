/*
 * @Desc:
 * @version:
 * @Date: 2022-05-30 16:45:25
 * @LastEditTime: 2022-06-02 10:24:04
 */
let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.rog/dev'
} else {
  BASE_URL = 'http://coderwhy.rog/dev'
}

export { BASE_URL, TIME_OUT }
