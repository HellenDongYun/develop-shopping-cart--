import React from'react';
import './index.css';



export default function Product(props) {
    const { product } = props;
    return (
        <div className="productContainer">
            <img  src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <div className="priceWrap">${product.price}</div>
            <div className="addToCartWrap">
                <button  className="addToCart">Add To Cart</button>
            </div>
        </div>
    );
}