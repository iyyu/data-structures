  // it('should insert values at the correct location in the tree', function() {
  //   binarySearchTree.insert(2);
  //   binarySearchTree.insert(3);
  //   binarySearchTree.insert(7);
  //   binarySearchTree.insert(6);
  //   expect(binarySearchTree.left.right.value).to.equal(3);
  //   expect(binarySearchTree.right.left.value).to.equal(6);


var BinarySearchTree = function(value) {
  let someSearchTree = Object.create(searchTreeMethods);
  
  someSearchTree.value = value;
  someSearchTree.left = null;
  someSearchTree.right = null;
  
  return someSearchTree;
};

let searchTreeMethods = {

  
  insert: function(value) {
    let newNode = BinarySearchTree(value);
    let self = this;
    
    this.insertSearchHelper(value, newNode);
  },
    
  insertSearchHelper: function(value, newNode) { 
    
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        return;
      } else if (this.left !== null) {
        this.left.insertSearchHelper(value, newNode);
      }
    }
    if (value > this.value) {
      if (this.right === null) {
        this.right = newNode;
        return;
      } else if (this.right !== null) {
        this.right.insertSearchHelper(value, newNode);
      }
    }
  
  },
  
  contains: function(value, found = false) {
    
    if (this.value === value) {
      found = true;
    } else {
      found = this.containsSearchHelper(value, found);
    }
    return found;
  },
  
  containsSearchHelper: function(value, found) {  

    if (found !== true) {
      if (this.value === value) {
        found = true;
        return found;
      }
      if (this.left !== null && found !== true && value < this.left.value) {
        found = this.left.containsSearchHelper(value, found);
      } 
      if (this.right !== null && found !== true && value >= this.right.value) {
        found = this.right.containsSearchHelper(value, found);
      } 
      return found;
    }
  },
  
  depthFirstLog: function(func) {
    
    func(this.value);

    if (this.left !== null) {
      this.left.depthFirstLog(func);
    } 

    if (this.right !== null) {
      this.right.depthFirstLog(func);
    } 

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


