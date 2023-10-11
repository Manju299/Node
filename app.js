//Here EventEmiiter is a class of events module
const EventEmitter = require("events")

//creating custom module
const customEmitter = new EventEmitter();

//Cannot user emit before on
// we can have any number of functions

customEmitter.on("response",(name,id)=>{
    console.log(`Data received ${name} with ID ${id}`);
})

customEmitter.on("response",()=>{
    console.log("Data received");
})

//We can pass arguments
// customEmitter.emit("response");
customEmitter.emit("response","Manjunath", 24)