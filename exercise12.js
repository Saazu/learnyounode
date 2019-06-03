//Write an HTTP server that receives only POST requests and converts
//incoming POST body characters to upper-case and returns it to the client.

const http = require('http');
var map = require('./node_modules/through2-map');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
}).listen(process.argv[2]);