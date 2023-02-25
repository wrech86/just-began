export default function request(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: option.url,
      methods:option.methods||'get',
      data:option.data||{},
      success:function(res){
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}