import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getFoodData } from '../utils/chucknorris-api';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav />
        <h3 className="text-center">Home page</h3>
        <hr/>
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h4>This is home page</h4>
            <br />
            <Link className="btn btn-lg btn-success col-md-12" to="/createworkspace">Log out</Link>
            <br /><br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;