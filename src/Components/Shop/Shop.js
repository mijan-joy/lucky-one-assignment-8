import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    // const [count, setCount] =useState(0);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(Item)=>{
       let newCart;
if(cart.length===0){
    newCart =[...cart, Item];
    setCart(newCart);
}else if(cart.find(o=>o.id===Item.id))
{
alert('This Product has already been added');
}
else if(cart.length<4){
    newCart = [...cart, Item];
    setCart(newCart);
}else{
    alert("You can't add more than 4 item");
}
};   
    return (
        <div className='container'>
           
            <logo className='title'> <img src={logo}  alt=""></img><>Matha Nasto Offer</></logo> 
            <div className='shop-container'>
            <div className="product-container">
               {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
               }
            </div>

            <div className="cart-container">
                <Order cart={cart} setCart={setCart}></Order>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;