function Dictionary(){
    this.dataStore = new Array();

    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value){
    this.dataStore[key] = value;
}
function find(key){
    return this.dataStore[key];
}
function remove(key){
    console.log("Remove: " + key);
    delete this.dataStore[key];
}
function showAll(){
    console.log("**** All elements ****");
    var array = this.dataStore;
    Object.keys(this.dataStore).forEach(function(key){
        console.log("*  " + key + "\t -> " + array[key]);
    });
    console.log("********* end ********");
    
}
function count(){
    var n = 0;
    Object.keys(this.dataStore).forEach(function(){
        ++n;
    });
    return n;
}
function clear(obj){
    Object.keys(this.dataStore).forEach(function(key){
        obj.remove(key);
    })
}

//testes
var pbook = new Dictionary();

pbook.add("Mike", "123");
pbook.add("David","345");
pbook.add("Cynthia", "456");
pbook.showAll();
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();

//count and clear
pbook.add("Raymond","123");
pbook.add("Flavio", "345");
pbook.add("Marcos", "456");
console.log("Number of entries: " + pbook.count());
console.log("Marcos is extension: " + pbook.find("Marcos"));
pbook.showAll();
pbook.clear(pbook);
console.log("Number of entries: " + pbook.count());
