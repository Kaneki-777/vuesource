/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 10:14:29
 * @LastEditTime: 2022-06-08 15:03:15
 */

import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
