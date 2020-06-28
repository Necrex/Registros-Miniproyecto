import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import FUpload from '../../../components/UploadFile/FUpload.js'


class CitizenReg extends Component {
  render () {
    return (
        <div>
            <Row>
                <Col md={8}>
                    <label>Registro de ciudadanos</label>
                </Col>
            </Row>
            <br></br>
            <Clearfix/>
            <form>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Nombre *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text"></input>
                    </Col>
                </Row>
                <br></br>
                <Clearfix/>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Direccion *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text"></input>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Estado *</label>
                    </Col>
                    <Col md={5}>
                    <div class="input-group mb-3">
                    <select class="form-control" id="inputGroupSelect01">
                        <Callstates />
                    </select>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Municipio *</label>
                    </Col>
                    <Col md={5}>
                    <div class="input-group mb-3">
                    <select class="form-control" id="inputGroupSelect01">
                        <Calltowns />
                    </select>
                    </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Telefono</label>
                    </Col>
                    <Col md={3}>
                    <input className="form-control" type="text"></input>
                    </Col>
                </Row>
            </form>
            <div className="FUpload">
                <FUpload/>
            </div>
            <br/>
        </div>
        
    )
  }
}

function Callstates() {
    return(
        <option selected>Aguascalientes</option>
    )
}

function Calltowns() {
    return(
        <option selected>Aguascalientes</option>
    )
}

export default CitizenReg