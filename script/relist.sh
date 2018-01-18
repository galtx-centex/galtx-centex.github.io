#!/usr/bin/env sh

OLD_NAME=${1}
NEW_NAME=${2}

git mv _greyhounds/${OLD_NAME}.md _greyhounds/${NEW_NAME}.md

perl -p -i -e "s/^title:.*/title: \u${NEW_NAME}/g or
               s/^date:.*/date: $(date +%F)/g or
               s/^category:.*/category: available/g or
               s/^pending:.*/pending: no/g or
               s/${OLD_NAME}/${NEW_NAME}/g" _greyhounds/${NEW_NAME}.md
git add _greyhounds/${NEW_NAME}.md

for img in $(find img -name "${OLD_NAME}*.*"); do
    git mv $img ${img//$OLD_NAME/$NEW_NAME}
done
