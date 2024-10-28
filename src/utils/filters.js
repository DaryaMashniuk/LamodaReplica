
import { COLORS } from "./constants";
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

export const filtersConfig = [
  {
    key: "searchValue",
    initialValue: "",
    label: "Поиск",
    type:"text",
    placeholder: "Введите название или описание",
    component: ButtonFilter,
    filterFunction: (product, searchValue) =>
      searchValue === "" ||
      product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchValue.toLowerCase()),
  },
  {
    key: "selectedColors",
    initialValue: [],
    label: "По цвету",
    options: COLORS,
    component: CheckboxFilter,
    filterFunction: (product, selectedColors) =>
      selectedColors.length === 0 ||
      selectedColors.some((color) => product.color.includes(color)),
  },
  {
    key: "minPrice",
    initialValue: "",
    label: "Цена от",
    placeholder: "От",
    type:"Number",
    component: ButtonFilter,
    filterFunction: (product, minPrice) => minPrice === "" || product.price > minPrice,
  },
  {
    key: "maxPrice",
    initialValue: "",
    label: "Цена до",
    placeholder: "До",
    type:"Number",
    component: ButtonFilter,
    filterFunction: (product, maxPrice) => maxPrice === "" || product.price < maxPrice,
  },

];

export const SortsConfig = [
    {
        key: "popularFirst",
        initialValue: true,
        label: "Сначала популярные",
        component: ButtonSort,
        filterFunction: () => true,
      },
      {
        key: "cheapFirst",
        initialValue: false,
        label: "Сначала дешевые",
        component: ButtonSort,
        filterFunction: () => true,
      },
      {
        key: "expensiveFirst",
        initialValue: false,
        label: "Сначала дорогие",
        component: ButtonSort,
        filterFunction: () => true,
      },
]
const filtersStateFromConfig = filtersConfig.reduce((acc,{key,initialValue})=> {
  acc[key] = initialValue;
  return acc;
},{}) 

const sortsStateFromConfig = SortsConfig.reduce((acc,{key,initialValue})=> {
  acc[key] = initialValue;
  return acc;
},{}) 

export const filtersInitialState = {
  ...filtersStateFromConfig,
  ...sortsStateFromConfig
}
