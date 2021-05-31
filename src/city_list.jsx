import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
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

    changeValue = (e) => {

        ReactGA.event({
            category: 'Home Page',
            action: 'Select Place form the list'
        });

        this.props.selectedValue(e);
    }

    render() {
        return (
            <SelectSearch
                options={this.state.cities}
                search
                filterOptions={fuzzySearch}
                placeholder="All Places"
                onChange={this.changeValue}
            />
        )
    }
}

export default CityList;