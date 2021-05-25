import React from 'react';
import './App.css';
import Header from './header';
import InfiniteScroll from 'react-infinite-scroller';
import { reactLocalStorage } from 'reactjs-localstorage';

class HappyUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: []
        };
    }

    loadFunc = () => {
        fetch("https://randomuser.me/api/?results=20&offset=0").then(function (response) {
            return response.json();
        }).then((result) => {
            var mergeArr = this.state.userDetails.concat(result.results);
            this.setState({ userDetails: mergeArr });
        });

    }

    componentDidMount = () => {
        let l = reactLocalStorage.get("logindetail");
        if (l !== "true") {
            window.open("/make-your-trip", "_self");
        }
    }


    render() {

        var items = [];
        this.state.userDetails.map((user) => {

            items.push(<div className="user-info-container">
                <div className="user-profile">
                    <img className="user-profile-img" src={user.picture.large} />
                </div>
                <div className="user-name">
                    <div classNaxme="label">Name</div>
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
                    <div className="user-email bold" title={user.email}><i class="fa fa-envelope icon-envelope" aria-hidden="true"></i> {user.email}</div>
                    <div className="phone bold"><i class="fa fa-phone-square icon-phone" aria-hidden="true"></i> {user.phone}</div>
                </div>
                <div className="city-info">
                    <div className="label">City/Country</div>
                    <div className="city-country bold">{user.location.city}<br />{user.location.country}</div>
                </div>
            </div>
            );
        })

        return (
            <>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true}
                    loader={<div className="loader1" key={0} > Loading ...</div>}
                >
                    <div className="gry-container">
                        <div className="gry1-container">
                            <Header showBookmark={false} />
                            <div className="body-part">
                                <h1 className="happy-user-title">Happy User</h1>
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