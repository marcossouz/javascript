function concat(accumulatedString, item){
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat); // Transforma o array em uma unica string
console.log(sentence); //displays "the quick brown fox"

sentence = words.reduceRight(concat); 
console.log(sentence); //displays "fox brown quick the"

//Iterator Functions That Return a New Array

function curve(grade){
    return grade += 5;
}

var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
console.log(newgrades); //82,70,86,97,88

function first(word){
    return word[0];
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym.join("")); //displays "fyi"

//filter() - filtra de acordo com o parametro desejado
function isEven(num){
    return num % 2 == 0; //é par?
}

function isOdd(num){
    return num % 2 != 0; // é impar?
}

var nums = [];
for( var i = 0; i < 20; ++i){ //preenchendo o array com valores de 1 a 20
    nums[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log("Even numbers: " + evens);

var odds = nums.filter(isOdd);
console.log("Odd numbers: " + odds);

function passing(num){
    return num >= 60;
}

grades = [];
for(var i = 0; i < 20; ++i){
    grades[i] = Math.floor(Math.random() * 101); //gera valores aleatorio de 1 a 101
}

var passGrades = grades.filter(passing);
console.log("All grades: " + grades); //imprime todos os numeros gerados
console.log("Passing grades: " + passGrades); //imprime os numeros acima de 60

function afterc(str){
    // console.log(str.indexOf("cie")); //imprime 2,-1,3,-1,3
    
    if(str.indexOf("cie") > -1){ //se não encontra a substring retorna -1.
        return true;
    }
    return false;
}

words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
console.log(misspelled); //displays recieve, percieve, concieve