#!/usr/bin/node
// Function to compute factorial recursively
function factorial(n)
{
  // Base case: factorial of NaN is 1
  if (isNaN(n)) {
    return 1;
  }
  
  // Base case: factorial of 0 is 1
  if (n === 0) 
  {
    return 1;
  }
  
  // Recursive case: compute factorial
  return n * factorial(n - 1);
}

// Destructure the arguments from process.argv, excluding the first two elements
const [,, arg] = process.argv;

// Convert the argument to an integer
const num = parseInt(arg, 10);

// Compute the factorial and print the result
console.log(`Factorial of ${num} is: ${factorial(num)}`);
