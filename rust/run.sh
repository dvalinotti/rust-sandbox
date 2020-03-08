#!/bin/bash
if [ ! -d "./$1" ]
then
  pwd
  mkdir ./rust/$1
  cd ./rust/$1
  cargo init
else
  cd ./$1
fi  
# echo $2 > ./src/main.rs
exit
