import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PageRenderer from './Page-renderer'

function App() {
  const user = {
    firstName: 'John',
    lastName: 'Smith'
  }


  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/Home" />} />
          <Route component={() => 404} />
        </Switch>  
      </div>
    </Router>
  );
}

export default App;
