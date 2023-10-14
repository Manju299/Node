const http = require("http")
const fs = require("fs")



http.createServer((req, res)=>{
    fs.readFile("./Content/FS-example.html",function(err,result) {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(result)
        return res.end();
    })
   
}).listen(5000)