import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Home from './Images/home.svg';
import DatePicker from 'react-datepicker';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './logo';
import { reactLocalStorage } from 'reactjs-localstorage';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errormsg: "",
            startDate: new Date(),
            male: "",
            female: "",
            selectedOption: ""
        };
    }

    buttonClicked = () => {
        let isLoggedIn = false;
        if (this.state.email === "hello@hello.com" && this.state.password === "hello123#") {
            isLoggedIn = true;
            window.open("/home", "_self");
            reactLocalStorage.set("logindetail", isLoggedIn);
            this.state.email = "";
            this.state.password = "";
        }
        else {
            this.setState({ errormsg: "Please enter valid details" });
            this.state.email = "";
            this.state.password = "";
        }
    }

    handleDateChange = (date) => {
        this.setState({ startDate: date });
    }

    maleChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    }

    femaleChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    }

    componentDidMount = () => {
        let l = reactLocalStorage.get("logindetail");
        console.log("localstorage data", l);
        if (l === "true") {
            window.open("/home", "_self");
        }
    }

    render() {
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="left-col d-none d-lg-block">
                            <Logo />
                            <img src={Home} alt="home.svg" className="home-img" />
                        </Col>
                        <div className="d-block d-lg-none right-logo" >
                            <Logo />
                        </div>
                        <Col lg={6} md={12} sm={12} xs={12} className="right-col">
                            <h3 className="h3-header"><b>Get's started.</b></h3>
                            <div className="signup-form-container">
                                <div className="email-container">
                                    <label>Username</label>
                                    <div className="email-div">
                                        <i class="fa fa-user email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" id="username" className="username-input" />
                                </div>

                                <div className="email-container">
                                    <label>Email address</label><br />
                                    <div className="email-div">
                                        <i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" id="email" className="email-input" />
                                </div>
                                <div className="password-container">
                                    <label>Password</label><br />
                                    <i class="fa fa-lock password-icon" aria-hidden="true"></i>
                                    <input type="password" id="password" className="password-input" />
                                </div>
                                <div className="email-container">
                                    <label>Date of birth</label><br />
                                    <DatePicker className="DOB-datepicker"
                                        selected={this.state.startDate}
                                        onChange={this.handleDateChange}
                                    />
                                </div>

                                <div className="gender-container">
                                    <label>Gender</label><br />
                                    <div className="gender-radio">
                                        <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'} className="gender-input" onChange={this.maleChange} /> Male
                        <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'} className="gender-input" onChange={this.femaleChange} /> Female
                    </div>
                                </div>

                                <div className="email-container">
                                    <label>Mobile no.</label>
                                    <div className="email-div">
                                        <i class="fa fa-phone email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" id="mobile-no" className="mobile-input" />
                                </div>

                                <Button className="btn signup-btn">Sign Up</Button>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default SignUpForm;