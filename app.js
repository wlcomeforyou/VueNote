/*jshint esversion: 6 */
import http from 'http';

const http1 = require('http')

const server = http1.createServer()

server.on('request',function(req,res){
    const url = req.url
    if(url === '/getSrc'){
        var js = 'show()'
        res.end(js)
    }else{
        res.end('404')
    }
})

server.listen(3000,function(){
    console.log('server listen at :3000')
})
