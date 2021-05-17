import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class TourDaysList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: 'One Week' };

    }

    handleSelect = (evt) => {
        this.setState({ title: evt });
    }


    render() {
        return (
            <DropdownButton title={this.state.title} onSelect={this.handleSelect}
                className="days-dropdown">
                <Dropdown.Item eventKey='4 Nights / 5 days'>4 Nights / 5 days</Dropdown.Item>
                <Dropdown.Item eventKey='8 Nights / 10 days'>8 Nights / 10 days</Dropdown.Item>
                <Dropdown.Item eventKey='10 Nights / 11 days'>10 Nights / 11 days</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default TourDaysList;