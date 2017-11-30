const request = require('request')

const express = require('express')
const app = express();

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.get('/list',function(req,res){
    let url = 'https://www.smartisan.com/product/spus?page_size=20&category_id=60&page=1&sort=sort'

    request({
        url:url,
        gzip:true
    },function(err,response,body){
        // console.log(body)
        res.send(body)
    })
})

// app.listen(3000,'192.168.43.201')
app.listen(3000)