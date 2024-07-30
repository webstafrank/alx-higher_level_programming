#!/usr/bin/node

const request = require('request');

// Getting the movie ID from the command line arguments
const movieId = process.argv[2];

// Constructing the API URL
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Making a GET request to the API URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: HTTP status code', response.statusCode);
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
