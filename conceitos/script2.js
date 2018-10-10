//Recursion

function factorial(number){
    if(number == 1){
        return number;
    } else { 
        return number * factorial(number - 1);
    }
}

console.log("factorial 5: " + factorial(5));

//Objects and object-oriented Programming
function Checking(amount){
    this.balance = amount; //property
    
    this.deposit = deposit; //function
    this.withdraw = withdraw; //function
    this.toString = toString; //function
}

function deposit(amount){
    this.balance += amount;
}

function withdraw(amount){
    if(amount <= this.balance){
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
}

function toString(){
    return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); //Balance: 1500
account.withdraw(750);
console.log(account.toString()); //Balance 750
account.withdraw(800); //Displays "Insuficient funds"
console.log(account.toString()); //Balance 750