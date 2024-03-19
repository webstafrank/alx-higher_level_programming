#!/usr/bin/python3
for z in range(10):
    for x in range(z + 1, 10):
        print(f"{z}{x}", end=', ' if z !=8 or x != 9 else '')
print()
