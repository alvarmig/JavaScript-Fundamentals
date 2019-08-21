function code(text, public_key) {

     const priv_key = 560;
     var hashed_text = [] ;
     var hashed_num = 0;

     for( var i = 0; i < text.length; i++ ) {
          hashed_num =  (text[i].charCodeAt() *  public_key) / priv_key;
          hashed_text.push(hashed_num);

     }
     return hashed_text;
}

function decode(code, public_key) {

     const priv_key = 560;
     var decode_arr = [] ;
     var hashed_num = 0;
     var decode_str = '';
     var decode_char = '';

     for( var i = 0; i < code.length; i++ ) {
          hashed_num =  (code[i] *  priv_key ) / public_key;
          decode_char = String.fromCharCode(hashed_num);
         
          decode_str = decode_str.concat(decode_char);
          // decode_arr.push(hashed_num);
          // decode_str = decode_str.concat(hashed_num);

     }
     console.log(decode_str);
}


var text = 'Pizza Planeta';
var public_key = 10;
var codeTxt = [];

codeTxt = code(text, public_key);

console.log(codeTxt);

decode(codeTxt, public_key);
