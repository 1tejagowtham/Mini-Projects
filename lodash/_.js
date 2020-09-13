




// Do not write or modify code below this line.
module.exports = _;

const _ = {
  clamp (number, lower, upper) {

    let lowClampVal = Math.max(number, lower);
    let clampedValue = Math.min(lowClampVal, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if ( end === undefined ){
      end = start;
      start = 0
    }
   if(start > end){
      let temp;
      temp = start;
      start = end;
      end = temp;
    }
  const inRange = number >= start && number < end;
  return inRange;
  },

  words(str){
    const words = str.split(' ');
    return words;
  },

  pad(str, length){
    if(length <= str.length){
      return str;
    }
    let startPaddingLength =  Math.floor((length - str.length)/2);
    let endPaddingLength = length - str.length - startPaddingLength;
    padString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
    return padString;
  },

  has(object, key){
    const hasValue = object[key];
    if(hasValue != undefined){
      return true;
    }
    return false;
  },

  invert(obj){
    let newObj = {};
    for(let key in obj){
      const newValue = obj[key];
      newObj[newValue] = key;
    }
    return newObj;
  },

  findKey(obj, func){
    for(let key in obj){
      if( func(obj[key]) ){
        return key;
      }
    }
     return undefined;
  },

  drop(arr, number){
    if(number === undefined){
      number = 1;
      
    }
    return arr.slice(number, arr.length);
  },

  dropWhile(arr, func){

    const callBack = (element, index) => {
      return !func(element, index, arr)
    }  

    let dropNumber = arr.findIndex(callBack);

    return this.drop(arr, dropNumber);
     
  },

  chunk(array, size){
    if(size == undefined){
      size = 1;
    }
    let arrayChunks = []
    for(let i =0; i< array.length; i += size){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);

    }

    return arrayChunks;

  }





};




// Do not write or modify code below this line.
module.exports = _;
