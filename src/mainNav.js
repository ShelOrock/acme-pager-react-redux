import React, { Component } from 'react';
import store from './redux.js';
import { Link } from 'react-router-dom';

class MainNav extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState()})
        })
    }

    render() {
        const { people } = store.getState();
        return (
            <nav>
                <Link to='/'>Employee List ({ people.length ? `${people[0].firstName[0]} - ${people[people.length - 1].firstName[0]}` : '-' })</Link>
                <Link to='/addEmployee'>Add a New Employee</Link>
            </nav>
        )
    }
}

export default MainNav;