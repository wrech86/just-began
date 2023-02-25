// pages/home/home.js
const app = getApp()

Page({
  wea(){
    wx.navigateTo({
      url: '../category/category',
    })
  },
  hum(){
    wx.navigateTo({
      url: '../profile/profile',
    })
  },
  PH(){
    wx.navigateTo({
      url: '../about/about',
    })
  }
})