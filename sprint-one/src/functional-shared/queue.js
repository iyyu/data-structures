var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value; 
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

queueMethods.shift = function() {
  for (let i = 0; i < this.size(); i++) {
    let newKey = this.storage[i + 1];
    this.storage[i] = newKey;
  }
};

queueMethods.dequeue = function() {
  let result = this.storage[0];
  this.shift();
  delete this.storage[this.size() - 1];
  return result;
};


