import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css';
const SingleProduct = (props) => {
    const {title,image} = props.product;
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className='col-md-4'>
            <div className="card p-3 border">
            <img className='w-50 m-auto' src={image} alt="Product" />
            <h3>{title.slice(0,10)}</h3>
                <div className="d-flex justify-content-around my-3">
                    <button onClick={props.setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
            
        </div>
    );
};

export default SingleProduct;