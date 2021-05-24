import React from 'react';
import './App.css';
import Header from './header';
import InfiniteScroll from 'react-infinite-scroller';
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

    render() {

        var items = [];
        this.state.userDetails.map((user) => {

            items.push(<div className="user-info-container">
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
            );
        })

        return (
            <>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc}
                    hasMore={true}
                    loader={<div className="loader" key={0} > Loading ...</div>}
                >
                    <div className="happy-users-container">
                        <Header />
                        <div className="happy-user-margin">
                            <h1 className="happy-user-title">Happy User</h1>
                            {items}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default HappyUser;