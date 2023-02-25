// pages/equipment/equipment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      airCleaner:{
        isred:""
      },
      airConditioner:{
        isred:""
      },
      automaticCooker:{
        isred:""
      },
      bedroomLight:{
        isred:""
      },
      curtain:{
        isred:""
      },
      drawingRoomLight:{
        isred:""
      },
      electricCooker:{
        isred:""
      },
      floorMoppingRobot:{
        isred:""
      },
      tableLamp:{
        isred:""
      },
      toiletLight:{
        isred:""
      },
      waterHeater:{
        isred:""
      }
  },
  onload(){
  },
  onShow(){
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];
    this.setData({
     airCleaner:{
      isred:currPage.__data__.isredAirCleaner
     },
     airConditioner:{
      isred:currPage.__data__.isredAirConditioner
    },
    automaticCooker:{
      isred:currPage.__data__.isredAutomaticCooker
    },
    bedroomLight:{
      isred:currPage.__data__.isredBedroomLight
    },
    curtain:{
      isred:currPage.__data__.isredCurtaint
    },
    drawingRoomLight:{
      isred:currPage.__data__.isredDrawingRoomLight
    },
    electricCooker:{
      isred:currPage.__data__.isredElectricCooker
    },
    floorMoppingRobot:{
      isred:currPage.__data__.isredFloorMoppingRobot
    },
    oxyGenerator:{
      isred:currPage.__data__.isredOxyGenerator
    },
    tableLamp:{
      isred:currPage.__data__.isredTableLamp
    },
    toiletLight:{
      isred:currPage.__data__.isredToiletLight
    },
    waterHeater:{
      isred:currPage.__data__.isredWaterHeater
    }
    })
  },
  handleAirCleaner(){
    wx.navigateTo({
      url: '/utils/air-cleaner/air-cleaner',
    })
  },
  handleOxyGenerator(){
    wx.navigateTo({
      url: '/utils/oxy-generator/oxy-generator',
    })
  },
  handleAirConditioner(){
    wx.navigateTo({
      url: '/utils/air-conditioner/air-conditioner',
    })
  },
  handleElectricCooker(){
    wx.navigateTo({
      url: '/utils/electric-cooker/electric-cooker',
    })
  },
  handleAutomaticCooker(){
    wx.navigateTo({
      url: '/utils/automatic-cooker/automatic-cooker',
    })
  },
  handleWaterHeater(){
    wx.navigateTo({
      url: '/utils/water-heater/water-heater',
    })
  },
  handleFloorMoopingRobot(){
    wx.navigateTo({
      url: '/utils/floor-mopping-robot/floor-mopping-robot',
    })
  },
  handleCurtain(){
    wx.navigateTo({
      url: '/utils/curtain/curtain',
    })
  },
  handleTableLamp(){
    wx.navigateTo({
      url: '/utils/table-lamp/table-lamp',
    })
  },
  handleBedroomLight(){
    wx.navigateTo({
      url: '/utils/bedroom-light/bedroom-light',
    })
  },
  handleDrawingRoomLight(){
    wx.navigateTo({
      url: '/utils/drawing-room-light/drawing-room-light',
    })
  },
  handleToiletLight(){
    wx.navigateTo({
      url: '/utils/toilet-light/toilet-light',
    })
  }
})