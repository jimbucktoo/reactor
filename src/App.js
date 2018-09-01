import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyDOICvv4I17YxipbvrSeDs7HsmoloJVjVI';

class App extends Component {
  render() {
    return (
      <div className="App">
          <br />
          <br />
          <br />
          <SearchBar />
      </div>
    );
  }
}

export default App;
