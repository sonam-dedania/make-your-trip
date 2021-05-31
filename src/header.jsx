import React from 'react';
import ReactGA from 'react-ga';
import { Navbar, Nav, Row } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import { NavLink } from "react-router-dom";

import Logo from './logo';
import Avatar from './Images/avatar.jfif';

import './App.css';
class Header extends React.Component {

    handleSelect = () => {
        ReactGA.event({
            category: 'Header',
            action: 'Click on Logout Button'
        });

        reactLocalStorage.clear("logindetail");
        window.open("/make-your-trip/", "_self");
    }

    homeTabClicked = () => {
        ReactGA.event({
            category: 'Header',
            action: 'Click on Home Tab'
        });
    }

    happyUsersTabClicked = () => {
        ReactGA.event({
            category: 'Header',
            action: 'Click on Happy Users Tab'
        });
    }

    render() {
        return (
            <Row>
                <Col lg={8} md={8} sm={8} xs={6}>
                    <div className="d-block d-sm-none left-logo">
                        <Logo />
                    </div>
                    <div className="header d-none d-sm-block">
                        <Navbar collapseOnSelect className="menu-padding">
                            <Logo />
                            <Nav className="mr-auto menubar" variant="tabs">
                                <Nav.Link to="/home" as={NavLink} className="link-clr" onClick={this.homeTabClicked}>HOME</Nav.Link>
                                <Nav.Link to="/happyusers" as={NavLink} className="link-clr" onClick={this.happyUsersTabClicked}>HAPPY USERS</Nav.Link>
                                <Nav.Link to="/tours" className="link-clr">TOURS 2021</Nav.Link>
                                <Nav.Link to="/hot-deals" className="link-clr">HOT DEALS</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={6}>
                    <div className="right-header">
                        <div className="right-menubar d-none d-lg-block"><b>SAVED OFFERS</b></div>
                        {this.props.showBookmark &&
                            <>
                                <i className="fa fa-bookmark-o total-count-icon-bookmark d-none d-lg-block" aria-hidden="true"></i>
                                <span className="sup-data d-none d-lg-block"><sup>{this.props.counter}</sup></span>&#x2003;
                            </>
                        }

                        <div className="profile">
                            <img src={Avatar} className="avatar-img" alt="avatar.jfif" />
                            <DropdownButton onSelect={this.handleSelect} className="profile-logout">
                                <Dropdown.Item eventKey='Logout'>Logout</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </Col>
                <hr className="hr-top d-none d-sm-block" />
            </Row>
        )
    }
}

export default Header;