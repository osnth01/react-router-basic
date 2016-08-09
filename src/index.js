import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

const App = () => <h1>Hello</h1>

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>),
  document.getElementById('root'))
