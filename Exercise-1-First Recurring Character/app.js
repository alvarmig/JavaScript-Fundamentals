function firstRecurring(arr) {
    var counts = [];

    for(var i = 0; i < arr.length; i++) {
       if(counts.includes(arr[i])) {
            return console.log(arr[i] + ' is the first repeated value.');
       } else {
            counts.push(arr[i]);
       }
    }
}

var arr = ['D','C','B','A','C','D'];

firstRecurring(arr);