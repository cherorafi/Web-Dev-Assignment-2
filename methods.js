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

//For testing function 1
/*
const array1 = [1, 4, 9, 16];
console.log(array1.myMap(x => x * 2));
*/