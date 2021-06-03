import React from 'react';
import ReactGA from 'react-ga';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Button } from 'react-bootstrap';

import Header from '../Components/header';
import InfiniteScroll from 'react-infinite-scroller';

class HappyUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: [],
            maleDetails: [],
            checkedMale: false,
            checkedFemale: false,
            flag: false
        };
    }

    loadFunc = () => {
        let url = "https://randomuser.me/api/?results=20&offset=0";
        if (this.state.checkedMale) {
            url = url + "&gender=male";
        }

        if (this.state.checkedFemale) {
            url = url + "&gender=female";
        }

        if (this.state.checkedMale && this.state.checkedFemale) {
            url = "https://randomuser.me/api/?results=20&offset=0";
        }

        fetch(url).then(function (response) {
            return response.json();
        }).then((result) => {
            let mergeArr = this.state.userDetails.concat(result.results);
            this.setState({ userDetails: mergeArr });
        });
    }

    componentDidMount = () => {
        let l = reactLocalStorage.get("logindetail");
        if (l !== "true") {
            window.open("/make-your-trip/", "_self");
        }

    }

    handleMaleCheckboxChange = () => {
        this.setState({ checkedMale: !this.state.checkedMale });
        this.setState({ userDetails: [] });
    }

    handleFemaleCheckboxChange = () => {
        this.setState({ checkedFemale: !this.state.checkedFemale });
        this.setState({ userDetails: [] });
    }

    handleClicked = () => {
        ReactGA.event({
            category: 'Happy Users Page',
            action: 'Click on Filter Button'
        });

        this.setState({ flag: !this.state.flag });
    }

    render() {

        var items = [];
        this.state.userDetails.map((user, index) => {

            items.push(<div className="user-info-container" key={index}>
                <div className="user-profile">
                    <img className="user-profile-img" src={user.picture.large} alt="user-profile-img" />
                </div>
                <div className="user-name">
                    <div className="label">Name</div>
                    <div className="name bold">{user.name.title} {user.name.first} {user.name.last}</div>
                </div>
                <div className="gender-info">
                    <div className="label">Gender</div>
                    <div className="gender bold"><i className={`fa ${(user.gender === "female") ? 'fa-female icon-female' : 'fa-male icon-male'}`} aria-hidden="true"></i></div>
                </div>
                <div className="DOB-info">
                    <div className="label">DOB</div>
                    <div className="DOB bold">{user.dob.date.slice(0, 10)}</div>
                </div>
                <div className="email-info">
                    <div className="label">Contact</div>
                    <div className="user-email bold" title={user.email}><i className="fa fa-envelope icon-envelope" aria-hidden="true"></i> {user.email}</div>
                    <div className="phone bold"><i className="fa fa-phone-square icon-phone" aria-hidden="true"></i> {user.phone}</div>
                </div>
                <div className="city-info">
                    <div className="label">City/Country</div>
                    <div className="city-country bold">{user.location.city}<br />{user.location.country}</div>
                </div>
            </div>
            );
            return true;
        })

        return (
            <>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true}
                    loader={<div className="infinite-loader" key={0} > Loading ...</div>}
                >
                    <div className="gry-container">
                        <div className="inner-gry-container">
                            <Header showBookmark={false} />
                            <div className="body-part">
                                <h1 className="happy-user-title">Happy User</h1>
                                <div className="filter-happyuser">
                                    <Button className="btn filter-btn" onClick={this.handleClicked}><i className="fa fa-sliders icon-slider-happyuser" aria-hidden="true"></i></Button>
                                </div>
                                <div className={`filter-hide-show-wrapper ${(this.state.flag === false) ? 'hidden' : ''}`}>
                                    < div className="male-checkbox-wrapper">
                                        <input type="checkbox" checked={this.state.checkedMale} className="male-checkbox" onChange={this.handleMaleCheckboxChange} />
                                        Male <i className="fa fa-male icon-male-hide-show" aria-hidden="true"></i>
                                    </div>
                                    <div className="female-checkbox-wrapper">
                                        <input type="checkbox" checked={this.state.checkedFemale} className="female-checkbox" onChange={this.handleFemaleCheckboxChange} />
                                        Female <i className="fa fa-female icon-female-hide-show" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {items}
                            </div>
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default HappyUser;