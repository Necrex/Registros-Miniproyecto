import React, { Component } from 'react'
import { Row, Col, Button, Clearfix,  } from 'react-bootstrap'

class TableStates extends Component {

    render () {
        return(
            <div className="Table_cit">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th>Municipios</th>
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
            <td>{props.state}</td>
            <td><Button><i class="fa fa-trash-o fa-4" aria-hidden="true"></i></Button></td>
            <td><Button><i class="fa fa-pencil-square-o fa-4" aria-hidden="true"></i></Button></td>
        </tr>
    )
}

export default TableStates