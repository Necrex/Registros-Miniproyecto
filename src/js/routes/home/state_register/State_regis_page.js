import React, { Component } from 'react'
import State_form  from './State_form.js'

class States extends Component {
  constructor(props){
    super(props)
    console.log(this.props.match.params.idEdit)
  }
  render () {
    return (
        <div class="Container">
         <State_form idState={this.props.match.params.idEdit} />
        </div>
    )
  }
}

export default States