import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import  TopSearch  from './Top-Search.js'
import TableTown from './Table_towns.js'

class States extends Component {
  render () {

    return (
        <div class="Container">
            <TopSearch />
            <TableTown />
        </div>
    )
  }
}

export default States