// utils/floor-mopping-robot/floor-mopping-robot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:["/public/image/off-white.png","/public/image/off-black.png"],
    photo:"/public/image/off-white.png",
    red:true,
    islooked:false,
    isset:true,
    istime:false,
    mintueone:[10,30,45],
    mintuetwo:[60,90,120],
    hour:"",
    min:"",
    sec:"",
    actualmin:""
  },
  onLoad(){
   this.changeoof()
  },
  onShow(){
   
  },
  onUnload(){
    getCurrentPages()[0].setData({
      minuteAirCleaner:this.data.actualmin
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
      istime:true,
      isset:false,
      actualmin:this.data.mintueone[event.currentTarget.id]
    })
    this.timerhandle(this.data.actualmin*60)
    this.changeoof()
  },
  btntwo(event){
    this.setData({
      islooked:false,
      istime:true,
      isset:false,
      actualmin:this.data.mintuetwo[event.currentTarget.id]
    })
    this.timerhandle(this.data.actualmin*60)
    this.changeoof()
  },
  setTime(){
    this.setData({
      islooked:true,
    })
  },
  back(){
    let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
 
    let prevPage = pages[ pages.length - 2 ];  
     
    //prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
     
    prevPage.setData({  // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
      isredFloorMoppingRobot:this.data.red
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  timerhandle(timeSeconds){
    if (timeSeconds){
      let h=parseInt(timeSeconds / 60 / 60 % 24)
      let m=parseInt(timeSeconds/60%60)
      let s=parseInt(timeSeconds % 60)
      this.setData({
        hour:h<10?'0'+h:h,
        min:m<10?'0'+m:m,
        sec:s<10?'0'+s:s
      },()=>{
        let timer = setInterval(() => {
          timeSeconds--
          // 倒计时到0，可以加入自定义函数处理
         let h=parseInt(timeSeconds / 60 / 60 % 24)
         let m=parseInt(timeSeconds/60%60)
         let s= parseInt(timeSeconds % 60)
          this.setData({
            hour:h<10?'0'+h:h,
            min:m<10?'0'+m:m,
            sec:s<10?'0'+s:s
          })
          if (!this.data.red||timeSeconds <= 0) {
            clearInterval(timer)
            this.setData({
              sec:"00",
              min:"00",
              hour:"00",
              isset:true,
              istime:false
            })
          }
        }, 1000)
      })
    }
  }
})