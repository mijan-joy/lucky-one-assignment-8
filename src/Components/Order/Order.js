import React from 'react';
import DisplayOrder from '../DisplayOrder/DisplayOrder';
import './Order.css';

const Order = (props) => {
    const {cart, setCart} =props;
    
    const randomProduct = cart[Math.floor(Math.random() * cart.length)];

    const chooseOne = ()=>{
        if(cart.length===0){
            alert('Your cart is empty. Choose First')
        }else{
            setCart([randomProduct])
        }
       
    }
    const chooseAgain=()=>{
        if(cart.length===0){
            alert('Cart is empty, Please select One')
        }else{
            const set = setCart([])
            return set;
        }
    
    }
    return (
        <div className="selection-area">
            <h2 className='order-title'>Order Summary</h2>
                <p className='order-total' >Selected Items: {cart.length}</p>
                <div className='order-list'>
                {
                   cart.map(order =><DisplayOrder
                    order={order}
    
                    ></DisplayOrder>) 
                }
                </div>
               

                <button onClick={chooseOne} className='Choose-one'>Choose one</button>
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>
                
        </div>
    );
};

export default Order;