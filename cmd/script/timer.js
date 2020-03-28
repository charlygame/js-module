// 自定义模块
define(function(require, exports, module) {

    var $ = require('jquery');
    function showTime() {
        setInterval(() => {
            var date = new Date();
            $('#container').html(date.toTimeString());
        })     
    }
    exports.showTime = showTime;
});