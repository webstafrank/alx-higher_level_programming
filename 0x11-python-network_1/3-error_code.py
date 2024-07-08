#!/usr/bin/python3
import urllib.request
import urllib.error
import sys

# Get the URL from command-line arguments
url = sys.argv[1]

try:
    # Use the with statement to manage the request
    with urllib.request.urlopen(url) as response:
        # Read and decode the response body
        body = response.read().decode('utf-8')
        print(body)
except urllib.error.HTTPError as e:
    print(f"Error code: {e.code}")

