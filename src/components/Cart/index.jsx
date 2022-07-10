import React from 'react';
import './index.css';

export default function Cart(props) {
    const { cartItems, handleAdd, handleRemove,handleDelete } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 100 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="container">
            <h2>Cart Items</h2>
            <div >
                {cartItems.length === 0 && <div>CART IS EMPTY</div>}
                {cartItems.map((item) => (
                    <div key={item.id}  className="row-wrap">
                        <div >{item.name}</div>
                        <div >
                            <button  onClick={() => handleRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <button  onClick={() => handleAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div >
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>


                        <div >
                            <button onClick={() => handleDelete(item)}  className="delete">
                                x
                            </button>
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr/>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 ">${itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 ">${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong style={{fontSize:"18px"}}>Total Price</strong>
                            </div>
                            <div className="col-1">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('Implement Checkout!')} style={{width:"300px", height:"40px", fontSize:"16px"}}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}