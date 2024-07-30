#!/usr/bin/node

const request = require('request');

// Getting the URL from the command line arguments
const url = process.argv[2];

// Makng a GET request to the URL
request(url, (error, response) => {
  if (!error && response) {
    console.log(`code: ${response.statusCode}`);
  }
});
