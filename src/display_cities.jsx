import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo from './Images/logo.png';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Home from './Images/home.png'
import Bahamas from './Images/bahamas.jfif';
import Sun from './Images/sun.png';


class DisplayCities extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="gry-container">
                <div className="gry1-container">
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <div className="header">
                                <Navbar className="menu-padding">
                                    <img src={Logo} alt="logo.png" />
                                    <Nav className="mr-auto menubar">
                                        <Nav.Link href="#home" className="link-clr">HOME</Nav.Link>
                                        <Nav.Link href="#search" className="link-clr">SEARCH</Nav.Link>
                                        <Nav.Link href="#tours" className="link-clr">TOURS 2021</Nav.Link>
                                        <Nav.Link href="#hot deals" className="link-clr">HOT DEALS</Nav.Link>
                                    </Nav>
                                </Navbar>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4}>
                            <div className="right-header">
                                <p className="menubar1">SAVED OFFERS</p>
                                <i class="fa fa-bookmark-o icon-bookmark1" aria-hidden="true"></i>&#x2003;
                                <i class="fa fa-bookmark-o icon-bookmark1" aria-hidden="true"></i>
                            </div>
                        </Col>
                        <hr className="hr-top" />
                    </Row>

                    <div className="body-part">
                        <Row>
                            <Col lg={1} md={1} sm={1}>
                                <p className="date">16</p>
                            </Col>
                            <Col lg={2} md={2} sm={2}>
                                <p className="day-yr"><b>Wendnesday</b><br /><span className="gry">September 2020</span></p>
                            </Col>
                            <Col lg={6} md={6} sm={6}>
                                <div className="border-box">
                                    <Dropdown className="dropdown1">
                                        <Dropdown.Toggle id="dropdown-basic" className="select-menu">
                                            Select Place<br />
                                            <span className="black-para">All Places</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="dropdown2">
                                        <Dropdown.Toggle id="dropdown-basic" className="select-menu">
                                            How Many Days?<br />
                                            <span className="black-para">One Week</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="dropdown3">
                                        <Dropdown.Toggle id="dropdown-basic" className="select-menu">
                                            Select Date<br />
                                            <span className="black-para">Any Date</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="filter-div">
                                        <Button className="btn sort-btn"><i class="fa fa-sliders icon-slider" aria-hidden="true"></i></Button>
                                    </div>
                                    <Button className="btn go-btn"><i class="fa fa-search icon-search" aria-hidden="true"></i> Go!</Button>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={3}>
                                <div className="weather">
                                    <img src={Home} alt="home.png" className="cloud-img" />
                                    <p className="temp">23&#x00B0;</p>
                                    <p className="city"><b>Kiev</b><br /><span className="gry">Ukraine</span></p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} md={3} sm={3}>
                                <div className="city-card">
                                    <p className="city-name">Bahamas Islands <i class="fa fa-bookmark-o icon-bookmark" aria-hidden="true"></i></p>
                                    <p className="tour-date">24 April-02 May, 2021</p>
                                    <p className="category">Category/Ocean</p>
                                    <p className="avg-temp"><span className="border-bot">Ave</span>rage Temperature</p>
                                    <p className="city-temp">+ 18&#x00B0;C <img src={Sun} alt="" /></p>
                                    <img src={Bahamas} className="city-img" alt="bahamas.jfif" />
                                    <Row>
                                        <Col lg={6} md={6} sm={6}>
                                            <p className="tl-price">Total Price:</p>
                                            <p className="price">$ 2 950</p>
                                        </Col>
                                        <Col lg={6} md={6} sm={6}>
                                            <Button className="btn explore-btn">Explore</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayCities;