var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  var results = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return results;
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value; 
};