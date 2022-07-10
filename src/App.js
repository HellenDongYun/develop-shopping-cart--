import React from 'react';
import './App.css';
import Main from './components/Main';
import Cart from'./components/Cart';
import items from './constants/items';
import {useState} from "react";

function App(){
    const {products}=items;
    const[cartItems,setCartItems]=useState([]);


    const handleAdd = (product) => {
        const existence = cartItems.find((x) => x.id === product.id);
        if (existence) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...existence, qty: existence.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const handleRemove = (product) => {
        const existence = cartItems.find((x) => x.id === product.id);
        if (existence.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...existence, qty: existence.qty - 1 } : x
                )
            );
        }
    };





    return (
        <div className="App">
            <p>
                Welcome to the Kathmandu front end test
                <span aria-label="hand-wave" role="img">
          👋
        </span>
            </p>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>

            <Main products={products} handleAdd={handleAdd} />
            <Cart cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove} />
        </div>
    );
}

export default App;