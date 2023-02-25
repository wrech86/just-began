<template>
<div class="pm"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';
onMounted(()=>{
var chartDom = document.querySelector('.pm')
var myChart = echarts.init(chartDom);

var option;

option = {
  title: {
    text: 'PM2.5'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['室外', '室内']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '室外',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '室内',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};

option && myChart.setOption(option);
})
</script>

<style  scoped>
.pm{
  width: 375px;
  height: 575px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>