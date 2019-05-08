function countFreq(arr) {
    var hashMap = new Map();
    var pre_value = 0;
    var count = 0;
    var max_count = 0;

    arr.sort(function(a,b){return a- b});

    console.log(arr);

    for(var i = 0; i < arr.length; i++) {
        if(pre_value == arr[i]) {
            count++;
        } else {
            count = 1;
        }

        if(count > max_count) {
            max_count = count;
            hashMap.set(arr[i], count);
            max_count = 0;
        }
        pre_value = arr[i];
    }

    for (var [key, value] of hashMap) {
        console.log(key + " , " + value);
        if(value > 1) {
            max_count++;
        }
    }
    console.log(max_count);
}


var arr = [1,3,1,4,5,6,3,3,3,6,6]; // 3
countFreq(arr);

var arr = [1, 3, 1, 4, 5, 6, 3, 3] // 2
countFreq(arr);

var arr = [7,3,2,1,5,7,8,8,6,3,4,4,4,10,11] // 4
countFreq(arr);