#!/usr/bin/python3
def uppercase(str):
    for iteret in str:
        x = iteret
        if ord(x) >= 97 and ord(x) <= 122:
            x = chr(ord(iteret) - 32)
        print("{}".format(x), end='')
    print()
