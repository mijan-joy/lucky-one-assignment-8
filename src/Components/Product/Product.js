import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({handleAddToCart,product}) => {
    // const {handleAddToCart} = props;
    const {name,img, price, brand}= product;
    // console.log(props);
    return (
        <div className='product'>
            <img className='image' src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Brand: {brand}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-name'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;