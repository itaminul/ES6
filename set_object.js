// Set method stores a collection of unique values of any type


// Create new set
let letters = new Set(['a','a','b','c']);
console.log(letters); //return Set(3) {"a", "b", "c"}

//get the size of a set
console.log(letters.size);//return 3

// Add element to a set

console.log(letters.add('d')) // return set(4) {"a", "b", "c", "d"}

// check if a value is in the set

console.log(letters.has('a'));// return true
console.log(letters.has('z'));// return false

// Remove element from a set
console.log(letters.delete('b'));// return true

// Looping the element a javascript set
let lettersLoops = new Set(['a','a','b','c']);
for(let lettersLoop of lettersLoops){
    //console.log(lettersLoop); // return a b c
}

// set also provide keys(), values() and entries()

let lettersAll = new Set();
lettersAll.add('name','Rakib');
lettersAll.add('age', '25')

for(let [key,letterall] of lettersAll.entries()){
    console.log(key);// return name age
}


