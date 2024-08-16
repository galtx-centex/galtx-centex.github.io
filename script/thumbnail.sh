#!/usr/bin/env sh

GITDIR="$(git rev-parse --show-toplevel)"
IMGNAME="$(basename $1)"
magick $1 -thumbnail '300x300^' -gravity center -extent 300x300 $GITDIR/img/thm/$IMGNAME
