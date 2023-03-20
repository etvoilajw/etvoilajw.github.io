const Select = ({ name, value, onChange, options }) => {
  return (
    <div>
      <select name={name} value={value} onChange={onChange} required>
        <option disabled={true} value={""}>
          Please select {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
