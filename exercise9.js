//This problem is the same as the previous problem (HTTP COLLECT) in that  
//you need to use http.get(). However, this time you will be provided with  
//three URLs as the first three command-line arguments.   
//You must collect the complete content provided to you by each of the URLs  
//and print it to the console (stdout). You don't need to print out the  
//length, just the data as a String; one line per URL. The catch is that you  
//must print them out in the same order as the URLs are provided to you as  
//command-line arguments.

const http = require('http');
const bl = require('bl');

finishedResponse = 0;
var finalResponse = [];
count = 0

urls = process.argv.slice(2, (process.argv.length));

function printResponses() {
  for (let i = 0; i < urls.length; i++) {
    console.log(finalResponse[i]);
  }
}

function httpGet (urlIndex) {
  http.get(urls[urlIndex], (response) => {
    response.setEncoding('utf8');
    response.pipe( bl((err, data) => {
      if (err) {
        console.error(error);
      }
      finalResponse[urlIndex] = data.toString();
      count++;

      if (count === urls.length) {
        printResponses();
      }
    }));
  })
}

for (let i = 0; i < urls.length; i++) {
  httpGet(i);
}

