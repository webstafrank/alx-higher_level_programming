#!/usr/bin/node

const fs = require('fs');

// Getting the file path from the command line arguments
const filePath = process.argv[2];

// Reading the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
