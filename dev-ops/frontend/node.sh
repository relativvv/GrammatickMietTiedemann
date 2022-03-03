#!/bin/sh
echo "node_modules werden initialisiert.. Bitte warten (auch wenn es länger dauert)!"
cd /root/proj || exit
npm install
npm start
