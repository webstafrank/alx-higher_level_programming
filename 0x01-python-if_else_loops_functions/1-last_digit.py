#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
# assigning a random number to a variable
# printing its last digit
p = abs(number) % 10
string = "Last digit of"
if p < 0:
    p = -(p)
if p > 5:
        print(f"{string} {number} is {p} and is greater than 5")
elif p == 0:
    print(f"{string} {number} is {p} and is 0")
elif p < 6:
    print(f"{string} {number} is {p} and is less than 6 and not 0") 
