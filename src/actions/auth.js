import Swal from "sweetalert2";
import { ecommerceServices } from "../services"
import { types } from "../types/types";


const { getLoginUser,getRegisterUser } = ecommerceServices();


const  actGetRegisterUser = (username,email,first_name,last_name,password1,password2,group)=>async(dispatch)=>{

    try {

        const res = await getRegisterUser(username,email,first_name,last_name,password1,password2,group);
        console.info(res)
        dispatch({
            type: types.getRegister,
            payload: true
        })
    } catch (e) {
        // e.response.data.map(d=> console.log(d))
        const msmError = e.response.data;
        const error = Object.values(msmError)
        console.log(error[0].toString())
        Swal.fire('Error',error[0].toString(), 'error' );
    }
};

const actClearRegisterUser = ()=>(dispatch)=>{
    localStorage.removeItem('username');
    localStorage.removeItem('key');
    localStorage.removeItem('checking');
    dispatch({
        type: types.getRegister,
        payload: false
    })
}

const  actGetLoginUser = (username,email,password)=>async(dispatch)=>{

    try {
        const checking = true;
        const res = await getLoginUser(username,email,password);
        console.log(res)
        const  key = res.data.key
        localStorage.setItem('username', username);
        localStorage.setItem('key',key);
        localStorage.setItem('checking', checking);

        dispatch({
            type: types.getLogin,
            payload: {
                username,
                checking,
                key
            }
        });
    } catch (e) {
        // e.response.data.map(d=> console.log(d))
        const msmError = e.response.data;
        const error = Object.values(msmError)
        console.log(error[0].toString())
        Swal.fire('Error',error[0].toString(), 'error' );
    }
};

const  actStateOfLoginUser = () =>(dispatch)=>{
        console.log('hola bro')

        dispatch({
            type: types.getLogin,
            payload: {
                username: localStorage.getItem('username'),
                checking: localStorage.getItem('checking'),
                key:localStorage.getItem('key'),
            }
        });
}

export const authActions = ()=>{
    return{
        actGetRegisterUser,
        actClearRegisterUser,
        actGetLoginUser,
        actStateOfLoginUser
    }
};