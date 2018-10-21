function Queue(){
    this.dataStore = [];
    
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length-1];
}

function toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if(this.dataStore.length == 0){
        return true;
    } else {
        return false;
    }
}

//tests

var q = new Queue();

q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());

q.dequeue();
console.log("Front of queue: " +q.front());
console.log("Back of queue: " + q.back());

//Using the Queue Class: Assigning Partners at a Square Dance

var names = [];
names.push("F Allison McMillan");
names.push("M Frank Opitz");
names.push("M Mason McMillan");
names.push("M Clayton Ruff");
names.push("F Cheryl Ferenback");
names.push("M Raymond Williams");
names.push("F Jennifer Ingram");
names.push("M Bryan Frazer");
names.push("M David Durr");
names.push("M Danny Martin");
names.push("F Aurora Adney");

function Dancer(name, sex) {
        this.name = name;
        this.sex = sex;
}

/**
 * 
 * @param {Queue} males     queue empty for dancers females
 * @param {Queue} females   queue empty for dancers males
 * @param {Array} names     all dancers
 */
function getDancers(males, females, names){
    for(var i = 0; i < names.length; ++i){
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex == "F"){
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

console.log("-------------------------------------------");
/**
 * 
 * @param {Queue} males     dancers males
 * @param {Queue} females   dancers females
 */
function dance(males, females){
    console.log("The dance partners are: \n\n");
    while (!females.empty() && !males.empty()){
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log("and male dancer is: " + person.name);
        console.log("-------------------------");
    }
}

var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers, names);
dance(maleDancers, femaleDancers);

if(!femaleDancers.empty()){
    console.log(femaleDancers.front().name + " is waiting to dance.");
}

if(!maleDancers.empty()){
    console.log(maleDancers.front().name + " is wating to dance.");
}