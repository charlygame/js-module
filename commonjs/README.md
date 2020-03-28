CommonJs规范
- 同步模块加载规范，也就是说只有加载完成，才能执行后面的操作。Node.js遵循CommonJS规范，Node.js的模块文件都会提前通过`npm install` 下载到本地，所以同步加载也很快。