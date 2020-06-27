import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import  TopSearch  from './Top-Search.js'

class Citizen extends Component {
  render () {

    return (
        <div class="Container">
            <TopSearch />
        </div>
    )
  }
}

export default Citizen