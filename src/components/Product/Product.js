import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className="product-name">{name}</h1>
                <p><small>By: {seller}</small></p>
                <h3>Price: ${price}</h3>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)}
                    className="product-btn">{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;