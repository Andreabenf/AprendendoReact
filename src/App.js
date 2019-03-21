import React, { Component } from 'react';
import './App.css';
import Pessoa from './Pessoa/Pessoa'

class App extends Component {
  state = {
    persons: [
      {carac: 'chatinha', age: 28},
      {carac: 'feia', age: 22},
      {carac: 'gorda', age: 12},
      {carac: 'troxa', age: 34}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Aprendendo React</h1>
        <Pessoa carac={this.state.persons[Math.floor(Math.random()*this.state.persons.length)].carac} age={this.state.persons[Math.floor(Math.random()*this.state.persons.length)].age}>Como isso sai?</Pessoa>
        <button>Clica ai pra mudar os nomes</button>
      </div>
    );
  }
}

export default App;
