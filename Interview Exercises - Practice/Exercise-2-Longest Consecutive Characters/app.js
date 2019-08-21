function longestSeq(seq) {
     var max_count = 0;
     var max_char = '';
     var prev_char = '';
     var count = 0;

     for(var i = 0; i < seq.length; i++) {
          if( prev_char === seq[i] ) {
               count++;
          } else {
               count = 1;
          }
          
          if( count > max_count) {
               max_count = count;
               max_char = seq[i];
          }
          prev_char = seq[i];
     }

     return console.log(max_char, max_count);
}

var word= 'AABCDDBBBEAFSDFJHHHHHJKKK';

longestSeq(word);