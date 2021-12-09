import { ecommerceServices } from "../services";
import { types } from "../types/types";


const { getProductList } = ecommerceServices();

const actGetProductList = () =>async(dispatch)=>{
    try {
        const  res = await getProductList();

        dispatch({
            type: types.getlistProduct,
            payload: res.data,
        });

    } catch (e) {
        console.log(e);
    }
}

const actGetAddBasketProduct = (id,foto,nombre,descripcion,total) =>(dispatch)=>{
    const product = {
        id: id,
        foto: foto,
        nombre: nombre,
        descripcion: descripcion,
        total: total,
        amount: 1,
        subtotal:total,
    };

    dispatch({
        type: types.getAddBasketProduct,
        payload: product
    })
}

const actGetPlusAmount = (id)=>(dispatch)=>{
    dispatch({
        type: types.getPlusAmount,
        payload: id
    })
}

const actGetLessAmount = (id)=>(dispatch)=>{
    dispatch({
        type: types.getLessAmount,
        payload: id
    })
}

const actGetDeleteBasketProduct = (id)=>(dispatch)=>{
    dispatch({
        type: types.getDeleteBasketProduct,
        id: id
    })
}

export const productsActions = ()=>{
    return{
        actGetProductList,
        actGetAddBasketProduct,
        actGetPlusAmount,
        actGetLessAmount,
        actGetDeleteBasketProduct
    }
};