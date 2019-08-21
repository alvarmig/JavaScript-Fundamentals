function largestHeroe(arr){
 
    var maxName = '';

    for(var i = 0; i < arr.length; i++) {
        
        var name = arr[i];

        if( name.length > maxName.length ) {
            maxName = name;
        }
    }
    return maxName;
    
}

var heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

var largestName = largestHeroe( heroes );

console.log( largestName ); // Profesor Charles Xavier