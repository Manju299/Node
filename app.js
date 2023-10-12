// reading files in chunks

// normal exaple
const http = require("http")
const fs = require('fs')

http
.createServer(function(req,res) {
    // const text = fs.readFileSync("./Content/bigfile.txt","utf-8")
    // res.end(text)

    const text  = fs.createReadStream("./Content/bigfile.txt","utf-8")
    text.on("open",() =>{
        text.pipe(res)
    })

    text.on("error",(err) =>{
        res.end(err);
    })


})
.listen(5000)
