//Built in modules : OS
const os = require('os')

const user = os.userInfo()

//Info about current user
console.log(user);

//Info about the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);
const totalUpMinutes = os.uptime()/60;
console.log(`Total Uptime in Minutes ${totalUpMinutes}`);
console.log(`The total UpHours ${totalUpMinutes/60}`);


//Info about the Operating System
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
    arch: os.arch(),
    version: os.version(),
    priority:os.getPriority(),
    CPUS: os.cpus(),
}

console.log(currentOs)