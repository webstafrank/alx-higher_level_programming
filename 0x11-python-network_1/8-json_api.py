#!/usr/bin/python3

import requests
import sys

# Define the base URL for the search endpoint
BASE_URL = 'http://0.0.0.0:5000/search_user'

# Get the letter (q parameter) from command-line arguments
if len(sys.argv) > 1:
    q = sys.argv[1]
else:
    q = ""

# Create a dictionary with the letter parameter
data = {'q': q}

try:
    # Send a POST request to the search endpoint with the letter parameter
    response = requests.post(BASE_URL, data=data)

    # Check if response is valid JSON and not empty
    if response.json():
        # Assuming response.json() returns a dictionary with 'id' and 'name'
        result = response.json()
        print(f"[{result['id']}] {result['name']}")
    else:
        print("No result")

except ValueError:
    print("Not a valid JSON")
except requests.exceptions.RequestException as e:
    print(f"Request error: {e}")

