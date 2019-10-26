import React from 'react';

import { Button } from '../../CommonComponents';

const NewButton = ({editOrCreateEmployee}) => {
    return (
        <Button 
            text="Create Employee"
            buttonType="save"
            onClick={() => editOrCreateEmployee()}
        />
    )
}

export default NewButton;
