#!/usr/bin/env bash

sudo echo "DGET_VERIFY=no" > ~/.devscripts
sudo dget -x --build http://http.debian.net/debian/pool/main/h/hunspell/hunspell_1.3.3-3.dsc
sudo dpkg -i -R .

EN_US_DICT="en_US-zwhaley.tar.gz"
curl -v -L -o $EN_US_DICT https://dl.dropboxusercontent.com/u/55259404/hunspell-en_US-zachwhaley.tar.gz
sudo mkdir -v -p /usr/share/hunspell
sudo tar -v -C /usr/share/hunspell -xzf $EN_US_DICT
