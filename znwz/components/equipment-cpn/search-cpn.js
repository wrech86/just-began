// components/equipment-cpn/search-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    value:""

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInput: function () {
      this.setData({
        inputShowed: true   //设置文本框可以输入内容
      })
  },
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },
  gopage(){
    switch(this.data.value){
      case "智能微藻空气净化器":
        wx.navigateTo({
          url: '/utils/air-cleaner/air-cleaner',
        });
        break;
      case "空调":
        wx.navigateTo({
          url: '/utils/air-conditioner/air-conditioner',
        });
        break;
      case "空调":
        wx.navigateTo({
          url: '/utils/air-conditioner/air-conditioner',
        });
        break;
      case "电饭煲":
        wx.navigateTo({
          url: '/utils/electric-cooker/electric-cooker',
        });
        break;
      case "炒菜机":
        wx.navigateTo({
          url: '/utils/automatic-cooker/automatic-cooker',
        });
        break;
      case "热水器":
        wx.navigateTo({
          url: '/utils/water-heater/water-heater',
        });
        break;
      case "扫地机器人":
        wx.navigateTo({
          url: '/utils/floor-mopping-robot/floor-mopping-robot',
        });
        break;
      case "窗帘":
        wx.navigateTo({
          url: '/utils/curtain/curtain',
        });
        break;
      case "台灯":
        wx.navigateTo({
          url: '/utils/table-lamp/table-lamp',
        });
        break;
      case "卧室灯":
        wx.navigateTo({
          url: '/utils/bedroom-light/bedroom-light',
        });
        break;
      case "客厅灯":
        wx.navigateTo({
          url: '/utils/drawing-room-light/drawing-room-light',
        });
        break;
      case "厕所灯":
        wx.navigateTo({
          url: '/utils/toilet-light/toilet-light',
        });
        break;
    }
  }
}
})
