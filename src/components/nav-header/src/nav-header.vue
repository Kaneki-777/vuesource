<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 14:53:25
 * @LastEditTime: 2022-06-07 18:31:05
-->
<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 14:53:25
 * @LastEditTime: 2022-06-06 16:51:11
-->
<template>
  <div class="nav-header">
    <el-icon v-if="isFold" @click="handleFoldClick" class="isFold">
      <ArrowRightBold />
    </el-icon>
    <el-icon v-else @click="handleFoldClick" class="isFold"
      ><ArrowLeftBold
    /></el-icon>
    <div class="content">
      <div>
        <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    ArrowLeftBold,
    ArrowRightBold,
    UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据: [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      ArrowLeftBold,
      ArrowRightBold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .isFold {
    font-size: 20px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
