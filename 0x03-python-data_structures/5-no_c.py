#!/usr/bin/python3
def no_c(my_string):
    if my_string[:]:
        new = my_string.translate({ord("c"): None})
        new2 = new.translate({ord("C"): None})
        return new2
    return mystring

