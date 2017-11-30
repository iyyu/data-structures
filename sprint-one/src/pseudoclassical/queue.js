var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

Queue.prototype.shift = function() {
  for (let key = 0; key < this.size(); key++) {
    let temp = this.storage[key + 1];
    this.storage[key] = temp;
  }
};

Queue.prototype.dequeue = function() {
  let result = this.storage[0];
  this.shift();
  delete this.storage[this.size() - 1];
  return result;
};


