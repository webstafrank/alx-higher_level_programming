#!/usr/bin/python3
def safe_print_integer(value):
    number = 0
    try:
        print("{:d}".format(value))
        return True
    except (ValueError, TypeError):
        return False
    
