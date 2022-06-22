<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:06:17
 * @LastEditTime: 2022-06-22 10:06:06
-->
<template>
  <div class="department">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      pageName="department"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="department"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  components: { PageSearch, pageContent, PageModal },
  name: 'department',
  setup() {
    // 3.调用hook获取公共变量
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      defaultInfo,
      pageModalRef,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
