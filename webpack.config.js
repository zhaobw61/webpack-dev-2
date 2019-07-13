let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 多入口
    mode:'development',
    entry:{
        home:'./src/index',
        other:'./src/other.js'
    },
    // 多出口：
    output:{
        // [name] home other
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            templata:'./index.html',
            filename:'home.html',
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            templata:'./index.html',
            filename:'other.html',
            chunks:['other','home']
        })
    ]
}