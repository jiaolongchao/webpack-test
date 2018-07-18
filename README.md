#webpack 教程

借用插件html-webpack-plugin 来解决的打包完的js文件中每次hash值变化的问题

const path = require('path');
module.exports = {
    entry:'./src/script/main.js', //打包的入口文件
    output:{
        path:path.resolve(__dirname, './dist/js'),        
        filename:'bundle.js'
    }
}