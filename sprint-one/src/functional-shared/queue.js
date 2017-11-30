var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, Queue.queueMethods);
  return someInstance;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value; 
};

Queue.queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

Queue.queueMethods.shift = function() {
  for (let i = 0; i < this.size(); i++) {
    let newKey = this.storage[i + 1];
    this.storage[i] = newKey;
  }
};

Queue.queueMethods.dequeue = function() {
  let result = this.storage[0];
  this.shift();
  delete this.storage[this.size() - 1];
  return result;
};


