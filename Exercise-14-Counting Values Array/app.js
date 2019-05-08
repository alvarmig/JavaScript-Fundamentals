/*
Time Complexity : O(n2)
Auxiliary Space : O(n)

https://www.geeksforgeeks.org/counting-frequencies-of-array-elements/

*/
function countFreq(arr) {
     var visited = [];
     var maxCount = 0;

     visited.length =  arr.length;
     visited.fill(false);
     
     // Traverse though array elements and 
     // count frequencies
     for(var i = 0; i < arr.length; i++) {
          if(visited[i]  == true) {
               continue;
          }
          
          // Count frequency
          var count = 1;
          for(var j = i + 1; j < arr.length; j++) {
               if(arr[i] == arr[j]) {
                    visited[j] = true;
                    count++;
               }
          }
          console.log(arr[i] + " " +  count);

          if(count > 1) {
               maxCount++;
          }
     }
     console.log(maxCount);
 }
 
 var arr = [1,3,1,4,5,6,3,3,3,6,6]; // 3
 countFreq(arr);

 var arr = [1,3,1,4,5,6,3,3] // 2
 countFreq(arr);
 