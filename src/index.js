import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import Signup  from './Signup'
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <Router>
    <div className="navbar">
      <div className="signup-link"><Link to="/signup">Sign up</Link></div>
      <div className="login-link"><Link to="/login">Log in</Link></div>
    </div>
    <Route exact path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))