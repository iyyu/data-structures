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

treeMethods.contains = function(target, tree, found = false) {
  if (tree.value === target) {
    found = true;
  }
  else {
    if (found !== true && tree.children.length > 0) {
      // for loop to run through each child node in children array
      found = tree.contains(target, tree.children)
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
