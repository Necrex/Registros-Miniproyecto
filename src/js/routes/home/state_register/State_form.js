import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import TableStates from '../states_main_page/Table_states.js'


class StateReg extends Component{
    constructor(props){
        super(props)
        this.createState = this.createState.bind(this)
        this.writeState = this.writeState.bind(this)


        this.state = {
            nameState:"",
            send:true,
            change:0
        }
    }

    writeState(e) {
        const {name , value} = e.target;
        this.setState({
            [name]:value
            });
            console.log(this.state.nameState)
        }

    async createState(e){
        e.preventDefault();

        try{
            if(this.state.send){
                const nameState = this.state.nameState;
                const obj1 = { nameState:nameState };
                await axios.post('http://localhost/Registers_Api/PostState.php', obj1).then(() =>{
                    window.alert("Estado guardado correctamente")
                    this.setState({
                        change:this.state.change+1
                    })
                })
            }else{
                const { nameState } = this.state;
                const obj2 = { nameState:nameState };
                await axios.post('http://localhost/Registers_Api/PostEditState.php', obj2)
            }
        } catch(error) {
            console.error(error);
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.createState}>
                    <Row>
                        <Col md={3} sm={3} xs={3}>
                            <label>Registro de estados</label>
                        </Col>
                        <Col md={5} sm={4} xs={4}>
                            <input placeholder="Estado" name="nameState" type="text" class="form-control" onChange={this.writeState}></input>
                        </Col>
                        <Col md={4}>
                            <Button className="pull-right" type="submit">
                                Guardar
                            </Button>
                        </Col>
                    </Row>
                </form>
                <div key={this.state.change}>
                    <TableStates />
                </div>
            </div>
        )
    }
}

export default StateReg