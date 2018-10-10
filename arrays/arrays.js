/**
 * Creating Arrays
 */

 var numbers = [];
 console.log(numbers.length); //displays 0

 var numb = [1,2,3,4,5];
 console.log(numb.length); //displays 5

 var arr = new Array();
 console.log(arr.length); //displays 0

 var arr2 = new Array(1,2,3,4,5);
 console.log(arr2.length); //displays 5

 var arr3 = new Array(10);
 console.log(arr3.length); //displays 10

 var objects = [1, "joe", true, null];

 var arr4 = 3;
 var arr5 = [7,4,1776];
console.log(Array.isArray(arr4)); //displays false
console.log(Array.isArray(arr5)); //displays true
 