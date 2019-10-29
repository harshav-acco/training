import React from 'react';

import './style.css'
import logo from  '../../logo.svg';

const Header = () => {
    return (
        <div className="header" data-test-id="header">
            <div className="wrap">
                <img className="img" data-test-id="img" src={logo} />
            </div>
        </div>
    )
};

export default Header;
