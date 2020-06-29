import React, { Component } from 'react'
import TableTown from './Table_towns.js'
import { Row, Col, Button, Clearfix } from 'react-bootstrap'
import history from '../../../history.js'
import axios from 'axios'

class TopSearch extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            states:[],
            id: 1
        }
    }
    componentDidMount() {
        this.getStates();
     }

    async getStates(){
        try {
            const res = await axios.get('http://localhost/Registers_Api/GetStates.php')
            this.setState({
                states:res.data
            })
        } catch (error) {
            console.error(console.error())
        }
    }
    handleChange(e){
        this.setState({id : e.target.selectedIndex+1});
        console.log(this.state.id)
    }

    render () {
        return(
            <div>
            <Row>
                <Col md={3} sm={3} xs={3}>
                    <label>Listado de municipios</label>
                </Col>
                <Col md={9}>
                <Button className="pull-right" onClick={() => { history.push('/home/town_register')}}>
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
                <select class="form-control" onChange ={this.handleChange} >
                {this.state.states.map(item=>{
                return(
                        <option value={item.idState}>{item.nameState}</option>
                    )
                })}
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
                <div key={this.state.id}>
                <TableTown id = {this.state.id}/>
                {console.log(this.state.id)}
                </div>
            </div>
        )
    }
}



export default TopSearch