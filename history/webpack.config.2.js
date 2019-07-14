let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:{
        home:'./src/index'
    },
    module:{
        rules:[
            {
                test:/.\js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    watch:true, //事实打包文件
    watchOptions:{ //监控的选项
        poll:1000, // 一秒更新的次数
        aggreateTimeout: 500, // 防抖  500毫秒内打包一次
        ignored:/node_modules/ // 不需要进行监控
    },
    output:{
        // [name] home other
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            templata:'./index.html',
            filename:'index.html',
        })
    ]
}