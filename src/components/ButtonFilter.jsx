export function ButtonFilter({ label, selectedValue, setSelectedValue, otherValues, isPrice = false, placeHolder }) {
  return (
    <div>
      {label === "nameSearch" || label === "PriceSearch" ? (
        label === "nameSearch" ? (
          <input
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            placeholder={placeHolder}
          />
        ) : (
          <input
            value={selectedValue}
            onChange={(e) => {
              setSelectedValue(e.target.value);
            }}
            placeholder={placeHolder}
            type="number"
          />
        )
      ) : (
        <button
          style={{
            background: selectedValue === true ? "grey" : "white",
          }}
          value={selectedValue}
          onClick={(e) => {
            setSelectedValue(!selectedValue);
            otherValues.forEach(([setOtherValue]) => setOtherValue(false));
          }}
        >
          {label}
        </button>
      )}
    </div>
  );
}

export default ButtonFilter;
