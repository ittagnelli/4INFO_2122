#This script is created to facilitate the homework delivery.
#This script is written and tested by Alexandru Chindris.
#Created on 14 december 2021.    Last update: 15 december 2021.
#!/bin/bash

echo "The script is running... "
git pull
echo "You will add all your local updates on the github folder [Y]/[N]:"
read choose
case $choose in 
Y) git add . ;;
     echo "Add a commit for your push: ";;
     read commit ;;
     git commit -m "$commit" ;;
     git status ;;
     git push ;;
     echo "The script is ended" ;;

N) echo "The script has been ended" ;;