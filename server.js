// express
console.log('已启动');
let express = require('express');

let app = express();

app.get('/api/user',(req,res)=>{
    console.log('接受到请求');
    res.json({name:'珠峰架构'})
})

app.listen(3000);
