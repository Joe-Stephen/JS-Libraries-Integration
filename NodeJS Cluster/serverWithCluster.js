const http = require("http");
const cluster = require("cluster");
const os = require("os");

//finding the number of cores our CPU has
console.log(`This system has a total of ${os.cpus().length} cores.`);

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} id running.`);
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
  // for (let i = 1; i <= os.cpus.length; i++) {
  //   cluster.fork();
  // }
} else {
  console.log(`Worker process ${process.pid} is started.`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {} //simulation of cpu work
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });
  server.listen(3000, () => console.log("Server is up and running!"));
}
