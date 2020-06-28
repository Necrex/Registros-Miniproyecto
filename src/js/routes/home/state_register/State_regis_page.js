import React, { Component } from 'react'
import State_form  from './State_form.js'
import TableCitizens from '../states_main_page/Table_states.js'

class States extends Component {
  render () {

    return (
        <div class="Container">
            <State_form />
            <TableCitizens />
        </div>
    )
  }
}

export default States