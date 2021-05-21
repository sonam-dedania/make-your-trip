import React from 'react';
import './App.css';


class HappyUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: [],
        };
    }

    componentDidMount = () => {
        fetch("https://randomuser.me/api/?results=20&offset=20").then(function (response) {
            return response.json();
        }).then((result) => {
            console.log("details", result);
            this.setState({ userDetails: result.results });
        });
    }
    render() {
        return (
            <div className="happy-users-container">
                <h1 className="happy-user-title">Happy User</h1>
                <hr className="hr-top1" />
                {
                    this.state.userDetails.map((user) => {
                        return <div className="user-info-container">
                            <div className="user-profile">
                                <img className="user-profile-img" src={user.picture.large} />
                            </div>
                            <div className="user-name">
                                <div className="label">Name</div>
                                <div className="name bold">{user.name.title} {user.name.first} {user.name.last}</div>
                            </div>
                            <div className="gender-info">
                                <div className="label">Gender</div>
                                <div className="gender bold">{user.gender}</div>
                            </div>
                            <div className="DOB-info">
                                <div className="label">DOB</div>
                                <div className="DOB bold">{user.dob.date.slice(0, 10)}</div>
                            </div>
                            <div className="email-info">
                                <div className="label">Contact</div>
                                <div className="user-email bold"><i class="fa fa-envelope icon-envelope" aria-hidden="true"></i> {user.email}</div>
                            </div>
                            <div className="city-info">
                                <div className="label">City/Country</div>
                                <div className="city-country bold">{user.location.city}/{user.location.country}</div>
                            </div>
                            <div className="phone-info">
                                <div className="label">Phone No.</div>
                                <div className="phone bold"><i class="fa fa-phone-square icon-phone" aria-hidden="true"></i> {user.phone}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default HappyUser;