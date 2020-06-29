import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import history from '../../../history.js'

class TopSearch extends Component {
    render () {
        return(

                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Listado de ciudadanos</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <input placeholder="Buscar" type="text" class="form-control"/>
                    </Col>
                    <Col md={4}>
                        <Button className="pull-right" onClick={() => { history.push('/home/citizen_register', this.props)}}>
                        Agregar
                        </Button>
                    </Col>
                </Row>

        )
    }
}

export default TopSearch