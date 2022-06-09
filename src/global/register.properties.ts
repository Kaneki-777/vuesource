/*
 * @Desc:
 * @version:
 * @Date: 2022-06-08 17:51:30
 * @LastEditTime: 2022-06-08 18:03:02
 */
/*
 * @Desc:
 * @version:
 * @Date: 2022-06-08 17:51:30
 * @LastEditTime: 2022-06-08 17:53:14
 */
import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function refisterProperties(app: App) {
  app.config.globalProperties.$filter = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
