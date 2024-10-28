import React, { memo } from "react";

const CheckboxFilter = memo(({ label, options, selectedValue = [], setSelectedValue }) => {
  const handleCheckBoxChange = (option) => {
    const newSelectedOptions = selectedValue.includes(option)
      ? selectedValue.filter((item) => item !== option)
      : [...selectedValue, option];
    setSelectedValue(newSelectedOptions);
  };

  return (
    <div className="checkbox">
      <h3 className="filterHeader">{label}</h3>
      <div className="filterBody">
        {options.map((option) => (
          <label key={option} className="checkbox-filter">
            <input
              type="checkbox"
              value={option}
              checked={selectedValue.includes(option)}
              onChange={() => handleCheckBoxChange(option)}
            />
            <div className="color">{option}</div>
          </label>
        ))}
      </div>
    </div>
  );
});

export default CheckboxFilter;