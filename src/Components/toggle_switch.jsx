import React from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = ({ status, handleChange }) => (
    <div className="switch-wrp">
        <div className="switch">
            <span role="presentation" className={`slider${status ? ' enabled' : ' disabled'}`} onKeyPress={handleChange} onClick={handleChange} />
        </div>
    </div>
);

ToggleSwitch.propTypes = {
    status: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
