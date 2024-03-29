#!/usr/bin/python3
def delete_at(my_list=[], idx=0):
    strlength = len(my_list)
    if idx < 0:
        return my_list
    if idx > strlength - 1:
        return my_list
    del my_list[idx]
    return my_list
