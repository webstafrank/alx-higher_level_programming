#!/usr/bin/python3
def fizzbuzz():
    for num in range(1, 101):
        if num % 3 == 0 and num % 5 == 0:
            print("FIZZBUZZ", end=' ')
        elif num % 3 == 0:
            print("FIZZ", end=' ')
        elif num % 5 == 0:
            print("BUZZ", end=' ')
        else:
            print(num, end=' ')
