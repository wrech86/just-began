<template>
  <div class="hum"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(()=>{
var chartDom = document.querySelector('.hum')
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
      text: '湿度变化'
    },
  xAxis: {
    type: 'category',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [30,34,57,60,40,50,45],
      type: 'bar',
      smooth: true,
       itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
    }
  ]
};

option && myChart.setOption(option);
})

</script>

<style  scoped>
.hum{
  width: 375px;
  height: 600px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>