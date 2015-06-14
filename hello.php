<?php


echo"<center>";

echo "<h1>九九乘法練習。</h1><br>";

echo "<body bgcolor=#00FFFF ";



for ($i=1; $i < 10 ; $i++) {
for ($ii=1; $ii < 10 ; $ii++) { 	
if ($i*$ii < 10) {
	echo "$i*$ii =   "."0"."$i"*"$ii"."&nbsp&nbsp&nbsp";   
 } else {
 	echo "$i*$ii =   "." $i"*"$ii"."&nbsp&nbsp&nbsp";   
 }
  
}
echo "<br>";
echo "<hr size=2 align=center width=100%>";
}

echo"</center>";