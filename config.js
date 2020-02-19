/**
 * 小程序配置文件
 */

// 服务器域名
// var host = 'http://47.104.63.107:8080/';
var host = 'https://sbfweb.paas.cmbchina.com';
var imageUrlHost = 'https://sbfweb.paas.cmbchina.com';
var config = {
    service: {
        host,
        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 请求地址，用于交互
        requestUrl: `${host}/lc07sbfapplet/applet`,

        // 上传图片接口
        uploadUrl: `${imageUrlHost}/app/static/wechat/newcust/images`
    }
};

module.exports = config;
