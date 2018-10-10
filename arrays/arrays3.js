var names = ["David", "Mike", "Cynthia", "Raymond", "Mike", "Clayton", "Mike", "Jennifer"];
var name = "Mike";

var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos); //displays 1

var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos); //displays 6

/**
 * String represetations of Arrays
 */

 var namestr = names.join();
 console.log(namestr); //David, Cynthia, Raymond, Clayton, Mike, Jennifer

 namestr = names.toString();
 console.log(namestr); //David, Cynthia, Raymond, Clayton, Mike, Jennifer
 console.log(names); //David, Cynthia, Raymond, Clayton, Mike, Jennifer

 /**
  * Creating New Arrays from Existing Arrays
  */

  var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
  var dmpDept = ["Raymond", "Cynthia", "Bryan"];
  
  var itDiv = cisDept.concat(dmpDept);
  console.log(itDiv);
  itDiv = dmpDept.concat(cisDept);
   console.log(itDiv);

  var dmpDept = itDiv.splice(2,3);
  var cisDept = itDiv;

  console.log(dmpDept);
  console.log(cisDept);

  /**
   * Adding Elements to an Array
   */

   nums = [1,2,3,4,5];
   console.log(nums); //1,2,3,4,5

   nums.push(6);
   console.log(nums) //1,2,3,4,5,6

   nums[nums.length] = 7;
   console.log(nums); //1,2,3,4,5,6,7

   //inserir no inicio
   var newNum = 0;
   var N = nums.length;

   for(var i = N; i >= 0; --i){
        nums[i] = nums[i - 1];
   }

   nums[0] = newNum;
   console.log(nums); //0,1,2,3,4,5,6,7

   newNum = -1;
   nums.unshift(newNum);
   console.log(nums); //-1,0,1,2,3,4,5,6,7

   newNum = -4;
   nums.unshift(newNum,-3,-2);
   console.log(nums);

   /**
    * Removing Elements from an Array
    */

    nums = [1,2,3,4,5,9];
    nums.pop();
    console.log(nums); //1,2,3,4,5

    for(var i = 0; i < nums.length; ++i){
        nums[i] = nums[i + 1];
    }
    console.log(nums); //2,3,4,5,undefined

    for(var i = 0; i < nums.length; ++i){
        nums[i] = nums[i + 1];
    }
    console.log(nums);//3,4,5,undefined,undefined

    nums.unshift(1,2);
    console.log(nums); //1,2,3,4,5,undefined,undefined

    nums.shift();
    console.log(nums); //2,3,4,5,undefined,undefined

    var first = nums.shift();
    nums.push(first);
    console.log(nums); //3,4,5,undefined,undefined,2