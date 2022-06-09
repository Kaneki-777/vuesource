import { App } from 'vue'

import refisterProperties from './register.properties'

export function globalRegister(app: App): void {
  app.use(refisterProperties)
}
