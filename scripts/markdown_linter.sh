#!/bin/bash

let TOTAL_COUNT=0

function check_for_h1 {
  # echo "h1"
  HEADER=$(egrep -A 1 '\-\-\-' $1 | egrep '^\#\ ' | wc -l)
  COUNT=$HEADER
  # echo $COUNT
  if (( $COUNT > 0 )); then echo "$1 has redundent headers"; fi
  (( TOTAL_COUNT+=COUNT ))
}
function check_for_special_chars_headers {
  # echo "special chars"
  HEADERS=$(egrep '^\##+\ ' $1)
  BACKTICKS=$(echo $HEADERS | egrep '`' | wc -l)
  UNDERSCORES=$(echo $HEADERS | egrep '_' | wc -l)
  ASTERISKS=$(echo $HEADERS | egrep '\*' | wc -l)
  COUNT=$(($BACKTICKS+$UNDERSCORES+$ASTERISKS))
  if (( $COUNT > 0 )); then echo "$1 has special chars in header"; fi
  (( TOTAL_COUNT+=COUNT ))
}
function check_for_email_shorthand {
  # echo "shorthand "
  CARROTS=$(egrep '<support@strongdm\.com>' $1 | wc -l)
  COUNT=$(($CARROTS))
  if (( $COUNT > 0 )); then echo "$1 has email shorthand"; fi
  (( TOTAL_COUNT+=COUNT ))
}
function check_for_spaces_in_email_subject {
  # echo "email subject"
  MAILTOLINE=$(egrep 'mailto:support@strongdm\.com\?.*\ .*)' $1 | wc -l)
  COUNT=$(($MAILTOLINE))
  if (( $COUNT > 0 )); then echo "$1 has spaces in subject"; fi
  (( TOTAL_COUNT+=COUNT ))
}
function check_for_unclosed_img_tags {
  # echo "img tags"
  UNCLOSEDTAG=$(egrep '\.png\"[^/]*>' $1 | wc -l)
  COUNT=$(($UNCLOSEDTAG))
  if (( $COUNT > 0 )); then echo "$1 has unclosed image tags"; fi
  (( TOTAL_COUNT+=COUNT ))
}
function run_markdown_checks {
  check_for_h1 $1
  check_for_special_chars_headers $1
  check_for_email_shorthand $1
  check_for_spaces_in_email_subject $1
  check_for_unclosed_img_tags $1
}
function expand_all_files {
  if [[ -d $1 ]];then 
    for FILE in $1/*
    do
      expand_all_files $FILE
    done
  elif [[ -f $1 ]] && [[ "$1" == *".md" ]];
  then 
    run_markdown_checks $1
  fi
}
function main {
  # echo "checking $1"
  expand_all_files $1

  if (( $TOTAL_COUNT > 0 )); then
    echo "Found $TOTAL_COUNT errors"
    exit 1
  fi
}

main $1
