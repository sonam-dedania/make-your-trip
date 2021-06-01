const ToggleSwitch = ({ status, handleChange }) => (
    <div className="switch-wrp">
        <div className="switch">
            <span role="presentation" className={`slider${status ? ' enabled' : ' disabled'}`} onKeyPress={handleChange} onClick={handleChange} />
        </div>
    </div>
);

export default ToggleSwitch;
