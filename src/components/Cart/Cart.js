import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // this way is advance way
    // const total = cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
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
            <p>Total:{formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;