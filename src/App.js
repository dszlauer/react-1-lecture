import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MY TITLE</h1>
        <ul>
          <li>Bob</li>
          <li>Tom</li>
          <li>Garry</li>
          <li>Victoria</li>
        </ul>
        <input text="Add a Friend"></input>
        <button>MyButton</button>
      </div>
    );
  }
}

export default App;
