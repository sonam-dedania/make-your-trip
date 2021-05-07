import './App.css';
import React from 'react';
import SignupPage from './signup_page';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SignupPage />
      </>
    )
  }

}
export default App;
