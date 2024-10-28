import React, { memo } from "react";

const ButtonFilter = memo(({ value, label, selectedValue, setSelectedValue, placeholder, type }) => {
  return (
    <input
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      placeholder={placeholder}
      type={type}
      className={value}
    />
  );
});

export default ButtonFilter;