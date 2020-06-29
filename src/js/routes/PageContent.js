import React, { Component } from 'react'
import Home from './home'

class PageContent extends Component {
  render() {
    return (
      <div className="right_col" role="main">
        { Home }
      </div>
    )
  }
}

export default PageContent
