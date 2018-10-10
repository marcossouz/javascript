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
 

/**
 * Acessing and Writing Array Elements
 */

 var nums = [];
 for (var i = 0; i < 100; ++i){
     nums[i] = i+1;
 }

 var numbers = [1,2,3,4,5];
 var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
 console.log(sum); // displays 15

 numbers = [1,2,3,5,8,13,21];
 sum = 0;
 for(var i = 0; i < numbers.length; ++i){
     sum += numbers[i];
 }
 console.log(sum); //dispĺays 53

 /**
  * Creating Arrays from Strings
  */

  var sentence = "the quick brown jumped over the lazy dog";
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; ++i){
      console.log("word " + i + ": " + words[i]);
  }

/**
 * Aggregate Array Operations
 */