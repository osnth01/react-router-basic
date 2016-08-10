import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Route>
  </Router>),
  document.getElementById('root'))
