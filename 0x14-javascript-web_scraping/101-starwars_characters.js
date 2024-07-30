#!/usr/bin/node

const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API to get the movie details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: HTTP status code', response.statusCode);
  } else {
    const movieData = JSON.parse(body);
    const characterUrls = movieData.characters;

    // Fetch each character's details in order
    const fetchCharacter = (url) => {
      return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
          if (error) {
            reject(error);
          } else if (response.statusCode !== 200) {
            reject(new Error(`HTTP status code ${response.statusCode}`));
          } else {
            const characterData = JSON.parse(body);
            resolve(characterData.name);
          }
        });
      });
    };

    // Create an array of promises for fetching all characters
    const characterPromises = characterUrls.map(url => fetchCharacter(url));

    // Wait for all promises to resolve and print the character names in order
    Promise.all(characterPromises)
      .then(names => {
        names.forEach(name => console.log(name));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});
