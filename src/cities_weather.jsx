import React from 'react';
import './App.css';
import Cloud from './Images/cloud.png';

class CitiesWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            city: "",
            country: ""
        };
    }

    componentDidMount = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=metric&appid=9d9e2ade1df4e355834f9bd8a503dedf").then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState({ temp: result.main.temp, city: result.name, country: result.sys.country });
        });
    }

    render() {
        return (
            <div className="weather">
                <img src={Cloud} alt="cloud.png" className="cloud-img" />
                <p className="temp">{this.state.temp}&#x00B0;</p>
                <p className="city"><b>{this.state.city}</b><br /><span className="gry">{this.state.country}</span></p>
            </div>
        );
    }
}

export default CitiesWeather;