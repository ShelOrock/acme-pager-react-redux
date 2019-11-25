import { createStore } from 'redux'

const initial = {
    people: [],
    pages: 0,
    view: 0,
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    titleInput: ''
}

const reducer = (state = initial, action) => {
    switch(action.type) {
        case 'getData':
            return {
                ...state,
                people: [ ...action.data.rows ],
                pages: Math.ceil(action.data.count / 50)
            };
        case 'changeView':
            return {
                ...state,
                view: action.data
            }
        case 'changeFirstNameInput':
            return {
                ...state,
                firstNameInput: action.data
            };
        case 'changeLastNameInput':
            return {
                ...state,
                lastNameInput: action.data
            };
        case 'changeEmailInput':
            return {
                ...state,
                emailInput: action.data
            };
        case 'changeTitleInput':
            return {
                ...state,
                titleInput: action.data
            };
        default:
            return state;
    }
}

const store = new createStore(reducer);

export default store;