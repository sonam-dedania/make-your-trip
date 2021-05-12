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
    }

    render() {
        return (
            <div className="city-card">
                <p className="city-name">{this.props.data.cityName} <i class="fa fa-bookmark-o icon-bookmark" aria-hidden="true"></i></p>
                <p className="tour-date">{this.props.data.tourDate}</p>
                <p className="category">{this.props.data.category}</p>
                <p className="avg-temp"><span className="border-bot">Ave</span>rage Temperature</p>
                <p className="city-temp">+ {this.props.data.temp}&#x00B0;C <img src={Sun} alt="" /></p>
                <img src={this.props.data.cityImg} className="city-img" alt="bahamas.jfif" />
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <p className="tl-price">Total Price:</p>
                        <p className="price">{this.props.data.price}</p>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Button className="btn explore-btn">Explore</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CityCard;