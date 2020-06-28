import React, { Component } from 'react'
import Town_form  from './Town_form.js'
import TableCitizens from '../towns_main_page/Table_towns.js'

class States extends Component {
  render () {

    return (
        <div class="Container">
            <Town_form />
            <TableCitizens />
        </div>
    )
  }
}

export default States