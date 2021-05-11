import './App.css';
import React from 'react';
import SignupPage from './signup_page';
import DisplayCities from './display_cities';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/signup" component={SignupPage} />
              <Route path="/home" component={DisplayCities} />
            </Switch>
          </div>
        </BrowserRouter>

      </>
    )
  }

}
export default App;
