import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './tabel.css'

function createData(Title, Subtitle, isbn13, Price, Image, Url) {
  return { Title, Subtitle, isbn13, Price, Image, Url};
}

const rows = [
  createData('Robotics, AI, and Humanity', 'Science, Ethics, and Policy', 9783030541729, '$59.99', `https://itbook.store/img/books/9783030541729.png` ,'https://itbook.store/books/9783030541729'),
  createData('Introduction to Autonomous Robots, 3rd Edition', '', 9781493773077, '$44.87', `https://itbook.store/img/books/9781493773077.png`, 'https://itbook.store/books/9781493773077'),
  createData('Learning Go', 'An Idiomatic Approach to Real-World Go Programming', 9781492077213, '$35.88', `https://itbook.store/img/books/9781492077213.png`, 'https://itbook.store/books/9781492077213'),
  createData('Open Workbook of Cryptology', 'A project-based introduction to crypto in Python', 1001656678502, '$0.00', `https://itbook.store/img/books/1001656678502.png`, 'https://itbook.store/books/1001656678502'),
  createData('Embracing Modern C++ Safely', '', 9780137380350, '$44.87', `https://itbook.store/img/books/9780137380350.png`, 'https://itbook.store/books/9780137380350')
];

function Tabel() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }}>
        <TableHead className='judultabel'>
          <TableRow className='frame' sx={{ 'td, th': { border: 2 } }}>
            <TableCell align='center'>Title</TableCell>
            <TableCell align="center">Subtitle</TableCell>
            <TableCell align="center">isbn13</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Title}
              sx={{ 'td, th': { border: 2 } }}
            >
              <TableCell align='center' component="th" scope="row">
                {row.Title}
              </TableCell>
              <TableCell align="center">{row.Subtitle}</TableCell>
              <TableCell align="center">{row.isbn13}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center"><img src={row.Image}></img></TableCell>
              <TableCell align="center"><a href={row.Url}>{row.Url}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tabel
