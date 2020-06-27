import React, { Component } from 'react'
import { Row, Col, Button, Clearfix } from 'react-bootstrap'

class TableCitizens extends Component {
    render () {
        return(
            <div className="dashboard_graph">

            <div className="col-md-9 col-sm-9 col-xs-12">
            <div id="chart_plot_01" className="demo-placeholder"></div>
            </div>

            <Clearfix />
        </div>
        )
    }
}

export default TableCitizens