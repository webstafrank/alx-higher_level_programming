#!/usr/bin/python3
def safe_print_list_integers(my_list=[], x=0):
    number = 0
    for item in range(x):
        try:
            print("{:d}".format(my_list[item]), end='')
            number += 1 
        except (IndexError, ValueError, TypeError):
            pass
        except IndexError:
            print("out of range")
    print()
    return number
