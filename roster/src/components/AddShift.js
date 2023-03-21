import moment from "moment";
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
const MINUTES = ["00", 15, 30, 45];

const AddShift = ({ roster, setRoster }) => {
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
    const { staff, ...shift } = inputShift;
    console.log(inputShift);
    if (
      !validateTimeHandler(
        inputShift.startHours,
        inputShift.startMinutes,
        inputShift.startAMPM,
        inputShift.endHours,
        inputShift.endMinutes,
        inputShift.endAMPM
      )
    ) {
      alert("Start time is later than the end time");
      return;
    }
    setRoster((prev) => ({
      ...prev,
      [staff]: { ...prev[staff], [inputShift.day]: shift },
    }));
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

  const validateTimeHandler = (
    startHours,
    startMinutes,
    startAMPM,
    endHours,
    endMinutes,
    endAMPM
  ) => {
    const startTime = startHours + startMinutes + startAMPM.toLowerCase();
    const endTime = endHours + endMinutes + endAMPM.toLowerCase();

    return (
      moment(endTime, "hmm a").diff(
        moment(startTime, "hmm a"),
        "hours",
        true
      ) >= 0
    );
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
        options={Object.keys(roster)}
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
