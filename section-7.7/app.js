function max(a, b, c){
    var max;
    if(a > b) {
        if(a > c){
            max = a;
        } else {
            max = c;
        }
    }else if(b > c) {
        max = b;
    }else if(c > b){
        max = c
    }
    return max;

}

var max_number = max(5, 0, 6);

console.log(max_number);