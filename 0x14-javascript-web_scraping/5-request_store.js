#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: HTTP status code', response.statusCode);
  } else {
    // Write the body response to the specified file
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error('Error:', err);
      }
    });
  }
});
