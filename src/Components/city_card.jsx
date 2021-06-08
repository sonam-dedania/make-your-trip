import React from 'react';
import ReactGA from 'react-ga';
import { Row, Col, Button } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

import Sun from '../Images/sun.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class CityCard extends React.Component {

    static propTypes = {
        bookmarkcount: PropTypes.number,
    }
    constructor(props) {
        super(props);
        this.state = {
            cityDetails: []
        }
    }

    componentDidMount = () => {
        fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json").then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState({ cityDetails: result });
            this.setBookmarkCount();
        });
    }

    setBookmarkCount = () => {
        var count = 0;
        this.state.cityDetails.map((city) => {
            if (city.isBookmark === true) {
                count = count + 1;
            }
            return true;
        })
        this.props.bookmarkcount(count);
    }

    bookmarkClicked = (index) => {
        ReactGA.event({
            category: 'Home Page',
            action: 'Click on Bookmark Icon'
        });

        let newArray = this.state.cityDetails;
        newArray[index].isBookmark = !newArray[index].isBookmark;
        if (newArray[index].isBookmark === true) {
            toast.success('Bookmark added successfully!!');
        }
        else {
            toast('Bookmark removed successfully!!', { icon: '🗑', });
        }
        this.setState({ cityDetails: newArray });
        this.setBookmarkCount();
    }

    render() {
        return (
            <>
                <Toaster />
                {this.state.cityDetails.map((cityInfo, index) => {
                    return <Col lg={4} md={6} sm={6} xs={12} key={index}>
                        <div className="city-card">
                            <div className="city-name" title={cityInfo.cityName}>{cityInfo.cityName}</div>
                            <div onClick={() => this.bookmarkClicked(index)}><i className={`fa ${(cityInfo.isBookmark === true) ? 'fa-bookmark icon-bookmark' : 'fa-bookmark-o icon-bookmark-o'}`} aria-hidden="true"></i></div>
                            <div className="tour-date">{cityInfo.tourDate}</div>
                            <div className="category">{cityInfo.category}</div>
                            <div className="avg-temp"><span className="border-bot">Ave</span>rage Temperature</div>
                            <div className="city-temp">+ {cityInfo.temp}&#x00B0;C <img src={Sun} alt="" /></div>
                            <img src={cityInfo.cityImg} className="city-img" alt="bahamas.jfif" />
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="tl-price">Total Price:</div>
                                    <div className="price">{cityInfo.price}</div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <Button className="btn explore-btn">Explore</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col >
                })
                }
            </>
        )
    }
}

export default CityCard;