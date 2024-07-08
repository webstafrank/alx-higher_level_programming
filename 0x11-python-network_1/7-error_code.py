#!/usr/bin/python3
import requests
import sys

# Get the URL from command-line arguments
url = sys.argv[1]

try:
    # Sending a GET request to the URL
    response = requests.get(url)

    # Displaying the body of the response
    print(response.text)

    # Checking for HTTP errors (status codes >= 400)
    if response.status_code >= 400:
        print(f"Error code: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"Error: {e}")

