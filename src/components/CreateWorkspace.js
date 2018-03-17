import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getCelebrityData } from '../utils/chucknorris-api';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class CreateWorkspace extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {

    const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Create a new workspace</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title"><span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="jumbotron col-sm-12">
          <div className="text-center">
            <h2>Sign in to your workspace</h2>
            <h5>Enter your workspace’s Slack URL.</h5>
            <br />
          </div>
            <div className="row">
              <span className="col-md-offset-4 col-md-3" >
                <FormControl autoFocus type="text" />
              </span>
              <span className="col-md-3">
                <h4>.slack.com</h4>
                <br />
              </span>
            </div>
            <Link className="btn btn-lg btn-success col-md-offset-5 col-md-2" to='/'> Next </Link>        
        </div>
      </div>
    );
  }
}

export default CreateWorkspace;