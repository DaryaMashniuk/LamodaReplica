import { Component, useCallback, useContext, useEffect, useState } from "react";
import "../styles/App.css";
import { generateProducts } from "../utils/generateProduct";
import ProductItem from "./PorductItem";
import ButtonFilter from "./ButtonFilter";
import CheckboxFilter from "./CheckBoxFilter";
import { colors } from "../utils/constants";

function App() {
  useEffect(() => {
    setProducts(generateProducts());
  }, []);
  const [products, setProducts] = useState([]);
  // const generate = () => {
  //   setProducts(generateProducts());
  // };
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [productsAmount, setProductsAmount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [cheapFirst, setCheapFirst] = useState(false);
  const [expensiveFirst, setExpensiveFirst] = useState(false);
  const [popularFirst, setPopularFirst] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const filteredProducts = products
    .filter((product) => searchValue === "" || product.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((product) => selectedColors.length === 0 || selectedColors.some((color) => product.color.includes(color)))
    .filter((product)=> minPrice=== "" || product.price>minPrice)
    .filter((product)=> maxPrice ==="" || product.price<maxPrice)
    .sort((a, b) => {
      if (popularFirst) {
        return b.rating - a.rating;
      }
    })
    .sort((a, b) => {
      if (cheapFirst) {
        return a.price - b.price;
      }
    })
    .sort((a, b) => {
      if (expensiveFirst) {
        return b.price - a.price;
      }
    });
  useEffect(() => {
    setProductsAmount(filteredProducts.length);
  }, [filteredProducts]);
  console.log(minPrice)
  return (
    <>
      <div>
        <ButtonFilter label="nameSearch" selectedValue={searchValue} setSelectedValue={setSearchValue} placeHolder="Поиск"/>
        <ButtonFilter
          label="PopularFirst"
          selectedValue={popularFirst}
          setSelectedValue={setPopularFirst}
          otherValues={[[setCheapFirst], [setExpensiveFirst]]}
        />
        <ButtonFilter
          label="CheapFirst"
          selectedValue={cheapFirst}
          setSelectedValue={setCheapFirst}
          otherValues={[[setPopularFirst], [setExpensiveFirst]]}
        />
        <ButtonFilter
          label="ExpensiveFirst"
          selectedValue={expensiveFirst}
          setSelectedValue={setExpensiveFirst}
          otherValues={[[setPopularFirst], [setCheapFirst]]}
        />
        <CheckboxFilter
          label="FilterByColor"
          options={colors}
          selectedOptions={selectedColors}
          setSelectedOptions={setSelectedColors}
        />
        <ButtonFilter label="PriceSearch" 
        selectedValue={minPrice}
        setSelectedValue={setMinPrice}
        isPrice={true}
        placeHolder="от"
        />
        <ButtonFilter label="PriceSearch" 
        selectedValue={maxPrice}
        setSelectedValue={setMaxPrice}
        isPrice={true}
        placeHolder="до"
        />
        <div>Products amount: {productsAmount}</div>
        <button /*onClick={generate}*/>Click</button>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })
        ) : (
          <div className="notFound"> По вашему запросу ничего не найдено </div>
        )}
      </div>
    </>
  );
}

export default App;
