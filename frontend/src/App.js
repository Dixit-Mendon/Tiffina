import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FrontPage from './screens/FrontPage';
import LoginMobile from './screens/LoginMobile';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Route exact path='/' component={FrontPage} />
      <Route exact path='/login' component={LoginScreen} />
      <Route exact path='/login/mobile' component={LoginMobile} />

    </Router>
  );
}

export default App;
