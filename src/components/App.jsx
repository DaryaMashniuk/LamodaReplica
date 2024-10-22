import { Component, useCallback, useContext, useEffect, useState } from "react";
import "../styles/App.css";
import { generateProducts } from "../utils/generateProduct";
import ProductItem from "./PorductItem";

function App() {
  useEffect(() => {
    setProducts(generateProducts());
  }, []);
  const [products, setProducts] = useState([]);
  // const generate = () => {
  //   setProducts(generateProducts());
  // };
  const [searchValue, setSearchValue] = useState("");

  const filterByName = (filterProducts) => {
    return searchValue
      ? filterProducts.filter((product) =>
          product.name.toLowerCase().includes(searchValue)
        )
      : filterProducts;
  };
  const [cheapFirst, setCheapFirst] = useState(false);
  const [expensiveFirst, setExpensiveFirst] = useState(false);
  const filterCheapFirst = (filterProducts) => {
    return cheapFirst
      ? [...filterProducts].sort((a, b) => a.price - b.price)
      : products;
  };
  const filterExpensiveFirst = (filterProducts) => {
    return expensiveFirst
      ? [...filterProducts].sort((a, b) => b.price - a.price)
      : products;
  };
  const filters = [filterByName, filterExpensiveFirst, filterCheapFirst];
  const filteredProducts = filters.reduce(
    (products, filter) => filter.call(this, products),
    products
  );
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button /*onClick={generate}*/>Click</button>
        <button
          onClick={() => {
            setCheapFirst((prev) => !prev);
            if (expensiveFirst == !(cheapFirst)) {
              setExpensiveFirst((prev) => !prev)
            }
            // expensiveFirst !== cheapFirst
            //   ? setExpensiveFirst((prev) => !prev)
            //   : setExpensiveFirst((prev)=> prev);
            console.log(`Cheap ${cheapFirst}`);
          }}
        >
          Cheap first
        </button>
        <button
          onClick={() => {
            setExpensiveFirst((prev) => !prev);
            if (cheapFirst == !(expensiveFirst)) {
              setCheapFirst((prev) => !prev);
            }
            // expensiveFirst !== cheapFirst
            //   ? setCheapFirst((prev) => !prev)
            //   : setCheapFirst((prev)=> prev);
            console.log(`Expensive ${expensiveFirst}`);
          }}
        >
          Expensive first
        </button>
        {filteredProducts.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}

export default App;
