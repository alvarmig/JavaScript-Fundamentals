var numbers = [1,6,8,4,0,2,7,10,50,5];

function bigNumber(numbers) {
    
    var max = numbers[0];

    for(var i = 0; i <= numbers.length; i++) {

        if(numbers[i] >= max) {
            max = numbers[i];
        }
    }
    console.log('Biggest number is : ' + max);
}

bigNumber(numbers);
