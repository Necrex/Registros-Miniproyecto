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
            idState:"",
            nameState:"",
            send:true,
            change:0,
        }
    }

    componentDidMount() {
        this.toDo();
    }

    toDo(){
        const id = this.props.idState;
        if(id === ""){

        }else{
            this.edit(id)
        }
    }

    writeState(e) {
        const {name , value} = e.target;
        this.setState({
            [name]:value
            });
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
                const obj2 = { nameState:nameState, idState:this.props.idState };
                await axios.post('http://localhost/Registers_Api/PostEditState.php', obj2).then(() =>{
                    window.alert("Estado guardado correctamente")
                    this.setState({
                        change:this.state.change+1
                    })
                })
            }
        } catch(error) {
            console.error(error);
        }
    }

    async edit(id){
        const obj = {idState:id};
        console.log(obj);
        try {
        const res = await axios.post('http://localhost/Registers_Api/GetOneState.php',obj);
        this.setState({
            idState:res.data[0].idState,
            nameState: res.data[0].nameState,
            send:false
          });
        } catch (error) {
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
                            <input placeholder="Estado" name="nameState" value={this.state.nameState} type="text" class="form-control" onChange={this.writeState}></input>
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