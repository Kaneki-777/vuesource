<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:06:44
 * @LastEditTime: 2022-06-09 22:45:21
-->
<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  components: { PageContent },
  name: 'hy-menu',
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
