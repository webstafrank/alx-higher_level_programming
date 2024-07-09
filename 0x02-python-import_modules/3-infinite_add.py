#!/usr/bin/python3

import sys

if __name__ == "__main__":
    # adding from index 1 to exclude the script name
    total = 0
    for arg in sys.argv[1:]:
        total += int(arg)
    
    print(total)
