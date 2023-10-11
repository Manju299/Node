const { readFile,writeFile } = require("fs")
const util = require('util')
const readFilePromise = util.promisify(readFile);
const writeFilePromis = util.promisify(writeFile);

const start = async() =>{
    const first = await readFilePromise("./Content/first.txt","utf-8");
    const second = await readFilePromise("./Content/second.txt","utf-8");
    await writeFilePromis("./Content/result.txt",`This is the file: ${first} and  ${second}`);
}

start();