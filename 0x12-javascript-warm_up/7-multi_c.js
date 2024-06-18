#!/usr/bin/node

const [,, arg] = process.argv;

// Convert the first argument to an integer
const x = parseInt(arg, 10);

// Checking if the conversion was successful
if (isNaN(x))
{
  console.log("Missing number of occurrences");
}
else
{
  // Use a loop to print "C is fun" x times
  for (let i = 0; i < x; i++)
	{
    console.log("C is fun");
  }
}
