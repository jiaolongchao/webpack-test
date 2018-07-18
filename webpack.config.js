const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com' //上线时路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head', //指定引入标签的位置
            title: 'webpack is good',
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格
            }
        })
    ]
}