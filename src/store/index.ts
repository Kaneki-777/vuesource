/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 10:51:32
 * @LastEditTime: 2022-06-06 11:49:01
 */
import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lrr'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
