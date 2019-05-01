/* Integer to Roman Numeral
https://www.youtube.com/watch?v=iAHQopLuZ4Q&t=5917s
Roman numbers table: https://i.pinimg.com/originals/9f/69/49/9f694928b32f6bb86ab4bb67ecc886b5.jpg
String Builder function: https://gist.github.com/benjamin-wss/0a8a55673f2a5f21766c

4=IV
49=XLIX

IV
IX
XL
XC
CD
CM

value = 49      9
numeral = "XL"  "IX"
i=7            i=9
L XL XLIX

2017
MM MMX MMXVII

 */

var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var values =   [1000, 900,  500, 400,  100,  90,   50,  40,   10,   9,   5,    4,   1];

function integerToRoman(value) {
     if(value > 3999 || value < 1) console.log("IlegalArgumentException");

     var numeral = [];
     var i = 0;
     while(value > 0) {
          if(value - values[i] >= 0) {
               numeral.push(numerals[i]);
               value -= values[i]; 
          } else {
               i++;
          }
     }
     return console.log(numeral.join(''));
}

var number = 49;

integerToRoman(number);

var number = 2017;

integerToRoman(number);



