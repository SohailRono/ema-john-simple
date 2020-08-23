import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setproducts] = useState(firstTen);
   
    const handleAddProduct = (product) => {
        console.log('Product Added',product);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(p => <Products 
                            handleAddProduct = {handleAddProduct}
                            product={p}>
                            </Products>)
                    }
                </ul>
            </div>
           <div className="cart-container">
               <h1>This is cart</h1>
           </div>

        </div>
    );
};

export default Shop;