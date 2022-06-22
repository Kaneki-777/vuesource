/*
 * @Desc:
 * @version:
 * @Date: 2022-06-11 10:18:45
 * @LastEditTime: 2022-06-22 10:10:00
 */
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门',
      placeholder: '请输入上级部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入领导'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
