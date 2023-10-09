//Event loop exaple( Asynch) ---- 1

const {readFile} = require('fs')
const { result } = require('lodash')

console.log("Starting first task")

readFile("./Content/first.txt",'utf-8',(err,result)=>{
    if(err){
        console.log(`Error occured! ${err}`);
    }
    console.log(result);
    console.log("Completed first task")
})  
console.log("Starting second task");


//Async example -------2

console.log("First")
setTimeout(()=>{
    console.log("Second"),0
})
console.log("Third");



//Async example 2 HTTP -------3

const http = require("http")

const server = http.createServer((req,res)=>{
    console.log("request event")
    res.end("Hello world")
})

server.listen(5000, ()=>{
    console.log("Server is listening on port : 5000....")
})