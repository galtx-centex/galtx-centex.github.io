#!/usr/bin/env sh

while getopts ":n:c:b:p:x:" opt; do
  case ${opt} in
    n)
      NAME=$OPTARG
      ;;
    c)
      COLOR=$OPTARG
      ;;
    b)
      DOB=$OPTARG
      ;;
    p)
      PIC=$OPTARG
      ;;
    x)
      SEX=$OPTARG
      ;;
    \?)
      echo "Usage: add.sh -n <name> -c <color> -b <dob> -p <pic> -x <sex>"
      exit 0
      ;;
  esac
done

cp script/_greyhound.md _greyhounds/${NAME}.md
perl -p -i -e "s/^title:.*/title: \u${NAME}/g or
               s/^date:.*/date: $(date +%F)/g or
               s/^category:.*/category: available/g or
               s/^color:.*/color: ${COLOR}/g or
               s/^dob:.*/dob: ${DOB}/g or
               s/^pic:.*/pic: $(basename $PIC)/g or
               s/^sex:.*/sex: ${SEX}/g" _greyhounds/${NAME}.md
./script/thumbnail.sh ${PIC}
git add ${PIC} img/thm/$(basename $PIC)
git add _greyhounds/${NAME}.md
