#!/bin/bash
IFS=$'\n'   
for i in $(cat ./contacts-data.txt)    
do
    curl -v -X POST -d "$i" http://localhost:8080/v1/contacts
done

for j in $(cat ./messages-data.txt)    
do
    curl -v -X POST -d "$j" http://localhost:8080/v1/messages
done
