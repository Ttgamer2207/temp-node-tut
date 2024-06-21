const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req,res){
    const fileStream = fs.createReadStream('./Files/big.txt', 'utf-8')

    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })

}).listen(3010)