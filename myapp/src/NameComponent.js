import React from 'react';

const NameComponent = ({ details: { firstName, secondName } }) => (
    <div>
        <span>{ firstName }</span>
        <span>{ secondName }</span>
    </div>
);

export default NameComponent;
