import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class StateReg extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Registro de estados</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <input placeholder="Estado" type="text" class="form-control"/>
                    </Col>
                    <Col md={4}>
                        <Button className="pull-right" onClick={() => { }}>
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default StateReg