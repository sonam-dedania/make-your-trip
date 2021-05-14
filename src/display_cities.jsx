import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo from './Images/logo.png';
import Logo1 from './logo';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import CityCard from './city_card';
import Avatar from './Images/avatar.jfif';
import DatePicker from 'react-datepicker';
import CitiesWeather from './cities_weather';
import CityList from './city_list';
import "react-datepicker/dist/react-datepicker.css";

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
            year: year1,
            startDate: null
        }
    }

    changeDate = (date) => {
        this.setState({ startDate: date });
    }

    render() {
        return (
            <div className="gry-container">
                <div className="gry1-container">
                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <div className="header">
                                <Navbar className="menu-padding">
                                    <Logo1 />
                                    <Nav className="mr-auto menubar" variant="tabs" activeKey="#home">
                                        <Nav.Link href="#home" eventKey="home" className="link-clr active">HOME</Nav.Link>
                                        <Nav.Link href="#search" eventKey="search" className="link-clr">SEARCH</Nav.Link>
                                        <Nav.Link href="#tours" eventKey="tours" className="link-clr">TOURS 2021</Nav.Link>
                                        <Nav.Link href="#hot deals" eventKey="hot deals" className="link-clr">HOT DEALS</Nav.Link>
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
                                <p className="day-yr"><b>{this.state.day}</b><br />
                                    <span className="gry">{this.state.month}, {this.state.year}</span></p>
                            </Col>
                            <Col lg={6} md={6} sm={6} className="align-left">
                                <div className="border-box">
                                    <div className="select-dropdown">
                                        <p className="all-place-para">Select Place</p>
                                        <div className="city-list">
                                            <CityList /><i class="fa fa-sort-desc icon-sort1" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <Dropdown className="dropdown2">
                                        <Dropdown.Toggle id="dropdown-basic" className="select-menu">
                                            How Many Days?<br />
                                            <span className="black-para">One Week</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-items">
                                            <Dropdown.Item href="#/action-1">4 Nights / 5 days</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">8 Nights / 10 days</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">10 Nights / 11 days</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <div className="border-right1">
                                        <div className="any-date">
                                            <p className="select-date1">Select Date</p><br />
                                            {!this.state.startDate &&
                                                <p className="any-date-para">Any date
                                                <i class="fa fa-sort-desc icon-sort" aria-hidden="true"></i>
                                                </p>
                                            }
                                        </div>
                                        <DatePicker
                                            className="datepicker"
                                            placeholder="sonam"
                                            selected={this.state.startDate}
                                            onChange={this.changeDate} />
                                    </div>
                                    <div className="filter-div">
                                        <Button className="btn sort-btn"><i class="fa fa-sliders icon-slider" aria-hidden="true"></i></Button>
                                    </div>
                                    <Button className="btn go-btn"><i class="fa fa-search icon-search" aria-hidden="true"></i> Go!</Button>
                                </div>
                            </Col>
                            <Col lg={3} md={3} sm={3}>
                                <CitiesWeather />
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
                </div >
            </div >
        )
    }
}

export default DisplayCities;