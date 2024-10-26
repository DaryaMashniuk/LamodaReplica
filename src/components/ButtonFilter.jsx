export function ButtonFilter({ label, selectedValue, setSelectedValue,isPrice,placeHolder }) {
  return (
    <>
        {isPrice ? (
          <input
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            placeholder={placeHolder}
            type="number"
            className="priceFilter"
          />
        ) : (
          <input
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            placeholder={placeHolder}
            className="search"
          />
        )}
    </>
  );
}

export default ButtonFilter;
