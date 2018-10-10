for (var i = 1; i < 6; ++i){
    // console.log(i);
}


// Declaring and Initializing variables
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;

//Example 1-1 Arithmetic and math function in JavaScript
var x = 3;
var y = 1.1;
// console.log(x + y);
// console.log(x * y);
// console.log((x + y)*(x - y));
var z = 9;
// console.log(Math.sqrt(z));
// console.log(Math.abs(y/x));

z = x * y;
// console.log(z.toFixed(2)); // display 3.30

// Example 1-2, 1-3, 1-4. The if-else-if statement
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if(current < mid){
    mid = (current - low) / 2;
} else if(current > mid){
    mid = (current + high) / 2;
} else {
    found = current;
}


//Example 1-5 The switch statement
// var monthNum = parseInt(prompt("Enter a month number: "));
var monthNum = 0;
var monthName;

switch(monthNum){
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
    default:
        // console.log("Bad input");
}

// console.log(monthName);


//Example 1-6 The while loop
var number = 1;
var sum = 0;

while(number < 11){
    sum += number;
    ++number;
}

console.log("sum while: " + sum); //displays 55

//Example 1-7. Summing integers using for loop
sum = 0;
for(var numb = 1; numb < 11; numb++){
    sum += numb;
}

console.log("sum for: " + sum);

//Example 1-8. Using a for loop with an array

var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for(var i = 0; i < numbers.length; ++i){
    sum += numbers[i];
}

console.log("sum array: " + sum); //display 144

//functions 
//Example 1-9. A value-returning function

function factorial(number){
    var product = 1;
    for(var i = number; i >= 1; --i){
        product *= i;
    }

    return product;
}

console.log("fatorial de 4: " + factorial(4)); //Displays 24
console.log("fatorial de 5: " + factorial(5)); //Displays 120
console.log("fatorial de 10: " + factorial(10)); //displays 3628800

//Example 1-10. A subprocedure or void function in JavaScript
function curve(arr, amount){
    for(var i = 0; i < arr.length; ++i){
        arr[i] += amount;
    }
}

var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades); // display 82,78,79,86,95

//Variable Scope
function showScope(){
    return scope;
}

var scope = "global";

console.log(scope); //Displays "global"
console.log(showScope()); //Displays "global"

//Example 2
function showScope2(){
    var scope2 = "local";
    return scope2;
}

var scope2 = "global";
console.log(scope2); //displays "global"
console.log(showScope2()); //displays "local"

//Example 1-11 sem definição de var
function showScope3(){
    scope3 = "local";
    return scope3;
}

scope3 = "global";

console.log(scope3); //displays "global"
console.log(showScope3()); //displays "local"
console.log(scope3); //displays "local"