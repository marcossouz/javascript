function List(){
    this.listSize = 0; //Number of elements in list
    this.pos = 0; //Current position in list
    this.dataStore = []; //initializes an empty array to store list elements
    
    this.clear = clear; //Clears all elements from list
    this.find = find; //Finding an Element from a list
    this.toString = toString; //Returns string representation of list
    this.insert = insert; //Inserts new element after existing element
    this.append = append; //Adds new element to end list
    this.remove = remove; //Removes element form list
    this.front = front; //Set current position to first element of list
    this.end = end; //Sets current position to last element of list
    this.prev = prev; //Moves current position back one element
    this.next = next; //Moves current position forward one element
    this.length = length; //Return the nubmer of elements in list
    this.currPos = currPos; //Return the current position in list
    this.moveTo = moveTo; //Return the current osition in list
    this.getElement = getElement; //Return element at current position
    this.contains = contains; //Determining if a Given Value Is in a List
}

//Append: Adding an Element to a List
function append(element){
    this.dataStore[this.listSize++] = element;
}

//Find: Finding an Element from a list
function find(element){
    for(var i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

//Remove: Removing an Element from a List
function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1); //remove o elemento na posição foundAt
        --this.listSize;
        return true;
    }
    return false;
}

//Length: Determining the Number of Elements in a List
function length(){
    return this.listSize;
}

//toString: Retrieving a List's Element
function toString(){
    return this.dataStore;
}

//Insert: Inserting an Element into a List
function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//Clear: Removing All Elements from a list
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

//Contains: Determining if a Given Value Is in a List
function contains(element){
    for(var i = 0; i < this.dataStore.length; ++i){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

//Traversing a List
function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0){
        --this.pos;
    }
}

function next(){
    if(this.pos < this.listSize){
        ++this.pos;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}

/**
 * Testes
 */
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
names.insert("Marcos", "Cynthia");
names.insert("Elizania", "Marcos");
console.log(names.toString());
names.clear();
names.append("Esequiel");
names.append("Josefa");
console.log(names.toString());
console.log(names.contains("Marcos"));
console.log(names.contains("Esequiel"));

names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");


//Now let’s move to the first element of the list and display it:
names.front();
console.log(names.getElement()); //Clayton

//Next, we move forward one element and display the element’s value:
names.next();
console.log(names.getElement()); //Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement()); //displays Cynthia


for(names.front(); names.currPos() < names.length(); names.next()){   
    console.log("getElements: " + names.getElement());
}

console.log("Ordem inversa: ");
var z = 0;
 for(names.end(); names.currPos() > 0; names.prev()){
     console.log("getElements: " +  names.getElement());

     if(z++ > 7) break;
 }

 var txt = "1. The Shawshank Redemption\n2. The Godfather\n3. The Godfather: Part II\n4. Pulp Fiction\n5. The Good, the Bad and the Ugly" +
"\n6. 12 Angry Men\n7. Schindler’s List\n8. The Dark Knight\n9. The Lord of the Rings: The Return of the King\n10. Fight Club" +
"\n11. Star Wars: Episode V - The Empire Strikes Back\n12. One Flew Over the Cuckoo’s Nest\n13. The Lord of the Rings: The Fellowship of the Ring";
function createArr(text){
    var arr = text.split("\n");
    // for(var i = 0; i < arr.length; ++i){
    //     arr[i] = arr[i].trim();
    // }
    return arr;
}

function displayList(list){
    for(list.front(); list.currPos() < list.length(); list.next()){
        console.log(list.getElement());
    }
}

// console.log(createArr(txt));

var movies = createArr(txt);
// console.log(movies);

 var movieList = new List();

 for(var i = 0; i < movies.length; ++i){
    movieList.append(movies[i]);
 }

console.log(movieList.toString());

displayList(movieList);