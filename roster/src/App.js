import { useState } from "react";
import AddShift from "./components/AddShift";
import AddStaff from "./components/AddStaff";
import StaffList from "./components/StaffList";

const App = () => {
  const [staffs, setStaffs] = useState([]);
  const [roster, setRoster] = useState({});

  return (
    <div>
      <AddStaff roster={roster} setRoster={setRoster} />
      <AddShift roster={roster} setRoster={setRoster} />
      <StaffList roster={roster} />
    </div>
  );
};

export default App;
