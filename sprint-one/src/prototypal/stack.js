var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  
  size: function() {
    return Object.keys(this.storage).length;
  },
  pop: function() {
    let results = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return results;
  },
  push: function(value) {
    this.storage[this.size()] = value;
  }
  
};


