#!/usr/bin/node

// Destructure the arguments from process.argv, excluding the first two elements
const [,, arg1, arg2] = process.argv;

// Check if both arguments exist and print the appropriate message
if (arg1 === undefined || arg2 === undefined)
{
  console.log("Two arguments are required");
} else
{
  console.log(`${arg1} is ${arg2}`);
}
