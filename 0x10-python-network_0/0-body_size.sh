#!/bin/bash

# Checking if a URL is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <URL>"
  exit 1
fi

# Storing the URL from the argument
URL=$1

# Sending a request to the URL and gettin the size of the response body in bytes
body_size=$(curl -s -o /dev/null -w "%{size_download}" "$URL")

# Display the size
echo "$body_size"

