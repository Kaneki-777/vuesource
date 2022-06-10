/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 10:13:10
 * @LastEditTime: 2022-06-10 10:03:52
 */
export interface ILoginState {
  token: string
  age?: number
  userInfo: any
  userMenus: any
  permissions?: string[]
}
