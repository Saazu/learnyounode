//Write a program that performs an HTTP GET request to a URL provided to you
//as the first command-line argument. Collect all data from the server (not
//just the first "data" event) and then write two lines to the console
//(stdout). First Line: Num chars received. Second Line: Data received

const http = require('http');

url = process.argv[2];

http.get(url, (response) => {
  data = "";
  response.setEncoding('utf8');

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
})