import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  styled,
  TableCell,
  tableCellClasses,
  TableBody,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Tableview({ data }) {
  return (
    <div
      style={{ marginTop: "2rem", textAlign: "center" }}
      className="div-table"
    >
      <h1>Table View </h1>
      <div>
        <TableContainer
          component={Paper}
          style={{ marginTop: "2rem", width: "40rem" }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Principal (A)</StyledTableCell>
                <StyledTableCell>Interest (B)</StyledTableCell>
                <StyledTableCell>Total Payment(A+B)</StyledTableCell>
                <StyledTableCell>Balance</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data === 0
                ? "No Data"
                : data.map((row) => (
                    <StyledTableRow key={row.interestSum}>
                      <StyledTableCell>
                        {Math.round(row.capital)}
                      </StyledTableCell>
                      <StyledTableCell>
                        {Math.round(row.interest)}
                      </StyledTableCell>
                      <StyledTableCell>
                        {Math.round(row.installment)}
                      </StyledTableCell>
                      <StyledTableCell>
                        {Math.round(row.remain)}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
