var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if the storage does not contain item
    // push item into the 
  if (this._storage.contains(item === false)) {
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
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
