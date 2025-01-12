import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@material-ui/core";

const DashboardTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {data.table_headers.map((header) => (
              <TableCell key={header.name}>{header.name}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {data.table_headers.map((header) => (
              <TableCell key={`${header.name}-type`}>
                <Select value={header.type} disabled>
                  <MenuItem value="string">String</MenuItem>
                  <MenuItem value="int">Int</MenuItem>
                  <MenuItem value="float">Float</MenuItem>
                </Select>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.table_data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={`${rowIndex}-${cellIndex}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
