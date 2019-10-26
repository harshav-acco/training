import React from 'react';

import { FormComponent } from '../CommonComponents';
import NewButton from './NewButton';
import PersonTable from './PersonTable';
import './employee.css';

class Employee extends React.Component {
    constructor(props) {
        super (props);
        
        this.state = {
            employees: [
                {
                    name: 'harsha',
                    email: 'harshav@gmail.com',
                    id: 1,
                },
                {
                    name: 'Sachin',
                    email: 'Sachin@gmail.com',
                    id: 2,
                }
            ],
            isEditOrNewPressed: false,
        };
    }

    componentDidMount() {
        let { employees } = this.state;
        setTimeout(() => {
            let newEmployees = [
                {
                    name: 'Sunil',
                    email: 'Sunil@gmail.com',
                    id: 3
                },
                {
                    name: 'Dhoni',
                    email: 'Dhoni@gmail.com',
                    id: 4,
                }
            ];

            employees = [ ...employees, ...newEmployees ];

            this.setState({
                employees
            })
        }, 100)
    }

    deleteEmployee = id => {
        let { employees } = this.state;
        employees = employees.filter((employee) => employee.id !== id);
        
        this.setState({
            employees
        });
    }

    editOrCreateEmployee = id => {
        const { isEditOrNewPressed } = this.state;
        this.setState({
            isEditOrNewPressed: !isEditOrNewPressed
        });
    }

    saveOrUpdateEmployee = ({name, email }) => {
        let { employees, isEditOrNewPressed } = this.state;
        employees = [...employees, { name, email, id: employees.length + 1 }]
        this.setState({
            employees,
            isEditOrNewPressed: !isEditOrNewPressed
        })
    }

    render() {
        const { employees, isEditOrNewPressed } = this.state;
        const tableHeaders = 
            ['Employee Name', 'Employee Email', 'Modify'];

        if (isEditOrNewPressed) {
            return (
                <FormComponent 
                    cancel={() => this.editOrCreateEmployee()}
                    saveOrUpdate={data => this.saveOrUpdateEmployee(data)}
                />
            )
        }
        
        return (
            <div className="center">
                <NewButton 
                    editOrCreateEmployee={() => this.editOrCreateEmployee()}
                />
                <PersonTable 
                    employees={employees}
                    tableHeaders={tableHeaders}
                    delEmployee={(data) => this.deleteEmployee(data)}
                />
            </div>
        )
    }
}

export default Employee;
