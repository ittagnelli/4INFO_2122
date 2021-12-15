#This script is created to facilitate the homework delivery.
#This script is written and tested by Alexandru Chindris.
#Created on 14 december 2021.    Last update: 15 december 2021.
#!/bin/bash

allinput="${REPLY}"
git pull
git status
git add .
echo "Add a commit for your push: "
read
git commit -m "${REPLY}"
git status
git push