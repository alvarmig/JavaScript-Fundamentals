var arr = [1,6,8,4,0,2,7,10,50,5];

function parNumber(numbers) {
    
    var numb;

    for(var i = 0; i < numbers.length; i++) {
        numb = numbers[i];
        if(numb % 2 == 0) { 
            console.log('Number is even: ' + numb );
        } else {
            console.log('Number is odd: ' + numb );
        }
    }

}


parNumber(arr);