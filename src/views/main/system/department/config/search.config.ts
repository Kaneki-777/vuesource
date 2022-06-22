/*
 * @Desc:
 * @version:
 * @Date: 2022-06-09 14:33:34
 * @LastEditTime: 2022-06-22 08:43:30
 */
import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '部门介绍',
      placeholder: '请输入部门介绍'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
