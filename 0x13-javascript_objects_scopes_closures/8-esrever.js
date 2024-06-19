#!/usr/bin/node
exports.esrever = function(list) {
  let left = 0;
  let right = list.length - 1;

  while (left < right)
	{
    // Swap elements at left and right indices
    let temp = list[left];
    list[left] = list[right];
    list[right] = temp;

    // Move pointers towards the center
    left++;
    right--;
  }

  return list;
};
