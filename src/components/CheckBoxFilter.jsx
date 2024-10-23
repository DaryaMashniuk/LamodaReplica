export function CheckboxFilter({ label, options, selectedOptions, setSelectedOptions }) {
    const handleCheckBoxChange = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item != option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    };
    return (
      <div>
        <div>
          <h3>{label} :</h3>
          <div>
            {options.map((option) => (
              <label key={option} className="ColorFilter">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckBoxChange(option)}
                />
                <div className="color" style={{ backgroundColor: option }}>{option}</div>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
 export default CheckboxFilter