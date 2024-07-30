#!/usr/bin/node

const request = require('request');

// Getting the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const wedgeAntillesId = '18';

// Making a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: HTTP status code', response.statusCode);
  } else {
    const data = JSON.parse(body);
    let count = 0;

    // Looping through each film to check if Wedge Antilles is present
    data.results.forEach(film => {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)) {
        count++;
      }
    });

    console.log(count);
  }
});
