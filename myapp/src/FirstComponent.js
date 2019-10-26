import React from 'react';

import NameComponent from './NameComponent';

class FirstComponent extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            personsDetails: [
                {
                    firstName: 'harsha',
                    secondName: 'vardhan'
                },
                {
                    firstName: 'Sachin',
                    secondName: 'Tendulkar'
                },
                {
                    firstName: 'Sunil',
                    secondName: 'Gavaskar'
                }
            ],
            empName: 'harsha'
        }
    }

    handleChangeForEmpName = e => {
        this.setState({
            empName: e.target.value
        });
    }

    render() {
        const { personsDetails, empName } = this.state;
        return (
            <div>
                {
                    personsDetails.map((person, i) => (
                        <NameComponent details={person} key={i} />
                    ))
                }
                <input 
                    name="Employee name"
                    value={empName}
                    onChange={ this.handleChangeForEmpName }
                />
            </div>
        )
    }
}

export default FirstComponent;
