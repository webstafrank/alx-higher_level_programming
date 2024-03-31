#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    key = []
    if a_dictionary:
        for m, n in a_dictionary.items():
            key.append(m)
            
        key.sort()
        for items in key:
            print ("{}: {}".format(items, a_dictionary[items]))

