import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import  TopSearch  from './Top-Search.js'
import TableCitizens from './Table_citizens.js'

class Citizen extends Component {
  render () {

    return (
        <div class="Container">
            <TopSearch />
            <TableCitizens />
        </div>
    )
  }
}

export default Citizen