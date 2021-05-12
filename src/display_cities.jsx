import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo from './Images/logo.png';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import Home from './Images/home.png'
import CityCard from './city_card';
import Avatar from './Images/avatar.jfif';

class DisplayCities extends React.Component {
    constructor(props) {
        super(props);

        var currentDate = new Date();
        var date1 = currentDate.getDate();
        var month1 = currentDate.getMonth();
        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var month2 = months[month1];

        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var day1 = currentDate.getDay();

        var day2 = days[day1];
        var year1 = currentDate.getFullYear();

        this.state = {
            cityCardData: [
                {
                    cityName: "Bahamas Islands",
                    tourDate: "24 April- 02 May, 2021",
                    category: "Category/Ocean",
                    temp: 18,
                    cityImg: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1993/Suvadiva%20Dive%20Centre%203.jpg',
                    price: "$2 950",
                    isBookmark: false
                },
                {
                    cityName: "Mykonos Island",
                    tourDate: "18 April- 25 April, 2021",
                    category: "Category/Europe Sea",
                    temp: 26,
                    cityImg: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1329/Iconic%20Christ%20Church%20in%20Shimla.jpg?crop=192:285&downsize=192:285',
                    price: "$3 400",
                    isBookmark: false
                },
            ],
            date: date1,
            month: month2,
            day: day2,
            year: year1
        }

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
                                <p className="menubar1"><b>SAVED OFFERS</b></p>
                                <i class="fa fa-bookmark-o icon-bookmark1" aria-hidden="true"></i>&#x2003;
                                <div className="profile">
                                    <img src={Avatar} className="avatar-img" alt="avatar.jfif" />
                                </div>
                            </div>
                        </Col>
                        <hr className="hr-top" />
                    </Row>

                    <div className="body-part">
                        <Row>
                            <Col lg={1} md={1} sm={1}>
                                <p className="date">{this.state.date}</p>
                            </Col>
                            <Col lg={2} md={2} sm={2}>
                                <p className="day-yr"><b>{this.state.day}</b><br /><span className="gry">{this.state.month}, {this.state.year}</span></p>
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
                            {
                                this.state.cityCardData.map(card => {
                                    return <Col lg={3} md={3} sm={3}>
                                        < CityCard data={card} />
                                    </Col>
                                })
                            }
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayCities;