import React from 'react';

import TableRow from './components/TableRow';
import './style.css';

const PersonTable = (props) => {
    const 
        {tableHeaders, employees, delEmployee } = props;

    const Headers = tableHeaders.map((th, i) => {
        return (
            <div className="div-table-cell" key={i}>
                { th }
            </div>
        );
    });

    return (
        <div className="div-table">
            <div className="div-table-row div-table-header">
                { Headers }
            </div>
            { 
                employees.map(emp => (
                    <TableRow 
                        employee={emp} 
                        key={emp.id}
                        deEmployee={() => delEmployee(emp.id)}
                    />
                ))
            }
        </div>
    )
}

export default PersonTable;
