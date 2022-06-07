/*
 * @Desc:
 * @version:
 * @Date: 2022-06-07 15:02:34
 * @LastEditTime: 2022-06-07 15:35:51
 */
type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
  itemStyle?: any
}
