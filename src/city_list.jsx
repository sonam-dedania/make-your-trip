import React from 'react';
import ReactGA from 'react-ga';

import fuzzySearch from './fuzzySearch';
import SelectSearch from 'react-select-search';

import './select_search_style.css';
import './App.css';

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
            action: 'Select Place from the list',
            label: e
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