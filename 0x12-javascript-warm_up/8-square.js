#!/usr/bin/node
// Destructure the arguments from process.argv, excluding the first two elements
const [,, arg] = process.argv;

// Convert  first argument to an integer
const size = parseInt(arg, 10);

// Check if the conversion was successful
if (isNaN(size))
{
  console.log("Missing size");
}
else
{
  // loop to print the square
  for (let i = 0; i < size; i++)
	{
    console.log("X".repeat(size));
  }
}
