import React, { Component } from 'react';
import './App.css';
import Pessoa from './Pessoa/Pessoa'

class App extends Component {
  state = {
    persons: [
      {carac: 'chata', age: 28},
      {carac: 'fei', age: 22},
      {carac: 'gora', age: 12},
      {carac: 'troxa', age: 34}
    ]
  }

  trocaNome = () =>{
    console.log("foi, irmapo");
  }


  render() {
    return (
      <div className="App">
        <h1>Aprendendo React</h1>
        <Pessoa carac={this.state.persons[Math.floor(Math.random()*this.state.persons.length)].carac} age={this.state.persons[Math.floor(Math.random()*this.state.persons.length)].age}>Como isso sai?</Pessoa>
        <button onClick={this.trocaNome}>Clica ai pra mudar os nomes</button>
      </div>
    );
  }
}

export default App;
