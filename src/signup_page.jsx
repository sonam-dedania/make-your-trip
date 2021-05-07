import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Google from './Images/google.png';
import 'font-awesome/css/font-awesome.min.css';

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

                        </Col>
                        <Col lg={6} md={6} sm={6} className="right-col">
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <h3>Get's started.</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <p><span className="gry">Already have an account?</span> <span className="org">Log in</span></p>
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
                                    <p>or</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <form>
                                        <div className="email-container">
                                            <label>Email address</label><br />
                                            <input type="text" className="email-input" /></div>
                                        <div className="password-container">
                                            <label>Password</label><br />
                                            <input type="text" className="password-input" /></div>
                                    </form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default SignupPage;