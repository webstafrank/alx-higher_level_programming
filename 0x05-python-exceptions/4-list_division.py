#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    list_1 = []
    for i in range(list_length):
        try:
            divid = my_list_1[i] / my_list_2[i]
        except TypeError:
            print("wrong type")
            divid = 0
        except ZeroDivisionError:
            print("division by 0")
            divid = 0
        except IndexError:
            print("out of range")
            divid = 0
        finally:
            list_1.append(divid)
    return list_1
