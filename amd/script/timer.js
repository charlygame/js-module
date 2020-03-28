// 模块的定义
define(['jquery'], function($) {

    var moduleName = 'Timer';
    var moduleVersion = '1.0';

    var showTime = function () {
        setInterval(() => {
            let date = new Date();
            $("#container").html(date.toTimeString());
        })
    }

    return {
        moduleName: moduleName,
        version: moduleVersion,
        showTime: showTime
    }
});