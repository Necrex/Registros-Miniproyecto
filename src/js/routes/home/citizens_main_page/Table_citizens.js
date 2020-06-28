import React, { Component } from 'react'
import { Row, Col, Button, Clearfix,  } from 'react-bootstrap'

class TableCitizens extends Component {

    render () {
        return(
            <div className="Table_cit">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Estado</th>
                        <th>Municipio</th>
                        <th>Telefono</th>
                        <th></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="Table_cont">
                        <FillTable />
                    </tbody>
                </table>
            <Clearfix />
            </div>
        )
    }
}

function FillTable(props){
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.direction}</td>
            <td>{props.state}</td>
            <td>{props.town}</td>
            <td>{props.phone}</td>
            <td><Button><i class="fa fa-trash-o fa-4" aria-hidden="true"></i></Button></td>
            <td><Button><i class="fa fa-pencil-square-o fa-4" aria-hidden="true"></i></Button></td>
        </tr>
    )
}

export default TableCitizens