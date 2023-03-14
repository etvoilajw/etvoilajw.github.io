import { useState } from "react";

const AddStaff = ({ setStaffs }) => {
  const [fullName, setFullName] = useState("");

  const addStaff = (e) => {
    e.preventDefault();
    if (fullName === "") {
      return;
    }
    setStaffs((current) => [...current, fullName]);
    setFullName("");
  };

  return (
    <form onSubmit={addStaff}>
      <label htmlFor={"Full name"}>Full name</label>
      <input
        type={"text"}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder={"Enter full name"}
      ></input>
      <button type="submit">Add Staff</button>
    </form>
  );
};

export default AddStaff;
