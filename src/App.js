import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ProductList from './modules/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default App;
