import React from 'react';
import './App.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo1 from './logo';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Avatar from './Images/avatar.jfif';
import { reactLocalStorage } from 'reactjs-localstorage';


import {
    NavLink,
} from "react-router-dom";
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSelect = () => {
        reactLocalStorage.clear("logindetail");
        window.open("/make-your-trip/", "_self");
    }

    render() {
        return (
            <Row>
                <Col lg={8} md={8} sm={8} xs={6}>
                    <div className="d-block d-sm-none left-logo">
                        <Logo1 />
                    </div>
                    <div className="header d-none d-sm-block">
                        <Navbar collapseOnSelect className="menu-padding">
                            <Logo1 />
                            <Nav className="mr-auto menubar" variant="tabs">
                                <Nav.Link to="/home" as={NavLink} className="link-clr">HOME</Nav.Link>
                                <Nav.Link to="/happyusers" as={NavLink} className="link-clr">HAPPY USERS</Nav.Link>
                                <Nav.Link to="/tours" className="link-clr">TOURS 2021</Nav.Link>
                                <Nav.Link to="/hot-deals" className="link-clr">HOT DEALS</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={6}>
                    <div className="right-header">
                        <div className="menubar1 d-none d-lg-block"><b>SAVED OFFERS</b></div>
                        {this.props.showBookmark &&
                            <>
                                <i class="fa fa-bookmark-o icon-bookmark1 d-none d-lg-block" aria-hidden="true"></i>
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