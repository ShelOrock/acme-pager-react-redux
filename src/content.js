import React, { Component } from 'react';
import store from './redux.js';

class Content extends Component {
    componentDidUpdate() {
        store.subscribe(() => {
            this.setState = { state: store.getState() };
        })
    }

    render() {
        const { people } = store.getState();
        return (
            <table>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                { people.length ? people.map(person => {
                    return <tr key={ person.id }>
                        <td>{ person.firstName }</td>
                        <td>{ person.lastName }</td>
                        <td>{ person.email }</td>
                        <td>{ person.title }</td>
                    </tr>
                }) : 'Loading...'}
                </tbody>
            </table>
        )
    }
}

export default Content;