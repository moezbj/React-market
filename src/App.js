import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Market </h1>
        </header>
        <div>
          <Product kadhiya={this.state.kadhiya} myCart={this.state.myCart} />
        </div>
      </div>
    );
  }
}
export default App;
