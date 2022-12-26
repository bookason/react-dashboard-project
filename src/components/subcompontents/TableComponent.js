import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  ID: string,
  amount: number,
  date: number,
  status: string,
) {
  return { ID, amount, date, status};
}

const rows = [
  createData('#1244', 159, <span>12.4.22</span>, <span className='notificationspan approved'>Approved</span>),
  createData('#3455', 237, <span>12.6.22</span>, <span className='notificationspan declined'>Declined</span>),
  createData('#4543', 262, <span>12.8.22</span>, <span className='notificationspan approved'>Approved</span>),
  createData('#2123', 305, <span>12.13.22</span>, <span className='notificationspan pending'>Pending</span>),
  createData('#4545', 356, <span>12.22.22</span>, <span className='notificationspan pending'>Pending</span>),
];

export default function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount($)</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}