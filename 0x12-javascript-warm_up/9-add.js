#!/usr/bin/node
// Function to add two integers
function add(a, b)
{
  return a + b;
}

// Destructure the arguments from process.argv, excluding the first two elements
const [,, arg1, arg2] = process.argv;

// Convert the arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Check if the conversions were successful
if (isNaN(num1) || isNaN(num2))
{
  console.log("Invalid input");
} else
{
  // Print the result of the addition
  console.log(`The addition result is: ${add(num1, num2)}`);
}
