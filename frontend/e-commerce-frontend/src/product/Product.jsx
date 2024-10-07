import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product-card" style={productCardStyle}>
            <img src={product.thumbnail} alt={product.title} style={imageStyle} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );
};

export default Product;
