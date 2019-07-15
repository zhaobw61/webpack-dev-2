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
    devSerner:{ // 处理跨域
        // proxy:{
        //     '/api':'http://localhost:3000' // 配置了一个代理
        // }
        // 1)添加一个代理
        // proxy:{
        //     '/api':{
        //         target:'http://localhost:3000',
        //         pathRewrite:{'/api':''}  // 替换api为空格
        //     }
        // }
        // 2)模拟数据
        //  before(app){
        //     app.get('/user',(req,res)=>{
        //         console.log('接受到请求');
        //         res.json({name:'珠峰架构'})
        //     })
        //  }
        // 3) 把服务启动在服务端上
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
        // new CleanWebpackPlugin('./dist'), // 删除文件夹
        // new CopyWebpackPlugin([  // 把doc文件拷贝到dist下
        //     {from:'doc',to:'./'}
        // ]),
        // new webpack.BannerPlugin('make 2019 bu jw') // 在每个文件里加入说明 用于版权说明
    ]
}