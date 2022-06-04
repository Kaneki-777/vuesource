/*
 * @Desc:
 * @version:
 * @Date: 2022-06-04 18:35:31
 * @LastEditTime: 2022-06-04 22:34:44
 */
export const rules = {
  name: [
    {
      required: true,
      message: '用户名必传',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必传',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是5~10个字母或者数字',
      trigger: 'blur'
    }
  ]
}
