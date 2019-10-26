import React from 'react';

import './styles.css';

const Button = ({ text, buttonType, onClick }) => {
    const buttonStyle = `button ${buttonType}`;

    return (
    <button className={buttonStyle} onClick={() => onClick()}>
        { text }
    </button>
    )
};

export default Button;
