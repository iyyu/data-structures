var Tree = function(value) {
  let newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target, found = false) {
  if (this.value === target) {
    found = true;
  } else {
    if (found !== true && this.children.length > 0) {
      for (let node = 0; node < this.children.length; node++) {
        let result = this.children[node].contains(target, found);
        found = result;
      }
    }
  }
  return found;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
