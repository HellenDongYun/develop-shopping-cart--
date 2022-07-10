import React from 'react';
import './App.css';
import Main from './components/Main';
import Cart from'./components/Cart';
import items from './constants/items';

function App(){
    const {products}=items;


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
            <Main products={products} />
            <Cart />
        </div>
    );
}
export default App;