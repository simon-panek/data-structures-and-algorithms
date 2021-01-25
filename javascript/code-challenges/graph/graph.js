'use strict';

class Vertex {
  constructor (value) {
    this.value = value;
  }
}

class Edge {
  constructor (vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor(){
    this.adjacencyList = new Map();
    // this.size = 0; //Can add this here and increment it every time a vertex is added to maintain the size attribute 
  }

  //add new vertex to this graph
  addVertex(vertex){
    //.set(key,value) puts a key/value aka node in the map
    this.adjacencyList.set(vertex,[]); // when add vertex for first time the value is an empty array because it will eventually hold a list of all of the nodes that it is connected to
  }

  addDirectedEdge(startVertex, endVertex, weight){
    //error checking, must have starting and ending node
    if(!this.adjacencyList.has(startVertex) || (!this.adjacencyList.has(endVertex))) { //map.has() returns bool: true if exists in map, false if not
      throw new Error('error: start or end vertex missing');
    }
    //get startVertex from Map (all of verticies)
    //push a new Edge that will connect the start to the end 
    const adjacencies = this.adjacencyList.get(startVertex); //map.get() returns [] of all adjacencies
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('error - invalid vertex', vertex);
    }
    return this.adjacencyList.get(vertex); //returns an array
  }

  //breadthFirstSearch
  bfs(startNode){

    if(!startNode) return null;

    const queue = [];
    // a set is an object that will only store unique keys
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    while(queue.length){
      //remove the first item from the queue
      const currentNode = queue.shift();
      // get all the neighbors of the node that I took off of the queue
      const neighbors = this.getNeighbors(currentNode);
      //loop over all neighbors
      for(let neighbor of neighbors){
        const neighborNode = neighbor.vertex;
        //if the set has the node I'm looking for
        if(visitedNodes.has(neighborNode)){
          continue;
        } else {
          //else, if haven't been there, add to set
          visitedNodes.add(neighborNode);
        }
        //put it into the queue
        queue.push(neighborNode);
      }
    }
    //return the Set which contains all of the nodes in order visited
    return visitedNodes;
  }

  //depth first search
  dfs(startNode) {

    if(!startNode) return null;

    const visitedNodes = new Set();

    const _traverseNeighbors = (node) => {
      //add node to the Set
      visitedNodes.add(node);

      //do logic hear if searching for something specific

      //get all of the neighbors
      const neighbors = this.getNeighbors(node);
      //loop over all neighbors
      for(let edge of neighbors){
        //if the set doesn't have the node
        if(!visitedNodes.has(edge.vertex)){
          //then run function again
          _traverseNeighbors(edge.vertex);
        }
      }
    }
    _traverseNeighbors(startNode);
    return visitedNodes;
  }

  pathTo(startNode, endNode){
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();

    stack.push(startNode);
    visitedNodes.add(startNode);

    while(stack.length){
      //remove the top/last thing from the stack
      const currentNode = stack.pop();

      //make sure that our currentNode is not our end
      if(currentNode === endNode){
        return parentPath;
      }

      //get all the neighbors
      const neighbors = this.getNeighbors(currentNode);

      //loop over the edges
      for(let neighbor of neighbors){
        //find the vertex node
        const neighborNode = neighbor.vertex;

        // chick if the Set contains that node
        if(visitedNodes.has(neighborNode)){
          //stop looking at this node and move on
          continue;
        } else {
          // otherwise add the node to the Set
          visitedNodes.add(neighborNode);
        }
        //add it to the stack
        stack.push(neighborNode);
        //set a path in the parentPath with this as the key and currentNode as the value
        parentPath.set(neighborNode, currentNode);
      }
    }
    return parentPath;
  }

  //depth first search
  size(startNode) {
    let count = 0;

    if(!startNode) return count;
    const visitedNodes = new Set();


    const _traverseNeighbors = (node) => {
      //add node to the Set
      visitedNodes.add(node);

      count++;
      //do logic hear if searching for something specific

      //get all of the neighbors
      const neighbors = this.getNeighbors(node);
      //loop over all neighbors
      for(let edge of neighbors){
        //if the set doesn't have the node
        if(!visitedNodes.has(edge.vertex)){
          //then run function again
          _traverseNeighbors(edge.vertex);
        }
      }
    }
    _traverseNeighbors(startNode);
    return count;
  }

}

module.exports = {Vertex, Edge, Graph};