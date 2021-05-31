import React from 'react';

import Cloud from './Images/cloud.png';

import './App.css';
class CitiesWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: null,
            city: "",
            country: ""
        };
    }

    componentDidMount() {
        this.fetchData("");
    }

    componentDidUpdate = (prevProps) => {
        console.log("componentDidUpdate");
        if (this.props.selectedCity !== prevProps.selectedCity) {
            this.fetchData(this.props.selectedCity);
        }
    }

    fetchData = (cityData) => {

        let citySelected = (cityData === "") ? "ahmedabad" : cityData;

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citySelected + "&units=metric&appid=9d9e2ade1df4e355834f9bd8a503dedf").then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState({ temp: result.main.temp, city: result.name, country: result.sys.country });
        });
    }

    render() {
        let t = Math.round(this.state.temp);
        return (
            <div className="weather">
                <img src={Cloud} alt="cloud.png" className="cloud-img" />
                <div className="temp">{t}&#x00B0;</div>
                <div className="city"><b>{this.state.city}</b><br /><span className="gry">{this.state.country}</span></div>
            </div>
        );
    }
}

export default CitiesWeather;