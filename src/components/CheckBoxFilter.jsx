export function CheckboxFilter({ label, options, selectedOptions, setSelectedOptions }) {
    const handleCheckBoxChange = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item != option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
    return (
      <div className="filterColor">
          <h3 className="filterHeader">{label}</h3>
          <div className="filterBody">
            {options.map((option) => (
              <label key={option} className="ColorFilter">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckBoxChange(option)}
                  style={{ backgroundColor: option }}
                />
                <div className="color">{option}</div>
              </label>
            ))}
          </div>
      </div>
    );
  }
 export default CheckboxFilter