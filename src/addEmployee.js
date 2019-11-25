import React, { Component } from 'react';
import store from './redux';
import { 
    changeFirstNameInput,
    changeLastNameInput,
    changeEmailInput,
    changeTitleInput
} from './changeInput.js';
import postData from './postData'

class AddEmployee extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.state = ({ state: store.getState() });
        })
    }

    render() {
        return (
            <div>
                <h2>Add New Employee</h2>
                <form>
                    <input 
                        type='text'
                        name='firstName'
                        value={ store.getState().firstNameInput }
                        onChange={ changeFirstNameInput }
                    />
                    <input 
                        type='text'
                        name='lastName'
                        value={ store.getState().lastNameInput }
                        onChange={ changeLastNameInput }
                    />
                    <input 
                        type='text'
                        name='email'
                        value={ store.getState().emailInput }
                        onChange={ changeEmailInput }
                    />
                    <input 
                        type='text'
                        name='title'
                        value={ store.getState().titleInput }
                        onChange={ changeTitleInput }
                    />
                    <button onClick={ postData }>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEmployee;