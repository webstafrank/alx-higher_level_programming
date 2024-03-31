#!/usr/bin/python3
def uniq_add(my_list=[]):
    uniqadd = set()
    if my_list:
        for i in my_list:
            uniqadd.add(i)
    return sum(uniqadd)
