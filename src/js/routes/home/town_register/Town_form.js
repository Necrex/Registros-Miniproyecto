import React, { Component } from 'react'
import { Row, Col, Button, Clearfix } from 'react-bootstrap'
import TableTowns from '../towns_main_page/Table_towns.js'
import axios from 'axios'


class TownForm extends Component {
    constructor(props) {
        super(props);

        this.writeState = this.writeState.bind(this)
        this.createTown = this.createTown.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            states:[],
            idState: 0,
            nameTown: "",
            send:true,
            change:100
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
        this.setState({idState: e.target.value,change:this.state.change+1});
        console.log(this.state.idState)
    }

    writeState(e) {
        const {name , value} = e.target;
        this.setState({
            [name]:value
        });
        console.log(this.state.nameTown)
    }

    async createTown(e){
        e.preventDefault();
        try{
            if(this.state.send){
                const { idState, nameTown } = this.state;
                const obj1 = { idState:idState, nameTown:nameTown };
                await axios.post('http://localhost/Registers_Api/PostTown.php', obj1).then(() =>{
                    window.alert("Estado guardado correctamente")
                    this.setState({
                        change:this.state.change
                    })
                })
            }else{
                const { idState, nameTown } = this.state;
                const obj2 = { idState:idState, nameTown:nameTown };
                await axios.post('http://localhost/Registers_Api/PostEditTown.php', obj2)
            }
        } catch(error) {
            console.error(error);
        }
    }


    render () {
        return(
            <div>
                <form onSubmit={this.createTown}>
                    <Row>
                        <Col md={3} sm={3} xs={3}>
                            <label>Registro de municipios</label>
                        </Col>
                    </Row>
                    <Clearfix />
                    <Row>
                        <Col md={1}>
                            <label>Estado*</label>
                        </Col>
                        <Col md={2}>
                        <div class="input-group mb-3">
                        <select class="form-control" name="idState" onChange={this.handleChange}>
                            <option selected value="0">Selecciona un estado</option>
                            {this.state.states.map(item=>{
                            return(
                                    <option value={item.idState} >{item.nameState}</option>
                                )
                            })}
                        </select>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={1}>
                            <label>Nombre*</label>
                        </Col>
                        <Col md={2}>
                        <input className="form-control" name="nameTown" onChange={this.writeState}></input>
                        </Col>
                        <Col md={9}>
                            <Button className="pull-right" type="submit">
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                    </form>
                <div key={this.state.change}>
                    <TableTowns id = {this.state.idState}/>
                </div>
            </div>
        )
    }
}


export default TownForm