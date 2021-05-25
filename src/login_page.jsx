import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Google from './Images/google.png';
import Home from './Images/home.svg';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './logo';
import { reactLocalStorage } from 'reactjs-localstorage';
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errormsg: ""
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
                            <p className="normal-para"><span className="gry">New User?</span> <a className="signup-link" href="/signup"><span className="org">Sign up</span></a></p>
                            <div className="login-form-container">
                                <Row>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className="d-none d-sm-block">
                                            <Button className="btn google-btn"><img src={Google} alt="google.png" /> &#x2002;Sign up with Google</Button>
                                        </div>
                                        <div className="d-block d-sm-none">
                                            <Button className="btn google-btn1"><img src={Google} alt="google.png" /></Button>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className="d-none d-sm-block">
                                            <Button className="btn facebook-btn"><div className="fb-div"><i class="fa fa-facebook fb-icon" aria-hidden="true"></i></div> &#x2002;Sign up with Facebook</Button>
                                        </div>
                                        <div className="d-block d-sm-none">
                                            <Button className="btn facebook-btn1"><div className="fb-div"><i class="fa fa-facebook fb-icon" aria-hidden="true"></i></div></Button>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="normal-para1 gry or">or</div>
                                <div className="email-container">
                                    <label>Email address</label><br />
                                    <div className="email-div">
                                        <i class="fa fa-envelope-o email-icon" aria-hidden="true"></i>
                                    </div>
                                    <input type="text" id="email" value={this.state.email} className="email-input" onChange={(e) => this.setState({ email: e.target.value })} />
                                </div>
                                <div className="password-container">
                                    <label>Password</label><br />
                                    <i class="fa fa-lock password-icon" aria-hidden="true"></i>
                                    <input type="password" id="password" value={this.state.password} className="password-input" onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                                <div className="agree-para"><input type="checkbox" /> &#x2002;<span className="gry">I agree to Platform's</span> <span className="org">Terms of Service</span> <span className="gry">and</span> <span className="org">Privacy Policy</span></div>

                                <Button className="btn register-btn" onClick={this.buttonClicked}>Login</Button>
                                <div className="errormsg">{this.state.errormsg}</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default LoginPage;