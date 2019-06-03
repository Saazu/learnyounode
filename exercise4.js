//Write a program that uses a single asynchronous filesystem operation to
//read a file and print the number of newlines it contains to the console
//(stdout), similar to running cat file | wc -l.
const fs = require('fs');
numNewLines = 0;

fileName = process.argv[2];

function countLines () {
  fs.readFile(fileName, (err, contents) => {
    if (err) {
      return console.log(err);
    }
    for (var i = 0; i < contents.length; i++) {
      if (contents[i] == '10') {
        numNewLines++;
      }
    }
    console.log(numNewLines);
  })
}
countLines();
