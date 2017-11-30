var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 

  list.addToTail = function(value) {
    let node = Node(value);
    if (list.tail !== null) {
      list.tail.next = node;
    }
    list.tail = node;  
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(n)
removeHead O(1)
contains O(n)
 */
