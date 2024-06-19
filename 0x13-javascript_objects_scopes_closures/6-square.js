#!/usr/bin/node
onst Square = require('./5-square');

class Square extends Square {
  constructor(size) {
    super(size); // Call the constructor of Square, which calls the constructor of Rectangle with size for both width and height
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++)
	  {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
