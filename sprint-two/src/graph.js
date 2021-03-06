

// Instantiate a new graph
var Graph = function() {
  // shared properties
  // NOTE: Graph is instantiating as an object with an empty array of nodes
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, edges: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes.filter(function(elem) {
    return elem.value === node;
  })).length > 0;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let index = this.nodes.indexOf(node);
  this.nodes.splice(index, 1);
  // remove Edge
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  
  for (let k = 0; k < this.nodes.length; k++) {
    if (this.nodes[k].edges.includes(fromNode)) {

      var from = true;
    } 
  }
  
  for (let k = 0; k < this.nodes.length; k++) {
    if (this.nodes[k].edges.includes(toNode)) {
      var to = true;
    } 
  }
  
  return (from && to) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let fromIndex, toIndex;

  for (var k = 0; k < this.nodes.length; k++) {
    if (this.nodes[k].value === fromNode) {
      fromIndex = this.nodes.indexOf(this.nodes[k]);
    } 
  }
  
  for (var k = 0; k < this.nodes.length; k++) {
    if (this.nodes[k].value === toNode) {
      toIndex = this.nodes.indexOf(this.nodes[k]);
    } 
  }
  this.nodes[fromIndex].edges.push(this.nodes[toIndex].value);
  this.nodes[toIndex].edges.push(this.nodes[fromIndex].value);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodes.reduce(function(all, item, index) {
    if (item.value === fromNode) {
      var edgeIndex = item.edges.indexOf(toNode);
      item.edges.splice(edgeIndex, 1);
    }
  });
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(item) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// let someGraph = new Graph(0);
// someGraph.addNode(1);
// someGraph.addEdge(0, 1);