import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import Home from '../../containers/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header"> POKéDEX </h1>
        <Home />
      </div>
    );
  }
}

export default App;
