import React, { memo } from "react";
const ProductItem = memo((props) => {
  const { product } = props;
  return (
    <div className="product">
      <img src={product.image} className="productImage"></img>

      <div className="productDescription">
        <h3 className="productProperties header">Product {product.name}</h3>
        <p className="productProperties description">{product.description}</p>
        <p className="productProperties">
          <span className="header">Rating:</span> {product.rating}
        </p>
        <p className="productProperties">
          <span className="header">Category:</span> {product.category}
        </p>
        <p className="productProperties">
          <span className="header">Color: </span>
          <span className="productColor">{product.color}</span>
        </p>
        <p className="productProperties">
          <span className="header">Price: </span>
          {product.price}
        </p>
      </div>
    </div>
  );
})
export default ProductItem;
