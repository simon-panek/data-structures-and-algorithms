'use strict';

const {Vertex, Edge, Graph} = require ('./graph.js');

describe ('Graph Class', () => {

  it('1) should successfully add a node to the graph.', () => {
    let vertex = new Vertex(7);
    let graph = new Graph();
    graph.addVertex(vertex);
    // console.log({vertex}, {graph} )
    expect(graph.getNeighbors(vertex)).toEqual([]);
  })

  it('2) should successfully add an edge to the graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    // console.log({vertex}, {vertexTwo}, {graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo]);
  })

  it('3) should successfully return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertexThree, vertexFour, 7);
    // console.log({graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo, vertexThree, vertexFour]);
  })

  it('4) should successfully return a collection of neighbors graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(graph.getNeighbors(vertex).length).toEqual(2);
  })

  it('5) should successfully return edge weights in a collection of neighbors graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(JSON.stringify(graph.getNeighbors(vertex))).toContain('weight');
  })

  it('6) should successfully return the size of a graph.', () => {
    let vertex = new Vertex(7);
    let vertexTwo = new Vertex(9);
    let vertexThree = new Vertex(1);
    let vertexFour = new Vertex(2);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    graph.addDirectedEdge(vertexTwo, vertexThree, 6);
    graph.addDirectedEdge(vertex, vertexFour, 7);
    // console.log(graph.getNeighbors(vertex));
    expect(graph.size(vertex)).toEqual(4);
  })

  //This test should not be used, it is not possible to have a graph with a single vertex and single edge, edges can only be added to the graph if they connect two vertices
  it('7) should successfully return a graph with only one vertex and edge', () => {
    let vertex = new Vertex(7);
    let graph = new Graph();
    // let edge = new Edge (vertex, 5)
    graph.addVertex(vertex);
    // graph.addDirectedEdge(vertex, vertexTwo, 5);
    // console.log(graph);
    expect(graph.size(vertex)).toEqual(1);
  })

  it('8) should successfully return a size of 0 for an empty graph', () => {
    let graph = new Graph();
    // console.log(graph);
    expect(graph.size()).toEqual(0);
  })





})