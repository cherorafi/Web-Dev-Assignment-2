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

// 9. Object.keys()
Object.myKeys = function (map) 
{
    var keys=[]; 
    for(let x in map){
      keys.push(x); 
    }
    return keys; 
};

// 10. Object.values()
Object.myValues = function (map) 
{
    var values=[]; 
    for(let x in map){
      values.push(map[x]); 
    }
    return values; 
};
