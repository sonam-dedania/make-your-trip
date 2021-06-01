import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';

import Header from '../Components/header';
import CityCard from '../Components/city_card';
import DatePicker from 'react-datepicker';
import CitiesWeather from '../Components/cities_weather';
import TourDaysList from '../Components/tour_days_list';
import CityList from '../Components/city_list';

import "react-datepicker/dist/react-datepicker.css";

class DisplayCities extends React.Component {
    constructor(props) {
        super(props);

        var currentDate = new Date();
        var getDate = currentDate.getDate();
        var getMonth = currentDate.getMonth();
        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var finalMonth = months[getMonth];

        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var getDay = currentDate.getDay();

        var finalDay = days[getDay];
        var getYear = currentDate.getFullYear();

        this.state = {
            date: getDate,
            month: finalMonth,
            day: finalDay,
            year: getYear,
            startDate: null,
            selectedCity: "",
            totalCount: 0
        }
    }

    changeDate = (date) => {
        this.setState({ startDate: date });
    }


    selectedValue = (e) => {
        this.setState({ selectedCity: e });
    }

    bookmarkCount = (count) => {
        this.setState({ totalCount: count });
    }

    componentDidMount = () => {
        let l = reactLocalStorage.get("logindetail");
        if (l !== "true") {
            window.open("/make-your-trip/", "_self");
        }
    }


    render() {
        return (
            <div className="gry-container">
                <div className="inner-gry-container">
                    <Header counter={this.state.totalCount} showBookmark={true} />
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
                                            <CityList selectedValue={this.selectedValue} /><i className="fa fa-sort-desc select-place-icon-sort" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                    <div className="select-dropdown">
                                        <p className="all-place-para">How Many Days?</p>
                                        <TourDaysList /><i className="fa fa-sort-desc how-many-days-icon-sort" aria-hidden="true"></i>
                                    </div>
                                    <div className="dropdown-border-right">
                                        <div className="any-date">
                                            <div className="select-date-title">Select Date</div>
                                            {!this.state.startDate &&
                                                <div className="any-date-para">Any date
                                                <i className="fa fa-sort-desc icon-sort" aria-hidden="true"></i>
                                                </div>
                                            }
                                        </div>
                                        <DatePicker
                                            className="datepicker"
                                            selected={this.state.startDate}
                                            onChange={this.changeDate} />
                                    </div>
                                    <div className="filter-div">
                                        <Button className="btn sort-btn"><i className="fa fa-sliders icon-slider" aria-hidden="true"></i></Button>
                                    </div>
                                    <div className="go-btn-div">
                                        <Button className="btn go-btn"><i className="fa fa-search icon-search" aria-hidden="true"></i> Go!</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={6} xs={6} className="d-none d-lg-block">
                                <CitiesWeather selectedCity={this.state.selectedCity} />
                            </Col>
                        </Row>
                        <Row>
                            <CityCard bookmarkcount={this.bookmarkCount} />
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayCities;