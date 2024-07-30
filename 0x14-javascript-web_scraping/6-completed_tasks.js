#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error: HTTP status code', response.statusCode);
  } else {
    const todos = JSON.parse(body);
    const completedTasks = {};

    // Iterate through the tasks and count completed ones by user ID
    todos.forEach(todo => {
      if (todo.completed) {
        if (!completedTasks[todo.userId]) {
          completedTasks[todo.userId] = 0;
        }
        completedTasks[todo.userId]++;
      }
    });

    // Print the result
    console.log(completedTasks);
  }
});
