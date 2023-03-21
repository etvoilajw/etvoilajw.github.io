import { useState } from "react";
import Select from "./Select";

const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const TimeStamp = ({ setStartTime, setEndTime, onSubmit }) => {
  const [selectedStartHour, setSelectedStartHour] = useState("");
  const [selectedStartMinutes, setSelectedStartMinutes] = useState("");
  const [selectedStartAmPm, setSelectedStartAmPm] = useState("");
  const [selectedEndHour, setSelectedEndHour] = useState("");
  const [selectedEndMinutes, setSelectedEndMinutes] = useState("");
  const [selectedEndAmPm, setSelectedEndAmPm] = useState("");

  return (
    <>
      <div>
        <label htmlFor={"Start"}>Start</label>
        <Select
          name={"hours"}
          value={selectedStartHour}
          setMethod={setSelectedStartHour}
          options={HOURS}
        ></Select>

        <Select
          name={"minutes"}
          value={selectedStartMinutes}
          setMethod={setSelectedStartMinutes}
          options={MINUTES}
        ></Select>

        <Select
          name={"AM/PM"}
          value={selectedStartAmPm}
          setMethod={setSelectedStartAmPm}
          options={["AM", "PM"]}
        ></Select>
      </div>

      <div>
        <label htmlFor={"End"}>End</label>
        <Select
          name={"hours"}
          value={selectedEndHour}
          setMethod={setSelectedEndHour}
          options={HOURS}
        ></Select>

        <Select
          name={"minutes"}
          value={selectedEndMinutes}
          setMethod={setSelectedEndMinutes}
          options={MINUTES}
        ></Select>

        <Select
          name={"AM/PM"}
          value={selectedEndAmPm}
          setMethod={setSelectedEndAmPm}
          options={["AM", "PM"]}
        ></Select>
      </div>
    </>
  );
};

export default TimeStamp;
