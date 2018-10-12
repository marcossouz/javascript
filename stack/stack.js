function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top-1];
}

function length(){
    return this.top;
}

function clear(){
    this.top = 0;
}

var s = new Stack();

s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length()); //displays 3
console.log(s.peek()); //displays Bryan

var popped = s.pop();
console.log("The popped element is: " + popped); //displays Bryan
console.log(s.peek()); //displays Raymond

s.push("Cynthia");
console.log(s.peek()); //Displays Cynthia

s.clear();
console.log("length: " + s.length()); //displays 0
console.log(s.peek()); //displays undefined

s.push("Clayton");
console.log(s.peek()); //display Clayton

/**
 *  Using te Stack Class
 */

// Realizando uma mudanca de base, da base 10 para outra.

function mulBase(num, base){ //recebe um numero e a base que se deseja para a mudanca
    var s = new Stack(); //cria a pilha

    do {
        s.push(num % base); //empilha o resultado da divisão
        num = Math.floor(num /= base); //atualiza o num com o maior inteiro da divisão

    } while(num > 0); //repita enquanto o num for maior que zero

    var converted = ""; //variavel string

    while(s.length() > 0){ //enquanto houver elementos na pilha, repita
        converted += s.pop(); //retira o elemento da pilha e passa para a variavel converted
    }
    return converted; //retorna o numero com a base modificada
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum); //32 converted to base 2 is 100000

num = 125;
base = 8;
newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum); //125 converted to base 8 is 175


//Determining if a string is a palindrome
function isPalindrome(word){ //Recebe uma String para verificar se é um palindromo
    var s = new Stack();  //cria uma nova pilha

    for(var i = 0; i < word.length; ++i){
        s.push(word[i]); //empilhando a palavra recebida letra/elemento, um a um
    }

    var rword = ""; //criando nova string para armazenar a string reversa
    while(s.length() > 0){
        rword += s.pop(); //desempilha a string original para se obter a string reversa
    }

    if(word == rword){ //verifica se as strings são igual
        return true; //se sim é palindromo
    } else {
        return false;//se não não é palindromo
    }
}

var word = "hello";

if(isPalindrome(word)){
    console.log(word + " is a palindrome"); 
} else {
    console.log(word + " is not a palindrome"); // hello is not a palindrome
}

var word = "racecar";

if(isPalindrome(word)){
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome"); //racecar is a palindrome
}

//Fatorial usando pilha
function fact(n){
    var s = new Stack();

    while(n > 1){
        s.push(n--);
    }

    var product = 1;
    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
}

console.log(fact(5)); //displays 120