import React from 'react';
import './App.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="trip-logo">
                    <div className="style-div">
                    </div>
                    <p className="your-word">make <span className="your">your</span> trip</p>
                </div>
            </>
        )
    }
}

export default Logo;