import axios from './config';

export const ecommerceServices = () =>{
    //llamado de registro
    const getRegisterUser =(username,email,first_name,last_name,password1,password2,group)=>{
        return axios({
            method: 'POST',
            url: '/rest-auth/registration/',
            data:{
                username,
                email,
                first_name,
                last_name,
                password1,
                password2,
                group
            }
        })
    };

    //llamado de ingreso
    const getLoginUser =(username,email,password)=>{
        return axios({
            method: 'POST',
            url: '/apis/custom/login/',
            data:{
                username,
                email,
                password
            }
        })
    };

    //llamado de ingreso
    const getProductList =()=>{
        return axios({
            method: 'GET',
            url: '/api-referencias/referenciassearch/',
        })
    };

    return{
        getRegisterUser,
        getLoginUser,
        getProductList
    }
}