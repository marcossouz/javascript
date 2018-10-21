var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];

nums.splice(3,0,newElements);
console.log(nums); //[ 1, 2, 3, (3) [...], 7, 8, 9 ]

nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums); //[1,2,3,4,5,6,7,8,9]

nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums); //1,2,3,4,5

nums = [1,2,3,4,5];
nums.reverse();
console.log(nums); //5,4,3,2,1

var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names); //[ "Bryan", "Clayton", "Cynthia", "David", "Mike", "Raymond" ]

nums = [3,2,1,100,4,200];
nums.sort();
console.log(nums);

function compare(num1, num2){ //definindo a forma de ordenação
    return num1 - num2;
}

nums = [3,2,1,100,4,200];
nums.sort(compare); //usando a função compare para ordenar
console.log(nums); //1,2,3,4,100,200

function square(num){ //imprimir o numero e o quadrado dele
    console.log(num, num * num);
}

nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square); //enquanto houver elementos chame a função square para cada 1 deles


function isEven(num){ //retorna se é par ou não
    return num % 2 == 0;
}

nums = [2,4,6,8,10];
even = nums.every(isEven);
if(even){
    console.log("all numbers are even"); //imprime aqui
} else {
    console.log("not all numbers are even"); 
}

nums = [2,4,6,7,8,10];
even = nums.every(isEven);
if(even){
    console.log("all numbers are even");
} else {
    console.log("not all numbers are even"); //imprime aqui
}

//The some() - verifica se no array possui algum numero que atenda ao criterio
nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);

if(someEven){
    console.log("some numbers are even"); //imprime aqui

} else {
    console.log("no numbers are even");
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);

if(someEven){
    console.log("some numbers are even");

} else {
    console.log("no numbers are even"); //imprime aqui
}

//Funçao reduce() - reduz o array a um unico valor - seguindo o critério da função de somatorio

function add(runningTotal, currentValue){
    return runningTotal + currentValue;
}

nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum); //displays 55

/**
 * Forma na qual o calculo é realizado
 * 
 * add(1,2) -> 3
 * add(3,3) -> 6
 * add(6,4) -> 10
 * add(10,5) -> 15
 * add(15,6) -> 21
 * add(21,7) -> 28
 * add(28,8) -> 36
 * add(36,9) -> 45
 * add(45,10) -> 55
 */
