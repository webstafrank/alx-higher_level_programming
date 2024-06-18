#!/usr/bin/node
// Destructure the arguments from process.argv, excluding the first two elements
const [,, ...args] = process.argv;

// Convert arguments to integers and filter out any non-integer values
const numbers = args.map(Number).filter(num => Number.isInteger(num));

// Sort numbers in descending order
numbers.sort((a, b) => b - a);

// Check the number of valid integers
if (numbers.length < 2) 
{
  console.log(0);
} 
else 
{
  console.log(numbers[1]);
}
