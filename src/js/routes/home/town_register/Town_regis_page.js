import React, { Component } from 'react'
import Town_form  from './Town_form.js'

class States extends Component {
  constructor(props){
    super(props)
    console.log(this.props.match.params.idEdit)
  }
  render () {
    return (
        <div class="Container">
            <Town_form idTown={this.props.match.params.idEdit}/>
        </div>
    )
  }
}

export default States