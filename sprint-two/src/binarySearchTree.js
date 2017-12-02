  // it('should insert values at the correct location in the tree', function() {
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.insert(7);
  //   binarySearchTree.insert(6);
  //   expect(binarySearchTree.left.right.value).to.equal(3);
  //   expect(binarySearchTree.right.left.value).to.equal(6);


var BinarySearchTree = function(value) {
  let someSearchTree = Object.create(searchTreeMethods);
  
  // someSearchTree.depth = depthFirstLog(func);
  someSearchTree.value = value;
  someSearchTree.left = null;
  someSearchTree.right = null;
  
  return someSearchTree;
};

let searchTreeMethods = {
  
  // population: this.population || 1,
  
  insert: function(value) {
    let newNode = BinarySearchTree(value);
    let self = this;

    
    // searchNodes(newNode)
      // checks if this.left === null
        // if so this.left = newNode
    this.left.searchNodes(value) {
      if (this.left !== null) {
        this.left.searchNodes(value) {
          
        }
      }
    }
    
    searchNodes: function(value) { 
    // we run this function on current node if newNode needs to go to the left or right property but that property is already taken
    // accepts the value passed in insert AKA newNode.value
    // compares input value to the value of current node to determine if input value needs to go to the left or right
    
      // if the value needs to go to the left
          // if current node's left property === null
              // then insert newNode into current node's left property
          // if current node's left property !== null
              // run this.left.searchNodes(value);
              
      // if the value needs to go to the right
          // if current node's right property === null
              // then insert newNode into current node's right property
          // if current node's right property !== null
              // run this.right.searchNodes(value);
    
    // returns nothing
    
    if (value < self.value) {
      if (self.left === null) {
        self.left = newNode;
      } else if (self.left !== null) {
        this.left.searchNodes(value)
      }
    }
    
    
    
    
    
    
    
    
    
    }
    
  },
  
  contains: function(value) {
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
  },
  
  depthFirstLog: function(func) {
    return 'placeholder';
  }
  
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


// binarySearchTree = BinarySearchTree(5);
// binarySearchTree.insert(2);
// binarySearchTree.insert(3);
// binarySearchTree.insert(7);
// binarySearchTree.insert(6);


