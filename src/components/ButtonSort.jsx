import React, { memo } from "react";

const ButtonSort = memo(({ label, selectedValue, setSelectedValue }) => {
  return (
    <div className="sortButton">
      <button
        style={{
          background: selectedValue ? "black" : "white",
          color: selectedValue ? "white" : "black",
        }}
        onClick={() => setSelectedValue(!selectedValue)}
      >
        {label}
      </button>
    </div>
  );
});

export default ButtonSort;