#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    var = my_list[:]
    if idx < 0:
        return var
    if idx > len(my_list) - 1:
        return var
    var[idx] = element
    return var
