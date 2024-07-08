#!/bin/bash
# sending a delete request to the URL passed as the first argument and displays the body of response
curl -sL -w "%{http_code}" "$1" -o temp.txt | grep -q "200" && cat temp.txt

