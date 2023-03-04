// 1. map()
Array.prototype.myMap = function (func) 
{
    var newList = [];
    var length = this.length
    for (let i = 0; i < length; i++) {
        newList.push(func(this[i], i, this));
    }
    return newList;
};

/* // For testing function 1
const array1 = [1, 4, 9, 16];
console.log(array1.myMap(x => x * 2));
*/

// 2. filter()
Array.prototype.myFilter = function (func) 
{
    var newList = [];
    var length = this.length
    for (let i = 0; i < length; i++) {
        if (func(this[i], i, this))
            newList.push(this[i]);
    }
    return newList;
};

/* // For testing function 2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.myFilter(word => word.length > 6));
*/

// 3. some()
Array.prototype.mySome = function (func) 
{
    var length = this.length
    for (let i = 0; i < length; i++) {
        if (func(this[i], i, this))
            return true;
    }
    return false;
};

/* // For testing function 3
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.mySome(even));
*/

// 4. every()
Array.prototype.myEvery = function (func) 
{
    var length = this.length
    for (let i = 0; i < length; i++) {
        if ((func(this[i], i, this)) == false)
            return false;
    }
    return true;
};

/* // For testing function 4
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.myEvery(isBelowThreshold));
*/

// 5. reduce()
Array.prototype.myReduce = function (func, initialValue) 
{
    var index = 0
    if (initialValue == undefined){
        index = 1
        initialValue = this[0]
    }

    var length = this.length
  
    for (i = index; i < length; i++){
      initialValue = func(initialValue, this[i], i, this);
    }
  
    return initialValue;
  };
  
/* // For testing function 5
const array1 = [1, 2, 3, 4];
const initialValue = 1;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue
);
console.log(sumWithInitial);
*/

// 6. includes()
Array.prototype.myIncludes = function (word) 
{
    var length = this.length
    for (let i = 0; i < length; i++) {
        if (this[i] == word)
            return true;
    }
    return false;
};

/* // For testing function 6
const array1 = [1, 2, 3];
console.log(array1.myIncludes(2));
const pets = ['cat', 'dog', 'bat'];
console.log(pets.myIncludes('cat'));
console.log(pets.myIncludes('at'));
*/


// 7. indexOf()
Array.prototype.myIndexOf = function (word, index) 
{
    if (index == undefined)
        index = 0
    var length = this.length
    for (let i = index; i < length; i++) {
        if (this[i] == word)
            return i;
    }
    return -1;
};

/* //For testing function 7
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.myIndexOf('bison'));
console.log(beasts.myIndexOf('bison', 2));
console.log(beasts.myIndexOf('giraffe'));
*/

// 8. lastIndexOf()
Array.prototype.myLastIndexOf = function (word) 
{
    var index = -1
    var length = this.length
    for (let i = 0; i < length; i++) {
        if (this[i] == word)
            index = i
    }
    return index;
};

/* // For testing function 8
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.myLastIndexOf('Dodo'));
console.log(animals.myLastIndexOf('Tiger'));
*/

Object.myKeys = function (map) 
{
    var keys=[]; 
    for(let x in map){
      keys.push(x); 
    }
    return keys; 
};

/* // For testing function 9
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.myKeys(object1));
*/