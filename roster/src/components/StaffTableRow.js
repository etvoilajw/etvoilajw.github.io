import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import StaffShift from "./StaffShift";

const StaffTableRow = ({ staff, shifts, index }) => {
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableHead key={index} component="th" scope="row">
        {staff}
      </TableHead>
      {Object.entries(shifts).map(([day, shift], index2) => (
        // <p>{JSON.stringify(shifts)}</p>
        <TableCell key={index2} align="right">
          {shift.workType && <StaffShift shift={shift} />}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default StaffTableRow;
