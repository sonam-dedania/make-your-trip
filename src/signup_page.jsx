import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Google from './Images/google.png';
import Home from './Images/home.svg';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './logo';
class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <Row>
                        <Col lg={6} md={6} sm={6} className="left-col">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Logo />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <img src={Home} alt="home.svg" className="home-img" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={6} className="right-col">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <h3 className="h3-header"><b>Get's started.</b></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <p className="normal-para"><span className="gry">Already have an account?</span> <span className="org">Log in</span></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className="btn google-btn"><img src={Google} alt="google.png" /> &#x2002;Sign up with Google</Button>
                                </Col>
                                <Col lg={6} md={6} sm={6}>
                                    <Button className="btn facebook-btn"><div className="fb-div"><i class="fa fa-facebook fb-icon" aria-hidden="true"></i></div> &#x2002;Sign up with Facebook</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <p className="normal-para1 gry">_________________________or_________________________</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <div className="email-container">
                                        <label>Email address</label><br />
                                        <div className="email-div">
                                            <i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>
                                        </div>
                                        <input type="text" className="email-input" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <div className="password-container">
                                        <label>Password</label><br />
                                        <i class="fa fa-lock password-icon" aria-hidden="true"></i>
                                        <input type="password" className="password-input" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <p className="agree-para"><input type="checkbox" /> &#x2002;<span className="gry">I agree to Platform's</span> <span className="org">Terms of Service</span> <span className="gry">and</span> <span className="org">Privacy Policy</span></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Button className="btn register-btn">Register</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div >

        )
    }
}

export default SignupPage;