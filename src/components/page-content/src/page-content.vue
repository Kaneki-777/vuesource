<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-09 10:09:32
 * @LastEditTime: 2022-06-09 14:29:45
-->
<template>
  <div class="page-content">
    <hy-table :listData="dataList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="small">新建</el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <el-button size="small" type="primary" link>
          <el-icon><Edit /></el-icon>编辑
        </el-button>
        <el-button size="small" type="primary" link>
          <el-icon><Delete /></el-icon>删除
        </el-button>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import HyTable from '@/base-ui/table'

import { Edit, Delete } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    HyTable,
    Edit,
    Delete
  },
  setup(props) {
    const store = useStore()
    console.log(props.pageName, 'page-content')
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    return {
      dataList
    }
  }
})
</script>
<style lang="less" scoped></style>
