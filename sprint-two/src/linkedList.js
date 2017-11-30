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
    if (list.head === null) {
      list.head = node;
    }
  };

  list.removeHead = function() {
    let result = list.head.value;
    if (list.head.next !== null) {
      list.head = list.head.next;
    } 
    return result;
  };

  list.contains = function(target, node = list.head) {
    let found = false;
    if (node.value === target) {
      found = true;
    } else {
      if (node.next !== null && found === false) {
        let result = list.contains(target, node.next);
        found = result;
      }
    }
    return found;
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
addToTail: O(1)
removeHead O(1)
contains O(n)
 */
