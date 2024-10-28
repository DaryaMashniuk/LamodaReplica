import { useEffect, useState, useMemo } from "react";
import { filterAndSortProducts, filtersConfig, SortsConfig,filtersInitialState} from "../utils/filters";

export function Filters({ onSendData, products }) {
  const [filtersState, setFiltersState] = useState({
    ...filtersInitialState
  });

  const handleFilterChange = (key, value) => {
    setFiltersState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, filtersConfig, filtersState);
  }, [products, filtersState]);

  useEffect(() => {
    onSendData(filteredProducts);
  }, [filteredProducts]);

  return (
    <>
      <div className="sort">
        {SortsConfig.map(({ key, label, component: Sort }) => (
          <Sort
          key={key}
            value={key}
            label={label}
            selectedValue={filtersState[key]}
            setSelectedValue={(value) => {
              handleFilterChange(key, value);
              SortsConfig.forEach(({ key: otherKey }) => {
                if (otherKey !== key) handleFilterChange(otherKey, false);
              });
            }}
          />
        ))}
      </div>
      {filtersConfig.map(({ key, label, placeholder, type, options, component: Filter }) => (
        <Filter
        key={key}
          value={key}
          label={label}
          selectedValue={filtersState[key]}
          setSelectedValue={(value) => handleFilterChange(key, value)}
          placeholder={placeholder}
          type={type}
          options={options}
        />
      ))}
      <div className="productAmount">Всего товаров: {filteredProducts.length}</div>
    </>
  );
}
export default Filters;