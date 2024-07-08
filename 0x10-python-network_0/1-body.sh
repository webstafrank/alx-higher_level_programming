#!/bin/bash
# Bash script that gets request to URL and dispalys a body of a 200 status code response
curl -sL -w "%{http_code}" "$1" -o temp.txt | grep -q "200" && cat temp.txt

