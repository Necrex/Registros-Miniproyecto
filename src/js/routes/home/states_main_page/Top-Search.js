import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import history from '../../../history.js'
import TableStates from './Table_states.js'


class TopSearch extends Component {
    render () {
        return(
            <div>
                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Listado de estados</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <input placeholder="Buscar" type="text" class="form-control"/>
                    </Col>
                    <Col md={4}>
                        <Button className="pull-right" onClick={() => { history.push('/home/state_register')}}>
                            Agregar
                        </Button>
                    </Col>
                </Row>

                <TableStates />
            </div>
        )
    }
}

export default TopSearch