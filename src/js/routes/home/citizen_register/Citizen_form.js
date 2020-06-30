import React, { Component } from 'react'
import { Row, Col, Clearfix, Button } from 'react-bootstrap'
import FUpload from '../../../components/UploadFile/FUpload.js'
import axios from 'axios'

class CitizenReg extends Component {
    constructor(){
        super()
        this.changeState = this.changeState.bind(this)
        this.createCitizen = this.createCitizen.bind(this)
        this.writeState = this.writeState.bind(this);

        this.state = {
            states:[],
            towns:[],
            actualState: 0,
            clean:0,

            name:"",
            direction:"",
            state:"",
            town:"",
            phone:"",
            send:true
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

    writeState(e) {
    const {name , value} = e.target;
    this.setState({
        [name]:value
        });
        console.log(name)
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

    async createCitizen(e){
        e.preventDefault();

        try{
            if(this.state.send){
                const { name, direction, state, town, phone } = this.state;
                const obj1 = { nameCitizen:name, direction:direction, state:state, town:town, phone:phone };
                await axios.post('http://localhost/Registers_Api/PostCitizen.php', obj1).then(() =>{
                    window.alert("Ciudadano guardado correctamente")
                }
                )
            }else{
                const { name, direction, state, town, phone } = this.state;
                const obj2 = { nameCitizen:name, direction:direction, state:state, town:town, phone:phone };
                await axios.post('http://localhost/Registers_Api/PostEditCitizen.php', obj2)
            }
        } catch(error) {
            console.error(error);
        }
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
            <form onSubmit={this.createCitizen} key={this.state.limpiar}>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Nombre *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text" name="name" onChange={this.writeState} ></input>
                    </Col>
                </Row>
                <br></br>
                <Clearfix/>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Direccion *</label>
                    </Col>
                    <Col md={5}>
                    <input className="form-control" type="text" name="direction" onChange={this.writeState}></input>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md={2}>
                    <label style={{fontSize:'13pt'}}>Estado *</label>
                    </Col>
                    <Col md={5}>
                    <div class="input-group mb-3">
                    <select className="form-control" name="state" onChange={this.writeState}>
                        {this.state.states.map(item => {
                            return(
                                <option onClick={this.changeState} value={item.idState} label={item.nameState}></option>
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
                        <select className="form-control" onChange={this.writeState} name="town">
                            {this.state.towns.map(item => {
                                return(
                                    <option value={item.idTown} label={item.nameTown}></option>
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
                        <input className="form-control" type="text" maxLength="10" name="phone" onChange={this.writeState}></input>
                    </Col>
                    <Col md={3} className="pull-right">
                        <div>
                            <Button type="submit" className="btn-success">Guardar</Button>
                            <Button className="btn-danger" onClick={() =>{this.setState({actualState:0, name:"", direction:"", state:"", town:"", phone:"", limpiar:0})}}>Limpiar</Button>
                        </div>
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