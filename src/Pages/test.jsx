import React from 'react';
// import Switch from 'react-bootstrap-switch';
// import 'bootstrap/dist/css/bootstrap.min.css'

const stheme = {
    background: ({ theme }) => theme.body,
    color: ({ theme }) => theme.text,
    fontSize: ({ theme }) => (theme.name === 'light') ? '25px' : '50px'
};

const Test = () => {

    return (
        <div className="text-center" style={stheme}>

            <div className="">
                Hello world!!
            </div>
        </div>
    );
}

export default Test;