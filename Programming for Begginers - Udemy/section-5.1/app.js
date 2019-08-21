function mult_table(base, limit) {

   for(var i=1; i<=limit; i++) {

      var result = base * i ;
      console.log(base + ' x '+ i +' = ' + result);
   }
}

mult_table(8, 10);
console.log('\n');
mult_table(6, 9);