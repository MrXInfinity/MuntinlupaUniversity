import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import ReceiptData from "../receiptData.json";

// type eachReceiptData = {
//   No. of Units: number;
//   numberOfLabs: number;
//   InitialAmount: number;
// };

const Receipt: React.FC<{ receiptLabel: string }> = ({ receiptLabel }) => {
  if (receiptLabel) {
    const filteredData = ReceiptData[receiptLabel as keyof typeof ReceiptData];
    return (
      <TableContainer
        component={Paper}
        sx={{ p: 2, mb: 2, backgroundColor: "#f7f7f7" }}
      >
        <Table aria-label="simple table">
          {Object.keys(filteredData).map((eachLabel, index) => (
            <TableRow>
              <TableCell>{eachLabel}</TableCell>
              <TableCell>
                {filteredData[eachLabel as keyof typeof filteredData]}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    );
  }
  return <></>;
};
export default Receipt;

// <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow></TableRow>
