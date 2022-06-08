/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 11:28:21
 * @LastEditTime: 2022-06-08 15:44:46
 */
export interface IAccount {
  nameL: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}
