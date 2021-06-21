import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

const HigherOrder = (WrappedComponent) => {
    class NewComponent extends React.Component {
        componentDidMount = () => {
            let l = reactLocalStorage.get("logindetail");
            if (l !== "true") {
                window.open("/make-your-trip/", "_self");
            }
        }
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
    return NewComponent;
}
export default HigherOrder;