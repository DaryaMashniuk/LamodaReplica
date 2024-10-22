const ProductItem = (props) => {
    const { product } = props;
  
    return (
      <div
        className="product"
        style={{
          background: product.color,
  
        }} 
      >
        <h3 className="productProperties">Product  {product.name}</h3>
        <p className="productProperties">Rating:  {product.rating}</p>
        <p className="productProperties">Category:  {product.category}</p>
        <p className="productProperties">Color:  {product.color}</p>
        <p className="productProperties">Price:  {product.price}</p>
        <p className="productProperties">{product.description}</p>
      </div>
    );
  };

export default ProductItem;