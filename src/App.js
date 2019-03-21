import React, { Component } from 'react';
import './App.css';
import Pessoa from './Pessoa/Pessoa'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aprendendo React</h1>
        <Pessoa />
      </div>
    );
  }
}

export default App;
