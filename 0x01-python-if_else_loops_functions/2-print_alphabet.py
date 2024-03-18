#!/usr/bin/python3
#printing alphabets in lowercase
def print_lowercase():
    x = 97 #a ASCII
    while x <= 122: #z aASCII
        print(chr(x), end='')
    x += 1

print_lowercase()
