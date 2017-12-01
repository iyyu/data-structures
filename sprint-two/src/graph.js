

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
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  debugger;
  // let fromIndex = this.nodes.indexOf(fromNode);
  
  let fromIndex = this.nodes.reduce(function(all, item, index) {
    if (item.value === fromNode) {
      all = index;
    }
    return all;
  });
  
  let toIndex = this.nodes.reduce(function(all, item, index) {
    if (item.value === toNode) {
      all = index;
    }
    return all;
  });
  
  // let toIndex = this.nodes.indexOf(toNode);
  
  this.nodes[fromIndex].edges.push(this.nodes[toIndex]);
  this.nodes[toIndex].edges.push(this.nodes[fromIndex]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// let someGraph = new Graph(0);
// someGraph.addNode(1);
// someGraph.addEdge(0, 1);