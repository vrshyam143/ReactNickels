import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import BottomHeader from '../src/components/BottomHeader/BottomHeader';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BottomHeader/>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
