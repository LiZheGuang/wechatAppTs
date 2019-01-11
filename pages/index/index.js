"use strict";
//index.js
//获取应用实例
var app = getApp();
console.log('213');
console.log(app);
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
        });
    },
    onLoad: function () {
        this.testInfo(15);
    },
    testInfo: function (age) {
        console.log(age);
    }
});
