/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 10:14:29
 * @LastEditTime: 2022-06-06 16:10:07
 */

import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
