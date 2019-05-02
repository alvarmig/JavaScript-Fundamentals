/* 
     Problem explanation.
     Find the median of two sorted arrays.
     eg. 
     arr1 = [1,3,5]
     arr2 = [2,4,6]

     median(arr1,arr2) = 3.5

     [1, 2, 3, 4, 5, 6] 3.5 ->
     [0, 0, 0, 0, 10, 10] 0 <-

     [1, 2, 3, 4] 2.5 <-
     [0, 0, 10, 10] 5 ->
      
     [2, 3, 4] 3 ->
     [0, 0, 10] 0 <-

     [2, 3]
     [0, 10] 

     2.5

*/ 

class Subarray {

     constructor(){
          this.underlying = []; 
          this.start = 0; 
          this.size = 0; 
     }

     fromArray(arr) {
          var s =  new Subarray();
          s.underlying = arr; 
          s.start = 0;
          s.size = arr.length;
          return s;
     }

     subarray(i, j) {
          if (i > j) return console.log("IllegalArgumentException");
          if (j > this.size) return console.log("IndexOutOfBoundsException");

          var s = new Subarray();
          s.underlying = this.underlying;
          s.start = this.start + i;
          s.size = j - i;
          return s;
     }

     getSize() {
          return this.size;
     }

     getFirst() {
          return this.underlying[this.start]
     }

     getLast() {
          return this.underlying[this.start + this.size - 1]
     }

     getMedian() {
          if(this.size % 2 == 0) {

               return  (this.underlying[this.start + this.size / 2 - 1] +
                        this.underlying[this.start + this.size / 2]) / 2;
          }
          return this.underlying[Math.floor((this.start + this.size) / 2)];
     }
}

function median(arr1, arr2) {
     var s = new Subarray();
     if (arr1.length == 0 || arr1.length != arr2.length) {
          console.log("IllegalArgumentsException");
     }
     return medianArr(s.fromArray(arr1), s.fromArray(arr2));

}

function medianArr(arr1, arr2){
     if (arr1.getSize() == 1 ) return arr1.getFirst() + arr2.getFirst() / 2;
     if (arr1.getSize() == 2) {
          return ((Math.max(arr1.getFirst(), arr2.getFirst()) + 
                   Math.min(arr1.getLast(), arr2.getLast())) / 2);
     }

     var median1 = arr1.getMedian();
     var median2 = arr2.getMedian();

     if (median1 ==  median2) return median1;
     if (median1 > median2) {
          return medianArr(arr1.subarray(0, Math.floor((arr1.getSize() / 2) + 1 )), arr2.subarray(Math.floor((arr2.getSize() - 1) / 2) , arr2.getSize()));
     }

     return medianArr(arr1.subarray(Math.floor((arr1.getSize() - 1) / 2) , arr1.getSize()), arr2.subarray(0, Math.floor((arr1.getSize() / 2) + 1 )));
}

var medArrays = 0;
var arr1 = [1, 2, 3, 4, 5, 6]; // median = 2.5
var arr2 = [0, 0, 0, 0, 10, 10];

medArrays = median(arr1, arr2);
console.log(medArrays);

var arr1 = [1, 3, 5];  // median = 3.5
var arr2 = [2, 4, 6]; 

medArrays = median(arr1, arr2);
console.log(medArrays);

var arr1 = [1, 3, 6, 6];  // median = 5
var arr2 = [2, 4, 6, 9];

medArrays = median(arr1, arr2);
console.log(medArrays);

/*
     Example: How to use the class and methods inside the class.
var medArrays = 0;
var arr = [1, 2, 3, 4, 5]; //median = 3
var arr1 = [1, 2, 3, 4, 5, 6]; // median = 2.5
var arr2 = [0, 0, 0, 0, 10, 10];

var s = new Subarray().fromArray(arr1); 
console.log(s);

console.log(s.getFirst());
console.log(s.getLast());
console.log(s.getSize());
console.log(s.getMedian());

var t = new Subarray().fromArray(arr); 
console.log(t);
console.log(t.getMedian());
console.log(t.subarray(2,4)); */

