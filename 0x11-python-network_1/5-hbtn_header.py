#!/usr/bin/python3
import requests
import sys

# Get the URL from command-line arguments
url = sys.argv[1]

# Send a GET request to the URL
response = requests.get(url)

# Get the value of the X-Request-Id header from the response
x_request_id = response.headers.get('X-Request-Id')

# Print the value of X-Request-Id header
print(x_request_id)

