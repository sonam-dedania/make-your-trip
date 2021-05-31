import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Logo from './logo';
import User1 from './Images/user1.png';
import User2 from './Images/user2.png';
import User3 from './Images/user3.png';
import User4 from './Images/user4.png';
import Heart from './Images/heart.png';
import Imoji from './Images/imoji.png';

import './App.css';

class ContactUs extends React.Component {

    render() {
        return (
            <div className="gry-container">
                <div className="inner-gry-container">
                    <div className="contactus-logo">
                        <Logo />
                    </div>
                    <div className="contactus-header">
                        <h1 className="contactus-title">Contact Us</h1>
                        <div className="contactus-left-container">
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="contactus-left-address-wrapper">
                                        <div className="location-container">
                                            <i className="fa fa-map-marker icon-location" aria-hidden="true"></i>
                                        </div>
                                        <div className="contactus-address-wrapper">
                                            <div className="contactus-address-label">Address</div>
                                            <div className="contactus-address">South Bopal, Ahemdabad</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="contactus-right-email-wrapper">
                                        <div className="contactus-email-container">
                                            <i className="fa fa-envelope icon-contactus-email" aria-hidden="true"></i>
                                        </div>
                                        <div className="contactus-email-wrapper">
                                            <div className="contactus-email-label">Email</div>
                                            <div className="contactus-email">makeyourtrip@gmail.com</div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="contactus-body-part">
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                                <div className="contactus-form">
                                    <h2 className="contactus-send-message-title">Send Message</h2>

                                    <div className="email-container">
                                        <label>Name</label>
                                        <input type="text" name="username" id="username" className="contactus-name-input" />
                                    </div>

                                    <div className="email-container">
                                        <label>Email Address</label><br />
                                        <input type="email" name="email" id="email" className="contactus-email-input" />
                                    </div>
                                    <div className="password-container">
                                        <label>Type your Message...</label><br />
                                        <textarea id="w3review" name="w3review" rows="4" className="textarea-message" cols="50">
                                        </textarea></div>
                                    <Button className="btn signup-btn">Send</Button>
                                </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                                <div className="contactus-right-container">
                                    <img src={Heart} className="heart-img" alt="heart.png" />
                                    <div className="first-user-container">
                                        <img src={User3} className="first-user" alt="user1.png" />
                                    </div>
                                    <div className="second-user-container">
                                        <img src={User2} className="second-user" alt="user2.png" />
                                    </div>
                                    <div className="wave-wrapper">👋</div>

                                    <div className="third-user-container">
                                        <img src={User1} className="third-user" alt="user3.png" />
                                    </div>
                                    <img src={Imoji} className="imoji-img" alt="imoji.png" />
                                    <div className="fourth-user-container">
                                        <img src={User4} className="fourth-user" alt="user4.png" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs;