const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === '/'){
       res.end("Welcome to our home page")
    }
    if (req.url === '/about'){
        res.end("Here is our short intro")
    }
    res.end(`
    <h1> Oops!</h1>
    <p> Something went wrong please check url</p>
    <a href="/">Go back </a>`)
    
})

server.listen(5000)
