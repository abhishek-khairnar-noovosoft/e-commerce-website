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

const productCardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '12px',
};

export default Product;
