import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Review = () => {
    const [ cart, setCart ] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const productKeys = Object.values(savedCart);
        const cartProducts = productKeys.map(key => {
            const products = fakeData.find(pd => pd.key === key);
            products.quantity = savedCart[key];
            return products;
        })

        setCart(cartProducts);
    },[]);
    return (
        <div>
            <h2>Review Items count : {} </h2>
        </div>
    );
};

export default Review;