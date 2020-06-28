import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import  TopSearch  from './Top-Search.js'
import TableCitizens from './Table_states.js'

class States extends Component {
  render () {

    return (
        <div class="Container">
            <TopSearch />
            <TableCitizens />
        </div>
    )
  }
}

export default States