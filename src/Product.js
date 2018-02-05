import React, { Component } from 'react';
import Cart from './Cart.js'

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      kadhiya:[
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
  }
  addToCart(el){
    this.setState({
      myCart:this.state.myCart.concat(el),
      total:this.state.total+el.price
    }, () => console.log(this.state.total))
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.kadhiya.map((el,i) => {
               return <div key={i}>
                <div> {el.name} - Price:{el.price} $ </div>
                  <button onClick={ () => this.addToCart(el) }> add to chart </button>
               </div>
             })
           }
        </ul>
        <hr/>
          <Cart myCart={this.state.myCart} total={this.state.total}/>
      </div>
    )
  }
}
  export default Product;
