import React, { useState } from 'react';

// ProductInfo Component
function ProductInfo({ onSubmit }) {
  const [productData, setProductData] = useState({
    id: '',
    name: '',
    price: '',
    brand: '',
    vendor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={productData.id} onChange={handleChange} />
      </label>
      <br /><br/>
      <label>
        Name:
        <input type="text" name="name" value={productData.name} onChange={handleChange} />
      </label>
      <br /><br/>
      <label>
        Price:
        <input type="text" name="price" value={productData.price} onChange={handleChange} />
      </label>
      <br /><br/>
      <label>
        Brand:
        <input type="text" name="brand" value={productData.brand} onChange={handleChange} />
      </label>
      <br /><br/>
      <label>
        Vendor:
        <input type="text" name="vendor" value={productData.vendor} onChange={handleChange} />
      </label>
      <br /><br/>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ProductInfo