<!--
 * @Desc:
 * @version:
 * @Date: 2022-06-06 19:11:30
 * @LastEditTime: 2022-06-13 14:31:29
-->
<template>
  <div class="dashboard">
    <div ref="divRef" :style="{ width: '600px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    onMounted(() => {
      // 1.初始化echarts实例
      const echartInstance = echarts.init(divRef.value!, 'light', {
        renderer: 'svg'
      })
      // 2.编写配置文件
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 3. 设置配置，开始绘制
      echartInstance.setOption(option)
    })
    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
