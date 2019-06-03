//Write an HTTP server that serves the same text file for each request it
//receives.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/plain'});
  readStream = fs.createReadStream(process.argv[3]);
  readStream.on("open", () =>{
    readStream.pipe(res);
  });
});
server.listen(process.argv[2]);

//official solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))