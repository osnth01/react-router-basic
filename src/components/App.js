import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App