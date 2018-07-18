const path = require('path');
module.exports = {
    entry:'./src/script/main.js', //打包的入口文件
    output:{
        path:path.resolve(__dirname, './dist/js'),        
        filename:'bundle.js'
    }
}