import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // this way is advance way
    // const total = cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        // debugger;
    }

    //shipping

    let shipping = 0;
    if (total > 100) 
    { 
        shipping = 0; 
    }
    else if (total > 50) 
    {
        shipping = 4.99;
    }
    else if (total > 0) 
    {
        shipping = 12.99;
    }
    const formatNumber = num => {
        const precission = num.toFixed(2);
        return Number(precission);
    }
    const tax = total/10;
    const grandTotal = (total + shipping + formatNumber(tax))

   

    return (
        <div>
            <h4><strong>Order summary</strong></h4>
            <p>Orders Item: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax+vat:{formatNumber(tax)}</p>
            <p style={{color:"red", fontWith:"900em"}}>Order Total:{formatNumber(grandTotal)}</p>
            <br/>
            
            <Link to="/review">
            <button className="addcart-btn"> Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;