//Path module 
const path = require('path');

console.log(path.delimiter);
console.log(path.sep)

const join = path.join('Constent','subfolder','text.txt');
console.log(join);


const absolute = path.resolve(__dirname, join)
console.log(absolute);