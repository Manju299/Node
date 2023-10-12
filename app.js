// reading files in chunks

// normal exaple
const http = require("http")
const fs = require('fs')

http
.createServer(function(req,res) {
    const text = fs.readFileSync("./Content/bigfile.txt","utf-8")
    res.end(text)


})
.listen(5000)
