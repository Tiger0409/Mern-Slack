import React from 'react';
import ReactDOM from 'react-dom';
import CreateWorkspace from './components/CreateWorkspace';
import Slack from './components/Slack';
import { Router, Route, browserHistory } from 'react-router';
import SungIn from './containers/Login';
import SignUp from './containers/Signup';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Slack}/>
        <Route path="/createworkspace" component={CreateWorkspace}/>
        <Route path="/login" component={SungIn}/>
        <Route path="/signup" component={SignUp}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));