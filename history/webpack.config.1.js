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
    // 1)源码映射:会单独生成一个sourcemap文件 
    // 出错了的话会标识当前的列和行
    devtool:'source-map',
    // 2)不会产生单独的文件  但是可以显示行和列
    // devtool:'eval-source-map',
    // 3)  不会产生列 是一个单独的映射文件
    // devtool:'cheap-module-source-map',
    // 4) 不会产生文件 集成在打包文件中，不会产生列
    devtool:'cheap-module-eval-source-map',
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