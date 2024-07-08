#!/usr/bin/python3
import urllib.request
import sys

# getting url from command line args

url = sys.argv[1]

# using the with sstatement to manage request

with urllib.request.urlopen(url) as response:
    # getting the header from the response
    headers = response.headers

# printing value of the requested header
print(headers.get('X-Request-Id'))

