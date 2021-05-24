import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignupPage from './login_page';
import HappyUsers from './happy_users';
import DisplayCities from './display_cities';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Logo1 from './logo';
import reportWebVitals from './reportWebVitals';
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";


// const Header = props => {
//   const { location } = props;
//   return (
//     <Navbar collapseOnSelect className="menu-padding">
//     <Logo1 />
//     <Nav className="mr-auto menubar" variant="tabs" activeKey={location.pathname}>
//     <Nav.Link href="/home" eventKey="home" className="link-clr active">HOME</Nav.Link>
//     <Nav.Link href="/happyusers" eventKey="happy users" className="link-clr">HAPPY USERS</Nav.Link>
//     <Nav.Link href="#tours" eventKey="tours" className="link-clr">TOURS 2021</Nav.Link>
//     <Nav.Link href="#hot deals" eventKey="hot deals" className="link-clr">HOT DEALS</Nav.Link>
//     </Nav>
//     </Navbar>
//   );
// };
// const HeaderWithRouter = withRouter(Header);

// class MyHeader extends React.Component {

//   render() {
//     return (
//       <React.Fragment>
//         <Router>
//         <HeaderWithRouter />
//           <Switch>
//             <Route exact path="/" component={SignupPage} />
//               <Route exact path="/home" component={DisplayCities} />
//               <Route exact path="/happyusers" component={HappyUsers} />
//           </Switch>
//         </Router>     
//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<MyHeader />, document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
