const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url ==='/') {
        res.end('Welcome to the home page')
        }
    else if (req.url==='/about') {
        res.end('Welcome to the about page')
    }
    res.end('<h1>Woops</h1>')
})

server.listen(3010, 'localhost')