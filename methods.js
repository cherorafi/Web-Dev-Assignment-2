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