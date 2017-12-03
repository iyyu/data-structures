var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 

  // change addToTail to addAfter
  // add param called insertedValue
  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.tail !== null) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
    }
    list.tail = newNode;
    if (list.head === null) {
      list.head = newNode;
    }
  };

  list.addAfter = function(nodeRef, value) {
    let newNode = Node(value);
    let oldNext = nodeRef.next;

    newNode.previous = nodeRef;
    newNode.next = oldNext;
    nodeRef.next = newNode;
    oldNext.previous = newNode;


  };

  // let wantToAdd = linkedList.lookup(4);
  // linkedList.addAfter(5, wantToAdd);

  // make addBefore method

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

  list.lookup = function(target, node = list.head) {
    if (node.value === target) {
      result = node;
    } else {
      if (node.next !== null) {
        result = list.lookup(target, node.next);
       
      } else {
        return undefined;
      }
    }
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(1)
removeHead O(1)
contains O(n)
 */
