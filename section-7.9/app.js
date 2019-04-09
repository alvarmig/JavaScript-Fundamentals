function filterArray(arr, char){
    var newArr = [];
    var heroName = '';

    for(var i = 0; i < arr.length; i++){
        
        heroName = arr[i];
        
        if(heroName[0] === char) {
            newArr.push(heroName);
        }    
    }
    return newArr;
}
var heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
var heroesWith = filterArray( heroes, 'D');

console.log( heroesWith ); // She Hulk, Spiderman 
