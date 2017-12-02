var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item) === false) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  let found;
  
  if (this._storage.indexOf(item) === -1) {
    found = false;
  } else {
    found = true;
  }
  return found;
};

setPrototype.remove = function(item) {
  // find item index
    // if index = -1 return 'not found'
  // else
    // remove index from set (using splice if in JS)
  
  let index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
  
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(n)
 contains: O(n)
 remove: O(n)
 */
