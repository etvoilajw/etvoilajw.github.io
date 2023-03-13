import { useState } from "react";
import Select from "./components/Select";
import TimeStamp from "./components/TimeStamp";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurdsay",
  "Friday",
  "Saturday",
  "Sunday",
];
const WORKTYPES = ["Work", "Sick", "Annual Leave"];

const App = () => {
  const [staffs, setStaffs] = useState(["James", "Sam", "Ruby"]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [fullName, setFullName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(selectedStaff, selectedDay, selectedWorkType);
  };

  const addStaff = (e) => {
    e.preventDefault();
    if (fullName === "") {
      return;
    }
    setStaffs((current) => [...current, fullName]);
    setFullName("");
  };
  return (
    <div>
      <form onSubmit={addStaff}>
        <label for={"Full name"}>Full name</label>
        <input
          type={"text"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder={"Enter full name"}
        ></input>
        <button>Add Staff</button>
      </form>
      <form onSubmit={onSubmit}>
        <Select
          name={"staff"}
          value={selectedStaff}
          setMethod={setSelectedStaff}
          options={staffs}
        ></Select>

        <Select
          name={"day"}
          value={selectedDay}
          setMethod={setSelectedDay}
          options={DAYS}
        ></Select>

        <Select
          name={"work type"}
          value={selectedWorkType}
          setMethod={setSelectedWorkType}
          options={WORKTYPES}
        ></Select>

        <TimeStamp />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
