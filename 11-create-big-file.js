const { writeFileSync} =  require("fs")

for (let i=0;i<10000;i++){
    writeFileSync("./Content/bigfile.txt",`hello ${i}`, {flag: 'a'})
}