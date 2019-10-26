import React from 'react';

import Button from "../Button";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.name || "",
            email: props.email || ""
        }
    }
    
    changeName = e => {
        this.setState({
            name: e.target.value
        });
    }

    changeEmail = e => {
        this.setState({
            email: e.target.value
        })
    }

    saveEmployee = () => {
        const { name, email } = this.state;

        if ( name === '' || email === '') {
            alert("Please fill all the fields");
        } else {
            this.props.saveOrUpdate({name, email})
        }
    }

    render() {
        const { name, email } = this.state;
        const { cancel, saveOrUpdate } = this.props;

        return (
            <div>
                <div className="block">
                    <label>Name</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={this.changeName}
                    />
                </div>
                <div className="block">
                    <label>Email</label>
                    <input 
                        type="text"
                        value={email}
                        onChange={this.changeEmail}
                    />
                </div>
                <Button 
                    text="Cancel"
                    onClick={() => cancel()}
                    buttonType="cancel"
                />
                <Button
                    text="Save"
                    onClick={() => this.saveEmployee()}
                    buttonType="save"
                />
            </div>
        )
    }
};

export default FormComponent
