import React, { Component } from 'react';

import './App.css';

import MainDialogue from './Components/Dialogue/MainDialogue';
import Summary from './Components/Summary/Summary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */  }
          <MainDialogue/>
        </header>
      </div>
    );
  }
}

export default App;
