const { Worker} = require("node:worker_threads");

console.log('start');
const worker = new Worker("./worker.js");
const worker1 = new Worker("./worker.js");
const worker2 = new Worker("./worker.js");
const worker3 = new Worker("./worker.js");
console.log('end');

worker.on("message", (msg) => console.log(msg));
worker1.on("message", (msg) => console.log(msg));
worker2.on("message", (msg) => console.log(msg));
worker3.on("message", (msg) => console.log(msg));