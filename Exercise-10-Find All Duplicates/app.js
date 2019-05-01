// Given an array of integers where each value 1 <= x <= len(array), write a function that finds all the duplicates in the array. 
//https://www.youtube.com/watch?v=iAHQopLuZ4Q&t=12491s


function findAllduplicates(arr) {
     var resultSet = [];

     for(var i = 0; i <= arr.length; i++) {
          var index = Math.abs(arr[i]) - 1;

          if(arr[index] < 0) {
               if(resultSet.indexOf(arr[i]) > -1) {
                    continue;
               }else{
                    resultSet.push(Math.abs(arr[i]))
               }
          } else {
               if(isNaN(arr[index])) {
                    continue;
               }
               arr[index] = -arr[index];
               console.log(arr[index]);
          }
     }
     console.log(arr);
     for(var i = 0; i < arr.length; i++) {
          arr[i] = Math.abs(arr[i]);
     }
     console.log(resultSet);
}


var arr = [9,2,1,2,1,5,7,8,8,6,16,2,1,3,3,10,10,16,16,15,15];

console.log("length of the array: " + arr.length);
findAllduplicates(arr);