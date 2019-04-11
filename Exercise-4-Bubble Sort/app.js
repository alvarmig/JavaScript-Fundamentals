function bubbleSort(arr) {
     var tmp = 0;
     var n = arr.length;

     for(var i = 0; i < n-1; i++) {
          for(var j = 0; j < n-i-1; j++) {
               if( arr[j] > arr[j+1] ) {
                    
                    tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                   
               }
          }
     }

     return console.log(arr);

}


var arr = [64, 34, 25, 12, 22, 11, 90];

bubbleSort(arr);