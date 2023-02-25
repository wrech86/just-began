// utils/automatic-cooker/automatic-cooker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:["/public/image/off-white.png","/public/image/off-black.png"],
    photo:"/public/image/off-white.png",
    red:true,
    islooked:false,
    mintueone:["鱼香肉丝","红烧排骨","蒜苔炒肉"],
    mintuetwo:["蒜香茄子","酸辣土豆","麻婆豆腐"],
    food:""
  },
  onLoad(){
   this.changeoof()
  },
  onShow(){
   
  },
  onUnload(){
    getCurrentPages()[0].setData({
      minute:this.data.actualmin
    })
  },
  changeoof(){
    this.setData({red:!this.data.red})
    if(this.data.red==false){
      this.setData({photo:this.data.image[0]})
    }else{
      this.setData({photo:this.data.image[1]})
      this.setData({red:"red"})
    }
  },
  btnone(event){
    this.setData({
      islooked:false,
      actualmin:this.data.mintueone[event.currentTarget.id]
    })
  },
  btntwo(event){
    this.setData({
      islooked:false,
      actualmin:this.data.mintuetwo[event.currentTarget.id]
    })
  },
  setTime(){
    this.setData({
      islooked:true
    })
  },
  back(){
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
 
    let prevPage = pages[ pages.length - 2 ];  
     
    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
     
    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
     
      isredAutomaticCooker:this.data.red
     
    })

    wx.navigateBack({
      delta: 1,
    })
  }
  
 
})