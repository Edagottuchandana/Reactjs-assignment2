import React from 'react';

function ProductDetails({ productData }) {
    return (
          <div>
            <h2>Product Details</h2>
            <p>ID: {productData.id}</p>
            <p>Name: {productData.name}</p>
            <p>Price: {productData.price}</p>
            <p>Brand: {productData.brand}</p>
            <p>Vendor: {productData.vendor}</p>
          </div>
        );
      }


export default ProductDetails;

    
