// pages/home/home.js
import *as echarts from "../../ec-canvas/echarts"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parameter:{
      lazyLoad:true
    },
    someNumber:{
      tem:20,     //温度
      intem:15,
      hum:50,    //湿度
      oxy:30,    //氧气
      wea:"晴天",  //天气
      purple:3, //紫外线
      wind:2,       //风级
      wdir:"东南" ,  //风向
      pm:"66"
    },
    someText:{
      tem:"",     //温度
      intem:"温度适宜",
      hum:"",    //湿度
      oxy:"",    //氧气
      wea:"",  //天气
      purple:"", //紫外线
      wind:"",       //风级 
      pm:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.component = this.selectComponent("#myCharts")
    this.suggest(this.data.someNumber,this.data.someText)
    this.init(this.data.someNumber,this.data.someText)
   
  },
  init(someNumber,someText){
    this.component.init((canvas,width,height,dpr)=>{
      const chart = echarts.init(canvas,null,{
        width:width,
        height:height,
        devicePixeRatio:dpr
      })
      let option = getOption(someNumber,someText)
      chart.setOption(option)
      this.chart=chart
      return chart
    })
  },
  suggest(someNumber,someText){
    if(someNumber.tem>=30){
      someText.tem="天气炎热，请着清凉衣物"
    }else if(someNumber.tem>=15&&someNumber.tem<30){
      someText.tem="天气凉爽，适合野外郊游"
    }else if(someNumber.tem>=0&&someNumber.tem<15){
      someText.tem="天气寒冷，请着暖和衣物"
    }else if(someNumber.tem<0){
      someText.tem="天气严寒，请减少不必要外出"
    }

    if(someNumber.purple>=2){
      someText.purple="紫外线强烈，请注意防晒"
    }
    
    if(someNumber.hum<=30){
      someText.hum="湿度过低，已帮您打开加湿器，请注意饮水"
    }else if(someNumber.hum<=60&&someNumber.hum>30){
      someText.hum="湿度适宜"
    }else if(someNumber.hum>60){
      someText.hum="湿度过高，已帮您打开窗户，关闭加湿器，请注意通风"
    }

    if(someNumber.wea==="小雨"){
      someText.wea="未来可能会下小雨，外出请带伞，记得收晾晒的衣物"
    }else if(someNumber.wea==="中雨"){
      someText.wea="未来可能会下中雨，外出请带伞，记得收晾晒的衣物"
    }else if(someNumber.wea==="大雨"){
      someText.wea="未来可能会下大雨，外出请带伞，记得收晾晒的衣物"
    }else if(someNumber.wea==="暴雨"){
      someText.wea="未来可能会下暴雨，外出请带伞，记得收晾晒的衣物"
    }else if(someNumber.wea==="小雪"){
      someText.wea="未来可能会下小雪，外出请带伞，记得收晾晒的衣物"
    }else if(someNumber.wea==="中雪"){
      someText.wea="未来可能会下中雪，外出请带伞，注意防滑，记得收晾晒的衣物"
    }else if(someNumber.wea==="大雪"){
      someText.wea="未来可能会下大雪，外出请带伞，注意防滑，记得收晾晒的衣物"
    }else if(someNumber.wea==="暴雪"){
      someText.wea="未来可能会下暴雨，避免外出"
    }else if(someNumber.wea==="晴天"){
      someText.wea="太阳当空照，花儿对我笑"
    }else if(someNumber.wea==="多云"){
      someText.wea="即使现在乌云密布，但也不妨碍它过会万里晴空"
    }else if(someNumber.wea==="扬沙"){
      someText.wea="出门请戴眼镜，带好口罩"
    }
    
    if(someNumber.oxy<=18){
      someText.oxy="氧气浓度偏低，已为您打开制氧机"
    }else if(someNumber.oxy<=21&&someNumber.oxy>18){
      someText.oxy="氧气浓度始终，可以进行高效率的工作，睡眠等"
    }else if(someNumber.oxy>21){
      someText.oxy="氧气浓度偏高，已为您打开窗户，关闭制氧机"
    }

    if(someNumber.pm<=50){
      someText.pm="优，空气良好，祝您心情愉悦"
    }else if(someNumber.pm<=100&&someNumber.pm>50){
      someText.pm="良，空气良好，祝您心情愉悦"
    }else if(someNumber.pm<=150&&someNumber.pm>100){
      someText.pm="轻度污染，建议佩戴口罩出门"
    }else if(someNumber.pm<=200&&someNumber.pm>150){
      someText.pm="中度污染，出门请戴口罩，已为您打开空气净化器"
    }else if(someNumber.pm<=300&&someNumber.pm>200){
      someText.pm="重度污染，减少不必要外出，已为您关闭门窗，打开空气净化器"
    }else if(someNumber.pm<=500&&someNumber.pm>300){
      someText.pm="严重污染，避免外出，已经为您打开空气净化器"
    }else if(someNumber.pm>500){
      someText.pm="超出指标，建议您换个城市生活"
    }

    if(someNumber.wind<=2){
      someText.wind="微风拂面，可以出门耍个帅咯"
    }else if(someNumber.wind<=4&&someNumber.wind>2){
      someText.wind="风力较大"
    }else if(someNumber.wind<=6&&someNumber.wind>4){
      someText.wind="大风天气，请注意收晾晒的衣物"
    }else if(someNumber.wind>6){
      someText.wind="暴风天气，避免外出"
    }
  }
})
function getOption(someNumber,someText){
  return{
    backgroundColor: '#fff',
    tooltip: {},
    animationDurationUpdate: function (idx) {
      return idx * 200;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
      type: 'graph',
      layout: 'force',
      force: {
        repulsion: 500,
        edgeLength: 10
      },
      roam: true,
      label: {
        normal: {
          show: true
        }
      },
      data: [{
        "name": "室内温度:"+someNumber.intem+"℃",
        "value": someText.intem,
        "symbolSize": 100,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#F55555",
            "color": "#F55555"
          }
        }

      }, {
        "name": "室外温度:"+someNumber.tem+"℃",
        "value": someText.tem,
        "symbolSize": 73,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#5EFCE8",
            "color": "#5EFCE8"
          }
        }
      }, {
        "name": "湿度:"+someNumber.hum+"%",
        "value": someText.hum,
        "symbolSize": 80,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#9708CC",
            "color": "#9708CC"
          }
        }
      }, {
        "name": "氧气浓度:"+someNumber.oxy+"%",
        "value": someText.oxy,
        "symbolSize": 90,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#49C628",
            "color": "#49C628"
          }
        }
      }, {
        "name": someNumber.wea,
        "value": someText.wea,
        "symbolSize": 88,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#FFCF71",
            "color": "#FFCF71"
          }
        }
      }, {
        "name": "风级:"+someNumber.wind+"级",
        "value": someText.wind,
        "symbolSize": 55,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#69ff97",
            "color": "#69ff97"
          }
        }
      }, {
        "name": "紫外线强度:"+someNumber.purple,
        "value": someText.purple,
        "symbolSize": 70,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#FAB2FF",
            "color": "#FAB2FF"
          }
        }
      },{
        "name": "风向:"+someNumber.wdir,
        "value": someNumber.wdir,
        "symbolSize": 60,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#FFF720",
            "color": "#FFF720"
          }
        }
      },{
        "name": "空气质量:"+someNumber.pm,
        "value": someText.pm,
        "symbolSize": 60,
        "draggable": true,
        "itemStyle": {
          "normal": {
            "shadowBlur": 100,
            "shadowColor": "#EEAD92",
            "color": "#EEAD92"
          }
        }
      }]
    }]
  }
}
