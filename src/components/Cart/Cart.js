import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    const shipping = 50;
    const tax = (total) * .10;
    const grandTotal = total + shipping + tax;


    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h3>cart Items: {props.cart.length}</h3>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;