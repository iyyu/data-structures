  // limitedArray.set = function(index, value) {
  //   checkLimit(index);
  //   storage[index] = value;
  // };

// limitedArray.get = function(index) {
//     checkLimit(index);
//     return storage[index];
//   };

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  // let bucket = this._storage[index] || [];
  // if (this._storage[index] === undefined) {
  //   this._storage.set(index, []);
  //   console.log('type test ', typeof this._storage);
  //   this._storage[index].push([k, v]);
  // }
  // this._storage[index].concat([[k, v]]);
  this._storage.set(index, [[k, v]]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // let bucket = this._storage[index];
  // for (let i = 0; i < bucket.length; i++) {
  //   if (bucket[i][0] === k) {
  //     return bucket[i][1];
  //   }
  // }
  return this._storage.get(index)[0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


let hash = new HashTable();
hash._storage