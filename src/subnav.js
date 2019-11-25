import React, { Component } from 'react';
import store from './redux';
import getData from './getData.js'

class SubNav extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ state: store.getState() })
        })
    }

    pagination(idx) {
        store.dispatch({
            type: 'changeView',
            data: idx,
        })
        getData();
    }

    render() {
        const { pages, view } = store.getState()
        return (
            <nav>
                <button onClick={() => this.pagination(view > 0 ? view - 1 : view) }>Prev</button>
                { pages ? new Array(pages).fill('').map((page, idx) => <li key={ idx } onClick={() => this.pagination(idx) }>{ idx + 1 }</li>): '' }
                <button onClick={() => this.pagination(view < pages - 1 ? view + 1 : view) }>Next</button>
            </nav>
        )
    }
}

export default SubNav;