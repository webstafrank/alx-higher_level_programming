#!/usr/bin/python3
def pow(a, b):
    outcome = 1
    for _ in range(b):
        outcome *= a
    return outcome
