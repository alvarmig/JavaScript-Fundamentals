/*
Time Complexity : O(n)
Auxiliary Space : O(n)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
https://stackoverflow.com/questions/27511174/is-there-a-way-to-create-hashmap-in-javascript-and-manipulate-it-like-adding-and
https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/

*/
function countFreq(arr) {
     var hashMap = new Map();
     var maxCount = 0;
     var ocurrence = 0;

     for(var i = 0; i < arr.length; i++) {
          if(hashMap.has(arr[i])) {
               ocurrence = hashMap.get(arr[i]);
               hashMap.set(arr[i], ocurrence + 1);
          } else {

               hashMap.set(arr[i], 1);
          }
     }

     for (var [key, value] of hashMap) {
          console.log(key + " , " + value);
          if(value > 1) {
               maxCount++
          }
     }
     console.log(maxCount);
 }

 var arr = [1,3,1,4,5,6,3,3,3,6,6]; // 3
 countFreq(arr);

 var arr = [1, 3, 1, 4, 5, 6, 3, 3] // 2
 countFreq(arr);

 var arr = [7,3,2,1,5,7,8,8,6,3,4,4,4,10,11] // 4
 countFreq(arr);
 