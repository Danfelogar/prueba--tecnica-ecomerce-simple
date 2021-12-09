import { types } from '../types/types';

const initialState = {
    username: [],
    key: [],
    checking: false,
    register: false,
}


export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getLogin:
            return{
                ...state,
                username: action.payload.username,
                key: action.payload.key,
                checking: action.payload.checking
            }
        case types.getRegister:
            return{
                ...state,
                register: action.payload
            }
        case types.getLogout:
            return{
                checking: false
            }
        default:
            return state;
    }
}