const lsFilter = require('./lsFilter');

const dir = process.argv[2];
const extension = process.argv[3];

lsFilter(dir, extension, (err, data) => {
  if (err) {
    return console.log(err);
  }
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
})