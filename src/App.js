import React, { Component } from 'react';
import autoBind from 'react-autobind';
import logo from './logo.svg';
import './App.css';

import Products from './Products.js'
import Cart from './Cart.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      products:[
        {
          name:"felfel",
          price:3000
        },
        {
          name:"tmatem",
          price:2000
        },
        {
          name:"bsal",
          price:100
        }
      ],
      myCart:[],
      total:0
    }
    autoBind(this);
  }

  addToCart(el){
    this.setState({
      myCart:this.state.myCart.concat(el),
      total:this.state.total+el.price
    }, () => console.log(this.state.total))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Market </h1>
        </header>
        <div>
          <Products products={this.state.products} addToCart={this.addToCart}/>
        </div>
          <Cart myCart={this.state.myCart} total={this.state.total}/>
      </div>
    );
  }
}
export default App;
