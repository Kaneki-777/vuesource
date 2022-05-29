<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Essential Links</h3>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}

</style>
