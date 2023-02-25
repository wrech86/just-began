// pages/category/category.js
import *as echarts from '../../ec-canvas/echarts'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lazyEc:{
      lazyLoad:true
    }
  },
  onLoad:function(){
    this.lazyComponent=this.selectComponent('#chart')
    this.init()
  },
  init(){
    this.lazyComponent.init((canvas,width,height,dpr)=>{
      let chart = echarts.init(canvas,null,{
        width:width,
        height:height,
        devicePixelRatio:dpr
      })
      let option = getOption()
      chart.setOption(option)
      this.chart=chart
      return chart
    })
  },
  
    back(){
      wx.navigateTo({
        url: '../home/home',
      })
    }
  
})
function getOption(){
  return{
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [21, 25, 20, 21, 18, 23, 17],
      type: 'line',
      smooth: true
  }]
  }
}
