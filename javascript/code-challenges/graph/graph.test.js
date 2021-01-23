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
    // let edge = new Edge (vertex, 5);
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addDirectedEdge(vertex, vertexTwo, 5);
    // console.log({vertex}, {vertexTwo}, {graph});
    expect([...graph.bfs(vertex)]).toEqual([vertex, vertexTwo]);
  })

})