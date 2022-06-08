/*
 * @Desc:
 * @version:
 * @Date: 2022-05-29 10:51:32
 * @LastEditTime: 2022-06-08 15:02:30
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'lrr',
      age: 25
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
