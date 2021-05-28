import './App.css';
import React from 'react';
import LoginPage from './login_page';
import HappyUsers from './happy_users';
import DisplayCities from './display_cities';
import { Route, Switch } from 'react-router-dom';
import Test from './test';
import SignUpForm from './sign_up_form';
import ContactUs from './contact_us';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
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
