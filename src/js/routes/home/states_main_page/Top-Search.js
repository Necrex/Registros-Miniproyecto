import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class TopSearch extends Component {
    render () {
        return(

                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Listado de estados</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <input placeholder="Buscar" type="text" class="form-control"/>
                    </Col>
                    <Col md={4}>
                        <Button className="pull-right" onClick={() => {alert('do stuff')}}>
                        Agregar
                        </Button>
                    </Col>
                </Row>

        )
    }
}

export default TopSearch