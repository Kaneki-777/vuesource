/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 11:28:21
 * @LastEditTime: 2022-06-06 10:58:51
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

export interface IDataType<T = any> {
  acodege: number
  data: T
}
