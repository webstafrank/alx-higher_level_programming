#!/usr/bin/node
// Destructure arguments from process.argv,  except the first two elements
const [,, Arg1] = process.argv;

// Check if the first argument exists and print the appropriate message
if (Arg1 === undefined) {
  console.log("No argument");
} else
{
  console.log(Arg1);
}
