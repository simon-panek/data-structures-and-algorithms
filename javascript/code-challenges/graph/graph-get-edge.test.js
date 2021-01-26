'use strict';

const {Vertex, Edge, Graph} = require ('./graph.js');

describe ('Graph Class', () => {

  it('1) should successfully return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);

    let output = graph.gitEdge([vertex, vertexTwo]);
 
    expect(output).toEqual([true, 150]);
  })

  it('2) should successfully return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);

    let output = graph.gitEdge([vertex, vertexTwo, vertexThree]);
    
    expect(output).toEqual([true, 249]);
  })

  it('3) should successfully return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    graph.addDirectedEdge(vertexTwo, vertex, 150);
    graph.addDirectedEdge(vertexThree, vertex, 82);
    graph.addDirectedEdge(vertexThree, vertexTwo, 99);
    graph.addDirectedEdge(vertexFour, vertexTwo, 42);
    graph.addDirectedEdge(vertexFour, vertexThree, 105);
    graph.addDirectedEdge(vertexFive, vertexThree, 37);
    graph.addDirectedEdge(vertexSix, vertexThree, 26);
    graph.addDirectedEdge(vertexSix, vertexFour, 73);
    graph.addDirectedEdge(vertexSix, vertexFive, 250);

    let output = graph.gitEdge([vertexSix, vertexFive]);
    
    expect(output).toEqual([true, 250]);
  })

  it('4) should successfully return a collection of vertices from a  graph.', () => {
    let vertex = new Vertex('Pandora');
    let vertexTwo = new Vertex('Arendelle');
    let vertexThree = new Vertex('Metroville');
    let vertexFour = new Vertex('Monstropolis');
    let vertexFive = new Vertex('Narnia');
    let vertexSix = new Vertex('Naboo');
    let graph = new Graph();
    graph.addVertex(vertex);
    graph.addVertex(vertexTwo);
    graph.addVertex(vertexThree);
    graph.addVertex(vertexFour);
    graph.addVertex(vertexFive);
    graph.addVertex(vertexSix);
    graph.addDirectedEdge(vertex, vertexTwo, 150);
    graph.addDirectedEdge(vertex, vertexThree, 82);
    graph.addDirectedEdge(vertexTwo, vertexThree, 99);
    graph.addDirectedEdge(vertexTwo, vertexFour, 42);
    graph.addDirectedEdge(vertexThree, vertexFour, 105);
    graph.addDirectedEdge(vertexThree, vertexFive, 37);
    graph.addDirectedEdge(vertexThree, vertexSix, 26);
    graph.addDirectedEdge(vertexFour, vertexSix, 73);
    graph.addDirectedEdge(vertexFive, vertexSix, 250);
    graph.addDirectedEdge(vertexTwo, vertex, 150);
    graph.addDirectedEdge(vertexThree, vertex, 82);
    graph.addDirectedEdge(vertexThree, vertexTwo, 99);
    graph.addDirectedEdge(vertexFour, vertexTwo, 42);
    graph.addDirectedEdge(vertexFour, vertexThree, 105);
    graph.addDirectedEdge(vertexFive, vertexThree, 37);
    graph.addDirectedEdge(vertexSix, vertexThree, 26);
    graph.addDirectedEdge(vertexSix, vertexFour, 73);
    graph.addDirectedEdge(vertexSix, vertexFive, 250);

    let output = graph.gitEdge([vertex, vertexSix]);
 
    expect(output).toEqual([false, 0]);
  })
})
