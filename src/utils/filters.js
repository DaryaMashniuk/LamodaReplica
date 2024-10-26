// utils/filters.js

import ButtonFilter from "../components/ButtonFilter";
import CheckboxFilter from "../components/CheckBoxFilter";
import ButtonSort from "../components/ButtonSort";

export function filterAndSortProducts(products, filtersConfig, filtersState) {
  return products
    .filter((product) =>
      filtersConfig.every(({ key, filterFunction }) =>
        filterFunction(product, filtersState[key])
      )
    )
    .sort((a, b) => {
      if (filtersState.popularFirst) return b.rating - a.rating;
      if (filtersState.cheapFirst) return a.price - b.price;
      if (filtersState.expensiveFirst) return b.price - a.price;
      return 0;
    });
}

// Конфигурация фильтров с указанием пользовательских компонентов
export const filtersConfig = [
  {
    key: "searchValue",
    label: "Поиск",
    placeholder: "Введите название или описание",
    component: ButtonFilter,
    filterFunction: (product, searchValue) =>
      searchValue === "" ||
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchValue.toLowerCase()),
  },
  {
    key: "selectedColors",
    label: "По цвету",
    options: ["red", "blue", "green"],
    component: CheckboxFilter,
    filterFunction: (product, selectedColors) =>
      selectedColors.length === 0 ||
      selectedColors.some((color) => product.color.includes(color)),
  },
  {
    key: "minPrice",
    label: "Цена от",
    placeholder: "Минимальная цена",
    component: ButtonFilter,
    filterFunction: (product, minPrice) => minPrice === "" || product.price > minPrice,
  },
  {
    key: "maxPrice",
    label: "Цена до",
    placeholder: "Максимальная цена",
    component: ButtonFilter,
    filterFunction: (product, maxPrice) => maxPrice === "" || product.price < maxPrice,
  },
  {
    key: "popularFirst",
    label: "Сначала популярные",
    component: ButtonSort,
    filterFunction: () => true,
  },
  {
    key: "cheapFirst",
    label: "Сначала дешевые",
    component: ButtonSort,
    filterFunction: () => true,
  },
  {
    key: "expensiveFirst",
    label: "Сначала дорогие",
    component: ButtonSort,
    filterFunction: () => true,
  },
];
