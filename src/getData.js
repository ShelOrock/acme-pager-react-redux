import store from './redux.js'
import { get } from 'axios'

const getData = () => {

    const { view } = store.getState();
    get(`/api/employees/${view}`)
    .then(res => {
        store.dispatch({
            data: res.data,
            type: 'getData'
        })
    })
}

export default getData;