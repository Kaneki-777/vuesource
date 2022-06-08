/*
 * @Desc:
 * @version:
 * @Date: 2022-06-08 15:26:17
 * @LastEditTime: 2022-06-08 15:46:31
 */
import hyRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
