fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: function(collection,iteratee) {
      for (let key in collection){
        iteratee(collection[key]);
      }
      return collection;
    },

    map: function(collection,iteratee) {
      let newCollection = [];
      for (let key in collection){
        newCollection.push(iteratee(collection[key]));
      }
      return newCollection;
    },

    reduce: function(collection, iteratee, acc=0) {
      let solution = acc;
      for (let key in collection){
        solution = iteratee(solution, collection[key]);
      }
      return solution;
    },
    find: function(collection,predicate){
      for(let key in collection){
        if (predicate(collection[key])===true){
          return true;
        }
      }
      return false;
    },
    filter: function(collection, predicate){
      result = [];
      for(let key in collection){
        if (predicate(collection[key])===true){
          result.push(collection[key]);
        }
      }
      return result;
    },
    size: function(collection){
      let i = 0;
      for (let key in collection){
        i++;
      }
      return i;
    },
    first: function(collection,n=1){
      if (n === 1) {
        return collection[0];
      }
      let start = [];
      for (let i = 0; i < n; i++){
        start.push(collection[i]);
      }
      return start;
    },
    last: function(collection,n=1){
      if (n === 1) {
        return collection[collection.length-1];
      }
      let end = [];
      for (let i = collection.length-1; i > 0; i--){
        end.unshift(collection[i]);
      }
      return end;
    },
    compact: function(array){
      copy = [];
      for (let key in array){
        if (!!(array[key])){
          copy.push(array[key]);
        }
      }
      return copy;
    },
    sortBy: function(array, iteratee) {
      let converted = [];
      for(let i = 0;i < array.length;i++){
        converted.push(iteratee(array[i]));
      }
      return [...converted.sort((a,b)=> a - b)];
    },
    flatten: function(array,shallow=false){
      let result = [];
      if (shallow){
        for (let i = 0;i<array.length;i++){
          if (typeof array[i] === 'object'){
            for(let key in array[i]){
              result.push(array[i][key]);
            }
          }else{
            result.push(array[i]);
          }
        }
      return result;
    }//endif
      function flattener(array) {
        for(let key in array){
          if (typeof array[key] === 'object'){
            flattener(array[key]);
          }else{
            result.push(array[key]);
          }
        }
      }//endflattener
      flattener(array);
      return result;

    },
    uniq: function(array,isSorted=false,iteratee){
      let result = [];
      let iteratedResult = [];
      let temp = [];
      if (iteratee){
        temp = [...array.map(iteratee)];
        for (let i = 0; i<temp.length; i++){
          if (!iteratedResult.includes(temp[i])){
            result.push(array[i]);
            iteratedResult.push(temp[i]);
          }
        }
      } else{
      for (let key in array){
        if (!result.includes(array[key])){
          result.push(array[key]);
        }
      }
    }
    return result;
    },
    keys: function(object){
      keys = [];
      for (let key in object){
        keys.push(key);
      }
      return keys;
    },
    values: function(object){
      values = [];
      for (let key in object){
        values.push(object[key]);
      }
      return values;
    },
    functions: function(object){
      functions = [];
      for(let key in object){
        if (typeof(object[key])==='function') {
        functions.push(object[key]);
        }
      }
      return functions;
    },
    giveMeMore: function(){}
  }
})()

fi.libraryMethod()
