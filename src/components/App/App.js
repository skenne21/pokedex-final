import React, { Component } from 'react';
import './App.css';
import PokeDeckContainer from '../../containers/PokeDeckContainer/'

class App extends Component {


  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokeDeckContainer />
      </div>
    );
  }
}


export default App;
