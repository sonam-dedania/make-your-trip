import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className="email-container">
            <label>Username</label>
            <div className="email-div">
                <i class="fa fa-user email-icon" aria-hidden="true"></i>
            </div>    
            <input type="text" id="username" className="username-input"/>
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
                                <label>Date of birth</label>
                                <input type="text" id="DOB" className="DOB-input" />
                                </div>
                                
                                <div className="email-container">
                                    <label>Gender</label><br/>
                                    <input type="radio" value="Male" className="gender-input" /> Male
                                    <input type="radio" value="Female" className="gender-input" /> Female
                                    <input type="radio" value="Other" className="gender-input" /> Other
                                </div>
                            <div className="email-container">
                                <label>Mobile no.</label>
                                <div className="email-div">
                                <i class="fa fa-phone email-icon" aria-hidden="true"></i>
                                </div>
                                <input type="text" id="mobile-no" className="mobile-input"/>
                                </div>

                                <Button className="btn signup-btn">Sign Up</Button>
            </>
        )
    }
}

export default SignUpForm;