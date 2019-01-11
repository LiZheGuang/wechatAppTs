//index.js
//获取应用实例
let app = getApp()

console.log('213')
console.log(app)

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(){
    this.testInfo(15)
  },
  testInfo(age:Number){
      console.log(age)
  }
})
