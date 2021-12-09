import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { authActions } from "../actions/auth";
import { useForm } from "./useForm";


export const useAuth = () => {

    const dispatch = useDispatch();

    const { checking,register } = useSelector(state => state.auth)

    const history = useHistory();

    const { actGetLoginUser,actClearRegisterUser, actGetRegisterUser,actStateOfLoginUser } = authActions();

    const [ formRegister, handleInputChangeRegister ] = useForm({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password1: '',
        password2: '',
        group: ''
    });

    const { username,email,first_name,last_name,password1,password2,group } = formRegister;

    const [ formLogin, handleInputChangeLogin ] = useForm({
        userName: '',
        lEmail: '',
        password: '',
    });

    const { userName, lEmail, password } = formLogin;


    const  handleGetRegisterUser= (username,email,first_name,last_name,password1,password2,group,e)=>{
        e.preventDefault();
        dispatch(actGetRegisterUser(username,email,first_name,last_name,password1,password2,group));
    }

    useEffect(() => {
        if(register){
            history.push("/auth/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [register])

    const handleClearRegisterUser=()=>{
        dispatch(actClearRegisterUser());
        console.log('hola me reinicio en el estado de register');
            history.push("/auth/login");
        console.log(localStorage.length)
    }

    //login

    const  handleGetLoginUser= (userName, lEmail, password,e)=>{
        e.preventDefault();
        dispatch(actGetLoginUser(userName,lEmail, password));
    }

    useEffect(() => {
    //para remover todos lo guardado en localStore y redux
            dispatch(actStateOfLoginUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(checking){
            history.push("/product/list");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checking])


    //problemas
    useEffect(() => {
        if(!checking){
            history.push("/auth/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return {
        username,
        email,
        first_name,
        last_name,
        password1,
        password2,
        group,
        handleInputChangeRegister,
        handleGetRegisterUser,
        userName,
        lEmail,
        password,
        handleInputChangeLogin,
        handleGetLoginUser,
        handleClearRegisterUser
    }
}
