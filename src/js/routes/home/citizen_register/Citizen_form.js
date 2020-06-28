import React, { Component } from 'react'
import { Row, Col, Clearfix } from 'react-bootstrap'
import FUpload from '../../../components/UploadFile/FUpload.js'
import axios from 'axios'

class CitizenReg extends Component {
    constructor(){
        super()
        this.changeState = this.changeState.bind(this)
        this.createCitizen = this.createCitizen.bind(this)

        this.state = {
            states:[],
            towns:[],
            actualState: 0
        }
    }

    componentDidMount() {
        this.getStates();
        this.getTowns();
    }

    changeState(e) {
        if(e.target.index === undefined){
            console.log(this.state.actualState)
            this.getTowns();
        }else{
            this.setState({actualState: e.target.index})
            console.log(this.state.actualState)

            this.getTowns();
        }
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

    async getTowns(){
        const idState = {idState : this.state.actualState + 1} 
        try {
            const res = await axios.post('http://localhost/Registers_Api/GetTownsWhere.php', idState)
            this.setState({
                towns:res.data
            })
        } catch (error) {
            console.error(console.error())
        }
    }

    async createCitizen(){
        
    }

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
            <form onSubmit={this.createCitizen}>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Nombre *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text" name="name"></input>
                    </Col>
                </Row>
                <br></br>
                <Clearfix/>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Direccion *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text" name="direction"></input>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Estado *</label>
                    </Col>
                    <Col md={5}>
                    <div class="input-group mb-3">
                    <select class="form-control" onChange={this.changeState} name="state">
                        {this.state.states.map(item => {
                            return(
                                <option onClick={this.changeState} key={item.id}>{item.nameState}</option>
                            )
                        })}
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
                    <select class="form-control" onChange={this.changeState} name="town">
                        {this.state.towns.map(item => {
                            return(
                                <option key={item.idTown}>{item.nameTown}</option>
                            )
                        })}
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
                    <input className="form-control" type="text" name="phone"></input>
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

export default CitizenReg