import React, { Component } from 'react';

class Cart extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  render() {
    return (
      <div className="App">
      <h1 className="App-title">Your Cart</h1>
      <ul>
        {
          this.props.myCart.map((el,i) => {
            return <div key={i}>
              <div> {el.name} - Price : {el.price} $ </div>
            </div>
          })
        }
        <hr className="total"/>
        Total :{this.props.total} $
      </ul>
      </div>
    );
  }
}

export default Cart;
