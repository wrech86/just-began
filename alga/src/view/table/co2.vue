<template>
<div class="co"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as echarts from 'echarts';
onMounted(()=>{
var chartDom = document.querySelector('.co')
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'CO₂(ppm)'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  },
  visualMap: {
    type: 'piecewise',
    show: false,
    dimension: 0,
    seriesIndex: 0,
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: 'rgba(0, 0, 180, 0.4)'
      },
      {
        gt: 5,
        lt: 7,
        color: 'rgba(0, 0, 180, 0.4)'
      }
    ]
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,
      symbol: 'none',
      lineStyle: {
        color: '#5470C6',
        width: 5
      },
      markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
      },
      areaStyle: {},
      data: [
        ['0', 400],
        ['周一', 890],
        ['周二', 650],
        ['周三', 999],
        ['周四', 780],
        ['周五', 1100],
        ['周六', 1400],
        ['周日',1200]
      ]
    }
  ]
};

option && myChart.setOption(option);

})
</script>

<style  scoped>
.co{
  width: 375px;
  height: 575px;
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>