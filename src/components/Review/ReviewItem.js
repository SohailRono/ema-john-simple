import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const {name,quantity,key,price} = props.product;
    const reviewStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px'
        
    }
    return (
        <div style={reviewStyle}>
            <h4>{name}</h4>
            <p>Quantity:{quantity}</p>
            <p><small>Price $: {price}</small></p>
            <button 
                onClick={() => props.removeProduct(key)}
                className="addcart-btn"
            > Remove</button>
           
        </div>
    );
};

export default ReviewItem;