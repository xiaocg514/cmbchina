//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          wx.setStorage({
            key: "wxCode",
            data: res.code,
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

})