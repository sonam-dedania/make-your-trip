import React from 'react';
import './App.css';
import { Dropdown } from 'react-bootstrap';
import './select_search_style.css';
import fuzzySearch from './fuzzySearch';
import SelectSearch from 'react-select-search';

class CityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cities: [] };
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json").then(function (response) {
            return response.json();
        }).then((result) => {
            result.city.map((city) => {
                city.value = city.name;
            });
            this.setState({ cities: result.city });
        });
    }

    render() {
        return (
            <SelectSearch
                options={this.state.cities}
                search
                filterOptions={fuzzySearch}
                placeholder="All Places"
            />
        )
    }
}

export default CityList;