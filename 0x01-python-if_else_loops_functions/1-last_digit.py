#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
# assigning a random number to a variable
# printing its last digit
p = number % 10
if p > 5:
    print(f"The last digit of {number} is {p} and it is greater than 5")
elif p == 0:
    print(f"The last digit of {number} is {p} and is 0")
elif 0 < p < 6:
    print (f"The last digit of {number} is {p} and it is less than 5 and not 0")
    
