import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'
const AllProducts = ({setCartCount}) => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[products])
    return (
        <div>
            <h1>Welcome My Facke Store!!</h1>
            <h3>Aviable Products: {products.length}</h3>
            <div className="container row">
            {
                products.map(product => (<SingleProduct setCartCount={setCartCount} product={product} key={product.id}></SingleProduct>))
            }
            </div>
        </div>
    );
};

export default AllProducts;