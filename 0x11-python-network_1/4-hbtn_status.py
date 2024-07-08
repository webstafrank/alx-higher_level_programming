#!/usr/bin/python3
import requests

response = requests.get(url)

print("Body response:")
print(f"\t- type: {type(response.text)}")
print(f"\t- content: {response.text}")
