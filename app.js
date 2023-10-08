

const _ = require("lodash") 

const number = [1,[2,[3,[4]]]]
const newItem = _.flattenDeep(number)

console.log(newItem);
console.log("Hello world");