
import { Component, useCallback, useContext, useEffect, useState } from "react";
import "../styles/App.css";
import { generateProducts } from "../utils/generateProduct";
import ProductItem from "./ProductItem";
import Filters from "./Filters";
function App() {
  useEffect(() => {
    setProducts(generateProducts());
  }, []);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState(products);
  const handleGetfilteredProducts = (data) => {
    setfilteredProducts(data);
  };

  return (
    <>
      <div className="container">
        <Filters onSendData={handleGetfilteredProducts} products={products} />
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              return <ProductItem product={product} key={product.id} />;
            })
          ) : (
            <div className="notFound"> По вашему запросу ничего не найдено </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
