#!/bin/bash

#cat Apetroaie_glossario.html | enscript --header=Apetroaie -p out.ps| ps2pdf out.ps Apetroaie_glossario.pdf

fname=`echo ${1%%.*}`


cat $1 | enscript --header="$2 -- $fname.html" -p out.ps| ps2pdf out.ps $fname.pdf
rm out.ps