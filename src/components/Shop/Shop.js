import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setproducts] = useState(firstTen);
    const [cart,setCart] = useState([]);
    

    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
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
               <Cart cart = {cart}></Cart>
           </div>

        </div>
    );
};

export default Shop;