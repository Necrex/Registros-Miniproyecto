import React, { Component } from 'react'
import { Row, Col, Button, Clearfix,  } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';  
import Paper from '@material-ui/core/Paper'; 
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell'; 
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead'; 
import TablePagination from '@material-ui/core/TablePagination'; 
import TableRow from '@material-ui/core/TableRow'; 
import axios from 'axios';
import { useState, useEffect } from 'react'  

const columns = [
    { id: 'name', label: 'Nombre', minWidth: 170 },
    { id: 'code', label: 'Direccion', minWidth: 150 },
    {
      id: 'population',
      label: 'Estado',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'size',
      label: 'Municipio',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'density',
      label: 'Telefono',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {

    },
    {

    }
  ];

const useStyles = makeStyles({  
  root: { 
    width: '100%',
    fontSize: '14pt'
  },  
  container: {
    maxHeight: 440,  
  }
});

export default function TableCitizens() {
  const deleted = 0;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  useEffect(() => {
        const GetData = async () => {
          const result = await axios('http://localhost/Registers_Api/GetCitizens.php');
          setData(result.data);
        }
        GetData();
        console.log(data);
}, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper className={classes.root} >
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
            {columns.map((column) => (
                  <TableCell
                    className = {classes.tableCell}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontSize: '1.3rem' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
           <TableRow >
                <TableCell style={{fontSize: '1.2rem' }}>{row.name}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }}>{row.direction}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right">{row.state}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right">{row.town}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right">{row.phone}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right"><Button onClick={async () => {
                  const obj = {id:row.id-1, active: deleted};
                  if(window.confirm("¿Esta seguro que quiere eliminar este registro?")){
                  const result = await axios.post('http://localhost/Registers_Api/DeleteCitizen.php', obj)}}}><i class="fa fa-trash-o fa-4" aria-hidden="true"></i></Button></TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right"><Button><i class="fa fa-pencil-square-o fa-4" aria-hidden="true"></i></Button></TableCell>
              </TableRow>
              );  
            })}  
          </TableBody>
        </Table>  
      </TableContainer>  
      <TablePagination 
        rowsPerPageOptions={[5, 10, 15]}  
        component="div"  
        count={data.length}  
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>  
  );  
} 

