#!/usr/bin/node

const dict = require('./101-data').dict;

// Compute the new dictionary
const newDict = {};
for (const userId in dict) {
  const occurrences = dict[userId];
  if (!newDict[occurrences]) {
    newDict[occurrences] = [];
  }
  newDict[occurrences].push(userId);
}

// Print the new dictionary
console.log(newDict);
