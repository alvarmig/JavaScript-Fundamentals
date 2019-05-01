function isHoppable(arr, l, h) {    
    if(l == h) return console.log('0');

    if(arr[l] == 0) return console.log('Not able to Exit');

    var min = Number.MAX_VALUE;
    for(var i = l+1; i <= h && i <= l + arr[l]; i++) {
        
        var jumps = isHoppable(arr, i, h);

        if(jumps != Number.MAX_VALUE && jumps + 1 < min) {
            min = jumps + 1; 
        }
    }
    return min;
}

var towers = [1,1];
var n = towers.length;

isHoppable(towers, 0, n - 1);

//https://www.geeksforgeeks.org/minimum-number-jumps-reach-endset-2on-solution/
//https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/
