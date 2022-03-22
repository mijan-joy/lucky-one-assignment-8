import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="order-summary">
                <h4>Order summary</h4>
                <p>Selected Items : {cart.length}</p>
                
                <button className="btn-checkout">Checkout</button>
        </div>
    );
};

export default Cart;