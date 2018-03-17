import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getFoodData } from '../utils/chucknorris-api';


class Slack extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  getFoodJokes() {
    // getFoodData().then((jokes) => {
    //   this.setState({ jokes });
    // });
  }

  componentDidMount() {
    this.getFoodJokes();
  }

  render() {

    const { jokes }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Where Work Happens</h3>
        <hr/>

        { jokes.map((joke, index) => (
              <div className="col-sm-6" key={index}>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"> <span className="btn">#{ joke.id }</span></h3>
                  </div>
                  <div className="panel-body">
                    <p> { joke.joke } </p>
                  </div>
                </div>
              </div>
          ))}

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            
            <h4>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</h4>
            <br />
            <Link className="btn btn-lg btn-success col-md-offset-5 col-md-2" to='/createworkspace'> Please Create </Link>
            <br />
            <br />
            <h4>Millions of people around the world have already made Slack the place where their work happens.</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Slack;