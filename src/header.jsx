import React from 'react';
import './App.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo1 from './logo';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Avatar from './Images/avatar.jfif';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { location } = props;
        return (
            <Row>
                <Col lg={8} md={8} sm={8} xs={6}>
                    <div className="header d-none d-sm-block">
                        <Navbar className="menu-padding">
                            <Logo1 />
                            <Nav className="mr-auto menubar" variant="tabs" activeKey={location.pathname}>
                                <Nav.Link href="/home" eventKey="home" className="link-clr active">HOME</Nav.Link>
                                <Nav.Link href="/happyusers" eventKey="happy users" className="link-clr">HAPPY USERS</Nav.Link>
                                <Nav.Link href="#tours" eventKey="tours" className="link-clr">TOURS 2021</Nav.Link>
                                <Nav.Link href="#hot deals" eventKey="hot deals" className="link-clr">HOT DEALS</Nav.Link>
                            </Nav>
                        </Navbar>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={6}>
                    <div className="right-header">
                        <div className="menubar1 d-none d-lg-block"><b>SAVED OFFERS</b></div>
                        <i class="fa fa-bookmark-o icon-bookmark1 d-none d-lg-block" aria-hidden="true"></i>&#x2003;

                                <div className="profile">
                            <img src={Avatar} className="avatar-img" alt="avatar.jfif" />
                            <DropdownButton onSelect={this.handleSelect} className="profile-logout">
                                <Dropdown.Item href="/make-your-trip" eventKey='Logout'>Logout</Dropdown.Item>
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