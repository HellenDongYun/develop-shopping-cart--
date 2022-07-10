import React from 'react';
import './index.css';

export default function Cart(props) {
    const { cartItems } = props;

    return (
        <aside className="container">
            <h2>Cart Items</h2>
            <div >
                {cartItems.length === 0 && <div>CART IS EMPTY</div>}
                {cartItems.map((item) => (
                    <div key={item.id}  className="row-wrap">
                        <div >{item.name}</div>
                        <div >
                            <button  className="remove">
                                -
                            </button>{' '}
                            <button  className="add">
                                +
                            </button>
                        </div>

                        <div >

                        </div>


                        <div >
                            <button   className="delete">
                                x
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}