<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-07 12:25:28
 * @LastEditTime: 2022-06-13 09:11:44
-->
<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span>{{ name }} </span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><Apple /></el-icon>登录</el-dropdown-item
          >
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item @click="handleExitClick">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Apple } from '@element-plus/icons-vue'
import { useStore } from '@/store'

import localCache from '@/utils/cache'
import router from '@/router'

export default defineComponent({
  name: 'user-info',
  components: {
    Apple
  },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
