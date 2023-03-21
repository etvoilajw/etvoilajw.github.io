import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import StaffShift from "./StaffShift";

const StaffTableRow = ({ staff, shifts, index }) => {
  return (
    <TableRow key={index} sx={{ width: 50, height: 50 }}>
      <TableCell key={index} component="th" scope="row" align="center">
        {staff}
      </TableCell>
      {Object.entries(shifts).map(([day, shift], index2) => (
        // <p>{JSON.stringify(shifts)}</p>
        <TableCell key={index2} align="center">
          {shift.workType && <StaffShift shift={shift} />}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default StaffTableRow;
