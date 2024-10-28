import "../styles/App.css";
import { useEffect, useState, useCallback } from "react";
import { generateProducts } from "../utils/generateProduct";
import ProductItem from "./ProductItem";
import Filters from "./Filters";

const ITEMS_PER_PAGE = 20;

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const generatedProducts = generateProducts();
    setProducts(generatedProducts);
    setFilteredProducts(generatedProducts); 
    setDisplayedProducts(generatedProducts.slice(0, ITEMS_PER_PAGE));
  }, []);

  const handleGetFilteredProducts = useCallback((data) => {
    setFilteredProducts(data);
    setDisplayedProducts(data.slice(0, ITEMS_PER_PAGE));
    setPage(1);
  }, []);

  const loadMoreProducts = useCallback(() => {
    const nextPage = page + 1;
    const newProducts = filteredProducts.slice(0, nextPage * ITEMS_PER_PAGE);
    setDisplayedProducts(newProducts);
    setPage(nextPage);
  }, [filteredProducts, page]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && displayedProducts.length < filteredProducts.length) {
          loadMoreProducts();
        }
      },
      { threshold: 1 }
    );

    const target = document.querySelector("#load-more-trigger");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [displayedProducts, filteredProducts, loadMoreProducts]);

  return (
    <div className="container">
      <Filters onSendData={handleGetFilteredProducts} products={products} />
      <div className="products">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        ) : (
          <div className="notFound">По вашему запросу ничего не найдено</div>
        )}
        <div id="load-more-trigger" style={{ height: "1px" }} />
      </div>
    </div>
  );
}

export default App;