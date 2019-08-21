function twoMissing(arr) {
     var size = arr.length + 2;
     var totalSum = size * (size + 1) / 2;
     var arrSum = 0;
     
     //sum of the content of the array 
     for(var i = 0; i <= arr.length; i++) {
          if(isNaN(arr[i])) {
               continue;
          }
          arrSum += arr[i];   
     }

     var pivot = Math.floor((totalSum - arrSum) / 2);
     var totalLeftXor = 0;
     var arrLeftXor = 0;
     var totlaRightXor = 0;
     var arrRightXor = 0;
     var missingNumbs = [];

     /*console.log("size: " + size);
     console.log("totalSum: " + totalSum);
     console.log("arrSum: " + arrSum);
     console.log("pivot: " + pivot);*/

     for(var i = 1; i <= pivot; i++) totalLeftXor ^= i;
     for(var i = pivot + 1; i <= size; i++) totlaRightXor ^=i;

     /*console.log("totalLeftXor: " + totalLeftXor);
     console.log("totlaRightXor: " + totlaRightXor);*/

     for(var i = 0; i <= arr.length - 1 ; i++) {
          if(arr[i] <= pivot) {  
             arrLeftXor ^= arr[i];
          } else { 
             arrRightXor ^= arr[i];
          }
     }

     /*console.log("arrLeftXor: " + arrLeftXor);
     console.log("arrRightXor: " + arrRightXor);*/

     missingNumbs.push(totalLeftXor ^ arrLeftXor); 
     missingNumbs.push(totlaRightXor ^ arrRightXor);
     return missingNumbs;

}


var arr = [1,3,4,5];
console.log(twoMissing(arr));

var arr = [2,5,1,4];
console.log(twoMissing(arr));

var arr = [1,2,5,6];
console.log(twoMissing(arr));

var arr = [3,4,5,6];
console.log(twoMissing(arr));

var arr = [1,2,3,4,5,6,7,8,9];
console.log(twoMissing(arr));

var arr = [1,2,3,4,5,7,8,9,10,11,12,13,15];
console.log(twoMissing(arr));

/* problem explanation 

// n(n+1)/2

///////////////////////////////////////////////
[3,4]

[1,2,3,4,5,6] = 21
[1,2,5,6] = 14

1 2 3 4 5 6 = 21
1 2 3 4 

21 - 14 = 7/2
pivot = 3
size = 6

totalLeftXor = 1^2^3 = 0   totalRightXor = 4^5^6 = 7 //Use index of the array for the XOR
arrLeftXor = 1^2 = 3    arrRightXor = 5^6 = 3 //Use content values of the array for the XOR

0 XOR 3 = 3
[1,2,3] XOR [1,2]

7 XOR 3 = 4
[4,5,6] XOR [5,6]

[3,4]

/////////////////////////////////////////

var result = 0;
var result2 = 0;

XOR EXAMPLE 
x^y^x=y
result = 5^5;
result2 = 5^4;
console.log(result);
console.log(result2);

///////////////////////////////////////
*/
// https://www.youtube.com/watch?v=iAHQopLuZ4Q&t=2179s

