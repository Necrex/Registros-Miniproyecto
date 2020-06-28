import React, { Component } from 'react'
import firebase from 'firebase'
import { Button, Row, Col } from 'react-bootstrap'


class FUpload extends Component {
    constructor () {
        super();
        this.state = {
            picture: null
        }

        this.handleUpload = this.handleUpload.bind(this)
    }

    handleUpload (event) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`/Fotos/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', snapshot => {}, error => {console.log(error.message)
        }, () => {
            this.setState({
                picture: task.snapshot.downloadURL
            })
        }
        
        )
    }

    render () {
        return(
            <div>
                {/* <img width="100" src={this.props.picture} /> */}
                <img className="img-thumbnail" height="200" width="250" src="http://www.pequenomundo.cl/wp-content/themes/childcare/images/default.png" />                

                <input className="custom-file-input" type="file" onChange={this.handleUpload} />
                <br/>
                <br/>
                <div>
                    <Button className="btn-success">Guardar</Button>
                    <Button className="btn-danger">Limpiar</Button>
                </div>
            </div>
        )
    }
}

export default FUpload