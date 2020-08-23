import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Products.css';

const Products = (props) => {
    console.log(props)
    const { img, name, seller, stock,price } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small> by: {seller}</small></p>
                <br/>
                <p><small>${price}</small></p>
                <p><small>Stock available: {stock} order first</small></p>
                <br/>
                <button onClick={() => props.handleAddProduct(props.product)} className="addcart-btn"><FontAwesomeIcon icon= {faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Products;