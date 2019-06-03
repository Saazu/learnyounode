//Create a program that prints a list of files in a given directory
//filtered by the extension of the files. You will be provided a directory
//name as the first argument to your program (e.g. '/path/to/dir/') and a
//file extension to filter by as the second argument.

const fs = require('fs');
const dir = process.argv[2];
const extension = process.argv[3];

if (process.argv.length != 4) {
  return console.log("Usage: node exercise4.js [DIR] [extension]");
} 

fs.readdir(dir, (err, files) => {
  if ( err ) {
    return console.log(error);
  }
  for (let i = 0; i < files.length; i++) {
    if(files[i].split(".")[1] == extension) {
      console.log(files[i]);
    }
  }
});