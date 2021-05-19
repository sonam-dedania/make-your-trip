import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Bahamas from './Images/bahamas.jfif';
import Sun from './Images/sun.png';
import { Row, Col, Button } from 'react-bootstrap';

class CityCard extends React.Component {
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
        });
    }

    render() {
        return (
            this.state.cityDetails.map((cityInfo) => {
                return <Col lg={4} md={6} sm={6}>
                    <div className="city-card">
                        <div className="city-name" title={cityInfo.cityName}>{cityInfo.cityName}</div>
                        <div><i class="fa fa-bookmark-o icon-bookmark" aria-hidden="true"></i></div>
                        <div className="tour-date">{cityInfo.tourDate}</div>
                        <div className="category">{cityInfo.category}</div>
                        <div className="avg-temp"><span className="border-bot">Ave</span>rage Temperature</div>
                        <div className="city-temp">+ {cityInfo.temp}&#x00B0;C <img src={Sun} alt="" /></div>
                        <img src={cityInfo.cityImg} className="city-img" alt="bahamas.jfif" />
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="tl-price">Total Price:</div>
                                <div className="price">{cityInfo.price}</div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Button className="btn explore-btn">Explore</Button>
                            </Col>
                        </Row>
                    </div>
                </Col >
            })
        )
    }
}

export default CityCard;