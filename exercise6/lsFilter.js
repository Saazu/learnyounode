//Create a program that prints a list of files in a given directory,
//filtered by the extension of the files. The first argument is the
//directory name and the second argument is the extension filter. Print the
//list of files (one file per line) to the console. You must use
//asynchronous I/O.

const fs = require('fs');

module.exports = function(dir, extension, callback) {
  filteredList = []; //don't actually need this
  fs.readdir (dir, (err, files) => { //Can directly files instead pushing to filteredList
    if (err) {
      return callback(err);
    }
    for (let i = 0; i < files.length; i++) {
      if(files[i].split(".")[1] === extension) {
        filteredList.push(files[i]);
      }
    }
    callback(null, filteredList);
  })
}

