import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './Components/global_styles';
import { lightTheme, darkTheme } from './Components/theme';

import LoginPage from './Pages/login_page';
import HappyUsers from './Pages/happy_users';
import DisplayCities from './Pages/home';
import Test from './Pages/test';
import SignUpForm from './Pages/sign_up_form';
import ContactUs from './Pages/contact_us';
import ToggleSwitch from './Components/toggle_switch';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('UA-198245490-1');
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [theme, setTheme] = useState('light');
  const [status, setStatus] = useState(false);
  const handleSwitch = (e) => {
    setStatus(!status);
    let newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <div className="switch-container">
              <div>Light Mode</div>
              <ToggleSwitch status={status} name='test' handleChange={handleSwitch} />
              <div>Dark Mode</div>
            </div>
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
      </ThemeProvider>
    </>
  )


}
export default App;
