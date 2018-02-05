import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.products.map((el,i) => {
               return <div key={i}>
                <div> {el.name} - Price:{el.price} $ </div>
                  <button onClick={ () => this.props.addToCart(el) }> add to chart </button>
               </div>
             })
           }
        </ul>
        <hr/>

      </div>
    )
  }
}
  export default Product;
