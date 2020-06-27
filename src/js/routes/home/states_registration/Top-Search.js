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
                        <div class="input-group">
                        <input type="text" class="form-control"/>
                        <span class="input-group-btn">
                        <button type="button" class="btn btn-primary">Buscar</button>
                        </span>
                        </div>
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