import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Homepage from './pages/homepage';
import Header from './components/header'

const App = () => (
  <Router>
    <Switch>
    <Route exact path='/' component={Homepage} />
    </Switch>
  </Router>
)

export default App;
