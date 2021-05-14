import React from 'react';
import './App.css';
import './select_search_style.css';
import fuzzySearch from './fuzzySearch';

import SelectSearch from 'react-select-search';

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = [
            { name: 'Dipen' },
            { name: 'Sonam' },
            { name: 'Swedish', value: 'sv' },
            { name: 'English', value: 'en' },
            {
                type: 'group',
                name: 'Group name',
                items: [
                    { name: 'Spanish', value: 'es' },
                ]
            },
        ];

        return (
            <SelectSearch options={options} search filterOptions={fuzzySearch} value="sv" name="language" placeholder="Choose your language" />
        )
    }
}

export default Test;