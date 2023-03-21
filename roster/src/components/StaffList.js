import { UseState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StaffShift from "./StaffShift";
import StaffTableRow from "./StaffTableRow";

const StaffList = ({ roster }) => {
  const tableRow = [
    "Staffs",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableRow.map((row, index) => (
              <TableCell key={index} align="center">
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(roster).map(
            ([staff, shifts], index) =>
              shifts && (
                <StaffTableRow staff={staff} shifts={shifts} index={index} />
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StaffList;
