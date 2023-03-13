const Select = ({ name, value, setMethod, options }) => {
  return (
    <div>
      <label for={"name"}>{name}</label>
      <select
        name={name}
        value={value}
        onChange={(e) => setMethod(e.target.value)}
      >
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
