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

/* int[] b1 = {7, 4, 1, 10};
int[] b2 = {4, 5, 8, 7};
int bTarget = 13;
// closestSumPair(b1, b2, bTarget) should return {4, 8}, {7, 7}, {7, 5}, or {10, 4}

int[] c1 = {6, 8, -1, -8, -3};
int[] c2 = {4, -6, 2, 9, -3};
int cTarget = 3;
// closestSumPair(c1, c2, cTarget) should return {-1, 4} or {6, -3}

int[] d1 = {19, 14, 6, 11, -16, 14, -16, -9, 16, 13};
int[] d2 = {13, 9, -15, -2, -18, 16, 17, 2, -11, -7};
int dTarget = -15; */

// https://www.youtube.com/watch?v=GBuHSRDGZBY&t=938s