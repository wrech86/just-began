<template>
  <div class="main"></div>

</template>

<script setup>
import { onMounted } from 'vue';

import * as echarts from 'echarts';

// 基于准备好的dom，初始化echarts实例

// 绘制图表

onMounted(() => {
  var myChart = echarts.init(document.querySelector('.main'));
  myChart.setOption({
    title: {
      text: '气温变化'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {},
   
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    series: [
      {
        name: '最高',
        type: 'line',
        data: [10, 11, 13, 11, 12, 12, 9],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: '最低',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          data: [
            { type: 'average', name: 'Avg' },
            [
              {
                symbol: 'none',
                x: '90%',
                yAxis: 'max'
              },
              {
                symbol: 'circle',
                label: {
                  position: 'start',
                  formatter: 'Max'
                },
                type: 'max',
                name: '最高点'
              }
            ]
          ]
        }
      }
    ]
  });
})
</script>

<style  scoped>
.main{
  width: 375px;
  height: 600px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>