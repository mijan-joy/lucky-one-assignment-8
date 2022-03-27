import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const {cart, clearCart, random}= props;
    console.log(cart.length);
    

if (cart.length <= 4){

 return (
        <div className="selection-area">
        <h2>Order Summary</h2>
        <h3> Total Item : {cart.length}</h3>
        <div className="selected-item">
            <div>
            {
                cart.map((item) => (<h5 key={item.id}>{item.name}</h5>))
            }
            </div>
           <div>
               
           </div>
        </div>
        <button onClick={random} className="chosen-button" >Chosen 1 For Me </button>
        <button onClick={clearCart} className="delete-button clearCart"
                >
                 {" "} Clear Cart
                </button>
    </div>
 );
    } else {
        return(
            <div className="selection-area">
            <h2>You select only 4 items</h2>  
            <a href="/back"> <button className="chosen-button">Back</button></a>      
        </div>


       
        )
       
    }
   
};

export default Cart ;