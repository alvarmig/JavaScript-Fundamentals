// console.log('Hello World');

var c;
var f = 90;

c = (f - 32) * ( 5 / 9 )

console.log(c);



function num_hex() {
    var str = 200;
    var res = str.toString(16);
    console.log(res);
  }

  //num_hex();

  function double(num) {
    for(var i=0; i<20; i++){
      num +=4;
    }
    console.log(num);
  }

  //double(3);


function test(){
  var cont;
  var x=5.8;

  for(cont=x; cont<= x*2; cont+=5) {
    x=x/2;
  }
  console.log(x, cont);
}
//test();

function test2(){
  var a=1;
  var b=2;

  for(var i=1; i<4; i++) {
    a=a+b*i;
    b=(a+b)*i;
  }
  console.log(a+b);
}
//test2();

function test3(){
  var x=0;
  var b=2;

  for(var i=1; i<10; i++) {
    if(i%2 == 1){
      x +=1;
    }else {
      x --;
      console.log(x);
    }
    console.log("\n",x);
  }
}
//test3();

function test4(){
  var A=3;
  var B=4;
  var C=5;

  if(A == --B && A != C){
    console.log("true");
  }else{
    console.log("false");
  }
}
//test4();

function test5(){
  var x=3;
  var y=2;
  var cont=1;

  while(cont<=5){
    console.log(cont);
    x *= cont++;
    y= 2*x;
  }
  console.log(x);
  console.log(y);
}
//test5();

function test6(){
  var i=0;
  var x=0;

  while(i<20) {
    if(i % 5 == 0){
      x+=i;
      console.log(x);
    }
    i++;
  }
  console.log(x);
}
//test6();

function test7(){
  var x=3; 
  var y=5;

  for(var i=1; i<=y; i=i+1){
    for(var j=1; j<=x; j=j+1){
      console.log("@");
     // console.log("\n");
    }
  }
}
//test7();

function test8(){
  var arrNum = []; 

  for(var i=0; i<5; i=i+1){
    for(var j=0; j<30; j=j+1){
      arrNum.push([i][j]);
    }
  }

  console.log(arrNum);
}
//test8();

var var1=true;
var var2=false;
var res;

res = var1 && var2;
console.log(res);

function test(number)
{
   while(number < 5) {
      number++;
   }
   return number;
}
console.log(test(2));