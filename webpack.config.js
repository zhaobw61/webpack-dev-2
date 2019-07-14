let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin =require('copy-webpack-plugin');
let webpack = require('webpack');
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
    output:{
        // [name] home other
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            templata:'./index.html',
            filename:'index.html',
        }),
        new CleanWebpackPlugin('./dist'), // 删除文件夹
        new CopyWebpackPlugin([  // 把doc文件拷贝到dist下
            {from:'doc',to:'./'}
        ]),
        new webpack.BannerPlugin('make 2019 bu jw') // 在每个文件里加入说明 用于版权说明
    ]
}