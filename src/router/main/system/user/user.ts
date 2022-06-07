/*
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:04:39
 * @LastEditTime: 2022-06-07 12:03:13
 */
const user = () => import('@/views/main/system/user/user.vue')
export default {
  path: '/main/system/user',
  name: 'user',
  component: user,
  children: []
}
