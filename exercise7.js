//Write a program that performs an HTTP GET request to a URL provided to you
//as the first command-line argument. Write the String contents of each
//"data" event from the response to a new line on the console (stdout).

const http = require('http');
url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');

  response.on("data", (chunk) => {
    console.log(chunk);
  });
  
  response.on("end", () => {
    return;
  });
  
  response.on("error", (err) => {
    console.log(err);
  });
})