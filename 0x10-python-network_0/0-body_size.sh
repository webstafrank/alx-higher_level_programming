#!/bin/bash

# bash script that takes a URL, sends a request to it an displays the size of the body of the response
curl -s -o /dev/null -w '%{size_download}\n' "$1"

