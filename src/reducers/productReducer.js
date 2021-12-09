import { types } from '../types/types';

const initialState = {
    list: [],
    basketProducts: [],
}


export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getlistProduct:
            return{
                ...state,
                list: action.payload
            }
        case types.getAddBasketProduct:
            return{
                ...state,
                basketProducts: [...state.basketProducts ,action.payload]
            }
        case types.getPlusAmount:
            //me  parece raro que funcione sin ser entre comillas "llamado"
            state.basketProducts.find(product => product.id === action.payload).amount+=1
            return{
                ...state,
                basketProducts: [...state.basketProducts, ]
            }
        case types.getLessAmount:
            state.basketProducts.find(product => product.id === action.payload).amount-=1
            return{
                ...state,
                basketProducts: [...state.basketProducts, ]
            }
        case types.getDeleteBasketProduct:
                return {
                    ...state,
                    basketProducts: state.basketProducts.filter(
                        product =>  product.id !== action.id
                    )
                }
        default:
            return state;
    }
}