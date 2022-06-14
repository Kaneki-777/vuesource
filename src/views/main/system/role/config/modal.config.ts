/*
 * @Desc:
 * @version:
 * @Date: 2022-06-11 10:18:45
 * @LastEditTime: 2022-06-13 09:28:29
 */
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
