#!/usr/bin/python3
a = 89
b = 10
x = a
a = b
b = a
x, a, b = a, b, a 
print("a={:d} - b={:d}".format(a, b))
