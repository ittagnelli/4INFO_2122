#!/bin/bash
ROOT_UID=0

if [ "$UID" -eq "$ROOT_UID" ]
then
echo "You are root."
else
echo "You are not root"
echo "Press Y / y to became root"
read choose
case $choose in
     Y | y)
      sudo su ;;
     *)
      echo " The script has ended" ;;
esac
fi
exit 0