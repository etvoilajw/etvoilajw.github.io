import { useState } from "react";
import AddShift from "./components/AddShift";
import AddStaff from "./components/AddStaff";

const App = () => {
  const [staffs, setStaffs] = useState([]);
  const [roster, setRoster] = useState({});

  return (
    <div>
      <AddStaff setStaffs={setStaffs} />
      <AddShift staffs={staffs} setRoster={setRoster} />
    </div>
  );
};

export default App;
