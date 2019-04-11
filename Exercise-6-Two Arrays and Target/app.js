function closestSumPair(a1, a2, target) {
    var a1Sorted = a1.slice(0); 
    var a2Sorted = a2.slice(0); 

    a1Sorted.sort(function(a,b){return a- b});
    a2Sorted.sort(function(a,b){return a- b});

    var i = 0;
    var j = a2Sorted.length - 1;
    var smallestDiff = Math.abs(a1Sorted[0] + a2Sorted[0] - target);

    var closestPair = [a1Sorted[0], a2Sorted[0]];

    while( i < a1Sorted.length && j >= 0 ) {
        var v1 = a1Sorted[i];
        var v2 = a2Sorted[j];
        var currentDiff = v1 + v2 - target;

        if( Math.abs(currentDiff) < smallestDiff ) {
            smallestDiff = Math.abs(currentDiff);
            closestPair[0] = v1; closestPair[1] = v2;
        }

        if(currentDiff == 0) {
            return console.log(closestPair);
        }else if(currentDiff < 0) {
            i += 1;
        }else {
            j -= 1;
        }
    }
    return console.log(closestPair);
}


var a1 = [-1, 3, 8, 2, 9, 5];
var a2 = [4, 1, 2, 10, 5, 20];
var aTarget = 24;

closestSumPair(a1, a2, aTarget); //should return 5, 20 or 3, 20