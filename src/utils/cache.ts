/*
 * @Desc:
 * @version:
 * @Date: 2022-06-05 09:47:28
 * @LastEditTime: 2022-06-05 09:55:39
 */
class localCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new localCache()
