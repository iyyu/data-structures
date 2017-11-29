var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      let copy = storage[0];

      someInstance.shift();
      delete storage[someInstance.size() - 1];
      return copy;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };
  
  someInstance.shift = function() {
    for (var key = 0; key < someInstance.size(); key++) {
      let newKey = key + 1;
      storage[key] = storage[newKey];
    }
  };

  return someInstance;
};

