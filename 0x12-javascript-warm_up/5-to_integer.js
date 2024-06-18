#!/usr/bin/node

// Destructure the arguments from process.argv, excluding the first two elements
const [,, firstArg] = process.argv;

// Convert the first argument to an integer
const number = parseInt(firstArg, 10);

// Check if the conversion was successful and print the appropriate message
if (isNaN(number))
{
  console.log("Not a number");
}
else
{
  console.log(`My number: ${number}`);
}
