#!/bin/bash


allinput= read
allinput="${REPLY}"
git pull
git status
git add .
echo "Add a commit for your push: "
read
allinput="${allinput}${REPLY}"
git commit -m "${REPLY}"
git status
git push