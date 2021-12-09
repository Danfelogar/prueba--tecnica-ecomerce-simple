import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { productsActions } from "../actions/products";


export const useProducts = () => {

    const dispatch = useDispatch();

    const { list,basketProducts } = useSelector(state => state.product);

    const { actGetProductList,actGetAddBasketProduct,actGetPlusAmount,
        actGetLessAmount,actGetDeleteBasketProduct } = productsActions();

    useEffect(() => {
        if(list.length === 0){
            dispatch(actGetProductList())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGetAddBasketProduct =(id,foto,nombre,descripcion,total,e)=>{
        e.preventDefault();
        if(basketProducts.some(basketProduct => basketProduct.id === id )){
            Swal.fire('Falla al añadir al carrito','El producto ya esta en el carrito, si quieres añadir mas dirigete a la cesta para  aumentar la cantidad ', 'error' );
        }else{
            dispatch(actGetAddBasketProduct(id,foto,nombre,descripcion,total))
        }
    }

    const handleGetDeleteBasketProduct=(id)=>{
        dispatch(actGetDeleteBasketProduct(id))
    }


    const handleAdd = (id)=>{
        dispatch(actGetPlusAmount(id));
    }

    const handleLess = (id)=>{
        dispatch(actGetLessAmount(id));
    }

    return {
        list,
        basketProducts,
        handleGetAddBasketProduct,
        handleGetDeleteBasketProduct,
        handleAdd,
        handleLess
    }
}
