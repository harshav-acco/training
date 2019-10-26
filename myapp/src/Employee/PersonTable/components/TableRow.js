import React from 'react';

import { Button } from '../../../CommonComponents';

const TableRow = ({ employee, deEmployee }) => {
    return (
        <div className="div-table-row">
            <div className="div-table-cell">
                { employee.name }
            </div>
            <div className="div-table-cell">
                { employee.email }
            </div>
            <div className="div-table-cell">
                <Button 
                    text="Edit" 
                    buttonType="edit" 
                    onClick={() => console.log('yet to implement')}
                />
                <Button 
                    text="Delete" 
                    buttonType="delete" 
                    onClick={() => deEmployee()}
                />
            </div>
        </div>
    );
}

export default TableRow;
