import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import  TopSearch  from './Top-Search.js'
import TableStates from './Table_states.js'

class States extends Component {
  render () {

    return (
        <div class="Container">
            <TopSearch />
            <TableStates />
        </div>
    )
  }
}

export default States