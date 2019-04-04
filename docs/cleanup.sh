#!/bin/zsh

PREFIX=custom-4-8192
rm -rf ${PREFIX}/**/style
sed -i'.orig' "s/\"style\//\"..\/..\/..\/style\//g" ${PREFIX}/**/*.html

for i in "jquery" "boot" "gatling" "moment" "high" "theme" "unpack"
do
  sed -i'.orig' "s/\"js\/${i}/\"..\/..\/..\/js\/${i}/g" ${PREFIX}/**/*.html
  rm ${PREFIX}/**/js/${i}**
done
rm -rf ${PREFIX}/**/*.orig
