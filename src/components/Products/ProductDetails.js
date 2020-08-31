import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from './Products';

const ProductDetails = () => {
    const {productKey}= useParams();
    const product = fakeData.find(p=> p.key === productKey);
    return (
        <div>
            <h2>{productKey} showing Details </h2>
            <Products product={product} showHideCartBtn = {false}></Products>
        </div>
    );
};

export default ProductDetails;