var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        let oldValue = bucket[i][1];
        bucket[i][1] = v;
        return oldValue;
      } else {
        bucket.push([k, v]);
      }
    }  
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket.length > 0) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let trash = this._storage.get(index)[0];
  trash.splice(0, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(1)
 retrieve: O(1)
 remove: O(1)
 */
 
 