//Write a program that uses a single synchronous filesystem operation to
//read a file and print the number of newlines (\n) it contains to the
//console (stdout), similar to running cat file | wc -l.

const fs = require('fs');
fileName = process.argv[2];
numNewLines = 0;

contents = fs.readFileSync(fileName);
for (let i = 0; i < contents.length; i++) {
  if (contents[i] == '10') {
    numNewLines++;
  }
}
console.log(numNewLines);