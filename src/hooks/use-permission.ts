/*
 * @Desc:
 * @version:
 * @Date: 2022-06-10 10:04:28
 * @LastEditTime: 2022-06-10 10:09:43
 */
import { useStore } from '@/store'

export function usePermisson(pageName: string, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  return !!permissions?.find((item) => item === verifyPermission)
}
