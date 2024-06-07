#!/bin/zsh

totalTime=0;
time=$1;
x=$#
shift 1;
for ((i=2;i<=$x;i++));
do
    min=$1;
    # echo "$min";
    totalTime=`expr $totalTime + $min`;
    shift 1;
done
# echo "$totalTime";
percent=`expr $totalTime \* 100`;
# echo "$percent";
progress=$(printf "%.2f" `expr $percent / $time`);
echo "Progress $progress/100";

