#!/usr/bin/python3
import requests
import sys

# Getting urlfrom command line args
url = sys.argv[1]
email = sys.argv[2]

# creating a dictionary wijth thne email parameter
datag = {'email': email}

# Sending a POST request to the URL with the email parameter
response = requests.post(url, data=data)

# Displaying the body of the response
print(response.text)

