import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import history from '../../../history.js'
import TableStates from './Table_states.js'


class TopSearch extends Component {
    constructor(){
        super()
        this.writeState = this.writeState.bind(this)

        this.state = {
            buscar:"undefined"
        }
    }

    writeState(e) {
        const {name , value} = e.target;
        this.setState({
            [name]:value
        });
        console.log(this.state.buscar)
    }


    render () {
        return(
            <div>
                <Row>
                    <Col md={3} sm={3} xs={3}>
                        <label>Listado de estados</label>
                    </Col>
                    <Col md={5} sm={4} xs={4}>
                        <input placeholder="Buscar" name="buscar" type="text" class="form-control" onChange={this.writeState}/>
                    </Col>
                    <Col md={4}>
                        <Button className="pull-right" onClick={() => { history.push('/home/state_register')}}>
                            Agregar
                        </Button>
                    </Col>
                </Row>
                <div key={this.state.buscar}>
                    <TableStates buscar={this.state.buscar}/>
                </div>
            </div>
        )
    }
}

export default TopSearch