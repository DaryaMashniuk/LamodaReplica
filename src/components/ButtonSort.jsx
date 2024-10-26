
export function ButtonSort({ label, selectedValue, setSelectedValue, otherValues}) {
  return (
    <div className="sortButton">
        <button
          style={{
            background: selectedValue === true ? `black` : `white`,
            color: selectedValue === true ? ` white` : "black",
          }}
          value={selectedValue}
          onClick={(e) => {
            setSelectedValue(!selectedValue);
            otherValues.forEach(([setOtherValue]) => setOtherValue(false));
          }}
        >
          {label}
        </button>
    </div>
  );
}

export default ButtonSort;
