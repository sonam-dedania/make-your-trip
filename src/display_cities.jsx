import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Navbar, Nav, Row, Button } from 'react-bootstrap';
import Logo from './Images/logo.png';
import Logo1 from './logo';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CityCard from './city_card';
import Avatar from './Images/avatar.jfif';
import DatePicker from 'react-datepicker';
import { reactLocalStorage } from 'reactjs-localstorage';
import CitiesWeather from './cities_weather';
import TourDaysList from './tour_days_list';
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
            date: date1,
            month: month2,
            day: day2,
            year: year1,
            startDate: null,
            selectedCity: ""
        }
    }

    changeDate = (date) => {
        this.setState({ startDate: date });
    }

    handleSelect = () => {
        reactLocalStorage.clear("logindetail");
    }

    selectedValue = (e) => {
        this.setState({ selectedCity: e });
    }

    render() {
        return (
            <div className="gry-container">
                <div className="gry1-container">
                    <Row>
                        <Col lg={8} md={8} sm={8} xs={6}>
                            <div className="d-block d-sm-none left-logo">
                                <Logo1 />
                            </div>

                            <div className="header d-none d-sm-block">
                                <Navbar className="menu-padding">
                                    <Logo1 />
                                    <Nav className="mr-auto menubar" variant="tabs" activeKey="#home">
                                        <Nav.Link href="#home" eventKey="home" className="link-clr active">HOME</Nav.Link>
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

                    <div className="body-part">
                        <Row>
                            <Col lg={2} md={6} sm={6} xs={6}>
                                <div className="date">{this.state.date}</div>
                                <div className="d-m-y">
                                    <div className="day-yr"><b>{this.state.day}</b></div><br />
                                    <div className="month gry">{this.state.month}, {this.state.year}</div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={6} className="d-block d-lg-none">
                                <CitiesWeather selectedCity={this.state.selectedCity} />
                            </Col>
                            <Col lg={7} md={12} sm={12} xs={12} className="d-none d-lg-block">
                                <div className="border-box">
                                    <div className="select-dropdown">
                                        <p className="all-place-para">Select Place</p>
                                        <div className="city-list">
                                            <CityList selectedValue={this.selectedValue} /><i class="fa fa-sort-desc icon-sort1" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="select-dropdown">
                                        <p className="all-place-para">How Many Days?</p>
                                        <TourDaysList /><i class="fa fa-sort-desc icon-sort2" aria-hidden="true"></i>
                                    </div>
                                    <div className="border-right1">
                                        <div className="any-date">
                                            <div className="select-date1">Select Date</div>
                                            {!this.state.startDate &&
                                                <div className="any-date-para">Any date
                                                <i class="fa fa-sort-desc icon-sort" aria-hidden="true"></i>
                                                </div>
                                            }
                                        </div>
                                        <DatePicker
                                            className="datepicker"
                                            selected={this.state.startDate}
                                            onChange={this.changeDate} />
                                    </div>
                                    <div className="filter-div">
                                        <Button className="btn sort-btn"><i class="fa fa-sliders icon-slider" aria-hidden="true"></i></Button>
                                    </div>
                                    <div className="go-btn-div">
                                        <Button className="btn go-btn"><i class="fa fa-search icon-search" aria-hidden="true"></i> Go!</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={6} className="d-none d-lg-block">
                                <CitiesWeather selectedCity={this.state.selectedCity} />
                            </Col>
                        </Row>
                        <Row>
                            <CityCard />
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayCities;