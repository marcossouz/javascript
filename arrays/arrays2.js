/**
 * Agregate Arrays Operations
 */

var nums = [];

for(var i = 0; i < 100; ++i){
    nums[i] = i+1;
}

var samenums = nums; //copia a referencia
nums[0] = 400;
console.log(samenums[0]); //displays 400


function copy(arr1, arr2){
    for(var i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i];
    }
}

var n = [];
for(var i = 0; i < 100; ++i){
    n[i] = i + 1;
}

var sn = [];
copy(n, sn); //copia dado por dado e tornam-se arrays independentes
n[0] = 400;
console.log(sn[0]); //displays 1

var nms = [1,2,3,4,5];
console.log(nms);

/**
 * Searching for a Value
 */

 var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
 var name = prompt("Enter a name to search for: ");

 var position = names.indexOf(name);

 if(position >= 0){
     console.log("Found " + name + " at position " + position);
 } else {
     console.log(name + " not found in array.");
 }