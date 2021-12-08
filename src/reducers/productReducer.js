import { types } from '../types/types';

const initialState = {
    list: [],
}


export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getlistProduct:
            return{
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}