import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import ReactGA from 'react-ga';

import LoginPage from './login_page';
import HappyUsers from './happy_users';
import DisplayCities from './display_cities';
import Test from './test';
import SignUpForm from './sign_up_form';
import ContactUs from './contact_us';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ReactGA.initialize('UA-198245490-1');
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={DisplayCities} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/happyusers" component={HappyUsers} />
              <Route exact path="/contactus" component={ContactUs} />
            </Switch>
          </div>
        </BrowserRouter>

      </>
    )
  }

}
export default App;
