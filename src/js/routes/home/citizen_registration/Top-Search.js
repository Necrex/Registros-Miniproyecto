import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class TopSearch extends Component {
    render () {
        return(
            <div class="page-title">
                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Listado de ciudadanos</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <div class="input-group">
                        <input type="text" class="form-control"/>
                        <span class="input-group-btn">
                        <button type="button" class="btn btn-primary">Buscar</button>
                        </span>
                        </div>
                    </Col>
                    <Col md={1}>
                        <Button className="float-right" onClick={() => {alert('do stuff')}}>
                        Agregar
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TopSearch