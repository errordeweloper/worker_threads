const { parentPort } = require("node:worker_threads");

function loop3(){
    const start = Date.now()
    while(Date.now() < start + 3000){}
    return 'sup'
}
const result = loop3()
parentPort.postMessage(result)
