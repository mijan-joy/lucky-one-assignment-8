import './Cart.css';

const Cart= (props) =>{
    const { cart } = props;
    let totalItem =[];
    let distinctItem =[];
    let itemCounts = [];
    let itemName = [];
    let itemImg = [];
    for (const item of cart){
        itemName.push(item.name);
        itemImg.push(item.img);

        if(totalItem.indexOf(item)===-1){
            totalItem.push(item.name);
        }
        for (const item of totalItem) {
            if (distinctItem.indexOf(item)===-1){
                distinctItem.push(item);
            }
        }
        // for( const item of itemImg){

        // }
    }
    /// count the number of
    totalItem.forEach((x) => (itemCounts[x] = (itemCounts[x] || 0) + 1));
    const itemsQty = Object.values(itemCounts);


    return (
        <div className="selection-area">
            <h2>Order Summary</h2>
            <h3>Total Items: {distinctItem.length}</h3>
            <div className="selected-item">
                <div>
                {distinctItem.map((name) => (
                        <p key={name}> {name}</p>
                    ))}
                </div>
                
                <div className="count-item">
                    {itemsQty.map((count) => (
                        <p> {count} - item</p>
                    ))}
                </div>
                
            </div>
            <h4> Total Item Packs: {totalItem.length}</h4>
            <button className="chosen-button">Chose One</button>
            <button className="delete-button">Clear All</button>
           

            
        </div>
    )
};


//--------------//  
// const Cart= ({cart}) =>{
//     return (
//         <div className="cart">
//             <h4>Order summary</h4>
//             <h4>Order Items</h4>
//             <ol className="addItem">
//                 {
//                     cart.map(item => <li>{item.name}</li>)
//                 }
               
//             </ol>

//         </div>
//     )
// };
//--------------//  
// const Cart = (props) => {
//     const {cart}= props;
    
//     console.log(cart);

//    let total = 0;
//    let shipping = 0;

//    for(const product of cart){
//        total = total + product.price;
//        shipping= shipping + product.shipping;
       
//    }
//    const tax = parseFloat((total * 0.1).toFixed(2));
//    const grandTotal = total + shipping + tax;
// //    const productName = product.name;
//     return (
//         <div className="cart">
//                 <h4>Order summary</h4>
//                 <p>Selected Items : {cart.length}</p>
//                 <p>Total Price: ${total}</p>
                
//                 <p>Total Shipping Charge: ${shipping}</p>
//                 <p>Tax: $ {tax}</p>
//                 <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

//                 <button className="btn-checkout">Checkout</button>
//         </div>
//     );
// };

export default Cart;