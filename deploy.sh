#!/usr/bin/env bash

if [ -d "./build" ]; then
   rsync -ua --progress ./build/* root@helios-1:/usr/share/nginx/html/
else
   echo "No build directory!"
fi

echo "Done!"