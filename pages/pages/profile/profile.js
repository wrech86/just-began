// pages/profile/profile.js
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
      data: [600, 500, 530, 780, 480, 510, 500],
      type: 'line',
      smooth: true
  }]
  }
}
