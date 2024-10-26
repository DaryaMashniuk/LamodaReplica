

import { useEffect, useState, useMemo } from "react";
import ButtonFilter from "./ButtonFilter";
import CheckboxFilter from "./CheckBoxFilter";
import { COLORS } from "../utils/constants";
import ButtonSort from "./ButtonSort";

export function Filters({ onSendData, products }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [productsAmount, setProductsAmount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [cheapFirst, setCheapFirst] = useState(false);
  const [expensiveFirst, setExpensiveFirst] = useState(false);
  const [popularFirst, setPopularFirst] = useState(true);
  const [selectedColors, setSelectedColors] = useState([]);

  const filteredProducts = useMemo(() => {
    return products
      .filter(
        (product) =>
          searchValue === "" ||
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.description.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter((product) => selectedColors.length === 0 || selectedColors.some((color) => product.color.includes(color)))
      .filter((product) => minPrice === "" || product.price > minPrice)
      .filter((product) => maxPrice === "" || product.price < maxPrice)
      .sort((a, b) => {
        if (popularFirst) return b.rating - a.rating;
        if (cheapFirst) return a.price - b.price;
        if (expensiveFirst) return b.price - a.price;
        return 0;
      });
  }, [products, searchValue, selectedColors, minPrice, maxPrice, cheapFirst, expensiveFirst, popularFirst]);

  useEffect(() => {
    setProductsAmount(filteredProducts.length);
    onSendData(filteredProducts);
  }, [filteredProducts]);
  return (
    <>
      <ButtonFilter
        label="nameSearch"
        selectedValue={searchValue}
        setSelectedValue={setSearchValue}
        placeHolder="Поиск"
      />
      <div className="sort">
        <ButtonSort
          label="Сначала популярные"
          selectedValue={popularFirst}
          setSelectedValue={setPopularFirst}
          otherValues={[[setCheapFirst], [setExpensiveFirst]]}
        />
        <ButtonSort
          label="Сначала дешевые"
          selectedValue={cheapFirst}
          setSelectedValue={setCheapFirst}
          otherValues={[[setPopularFirst], [setExpensiveFirst]]}
        />
        <ButtonSort
          label="Сначала дорогие"
          selectedValue={expensiveFirst}
          setSelectedValue={setExpensiveFirst}
          otherValues={[[setPopularFirst], [setCheapFirst]]}
        />
      </div>
      <div className="leftAside">
        <CheckboxFilter
          label="По цвету"
          options={COLORS}
          selectedOptions={selectedColors}
          setSelectedOptions={setSelectedColors}
        />
        <ButtonFilter
          label="По цене"
          selectedValue={minPrice}
          setSelectedValue={setMinPrice}
          isPrice={true}
          placeHolder="от"
        />
        <ButtonFilter
          label="PriceSearch"
          selectedValue={maxPrice}
          setSelectedValue={setMaxPrice}
          isPrice={true}
          placeHolder="до"
        />
        <div>Всего продуктов: {productsAmount}</div>
      </div>
    </>
  );
}

export default Filters;
