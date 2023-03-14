import { useState } from "react";
import Select from "./Select";

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
const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const AddShift = ({ staffs, setRoster }) => {
  const [inputShift, setInputShift] = useState({
    staff: "",
    day: "",
    workType: "",
    startHours: "",
    startMinutes: "",
    startAMPM: "",
    endHours: "",
    endMinutes: "",
    endAMPM: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const { staff, ...roster } = inputShift;
    setRoster((prev) => ({ ...prev, [staff]: roster }));
    setInputShift({
      staff: "",
      day: "",
      workType: "",
      startHours: "",
      startMinutes: "",
      startAMPM: "",
      endHours: "",
      endMinutes: "",
      endAMPM: "",
    });
  };

  const onSelectHandler = (event) => {
    const { name, value } = event.target;
    setInputShift((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="staff">staff</label>
      <Select
        name={"staff"}
        value={inputShift.staff}
        onChange={onSelectHandler}
        options={staffs}
      ></Select>

      <label htmlFor="day">Day</label>
      <Select
        name={"day"}
        value={inputShift.day}
        onChange={onSelectHandler}
        options={DAYS}
      ></Select>

      <label htmlFor="workType">Work Type</label>
      <Select
        name={"workType"}
        value={inputShift.workType}
        onChange={onSelectHandler}
        options={WORKTYPES}
      ></Select>
      <label htmlFor={"Start"}>Start time</label>
      <Select
        name={"startHours"}
        value={inputShift.startHours}
        onChange={onSelectHandler}
        options={HOURS}
      ></Select>

      <Select
        name={"startMinutes"}
        value={inputShift.startMinutes}
        onChange={onSelectHandler}
        options={MINUTES}
      ></Select>

      <Select
        name={"startAMPM"}
        value={inputShift.startAMPM}
        onChange={onSelectHandler}
        options={["AM", "PM"]}
      ></Select>
      <label htmlFor={"End"}>End time</label>
      <Select
        name={"endHours"}
        value={inputShift.endHours}
        onChange={onSelectHandler}
        options={HOURS}
      ></Select>

      <Select
        name={"endMinutes"}
        value={inputShift.endMinutes}
        onChange={onSelectHandler}
        options={MINUTES}
      ></Select>

      <Select
        name={"endAMPM"}
        value={inputShift.endAMPM}
        onChange={onSelectHandler}
        options={["AM", "PM"]}
      ></Select>

      <button>Submit</button>
    </form>
  );
};

export default AddShift;
