import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart}) => {
    // const { product, handleAddToCart}= props;
    const {name, img, seller, price, ratings }= product;
  
    return (
        
        <div className="product">
           <img src={img} alt=""></img>
           <div className="product-info">
           <p className='product-name'> {name}</p>
           <p className='product-price'>Price: ${price}</p>
           <p className='product-seller'>Seller: {seller}</p>
           <p className='product-ratings'>Ratings: {ratings} stars</p>
           
           </div>
          <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p className='btn-text'>Add to cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
    );
};

export default Product;