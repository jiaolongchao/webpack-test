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

#minify
minify: {
    removeComments: true,//删除注释
    collapseWhitespace: true,//删除空格
}
自动化生成项目中的html
通过new webpacklpugin 对应entry中入口的文件

#loader
简述loader和plugin的区别
使用loader可以处理webpack不支持的各种语法
也可以同步和异步
可以在nodejs下运行
通过正则表达式来指定文件名
可以通过npm来安装

#postcss-loader
loader:"style-loader!css-loader?importLoaders=1!postcss-loader"
importLoader=1可以处理在Css文件中通过import引入进来的文件

#file-loader
在模板中如果要引用相对路径的图片文件可以使用${require('../../assets/bg.png')} 这种方法
url-loader 当你的文件大于一个指定的limit值的时候 会直接使用file-loader 当小于这个值的时候会自动将文件转换为一个base64位的编码