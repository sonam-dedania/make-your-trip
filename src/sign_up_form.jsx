import React from 'react';
import ReactGA from 'react-ga';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import Home from './Images/home.svg';
import DatePicker from 'react-datepicker';
import Logo from './logo';
import PhoneInput from 'react-phone-input-2';

import './App.css';
import 'react-phone-input-2/lib/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",
            username: "",
            email: "",
            password: "",
            mobileno: "",
            DOB: "",
            usernameError: "",
            emailError: "",
            passwordError: "",
            mobilenoError: "",
            DOBError: ""
        };
    }

    handleDateChange = (date) => {
        this.setState({ DOB: date });
    }

    maleChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    }

    femaleChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    loginLinkClicked = () => {
        ReactGA.event({
            category: 'Sign up Page',
            action: 'Click on Login link'
        });
    }

    validate = () => {

        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let mobilenoError = "";
        let DOBError = "";

        if (!this.state.username) {
            usernameError = "Username field is required";
        }
        else {
            usernameError = "";
        }

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!this.state.email) {
            emailError = "Email field is required";
        }
        else if (reg.test(this.state.email) === false) {
            emailError = "Email is Invalid";
        }
        else {
            emailError = "";
        }

        if (!this.state.password) {
            passwordError = "Password field is required";
        }
        else {
            passwordError = "";
        }

        if (!this.state.DOB) {
            DOBError = "Dob field is required";
        }
        else {
            DOBError = "";
        }

        if (!this.state.mobileno) {
            mobilenoError = "Mobileno field is required";
        }
        else {
            mobilenoError = "";
        }
        this.setState({ usernameError, emailError, passwordError, mobilenoError, DOBError });

        if (usernameError || emailError || passwordError || mobilenoError || DOBError) {
            return false;
        }
        return true;
    }

    submit() {

        ReactGA.event({
            category: 'Sign Up Page',
            action: 'Click on Sign Up Button'
        });

        if (this.validate()) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": this.state.username,
                    "email": this.state.email,
                    "password": this.state.password,
                    "dob": this.state.DOB,
                    "gender": this.state.selectedOption,
                    "mobileNumber": this.state.mobileno.substr(2, 11)
                })
            };
            fetch('https://zuru-todo-api.herokuapp.com/users/register', requestOptions)
                .then(response => response.json())
                .then((result) => {
                    //ToDo
                    console.log('res', result);
                    if (result.id) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Registered Successfully'
                        });
                        window.open("/make-your-trip/", "_self");
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Username or Email already taken'
                        });
                    }
                });
        }
        else {
            console.error("Invalid Form");
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
                            <p className="normal-para"><span className="gry">Already have an account?</span> <a className="signup-link" href="/make-your-trip/" onClick={this.loginLinkClicked}><span className="org">Log in</span></a></p>
                            <div className="signup-form-container">
                                <div className="email-container">
                                    <label>Username</label>
                                    <div className="email-div">
                                        <i class="fa fa-user email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" name="username" id="username" value={this.state.username} className="username-input" onChange={this.handleInputChange} />
                                    <div className="error-msg">{this.state.usernameError}</div>
                                </div>

                                <div className="email-container">
                                    <label>Email address</label><br />
                                    <div className="email-div">
                                        <i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="email" name="email" id="email" value={this.state.email} className="email-input" onChange={this.handleInputChange} />
                                    <div className="error-msg">{this.state.emailError}</div>
                                </div>
                                <div className="password-container">
                                    <label>Password</label><br />
                                    <i class="fa fa-lock password-icon" aria-hidden="true"></i>
                                    <input type="password" name="password" id="password" value={this.state.password} className="password-input" onChange={this.handleInputChange} />
                                    <div className="error-msg">{this.state.passwordError}</div>
                                </div>
                                <div className="DOB-container">
                                    <label>Date of birth</label><br />
                                    <DatePicker className="DOB-datepicker"
                                        selected={this.state.DOB}
                                        onChange={this.handleDateChange}
                                    />
                                </div>
                                <div className="error-msg">{this.state.DOBError}</div>
                                <div className="gender-container">
                                    <label>Gender</label><br />
                                    <div className="gender-radio">
                                        <input type="radio" value="Male" checked={this.state.selectedOption === 'Male'} className="gender-input" onChange={this.maleChange} /> Male
                                        <input type="radio" value="Female" checked={this.state.selectedOption === 'Female'} className="gender-input" onChange={this.femaleChange} /> Female
                    </div>
                                </div>

                                <div className="email-container">
                                    <label>Mobile no.</label>

                                    <PhoneInput
                                        country={'in'}
                                        value={this.state.mobileno}
                                        onChange={mobileno => this.setState({ mobileno })}
                                        enableSearch="true"

                                    />
                                    <div className="error-msg">{this.state.mobilenoError}</div>
                                </div>

                                <Button className="btn signup-btn" onClick={() => this.submit()}>Sign Up</Button>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default SignUpForm;