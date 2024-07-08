#!/usr/bin/python3
import urllib.request
import urllib.parse
import sys

# Get the URL and email from command-line arguments
url = sys.argv[1]
email = sys.argv[2]

# Encode the email for the POST request
data = urllib.parse.urlencode({'email': email})
data = data.encode('ascii')  # Encode the data to bytes

# Use the with statement to manage the POST request
with urllib.request.urlopen(url, data=data) as response:
    # Read and decode the response body
    response_data = response.read().decode('utf-8')

# Print the decoded response body
print(response_data)
