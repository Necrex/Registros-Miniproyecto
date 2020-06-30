import React  from 'react'
import { Button  } from 'react-bootstrap'
import {Link} from 'react-router-dom'
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
    { id: 'name', label: 'Municipio', minWidth: 170 },
    {

    },
    {

    }
  ];

const useStyles = makeStyles({  
  root: { 
    width: '100%',
  },  
  container: {
    maxHeight: 440,  
  },
  tablecell: {
    fontSize: '1pt'
  }, 
});

export default function TableStates(props) {
  const buscar = props.buscar;
  const deleted = 0;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  if(props.buscar == "" || props.buscar == undefined){
    useEffect(() => {
      const GetData = async () => {
        const obj1 = {idState:props.id};
        console.log(props.id)
        const result = await axios.post('http://localhost/Registers_Api/GetTownsWhere.php', obj1);
        setData(result.data);
      }
      GetData();
}, []);
  }else{
    useEffect(() => {
      const GetData = async () => {
        const obj2 = {idState:props.id, nameTown:buscar};
        const result = await axios.post('http://localhost/Registers_Api/GetTownSearch.php', obj2);
        setData(result.data);
      }
      GetData();
  }, []);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
      <div key={props.id}>
    <Paper className={classes.root}>
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
                <TableCell style={{fontSize: '1.2rem' }}>{row.nameTown}</TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right"><Button onClick={async () => {
                  const obj = {idTown:row.idTown, active: deleted};
                  if(window.confirm('Seguro que quieres eliminar este registro.')){
                  const result = await axios.post('http://localhost/Registers_Api/DeleteTown.php', obj)}}}>
                  <i class="fa fa-trash-o fa-4" aria-hidden="true"></i></Button></TableCell>
                <TableCell style={{fontSize: '1.2rem' }} align="right"><Link to={`/home/town_edit/${row.idTown}`}><Button><i class="fa fa-pencil-square-o fa-4" aria-hidden="true"></i></Button></Link></TableCell>
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
    </div>
  );  
} 

