let {smart} = require('webpack-merge');// 融合配置
let base = require('webpack.base.js');

module.exports = smart(base,{
    mode:'production'
})
