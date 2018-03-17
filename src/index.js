import React from 'react';
import ReactDOM from 'react-dom';
import CreateWorkspace from './components/CreateWorkspace';
import Slack from './components/Slack';
import { Router, Route, browserHistory } from 'react-router';
import Login from './containers/Login';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Slack}/>
        <Route path="/createworkspace" component={CreateWorkspace}/>
        <Route path="/login" component={Login}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));