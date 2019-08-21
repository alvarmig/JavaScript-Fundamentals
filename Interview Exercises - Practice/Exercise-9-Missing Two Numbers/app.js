function twoMissing(arr,arr2) {
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

     for(var i = 0; i < pivot; i++) {
          totalLeftXor ^= arr2[i];
     }
     
     for(var i = pivot; i <= arr2.length; i++) {
          totlaRightXor ^= arr2[i];
     }

     for(var i = 0; i < pivot; i++) {
          if(arr2[i] < pivot)
               arrLeftXor ^= arr[i];
     }

     for(var i = pivot - 1; i <= arr.length; i++) {
          if(arr[i] > pivot)
               arrRightXor ^= arr[i];
     }

     missingNumbs.push(totalLeftXor ^ arrLeftXor); 
     missingNumbs.push(totlaRightXor ^ arrRightXor);
     return missingNumbs;
}


var arr = [1,3,4,5];
var arr2 = [1,2,3,4,5,6];

console.log(twoMissing(arr, arr2));


var arr = [1,2,5,6];
var arr2 = [1,2,3,4,5,6];

console.log(twoMissing(arr, arr2));

var arr = [3,4,5,6];
var arr2 = [1,2,3,4,5,6];

console.log(twoMissing(arr, arr2));

var arr = [1,2,3,4,5,6,7,8,9];
var arr2 = [1,2,3,4,5,6,7,8,9,10,11];

console.log(twoMissing(arr, arr2));

var arr = [1,2,3,4,5,7,8,9,10,11,12,13,15];
var arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log(twoMissing(arr, arr2));

/* problem explanation 

//var arr = [1,2,3,4,5,7];
//oneMissing(arr);

// n(n+1)/2

/*missing([4,2,3]) = 1,5

[1,2,3,4,5,6] = 21

[1,2,5,6] = 14

21 - 14 = 7/2
pivot = 3

0 XOR 3 = 3
[1,2,3] XOR [1,2] = 3 
7 XOR 3 = 4
[4,5,6] XOR [5,6] = 4

[3, 4]

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

[1,2,3,4,5] = 15
[1,2,4,5] = 12
15-12 = 3
*/
// https://www.youtube.com/watch?v=iAHQopLuZ4Q&t=2179s