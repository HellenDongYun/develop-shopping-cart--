import React from'react';
import Product from '../Product';
import './index.css';


export default function Main(props) {

    const {products,handleAdd}=props;
    return (
        <main >
            <h2>Products</h2>
            <div className="grid row">
                {products.map((product)=>(
                    <Product key={product.id} product={product} handleAdd={handleAdd}/>
                ))}
            </div>

        </main>


    )
}