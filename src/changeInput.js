import store from './redux.js';

const changeFirstNameInput = (e) => {
    console.log('INPUT', e.target)
    store.dispatch({
        data: e.target.value,
        type: 'changeFirstNameInput'
    })
}

const changeLastNameInput = (e) => {
    store.dispatch({
        data: e.target.value,
        type: 'changeLastNameInput'
    })
}

const changeEmailInput = (e) => {
    store.dispatch({
        data: e.target.value,
        type: 'changeEmailInput'
    })
}

const changeTitleInput = (e) => {
    store.dispatch({
        data: e.target.value,
        type: 'changeTitleInput'
    })
}

export {
    changeFirstNameInput,
    changeLastNameInput,
    changeEmailInput,
    changeTitleInput,
}