- UMD （Universal Module Definition）统一模式规范。
- 目标实现提供一个前后端跨平台的解决方案。
- 实现原理
1. 先判断是否为amd环境。
2. 然后判断是否为Node.js环境。
3. 最后默认为浏览器环境。
模块头部
```
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //    methods
    function myFunc(){};

    //    exposed public method
    return myFunc;
}));

```
