for(var i = 1; i <= 5; i++){
    var line = '';

    for(var j = 1; j <= 5; j++){
        line += `${ j * i }  `;
    }
    console.log(line);
}