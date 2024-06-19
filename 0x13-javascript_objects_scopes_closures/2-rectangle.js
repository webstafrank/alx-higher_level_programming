#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
      return {}; // Return an empty object if w or h is not a positive integer
    }
    
    this.width = w;
    this.height = h;
  }
}

module.exports = Rectangle;
