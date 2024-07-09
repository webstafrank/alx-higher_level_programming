#!/usr/bin/python3

import sys

if __name__ == "__main__":
    argc = len(sys.argv) - 1  # subtract 1 to exclude name of script 

    if argc == 0:
        print("0 arguments.")
    elif argc == 1:
        print("1 argument:")
    else:
        print(f"{argc} arguments:")

    if argc > 0:
        for i in range(1, argc + 1):
            print(f"{i}: {sys.argv[i]}")
