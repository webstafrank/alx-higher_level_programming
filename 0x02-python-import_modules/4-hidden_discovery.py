#!/usr/bin/python3

import dis
import sys

if __name__ == "__main__":
    if len(sys.argv) != 1:
        sys.exit(1)
    
    with open("hidden_4.pyc", "rb") as file:
        code = file.read()
    
    instructions = dis.get_instructions(code)
    names = set()
    
    for instr in instructions:
        if instr.opname == 'STORE_NAME' and not instr.argval.startswith('__'):
            names.add(instr.argval)
    
    sorted_names = sorted(names)
    
    for name in sorted_names:
        print(name)

