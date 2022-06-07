/*
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:05:14
 * @LastEditTime: 2022-06-07 12:02:55
 */
const role = () => import('@/views/main/system/role/role.vue')
export default {
  path: '/main/system/role',
  name: 'role',
  component: role,
  children: []
}
