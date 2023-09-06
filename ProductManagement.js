import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';

   function ProductManagement() {
        const [productData, setProductData] = useState(null);
        const [showProductDetails, setShowProductDetails] = useState(false);
      
        const handleProductSubmit = (data) => {
          setProductData(data);
          setShowProductDetails(true);
        };
      
        return (
          <div>
            <h1>Product Management</h1>
            <ProductInfo onSubmit={handleProductSubmit} />
            <button onClick={() => setShowProductDetails(!showProductDetails)}>
              Toggle Product Details
            </button>
            {showProductDetails && productData && (
              <ProductDetails productData={productData} />
            )}
          </div>
        );
      }


export default ProductManagement;