const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js',
        //publicPath: 'http://cdn.com' //上线时路径
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'), //指定排除范围 节省时间
                include: [
                    resolve('src'),
                ],
                query: {
                    presets: ['latest']
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'url-loader',
                query: {
                    limit: 100000,
                    name: 'assets/[name]-[hash:5].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',

            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.sass$/,
                loader: 'style!css!postcss!less'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head', //指定引入标签的位置
            //title: 'webpack is good',            
        })
    ]
}