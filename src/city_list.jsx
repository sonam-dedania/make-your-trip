import React from 'react';
import './App.css';
import { Dropdown } from 'react-bootstrap';

class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json").then(function (response) {
            return response.json();
        }).then((result) => {
            this.setState({ cities: result.city });
        });
    }

    render() {
        return (
            this.state.cities.map((city, index) => {
                return <Dropdown.Item href="#/action-1">{city.name}</Dropdown.Item>
            }
            )
        )
    }
}

export default CityList;