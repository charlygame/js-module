// 模块的使用
require.config({
    baseUrl: 'libs',
    paths: {
        jquery: 'jquery-3.4.1'
    }
});

require(['jquery', 'script/timer.js'], function($, timer) {

    timer.showTime();
})
