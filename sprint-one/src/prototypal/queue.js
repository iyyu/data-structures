var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {
  
  size: function() {
    return Object.keys(this.storage).length;
  }, 
  shift: function() {
    for (let key = 0; key < this.size(); key++) {
      let temp = this.storage[key + 1];
      this.storage[key] = temp;
    }
    delete this.storage[this.size() - 1];
  },
  dequeue: function() {
    let result = this.storage[0];
    this.shift();
    return result;
  },
  enqueue: function(value) {
    this.storage[this.size()] = value;
  }
  
};


