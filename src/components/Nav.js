import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import '../App.css';

class Nav extends Component {

  loginHandler(e) {
    console.log("OK");
    browserHistory.push("/login")
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">slack</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/createworkspace">Create a new workspace</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a className="btn btn-info log" onClick={this.loginHandler} >Sign in</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;