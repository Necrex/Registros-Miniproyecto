import React, { Component } from 'react'
import { Row, Col, Button, Clearfix } from 'react-bootstrap'
import { render } from 'react-dom'

class TopSearch extends Component {
    render () {
        return(
            <div>
            <Row>
                <Col md={3} sm={3} xs={3}>
                    <label>Listado de estados</label>
                </Col>
                <Col md={9}>
                    <Button className="pull-right" onClick={() => {alert('do stuff')}}>
                    Agregar
                    </Button>
                </Col>
            </Row>
            <Clearfix />
            <Row>
                <Col md={1}>
                    <label>Estado*</label>
                </Col>
                <Col md={2}>
                <div class="input-group mb-3">
                <select class="form-control" id="inputGroupSelect01">
                    <Callstates />
                </select>
                </div>
                </Col>
            </Row>
            <Row>
                <Col md={1}>
                    <label>Municipio*</label>
                </Col>
                <Col md={2}>
                <input className="form-control"></input>
                </Col>
            </Row>
            </div>
        )
    }
}

function Callstates() {
    return(
        <option selected>Aguascalientes</option>
    )
}

export default TopSearch