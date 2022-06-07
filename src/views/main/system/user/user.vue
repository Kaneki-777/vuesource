<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:04:39
 * @LastEditTime: 2022-06-07 15:06:16
-->
<template>
  <div class="user">
    <hy-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    HyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
