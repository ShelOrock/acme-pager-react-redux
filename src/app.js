import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Content from './content.js';
import SubNav from './subnav.js';
import AddEmployee from './addEmployee.js';
import MainNav from './mainNav.js';

import store from './redux.js';
import getData from './getData.js';

class App extends Component {

    componentDidMount() {

        store.subscribe(() => {
            this.setState({ state: store.getState() })
        })

        getData()
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <MainNav />
                    <Switch>
                        <Route path='/addEmployee' render={() => <AddEmployee /> }></Route>
                        <Route path='/:id' render={() => <Content /> }></Route>
                        <Redirect to='/0'></Redirect>
                    </Switch>
                </HashRouter>
                <SubNav />
            </div>
        )
    };
}

export default App;