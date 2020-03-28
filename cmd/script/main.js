// 自定义模块
define(function(require, exports, module) {
    var $ = require('jquery');
    var timer = require('./timer');
    timer.showTime();
})